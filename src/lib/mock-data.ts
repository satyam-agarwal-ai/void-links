import { UserProfile } from "./types";

export const MOCK_PROFILE: UserProfile = {
    id: "user_123",
    username: "demo",
    displayName: "Sarah Creator",
    bio: "Digital Artist & Content Creator 🎨 | Building cool stuff in public.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=256&h=256",
    theme: {
        mode: "dark",
        backgroundType: "image",
        backgroundImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1920",
        buttonStyle: "rounded",
        cardStyle: "glass",
    },
    socials: [
        { platform: "instagram", url: "https://instagram.com" },
        { platform: "twitter", url: "https://twitter.com" },
        { platform: "email", url: "mailto:hello@example.com" },
    ],
    blocks: [
        {
            id: "1",
            type: "link",
            isVisible: true,
            data: {
                label: "My Latest Portfolio",
                url: "https://dribbble.com",
                icon: "Briefcase",
                style: "glass",
                thumbnailUrl: "https://images.unsplash.com/photo-1558655146-d09347e0b7a9?auto=format&fit=crop&q=80&w=100&h=100"
            },
        },
        {
            id: "2",
            type: "video",
            isVisible: true,
            data: {
                url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                title: "Watch my new tutorial",
            },
        },
        {
            id: "3",
            type: "text",
            isVisible: true,
            data: {
                content: "Check out my resources below 👇",
                align: "center",
                size: "sm"
            }
        },
        {
            id: "4",
            type: "link",
            isVisible: true,
            data: {
                label: "Book a Consultation",
                url: "https://calendly.com",
                style: "solid",
                icon: "Calendar"
            },
        },
        {
            id: "5",
            type: "link",
            isVisible: true,
            data: {
                label: "Join the Newsletter",
                url: "#",
                style: "outline",
                icon: "Mail"
            },
        },
    ],
};
