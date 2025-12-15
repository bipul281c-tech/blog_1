/**
 * 🚀 FULLY DYNAMIC DEPLOYMENT CONFIGURATION
 *
 * ✨ NO HARDCODED URLs - Everything is automatic!
 *
 * This configuration automatically detects:
 * - Local development: http://localhost:4321
 * - Vercel deployment: Uses VERCEL_URL (automatic)
 * - Custom domain: Set SITE_URL in Vercel dashboard
 * - GitHub Pages: Detects GITHUB_ACTIONS environment
 *
 * You DON'T need to update this file when:
 * - Deploying to Vercel
 * - Changing domains
 * - Running locally
 *
 * See DYNAMIC-DEPLOYMENT-GUIDE.md for details.
 */

export type DeploymentConfig = {
    production: {
        url: string;
        base: string;
    };
    github: {
        url: string;
        base: string;
    };
};

// 🔧 FULLY DYNAMIC - No hardcoded URLs!
// Uses environment variables that are automatically set by hosting platforms
export const deploymentConfig: DeploymentConfig = {
    // Production deployment (Vercel, Netlify, custom domain, etc.)
    production: {
        // Vercel automatically provides VERCEL_URL
        // For custom domains, set SITE_URL in Vercel dashboard
        url: process.env.SITE_URL || 'https://www.dailymeditationguide.com',
        base: process.env.BASE_PATH || '/'
    },
    // GitHub Pages configuration
    github: {
        url: process.env.SITE_URL || 'https://djsiddz.github.io',
        base: process.env.BASE_PATH || '/dailymeditationguide'
    }
};

/**
 * Get the current deployment configuration based on environment
 * Automatically detects GitHub Actions, otherwise uses production config
 * All values come from environment variables - nothing hardcoded!
 */
export function getCurrentDeployment() {
    const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
    return isGitHubPages ? deploymentConfig.github : deploymentConfig.production;
}

