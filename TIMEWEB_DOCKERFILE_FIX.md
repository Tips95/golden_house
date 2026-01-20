# 🔧 Исправление проблемы с Dockerfile в Timeweb Cloud

## 🎯 Проблема

Timeweb Cloud генерирует свой Dockerfile автоматически и выполняет `RUN npm run start` во время сборки образа, но не выполняет `npm run build` перед этим.

**Ошибка в логах:**
```
#13 [7/7] RUN npm run start
Error: Could not find a production build in the '.next' directory.
```

## 💡 Решение

### Вариант 1: Использовать наш Dockerfile (РЕКОМЕНДУЕТСЯ)

1. **В панели Timeweb Cloud:**
   - Откройте ваше приложение
   - Перейдите в **Settings** → **Build & Deploy**
   - Найдите опцию **"Build Method"** или **"Dockerfile"**
   - Выберите **"Use Dockerfile from repository"** или **"Custom Dockerfile"**
   - Убедитесь, что указан путь: `./Dockerfile`

2. **Команды в панели (если используются):**
   ```
   Install Command:  (можно оставить пустым - Dockerfile делает всё)
   Build Command:    (можно оставить пустым - Dockerfile делает всё)
   Start Command:    (можно оставить пустым - CMD в Dockerfile)
   ```

### Вариант 2: Если Timeweb игнорирует Dockerfile

Если Timeweb все еще генерирует свой Dockerfile:

1. **В панели Timeweb Cloud:**
   - **Settings** → **Build & Deploy** → **Commands**
   - Установите:
     ```
     Install Command:  npm install
     Build Command:    npm run build
     Start Command:    npm start
     ```
   - **ВАЖНО:** Команды должны быть **раздельными**!

2. **Убедитесь, что:**
   - Build Command = `npm run build` (НЕ пустой!)
   - Start Command = `npm start` (БЕЗ `npm run build &&`)
   - Команды выполняются в правильном порядке

## 📋 Что делает наш Dockerfile

### Stage 1: Builder (сборка)
```dockerfile
FROM node:20-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci                    # Установка зависимостей
COPY . .
RUN npm run build             # Сборка Next.js → создает .next/
```

### Stage 2: Runner (production)
```dockerfile
FROM node:20-slim AS runner
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production  # Production зависимости
COPY --from=builder /app/.next ./.next  # Копируем собранное приложение
COPY --from=builder /app/node_modules ./node_modules  # Копируем node_modules
CMD ["npm", "start"]          # Запуск сервера
```

## ✅ Проверка

После настройки проверьте логи сборки. Должно быть:

```
Step 6: RUN npm run build
✓ Compiled successfully
✓ Generating static pages (24/24)
✅ Build complete

Step 13: CMD ["npm", "start"]
▲ Next.js 14.2.35
✓ Ready in 1.5s
✅ Server running
```

## 🐛 Если не работает

1. **Проверьте, что Dockerfile в корне репозитория**
2. **Убедитесь, что файл называется `Dockerfile` (без расширения)**
3. **Проверьте настройки в панели Timeweb - должна быть опция использовать Dockerfile**
4. **Если Dockerfile не используется, используйте команды из панели (Вариант 2)**

---

**После исправления:**
1. Закоммитьте изменения
2. Запушьте в репозиторий
3. Пересоберите приложение в Timeweb Cloud
