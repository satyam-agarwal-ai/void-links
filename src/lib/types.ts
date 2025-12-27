export type BlockType = 'link' | 'social' | 'image' | 'video' | 'text';

export interface BaseBlock {
    id: string;
    type: BlockType;
    isVisible: boolean;
}

export interface LinkBlock extends BaseBlock {
    type: 'link';
    data: {
        label: string;
        url: string;
        thumbnailUrl?: string;
        icon?: string; // Lucide icon name or emoji
        style?: 'default' | 'outline' | 'glass' | 'solid';
    };
}

export interface SocialBlock extends BaseBlock {
    type: 'social';
    data: {
        links: {
            platform: 'twitter' | 'instagram' | 'github' | 'linkedin' | 'youtube' | 'tiktok' | 'facebook' | 'email';
            url: string;
        }[];
    };
}

export interface ImageBlock extends BaseBlock {
    type: 'image';
    data: {
        url: string;
        alt?: string;
        caption?: string;
        aspectRatio?: 'square' | 'video' | 'auto';
    };
}

export interface VideoBlock extends BaseBlock {
    type: 'video';
    data: {
        url: string; // YouTube/Vimeo URL
        title?: string;
        autoPlay?: boolean;
    };
}

export interface TextBlock extends BaseBlock {
    type: 'text';
    data: {
        content: string;
        align?: 'left' | 'center' | 'right';
        size?: 'sm' | 'md' | 'lg';
    };
}

export type Block = LinkBlock | SocialBlock | ImageBlock | VideoBlock | TextBlock;

export interface ProfileTheme {
    mode: 'light' | 'dark' | 'custom';
    backgroundType: 'solid' | 'gradient' | 'image';
    backgroundColor?: string;
    backgroundGradient?: string; // e.g., "from-blue-500 to-purple-600"
    backgroundImage?: string;
    fontPrimary?: string;
    fontSecondary?: string;
    buttonStyle: 'rounded' | 'square' | 'pill';
    cardStyle: 'flat' | 'shadow' | 'glass';
}

export interface UserProfile {
    id: string;
    username: string;
    displayName: string;
    bio?: string;
    avatarUrl?: string;
    theme: ProfileTheme;
    blocks: Block[];
    socials?: SocialBlock['data']['links']; // Global socials (usually in header/footer)
}
