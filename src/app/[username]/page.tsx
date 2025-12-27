import { MOCK_PROFILE } from "@/lib/mock-data";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { BlockRenderer } from "@/components/profile/BlockRenderer";
import { Metadata } from "next";

type Props = {
    params: Promise<{ username: string }>;
};

// SEO Metadata Generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { username } = await params;
    // In real app, fetch profile here
    const profile = MOCK_PROFILE; // Assuming username matches for demo

    return {
        title: `${profile.displayName} | VoidLinks`,
        description: profile.bio,
        openGraph: {
            images: [profile.avatarUrl ?? ""],
        },
    };
}

export default async function ProfilePage({ params }: Props) {
    const resolvedParams = await params;
    // In real app, fetch data based on resolvedParams.username
    const profile = MOCK_PROFILE;

    const { theme } = profile;

    // Dynamic Background Styles
    let backgroundStyle: React.CSSProperties = {};
    if (theme.backgroundType === "image" && theme.backgroundImage) {
        backgroundStyle = {
            backgroundImage: `url('${theme.backgroundImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
        };
    } else if (theme.backgroundType === "gradient" && theme.backgroundGradient) {
        // Tailwind classes would be handled via className content if possible, 
        // or inline style for custom gradients
    }

    return (
        <main
            className="min-h-screen w-full relative overflow-x-hidden"
            style={backgroundStyle}
        >
            {/* Overlay for readability if image background */}
            {theme.backgroundType === "image" && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />
            )}

            {/* Content Container */}
            <div className="relative z-10 container max-w-2xl mx-auto px-4 py-10 pb-20">
                <ProfileHeader profile={profile} />
                <BlockRenderer blocks={profile.blocks} />

                <footer className="mt-16 text-center text-white/50 text-xs">
                    <p>Created with VoidLinks</p>
                </footer>
            </div>
        </main>
    );
}
