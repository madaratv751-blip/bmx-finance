# Deployment Guide

## 🚀 Quick Deployment

### Frontend Deployment (Vercel)

1. **Push to GitHub**
```bash
git push origin main
```

2. **Deploy to Vercel**
- Go to https://vercel.com
- Click "New Project"
- Select your GitHub repository
- Set environment variables:
```
NEXT_PUBLIC_API_URL=https://your-api-url.railway.app/api
```
- Click "Deploy"

### Backend Deployment (Railway)

1. **Push to GitHub**
```bash
git push origin main
```

2. **Deploy to Railway**
- Go to https://railway.app
- Click "New Project"
- Select "Deploy from GitHub"
- Choose your repository
- Set environment variables:
```
NODE_ENV=production
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/bmxfinance
JWT_SECRET=your_production_secret_key
STRIPE_SECRET=sk_live_your_key
PORT=5000
CORS_ORIGIN=https://your-vercel-app.vercel.app
```
- Click "Deploy"

### Database Setup (MongoDB Atlas)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create account and new cluster
3. Create database user with credentials
4. Get connection string
5. Replace in `.env`:
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/bmxfinance
```

### Domain Setup

**Frontend (Vercel)**
- Project Settings → Domains
- Add your custom domain
- Update DNS records

**Backend (Railway)**
- Project Settings → Networking
- Custom domain setup

## 🐳 Docker Deployment

### Build Docker Image
```bash
docker build -t bmx-finance:latest .
docker tag bmx-finance:latest your-registry/bmx-finance:latest
docker push your-registry/bmx-finance:latest
```

### Deploy to Docker Hub
```bash
docker run -p 3000:3000 -p 5000:5000 \
  -e MONGO_URI=your_mongodb_url \
  -e JWT_SECRET=your_secret \
  your-registry/bmx-finance:latest
```

## 📋 Pre-Deployment Checklist

- [ ] Set all environment variables
- [ ] Update API URLs in frontend
- [ ] Configure CORS properly
- [ ] Set up SSL/HTTPS
- [ ] Configure payment gateways (Stripe/PayPal)
- [ ] Set up Cloudinary for uploads
- [ ] Configure email service
- [ ] Test all APIs
- [ ] Test payment flow
- [ ] Set up monitoring
- [ ] Configure backups

## 🔐 Security Checklist

- [ ] JWT_SECRET is strong and unique
- [ ] Database credentials are secure
- [ ] API keys are hidden in environment variables
- [ ] HTTPS is enforced
- [ ] CORS is properly configured
- [ ] Rate limiting is enabled
- [ ] Input validation is in place
- [ ] Error messages don't expose sensitive info

## 📊 Monitoring

### Setup Application Monitoring
- **Sentry**: Error tracking
- **DataDog**: Performance monitoring
- **New Relic**: APM

### Setup Uptime Monitoring
- **UptimeRobot**: Uptime monitoring
- **Pingdom**: Availability monitoring

## 🔄 CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

## 📱 Testing Before Deployment

### Local Testing
```bash
# Test frontend
cd frontend
npm run build
npm start

# Test backend
cd backend
npm run build
npm start
```

### Load Testing
```bash
npm install -g artillery
artillery quick --count 100 --num 1000 https://your-api.com/api/health
```

## 🆘 Troubleshooting

### Common Issues

**Deployment fails**
- Check environment variables
- Verify database connection
- Check API keys

**CORS errors**
- Update CORS_ORIGIN in backend
- Verify frontend URL

**Database connection fails**
- Check MongoDB Atlas IP whitelist
- Verify connection string
- Check firewall rules

**Payment integration fails**
- Verify Stripe/PayPal keys
- Check webhook configurations
- Review payment flow

## 📞 Support

- GitHub Issues: Report bugs and feature requests
- Documentation: See README.md
- Community: Join discussions

---

**Happy Deploying! 🚀**
