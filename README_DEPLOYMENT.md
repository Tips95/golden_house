# 🚀 Deployment Guide for TimeWeb Cloud

**Status:** ✅ Ready for Production Deployment  
**Date:** January 20, 2026

---

## 📋 Quick Links

| Document | Description | Time |
|----------|-------------|------|
| **[START_HERE.md](./START_HERE.md)** | 🎯 Start here (Russian) | 2 min |
| **[DEPLOYMENT_QUICK.md](./DEPLOYMENT_QUICK.md)** | ⚡ Quick start guide (Russian) | 5 min |
| **[TIMEWEB_SETUP.md](./TIMEWEB_SETUP.md)** | 📖 Detailed guide (Russian) | 15 min |
| **[PRODUCTION_CHECKLIST.md](./PRODUCTION_CHECKLIST.md)** | ✅ Pre-launch checklist (Russian) | 10 min |

---

## 🎯 What's Been Prepared

### Configuration Files
- ✅ `.env.example` - Environment variables template
- ✅ `.env.production` - Production configuration
- ✅ `nginx.conf` - Nginx configuration with SSL, caching, security
- ✅ `ecosystem.config.js` - PM2 configuration (cluster mode)
- ✅ `Dockerfile` - Multi-stage production build
- ✅ `docker-compose.yml` - Container orchestration

### Automation Scripts
- ✅ `server-setup.sh` - Automated server setup (Node.js, PM2, Nginx, Certbot)
- ✅ `deploy.sh` - One-command deployment script (git pull + build + restart)

### Documentation (8 files)
- ✅ Complete deployment guides in Russian
- ✅ Quick start guide (5 minutes)
- ✅ Detailed setup instructions
- ✅ Production checklist (100+ items)
- ✅ Hosting comparison guide

---

## ⚡ Quick Start

### 1. Server Setup (one time)

```bash
# Connect to your server
ssh root@YOUR_SERVER_IP

# Run automated setup
bash server-setup.sh
```

This installs: Node.js 20.x, PM2, Nginx, Git, Certbot, and configures firewall.

### 2. Deploy Application

```bash
# Clone project
cd /var/www
git clone https://github.com/Tips95/golden_house.git goldenhouse-services
cd goldenhouse-services

# Configure environment
cp .env.example .env.production
nano .env.production  # Set your domain

# Build and start
npm install
npm run build
pm2 start ecosystem.config.js
pm2 startup && pm2 save
```

### 3. Configure Nginx

```bash
# Copy and edit config
cp nginx.conf /etc/nginx/sites-available/goldenhouse-services
nano /etc/nginx/sites-available/goldenhouse-services  # Replace yourdomain.ru

# Enable site
ln -s /etc/nginx/sites-available/goldenhouse-services /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
```

### 4. Setup SSL

```bash
certbot --nginx -d yourdomain.ru -d www.yourdomain.ru
```

### ✅ Done! Site is live at https://yourdomain.ru

---

## 🔄 Updating the Site

```bash
cd /var/www/goldenhouse-services
bash deploy.sh
```

This automatically:
1. Pulls latest changes from Git
2. Installs dependencies
3. Builds the project
4. Restarts the application

---

## 📊 Project Structure

```
goldenhouse-services/
├── Configuration
│   ├── .env.example              # Environment template
│   ├── .env.production           # Production config
│   ├── nginx.conf                # Nginx config
│   ├── ecosystem.config.js       # PM2 config
│   ├── Dockerfile                # Docker image
│   └── docker-compose.yml        # Docker orchestration
│
├── Scripts
│   ├── server-setup.sh           # Server setup script
│   └── deploy.sh                 # Deployment script
│
└── Documentation
    ├── START_HERE.md             # Navigation guide
    ├── DEPLOYMENT_QUICK.md       # Quick start (5 min)
    ├── TIMEWEB_SETUP.md          # Detailed guide
    ├── PRODUCTION_CHECKLIST.md   # Pre-launch checklist
    ├── HOSTING_OPTIONS.md        # Hosting comparison
    └── DEPLOYMENT_READY.md       # What's ready
```

---

