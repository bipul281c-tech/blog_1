/**
 * 🔧 DEPLOYMENT CONFIGURATION
 * 
 * This file contains all deployment URLs and base paths.
 * Update these values when you change domains or deployment platforms.
 * 
 * This configuration is separate from site.config.ts to avoid circular dependencies
 * during the build process.
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

// 🔧 UPDATE THESE VALUES WHEN CHANGING DOMAINS
export const deploymentConfig: DeploymentConfig = {
    // Your primary production deployment (Vercel, Netlify, custom domain, etc.)
    production: {
        url: 'https://blog-1-1wb5ogwiu-bipul-kumars-projects.vercel.app', // 👈 UPDATE THIS with your domain
        base: '/' // Usually '/' for root domain deployments
    },
    // GitHub Pages configuration (if you use it)
    github: {
        url: 'https://djsiddz.github.io',
        base: '/space-ahead' // The repository name for GitHub Pages
    }
};

/**
 * Get the current deployment configuration based on environment
 */
export function getCurrentDeployment() {
    const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
    return isGitHubPages ? deploymentConfig.github : deploymentConfig.production;
}

