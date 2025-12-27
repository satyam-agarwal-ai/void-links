import { UserProfile } from "@/lib/types";
import { MOCK_PROFILE } from "@/lib/mock-data";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { BlockRenderer } from "@/components/profile/BlockRenderer";

interface MobilePreviewProps {
    profile?: UserProfile;
}

export function MobilePreview({ profile = MOCK_PROFILE }: MobilePreviewProps) {
    // Use passed profile or fallback to mock
    const user = profile;

    const { theme } = user;

    let backgroundStyle: React.CSSProperties = {};
    if (theme.backgroundType === "image" && theme.backgroundImage) {
        backgroundStyle = {
            backgroundImage: `url('${theme.backgroundImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        };
    }

    return (
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
            <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>

            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800 relative">
                <div
                    className="w-full h-full overflow-y-auto scrollbar-hide"
                    style={backgroundStyle}
                >
                    {/* Overlay */}
                    {theme.backgroundType === "image" && (
                        <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />
                    )}

                    <div className="relative z-10 px-4 py-8 pb-16 scale-90 origin-top">
                        <ProfileHeader profile={user} />
                        <BlockRenderer blocks={user.blocks} />
                    </div>
                </div>
            </div>
        </div>
    );
}
