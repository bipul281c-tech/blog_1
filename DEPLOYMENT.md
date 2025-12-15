# 🚀 Deployment Configuration Guide

This guide explains how to configure and update your deployment URLs for this Astro blog.

## 📍 Single Source of Truth

All deployment URLs are managed in **one place**: `deployment.config.ts`

## 🔧 How to Update Your Domain

### Step 1: Open `deployment.config.ts`

Find the `deploymentConfig` section (around line 23):

```typescript
export const deploymentConfig: DeploymentConfig = {
    // Your primary production deployment (Vercel, Netlify, custom domain, etc.)
    production: {
        url: 'https://your-domain.com', // 👈 UPDATE THIS
        base: '/' // Usually '/' for root domain deployments
    },
    // GitHub Pages configuration (if you use it)
    github: {
        url: 'https://yourusername.github.io',
        base: '/your-repo-name'
    }
};
```

### Step 2: Update the URLs

**For Vercel/Netlify/Custom Domain:**
```typescript
production: {
    url: 'https://yourdomain.com', // Your actual domain
    base: '/' // Keep as '/' for root deployments
}
```

**For GitHub Pages:**
```typescript
github: {
    url: 'https://yourusername.github.io',
    base: '/repository-name' // Your GitHub repo name
}
```

### Step 3: Deploy

That's it! Just commit and push:

```bash
git add deployment.config.ts
git commit -m "Update deployment URL"
git push
```

## 🎯 How It Works

The configuration automatically detects the deployment environment:

- **GitHub Actions** (GitHub Pages): Uses `github` config
- **Vercel/Netlify/Other**: Uses `production` config

All URLs throughout your site (navigation, blog posts, assets, RSS feeds, etc.) will automatically use the correct base path.

## 📝 Common Scenarios

### Scenario 1: Moving from Vercel to Custom Domain

```typescript
production: {
    url: 'https://myblog.com', // Changed from Vercel URL
    base: '/'
}
```

### Scenario 2: Using a Subdomain

```typescript
production: {
    url: 'https://blog.mysite.com',
    base: '/'
}
```

### Scenario 3: Deploying to a Subdirectory

```typescript
production: {
    url: 'https://mysite.com',
    base: '/blog' // Site will be at mysite.com/blog
}
```

## ✅ What Gets Updated Automatically

When you change the deployment config, these are automatically updated:

- ✅ Navigation links (header & footer)
- ✅ Blog post URLs
- ✅ Tag pages
- ✅ RSS feed
- ✅ Sitemap
- ✅ Asset paths (images, CSS, JS)
- ✅ Social meta tags

## 🔍 Troubleshooting

**Problem**: Links are broken after deployment

**Solution**: Make sure you've updated `deployment.config.ts` and redeployed

**Problem**: CSS not loading

**Solution**: Check that `base` is set correctly:
- Use `/` for root domain deployments
- Use `/subdirectory` only if your site is in a subdirectory

**Problem**: Different URLs for different environments

**Solution**: The config automatically handles this! Just set both `production` and `github` configs correctly.

## 🎉 Benefits of This Approach

- 🎯 **Single source of truth**: Update URL in one place
- 🔄 **Automatic environment detection**: Works on GitHub Pages and other platforms
- 🛡️ **Type-safe**: TypeScript ensures configuration is correct
- 📦 **Future-proof**: Easy to migrate between hosting providers

---

**Need help?** Check the main [README.md](./README.md) or open an issue.

