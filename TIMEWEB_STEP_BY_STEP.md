# 🎯 ПОШАГОВАЯ ИНСТРУКЦИЯ ДЛЯ TIMEWEB CLOUD

## ✅ Проверка: package.json правильный

Ваш `package.json` уже содержит правильные скрипты:

```json
{
  "scripts": {
    "build": "next build",  ✅
    "start": "next start"   ✅
  }
}
```

**Ничего менять в коде не нужно!** Проблема только в настройках Timeweb Cloud.

---

## 🚀 ШАГ ЗА ШАГОМ: Настройка в Timeweb Cloud

### Шаг 1: Откройте панель управления

1. Перейдите на [timeweb.cloud](https://timeweb.cloud/)
2. Войдите в свой аккаунт
3. Откройте **App Platform** в меню слева

---

### Шаг 2: Откройте настройки приложения

1. Найдите ваше приложение в списке
2. Кликните на него
3. Перейдите во вкладку **Settings** (Настройки)
4. Выберите раздел **Build & Deploy**

---

### Шаг 3: Настройте Commands (Команды)

Вы увидите три поля. Заполните их **ТОЧНО** так:

```
┌─────────────────────────────────────────┐
│ Install Command                         │
├─────────────────────────────────────────┤
│ npm install                             │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Build Command                           │
├─────────────────────────────────────────┤
│ npm run build                           │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Start Command                           │
├─────────────────────────────────────────┤
│ npm start                               │
└─────────────────────────────────────────┘
```

⚠️ **КРИТИЧНО ВАЖНО:**

| Поле | Точное значение | НЕ ИСПОЛЬЗУЙТЕ |
|------|----------------|----------------|
| Install Command | `npm install` | ✅ Правильно |
| Build Command | `npm run build` | ❌ НЕ `npm build`<br>❌ НЕ `npm run start`<br>❌ НЕ пустое поле |
| Start Command | `npm start` | ❌ НЕ `npm run start`<br>❌ НЕ `npm run build && npm start` |

---

### Шаг 4: Проверьте другие настройки

#### General Settings (Основные настройки):

```
Application Type:     Next.js
Node.js Version:      20.x
Package Manager:      npm
Root Directory:       /
```

#### Environment Variables (Переменные окружения):

Добавьте следующие переменные:

| Name | Value |
|------|-------|
| `NODE_ENV` | `production` |
| `NEXT_PUBLIC_SITE_URL` | `https://tips95-golden-house-dccb.twc1.net` |

*(Замените URL на ваш реальный домен от Timeweb, если отличается)*

---

### Шаг 5: Сохраните и пересоберите

1. Прокрутите вниз
2. Нажмите кнопку **"Save Changes"** / **"Сохранить изменения"**
3. Нажмите кнопку **"Rebuild"** / **"Пересобрать"**
4. Подождите 2-3 минуты

---

## 📊 Что будет происходить

### В логах вы увидите:

```
=== Phase 1: Install ===
$ npm install
added 393 packages in 20s
✅ Dependencies installed

=== Phase 2: Build ===
$ npm run build
> stroy-website@1.0.0 build
> next build

  ▲ Next.js 14.2.35

   Creating an optimized production build ...
 ✓ Compiled successfully
   Linting and checking validity of types ...
   Collecting page data ...
   Generating static pages (0/24) ...
   Generating static pages (6/24) 
   Generating static pages (12/24) 
   Generating static pages (18/24) 
 ✓ Generating static pages (24/24)

Route (app)                              Size     First Load JS
┌ ○ /                                    8.5 kB   154 kB
├ ○ /services                            175 B    96.2 kB
└ ● /services/[slug]                     9.85 kB  133 kB

✅ Build successful
✅ .next directory created

=== Phase 3: Start ===
$ npm start
> stroy-website@1.0.0 start
> next start

▲ Next.js 14.2.35
- Local:    http://localhost:3000
- Network:  http://0.0.0.0:3000

✓ Ready in 1.5s

✅ Server started successfully

=== Deployment Complete ===
✅ Your application is live at:
   https://tips95-golden-house-dccb.twc1.net
```

---

## ⏱️ Время деплоя

| Фаза | Время |
|------|-------|
| Install | 15-30 секунд |
| Build | 30-60 секунд |
| Start | 5-10 секунд |
| **Всего** | **~2-3 минуты** |

Если деплой занимает больше 5 минут - проверьте логи на наличие ошибок.

---

## ✅ Проверка после деплоя

### 1. Откройте ваш сайт:

```
https://tips95-golden-house-dccb.twc1.net
```

### 2. Проверьте основные страницы:

- ✅ `/` - Главная страница
- ✅ `/services` - Список услуг
- ✅ `/services/mekhanizirovannaya-shtukaturka` - Страница услуги
- ✅ `/portfolio` - Портфолио
- ✅ `/contacts` - Контакты
- ✅ `/about` - О компании
- ✅ `/blog` - Блог

### 3. Проверьте функциональность:

- ✅ Навигация работает
- ✅ WhatsApp кнопки открываются
- ✅ Калькуляторы функционируют
- ✅ Стили загружаются
- ✅ Изображения отображаются
- ✅ Мобильная версия адаптивна

---

## 🐛 Если что-то пошло не так

### Ошибка: "Could not find a production build in the '.next' directory"

**Причина:** Build Command не указан или указан неправильно

**Решение:**
1. Откройте Settings → Build & Deploy → Commands
2. Убедитесь, что **Build Command** = `npm run build`
3. НЕ `npm build`, НЕ пустое поле, ТОЛЬКО `npm run build`
4. Save → Rebuild

---

### Ошибка: "EADDRINUSE: address already in use :::3000"

**Причина:** Команды объединены или Start запускается в Build

**Решение:**
1. Build Command = `npm run build` (БЕЗ `&& npm start`)
2. Start Command = `npm start` (БЕЗ `npm run build &&`)
3. Команды должны быть **раздельными**!

---

### Build зависает или timeout

**Причина:** В Build Command есть блокирующая команда (например, `npm start`)

**Решение:**
1. Build Command должен содержать ТОЛЬКО `npm run build`
2. Никаких других команд в Build!

---

### Логи показывают другие ошибки

**Действия:**
1. Скопируйте текст ошибки из логов
2. Проверьте, что все зависимости установлены
3. Убедитесь, что локально проект собирается: `npm run build`
4. Если проблема не решается - обратитесь в поддержку Timeweb

---

## 🔄 Автоматические обновления

После успешного деплоя, при каждом `git push`:

```bash
# На вашем компьютере:
git add .
git commit -m "Update content"
git push origin main

# Timeweb автоматически (без вашего участия):
# 1. Получит webhook от GitHub
# 2. Запустит Install → Build → Start
# 3. Обновит ваш сайт (~2-3 минуты)
```

Вы получите уведомление о завершении деплоя.

---

## 📋 Финальный чеклист

Перед тем как запускать Rebuild, убедитесь:

- [ ] Открыл Timeweb Cloud
- [ ] Перешел в Settings → Build & Deploy → Commands
- [ ] **Install Command** = `npm install`
- [ ] **Build Command** = `npm run build` (ТОЧНО так!)
- [ ] **Start Command** = `npm start` (ТОЧНО так!)
- [ ] НЕ объединил команды через `&&`
- [ ] Environment Variables добавлены (NODE_ENV, NEXT_PUBLIC_SITE_URL)
- [ ] Нажал "Save Changes"
- [ ] Нажал "Rebuild"
- [ ] Жду 2-3 минуты

---

## 📞 Поддержка

### Timeweb Cloud:
- **Телефон:** 8 (800) 700-32-92
- **Тикеты:** В личном кабинете
- **Документация:** [timeweb.cloud/help](https://timeweb.cloud/help/)

### Golden House:
- **Email:** Golden.House.Services@mail.ru
- **WhatsApp:** +7 (928) 195-88-85

---

## 🎯 Итоговая памятка

**Три команды - три отдельных поля:**

```
1️⃣ Install:  npm install
2️⃣ Build:    npm run build
3️⃣ Start:    npm start
```

**НЕ объединять! НЕ добавлять ничего лишнего!**

---

## ✅ Готово!

После выполнения всех шагов ваш сайт будет работать по адресу:

```
https://tips95-golden-house-dccb.twc1.net
```

**Успешного деплоя!** 🚀🎉
