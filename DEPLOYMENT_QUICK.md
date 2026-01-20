# ⚡ Быстрый деплой на TimeWeb Cloud (5 минут)

## 1️⃣ Подготовка сервера (один раз)

```bash
# Подключитесь к серверу
ssh root@ВАШ_IP

# Скачайте и запустите скрипт настройки
wget https://raw.githubusercontent.com/Tips95/golden_house/main/server-setup.sh
bash server-setup.sh
```

**Или вручную:**

```bash
# Обновите систему
apt update && apt upgrade -y

# Установите Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs git nginx

# Установите PM2
npm install -g pm2

# Установите Certbot
apt install -y certbot python3-certbot-nginx
```

---

## 2️⃣ Загрузите проект

```bash
cd /var/www
git clone https://github.com/Tips95/golden_house.git goldenhouse-services
cd goldenhouse-services
```

---

## 3️⃣ Настройте переменные

```bash
cp .env.example .env.production
nano .env.production
```

Измените:
- `NEXT_PUBLIC_SITE_URL=https://ваш-домен.ru`

Сохраните: `Ctrl+O`, `Enter`, `Ctrl+X`

---

## 4️⃣ Установите и запустите

```bash
# Установите зависимости
npm install

# Соберите проект
npm run build

# Запустите с PM2
pm2 start ecosystem.config.js
pm2 startup
pm2 save
```

---

## 5️⃣ Настройте Nginx

```bash
# Скопируйте конфигурацию
cp nginx.conf /etc/nginx/sites-available/goldenhouse-services

# Откройте для редактирования
nano /etc/nginx/sites-available/goldenhouse-services
```

**Замените** `yourdomain.ru` на ваш домен (2 места).

```bash
# Активируйте
ln -s /etc/nginx/sites-available/goldenhouse-services /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default

# Проверьте и перезапустите
nginx -t
systemctl reload nginx
```

---

## 6️⃣ Установите SSL

```bash
certbot --nginx -d yourdomain.ru -d www.yourdomain.ru
```

---

## ✅ Готово!

Откройте: `https://ваш-домен.ru`

---

## 🔄 Обновление сайта

```bash
cd /var/www/goldenhouse-services
bash deploy.sh
```

---

## 📊 Полезные команды

```bash
# Статус
pm2 status

# Логи
pm2 logs goldenhouse-services

# Перезапуск
pm2 restart goldenhouse-services

# Nginx логи
tail -f /var/log/nginx/goldenhouse-error.log
```

---

## 🆘 Проблемы?

**Сайт не открывается?**
```bash
pm2 status                    # Проверьте PM2
systemctl status nginx        # Проверьте Nginx
pm2 logs --lines 50          # Посмотрите логи
```

**502 Bad Gateway?**
```bash
pm2 restart goldenhouse-services
systemctl restart nginx
```

**SSL не работает?**
```bash
certbot renew
systemctl reload nginx
```

---

📖 **Полная документация:** 
- [TIMEWEB_SETUP.md](./TIMEWEB_SETUP.md) - подробная инструкция
- [DEPLOYMENT.md](./DEPLOYMENT.md) - детальное руководство
- [PRODUCTION_CHECKLIST.md](./PRODUCTION_CHECKLIST.md) - чеклист перед запуском

---

💬 **Поддержка:** Golden.House.Services@mail.ru | WhatsApp: +7 (928) 195-88-85
