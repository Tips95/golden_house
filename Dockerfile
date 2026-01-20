# Build stage
FROM node:20-slim AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-slim AS runner

WORKDIR /app

ENV NODE_ENV=production

# Create non-root user
RUN groupadd --gid 2000 app && \
    useradd --uid 2000 --gid 2000 -m -s /bin/bash app

# Copy package files
COPY package*.json ./

# Install all dependencies (Next.js needs dev dependencies for start)
RUN npm ci && \
    npm cache clean --force

# Copy built application from builder
COPY --from=builder --chown=app:app /app/.next ./.next
COPY --from=builder --chown=app:app /app/public ./public
COPY --from=builder --chown=app:app /app/next.config.js ./next.config.js
COPY --from=builder --chown=app:app /app/package.json ./package.json

# Switch to non-root user
USER app

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
