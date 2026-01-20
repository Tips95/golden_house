# 🔧 Решение: Timeweb Cloud игнорирует наш Dockerfile

## 🎯 Проблема

Timeweb Cloud генерирует свой Dockerfile автоматически и выполняет `RUN npm run start` во время сборки образа, но не выполняет `npm run build` перед этим.

**Ошибка в логах:**
```
#13 [7/7] RUN npm run start
Error: Could not find a production build in the '.next' directory.
```

## 💡 Решение

Timeweb Cloud генерирует свой Dockerfile и игнорирует наш. Нужно либо:
1. **Удалить Dockerfile** (чтобы Timeweb использовал команды из панели)
2. **Или переименовать Dockerfile** во что-то другое

## 📋 Инструкция

### Вариант 1: Удалить Dockerfile (РЕКОМЕНДУЕТСЯ)

1. **Удалите Dockerfile из репозитория:**
   ```bash
   git rm Dockerfile
   git commit -m "Remove Dockerfile to use Timeweb Cloud build commands"
   git push origin main
   ```

2. **В панели Timeweb Cloud:**
   - Settings → Build & Deploy → Commands
   - Установите:
     ```
     Install Command:  npm install
     Build Command:    npm run build
     Start Command:    npm start
     ```
   - Сохраните и пересоберите

### Вариант 2: Переименовать Dockerfile

1. **Переименуйте Dockerfile:**
   ```bash
   git mv Dockerfile Dockerfile.backup
   git commit -m "Rename Dockerfile to use Timeweb Cloud build commands"
   git push origin main
   ```

2. **В панели Timeweb Cloud:**
   - Settings → Build & Deploy → Commands
   - Установите команды как в Варианте 1

## ✅ После этого

Timeweb Cloud будет использовать команды из панели управления:
- Install: `npm install` → устанавливает зависимости
- Build: `npm run build` → создает `.next` директорию
- Start: `npm start` → запускает сервер

И все должно работать!
