FROM node:20-slim

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all source files
COPY . .

# Build the Next.js application (CRITICAL: must be before start)
RUN npm run build

# Expose port
EXPOSE 3000

# Start the application (only after build is complete)
CMD ["npm", "start"]
