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

# Install production dependencies only
RUN npm ci --only=production && \
    npm cache clean --force

# Copy built application from builder
COPY --from=builder --chown=app:app /app/.next ./.next
COPY --from=builder --chown=app:app /app/public ./public
COPY --from=builder --chown=app:app /app/next.config.js ./next.config.js
COPY --from=builder --chown=app:app /app/package.json ./package.json

# Copy node_modules from builder (Next.js needs some dev dependencies for start)
COPY --from=builder --chown=app:app /app/node_modules ./node_modules

# Switch to non-root user
USER app

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