## 🛠️ NPM Scripts

```json
{
  "dev": "next dev",              // Development server
  "build": "next build",          // Production build
  "start": "next start",          // Start server
  "deploy": "bash deploy.sh",     // Deploy (on server)
  "logs": "pm2 logs",             // View logs
  "status": "pm2 status",         // Check status
  "restart": "pm2 restart"        // Restart app
}
```

---

## 🐳 Docker Support

```bash
# Build and run with Docker
cp .env.example .env.production
nano .env.production  # Configure

docker-compose up -d
```

---

## ⚙️ Server Requirements

**Minimum:**
- OS: Ubuntu 22.04 LTS
- CPU: 1 core
- RAM: 2 GB
- SSD: 10 GB
- Bandwidth: Unlimited or >1TB

**Recommended for TimeWeb Cloud:**
- 1-2 CPU cores
- 2-4 GB RAM
- 20 GB SSD
- Price: ~300-600₽/month (~$3-6/month)

---

## 🔒 Security Features

✅ **Configured:**
- SSL/TLS encryption (Let's Encrypt)
- Security headers (X-Frame-Options, CSP, etc.)
- Firewall rules (UFW: ports 22, 80, 443)
- Gzip compression
- Rate limiting ready (in Nginx config)

---

## 📈 Performance Features

✅ **Optimized:**
- PM2 cluster mode (uses all CPU cores)
- Nginx caching for static files
- Next.js image optimization (WebP/AVIF)
- Gzip compression
- Memory limits per process (1GB)

**Expected metrics:**
- Time to First Byte: < 500ms
- Page Load Time: < 2s
- Lighthouse Score: > 90

---

## 🐛 Troubleshooting

### Check logs
```bash
pm2 logs goldenhouse-services --lines 50
tail -f /var/log/nginx/goldenhouse-error.log
```

### Check status
```bash
pm2 status
systemctl status nginx
```

### Restart services
```bash
pm2 restart goldenhouse-services
systemctl restart nginx
```

---

## 🌐 Hosting Options

This project is ready for deployment on:

- ✅ **TimeWeb Cloud** (Recommended for Russia) - Full guide included
- ✅ **DigitalOcean** - Use same scripts
- ✅ **Vercel** - Simplest option (auto-deploy)
- ✅ **Railway** - Docker support
- ✅ **Any VPS** with Ubuntu 22.04

See [HOSTING_OPTIONS.md](./HOSTING_OPTIONS.md) for detailed comparison (Russian).

---

## 📞 Support

**Company Contacts:**
- Email: Golden.House.Services@mail.ru
- WhatsApp: +7 (928) 195-88-85
- Phone: +7 (928) 195-88-85

**TimeWeb Cloud Support:**
- Website: https://timeweb.cloud/help/
- Tickets via control panel

---

## ✅ Pre-Deployment Checklist

Before deploying to production:

- [ ] Server created on TimeWeb Cloud
- [ ] Domain configured (DNS A-record)
- [ ] `.env.production` configured with your domain
- [ ] `nginx.conf` updated with your domain
- [ ] Project pushed to Git repository
- [ ] SSL certificate will be installed (via Certbot)

Full checklist: [PRODUCTION_CHECKLIST.md](./PRODUCTION_CHECKLIST.md)

---

## 📚 Documentation Language

**Primary language:** Russian  
**Target audience:** Russian market (Grozny, Chechnya)

All detailed documentation is in Russian:
- Configuration files with Russian comments
- Deployment guides in Russian
- Support in Russian

This is a Russian construction company website, optimized for:
- Russian search engines (Yandex, Google.ru)
- Russian hosting (TimeWeb Cloud)
- Russian audience

---

## 🎉 Ready to Deploy!

Your project is fully prepared for production deployment.

**Start here:**
1. [START_HERE.md](./START_HERE.md) - Navigation (Russian)
2. [DEPLOYMENT_QUICK.md](./DEPLOYMENT_QUICK.md) - Quick start (Russian)

**Or just:**
```bash
bash server-setup.sh && bash deploy.sh
```

---

**Good luck with your deployment! 🚀**
