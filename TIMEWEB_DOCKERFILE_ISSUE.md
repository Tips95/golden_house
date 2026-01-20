# ⚠️ КРИТИЧЕСКАЯ ПРОБЛЕМА: Timeweb игнорирует наш Dockerfile

## Проблема

Timeweb Cloud **генерирует свой собственный Dockerfile** и **игнорирует наш** из репозитория.

В логах видно:
```
#13 [7/7] RUN npm run start
Error: Could not find a production build in the '.next' directory.
```

Timeweb генерирует Dockerfile, который:
1. Устанавливает зависимости (`npm ci`)
2. **НЕ выполняет** `npm run build`
3. Сразу пытается запустить `npm run start`

## Решение

### Вариант 1: Убедиться, что Timeweb использует наш Dockerfile

1. В панели Timeweb Cloud:
   - Settings → Build & Deploy
   - Найдите опцию **"Build Method"** или **"Dockerfile"**
   - Выберите **"Use Dockerfile from repository"** или **"Custom Dockerfile"**
   - Убедитесь, что указан путь: `./Dockerfile`

2. **ВАЖНО:** Убедитесь, что Timeweb использует **последний коммит** из ветки `main`
   - Проверьте настройки репозитория
   - Убедитесь, что указана ветка `main`
   - Пересоберите приложение

### Вариант 2: Если Timeweb все равно генерирует свой Dockerfile

Если Timeweb продолжает игнорировать наш Dockerfile:

1. **Удалите Dockerfile** из репозитория
2. В панели Timeweb установите команды:
   ```
   Install Command:  npm install
   Build Command:    npm run build
   Start Command:    npm start
   ```
3. Timeweb должен использовать команды из панели вместо Dockerfile

## Текущий Dockerfile (правильный)

Наш Dockerfile содержит:
```dockerfile
FROM node:20-slim
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build    # ← ЭТО КРИТИЧНО!
EXPOSE 3000
CMD ["npm", "start"]
```

Это правильный Dockerfile, но Timeweb его игнорирует.

## Что делать сейчас

1. Проверьте настройки в панели Timeweb - использует ли он наш Dockerfile?
2. Если нет - удалите Dockerfile и используйте команды из панели
3. Убедитесь, что Timeweb использует последний коммит (не 816b8f4, а 0d61dc8)
