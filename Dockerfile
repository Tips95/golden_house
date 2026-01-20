FROM node:20-slim

WORKDIR /app

# Копируем package файлы для кеширования слоев
COPY package*.json ./

# Устанавливаем зависимости (включая dev для build)
# Используем .npmrc для установки devDependencies даже в production
RUN npm ci --include=dev

# Копируем все файлы проекта
COPY . .

# Собираем Next.js приложение
RUN npm run build

# Проверяем, что .next папка создана
RUN test -d .next || (echo "ERROR: .next directory not found after build!" && exit 1)

# Переменные окружения для production
ENV NODE_ENV=production
ENV PORT=3000

# Открываем порт
EXPOSE 3000

# Запускаем production сервер
# -H 0.0.0.0 позволяет слушать на всех интерфейсах (нужно для Docker)
CMD ["npm", "start"]
