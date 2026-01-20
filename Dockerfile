FROM node:20-slim

WORKDIR /app

# 1. Copy package files for layer caching
COPY package*.json ./

# 2. Install ALL dependencies (including devDependencies for build)
# tailwindcss, postcss, autoprefixer are now in dependencies
# TypeScript and other dev tools are still needed for build
RUN npm ci --include=dev

# 3. Copy all source files and configs
# .dockerignore will exclude unnecessary files (node_modules, .git, etc.)
COPY . .

# 4. Verify critical config files are present
RUN test -f tsconfig.json && test -f next.config.js && test -f tailwind.config.ts && test -f postcss.config.js || (echo "Missing config files!" && exit 1)

# 5. Build Next.js application
# This creates .next directory with production build
RUN npm run build

# 6. Set environment for runtime
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Start production server
CMD ["npm", "start"]