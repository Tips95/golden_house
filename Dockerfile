FROM node:20-slim

WORKDIR /app

# 1. Копируем package files для кэширования слоев
COPY package*.json ./

# 2. Установка ВСЕХ зависимостей (включая devDependencies)
# tailwindcss, postcss, autoprefixer нужны для сборки Next.js
# Важно: NODE_ENV не должен быть production на этом этапе, чтобы установились devDependencies
RUN npm ci --include=dev

# 3. Копируем все исходные файлы (включая конфиги tailwind, postcss, tsconfig)
# Важно: копируем src/, конфиги и все необходимые файлы
COPY . .
# Убедимся, что конфиги скопированы
RUN ls -la tailwind.config.ts postcss.config.js tsconfig.json next.config.js 2>/dev/null || echo "Config files check"

# 4. Сборка Next.js приложения
# Это создаст директорию .next с production build
RUN npm run build

# 5. Настройка окружения для runtime
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Запуск production сервера
CMD ["npm", "start"]