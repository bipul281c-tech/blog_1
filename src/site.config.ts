import { withBase } from "./utils/helpers";
import { deploymentConfig } from "../deployment.config";

export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
    icon?: string;
};


export type Hero = {
    eyebrowText?: string;
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type About = {
    title?: string;
    text?: string;
};

export type Blog = {
    description?: string;
};

export type ContactInfo = {
    title?: string;
    text?: string;
    email?: {
        text?: string;
        href?: string;
        email?: string;
    };
    socialProfiles?: {
        text?: string;
        href?: string;
    }[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    about?: About;
    contactInfo?: ContactInfo;
    subscribe?: Subscribe;
    blog?: Blog;
    postsPerPage?: number;
    recentPostLimit: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: deploymentConfig.production.url,
    title: 'Daily Meditation Guide',
    description: 'Your daily companion for mindfulness, meditation, and finding inner peace.',
    image: {
        src: '/girlytalk-preview.jpeg',
        alt: 'DailyMeditationGuide 🧘‍♀️ - Your daily dose of mindfulness.'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: withBase('/')
        },
        {
            text: 'Blog',
            href: withBase('/blog')
        },
        {
            text: 'Tags',
            href: withBase('/tags')
        },
        {
            text: 'About',
            href: withBase('/about')
        },
        {
            text: 'Contact',
            href: withBase('/contact')
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: withBase('/about')
        },
        {
            text: 'Contact',
            href: withBase('/contact')
        },
        {
            text: 'Privacy Policy',
            href: withBase('/privacy-policy')
        },
        {
            text: 'Terms & Conditions',
            href: withBase('/terms-and-conditions')
        },
        {
            text: 'Disclaimer',
            href: withBase('/disclaimer')
        },

    ],
    socialLinks: [
        {
            text: 'YouTube',
            href: 'https://www.youtube.com/@DailyMeditationn',
            icon: 'youtube'
        }
    ],
    hero: {
        eyebrowText: 'Mindful Moments',
        title: 'Daily Meditation Guide 🧘‍♀️',
        text: "Find your center, embrace the calm, and discover the power of daily mindfulness.",
        image: {
            src: '/assets/images/meditation-hero-girl.svg',
            alt: 'A girl meditating in a peaceful state with mindfulness icons'
        },
        actions: [
            {
                text: 'Start Meditating',
                href: withBase('/blog')
            },
            {
                text: 'Subscribe',
                href: '#subscribe'
            }
        ]
    },
    about: {
        title: 'About',
        text: 'DailyMeditationGuide is your sanctuary for peace and personal growth. We believe in the transformative power of meditation and mindfulness. Here, we share tips, guides, and stories to help you navigate life with grace, intention, and a touch of sparkle. ✨',
    },
    contactInfo: {
        title: 'Contact',
        text: "Namaste! 🙏 Whether you have a question about your practice, a suggestion for a topic, or just want to share your journey, I'd love to hear from you.",
        email: {
            text: "Send me a message and I'll get back to you with mindful attention.",
            href: "mailto:blog.boopul@gmail.com",
            email: "blog.boopul@gmail.com"
        },
        socialProfiles: [
            {
                text: "LinkedIn",
                href: "https://www.linkedin.com/"
            },
            {
                text: "Peerlist",
                href: "https://www.peerlist.io/"
            },
            {
                text: "GitHub",
                href: "https://github.com/"
            }
        ]
    },
    subscribe: {
        title: 'Join Our Circle',
        text: 'Receive weekly mindfulness tips, guided meditations, and inspiration directly to your inbox.',
        formUrl: '#'
    },
    blog: {
        description: "Explore our collection of articles on meditation techniques, mindfulness practices, and living a balanced life."
    },
    postsPerPage: 2,
    recentPostLimit: 3
};

export default siteConfig;
