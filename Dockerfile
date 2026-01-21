FROM node:20-slim AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy package files
COPY package*.json ./
# Install ALL dependencies (including devDependencies for build)
RUN npm ci --include=dev

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Verify critical config files are present
RUN test -f tsconfig.json && test -f next.config.js && test -f tailwind.config.ts && test -f postcss.config.js || (echo "Missing config files!" && exit 1)

# Build Next.js static export
# This creates 'out' directory with static files
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Production image with nginx for static files
FROM nginx:alpine AS runner

# Copy static files from build
COPY --from=builder /app/out /usr/share/nginx/html

# Copy nginx configuration
RUN echo 'server { \
    listen 80; \
    server_name _; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri.html $uri/ =404; \
    } \
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ { \
        expires 1y; \
        add_header Cache-Control "public, immutable"; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
