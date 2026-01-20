FROM node:20-slim

WORKDIR /app

# 1. Сначала только конфиги
COPY package*.json ./

# 2. Установка ВСЕХ зависимостей (включая devDependencies)
# tailwindcss, postcss, autoprefixer нужны для сборки Next.js
RUN npm ci --include=dev

# 3. Копируем остальное
COPY . .

# 4. Явно собираем проект
# Добавим флаг --trace-warnings чтобы видеть детали если упадет
RUN npm run build

# 5. Настройка окружения
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# И используем прямую команду вместо npm скрипта для надежности
CMD ["npx", "next", "start"]