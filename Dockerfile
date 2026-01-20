FROM node:20-slim

WORKDIR /app

# Copy package files first (for better layer caching)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all source files
COPY . .

# Build the Next.js application (CRITICAL: must be before start)
# This creates the .next directory with production build
RUN npm run build

# Expose port
EXPOSE 3000

# Start the application at runtime (NOT during build)
# CMD runs when container starts, not during image build
CMD ["npm", "start"]
