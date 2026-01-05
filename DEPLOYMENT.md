# 🚀 Portfolio Deployment Guide

## Deploy to Vercel

### Prerequisites
- GitHub account
- Vercel account (free)

### Step 1: Push Code to GitHub
```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial portfolio deployment"

# Create GitHub repository and push
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

### Step 2: Deploy to Vercel

#### Option A: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure build settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (leave default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next` (leave default)
5. Click "Deploy"

#### Option B: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts:
# - Link to existing project or create new? → Create new
# - Project name → portfolio (or your choice)
# - Directory → ./ (current directory)
```

### Step 3: Configure Domain (Optional)
1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain or use the provided `.vercel.app` domain

### Step 4: Environment Variables (Optional)
If you add any environment variables later:
1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy for changes to take effect

## Project Structure for Deployment

```
portfolio/
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/          # React components
│   └── data/               # Portfolio data
├── public/                 # Static assets
│   └── resume/            # Resume PDF
├── vercel.json            # Vercel configuration
├── package.json           # Dependencies
└── next.config.ts         # Next.js config
```

## Build Optimization

- ✅ **Static Generation**: Pages are pre-rendered for fast loading
- ✅ **Image Optimization**: Automatic image optimization
- ✅ **Code Splitting**: Automatic code splitting for performance
- ✅ **Compression**: Gzip compression enabled

## Post-Deployment

1. **Test the deployment**: Visit your Vercel URL
2. **Check all links**: Navigation, social links, resume download
3. **Test responsiveness**: Mobile and desktop views
4. **Verify contact form**: If you add backend functionality later

## Troubleshooting

### Build Fails
- Check `npm run build` works locally
- Verify all imports are correct
- Check for TypeScript errors

### Runtime Errors
- Check browser console for errors
- Verify all asset paths are correct
- Test on different browsers

### Performance Issues
- Enable Vercel Analytics for monitoring
- Check bundle size with `npm run build`
- Optimize images and assets

## Custom Domain Setup

1. Go to Vercel project → Settings → Domains
2. Add your domain
3. Update DNS records as instructed
4. Wait for SSL certificate (automatic)

## Maintenance

- **Automatic deployments**: Push to main branch triggers deployment
- **Environment variables**: Update in Vercel dashboard
- **Domain management**: Configure in Vercel settings

---

🎉 **Your portfolio is now live on Vercel!**

Default URL: `https://your-project-name.vercel.app`
