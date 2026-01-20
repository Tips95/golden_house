#!/bin/bash

# Initial server setup script for TimeWeb Cloud
# Run this once on a fresh Ubuntu 22.04 server
# Usage: bash server-setup.sh

set -e

echo "🔧 Starting server setup for TimeWeb Cloud..."

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

# Update system
echo -e "${BLUE}📦 Updating system packages...${NC}"
apt update && apt upgrade -y

# Install Node.js 20.x
echo -e "${BLUE}📥 Installing Node.js 20.x...${NC}"
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Verify Node.js installation
echo -e "${GREEN}✅ Node.js version: $(node -v)${NC}"
echo -e "${GREEN}✅ npm version: $(npm -v)${NC}"

# Install PM2
echo -e "${BLUE}📥 Installing PM2...${NC}"
npm install -g pm2

# Install Nginx
echo -e "${BLUE}📥 Installing Nginx...${NC}"
apt install -y nginx

# Install Git
echo -e "${BLUE}📥 Installing Git...${NC}"
apt install -y git

# Install Certbot for SSL
echo -e "${BLUE}📥 Installing Certbot for SSL certificates...${NC}"
apt install -y certbot python3-certbot-nginx

# Create project directory
echo -e "${BLUE}📁 Creating project directory...${NC}"
mkdir -p /var/www

# Configure firewall (if UFW is installed)
if command -v ufw &> /dev/null; then
    echo -e "${BLUE}🔥 Configuring firewall...${NC}"
    ufw allow 22/tcp
    ufw allow 80/tcp
    ufw allow 443/tcp
    ufw --force enable
fi

# Start Nginx
echo -e "${BLUE}▶️  Starting Nginx...${NC}"
systemctl enable nginx
systemctl start nginx

echo ""
echo -e "${GREEN}✅ Server setup complete!${NC}"
echo ""
echo "Next steps:"
echo "1. Clone your repository:"
echo "   cd /var/www"
echo "   git clone YOUR_REPO_URL goldenhouse-services"
echo ""
echo "2. Configure environment:"
echo "   cd /var/www/goldenhouse-services"
echo "   cp .env.example .env.production"
echo "   nano .env.production  # Edit your settings"
echo ""
echo "3. Install and build:"
echo "   npm install"
echo "   npm run build"
echo ""
echo "4. Start with PM2:"
echo "   pm2 start ecosystem.config.js"
echo "   pm2 startup"
echo "   pm2 save"
echo ""
echo "5. Configure Nginx:"
echo "   cp nginx.conf /etc/nginx/sites-available/goldenhouse-services"
echo "   ln -s /etc/nginx/sites-available/goldenhouse-services /etc/nginx/sites-enabled/"
echo "   nano /etc/nginx/sites-available/goldenhouse-services  # Edit your domain"
echo "   nginx -t"
echo "   systemctl reload nginx"
echo ""
echo "6. Setup SSL:"
echo "   certbot --nginx -d yourdomain.ru -d www.yourdomain.ru"
echo ""
