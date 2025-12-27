import { UserProfile } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icon } from "@/components/Icon";

interface ProfileHeaderProps {
    profile: UserProfile;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
    return (
        <div className="flex flex-col items-center gap-4 py-8 text-center text-white mix-blend-normal">
            <Avatar className="h-28 w-28 border-4 border-white/20 shadow-xl">
                <AvatarImage src={profile.avatarUrl} alt={profile.displayName} className="object-cover" />
                <AvatarFallback>{profile.displayName[0]}</AvatarFallback>
            </Avatar>

            <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tight md:text-3xl drop-shadow-md">
                    {profile.displayName}
                    {/* Verified Badge could go here */}
                </h1>
                {profile.bio && (
                    <p className="max-w-md text-sm font-medium opacity-90 md:text-base drop-shadow-sm">
                        {profile.bio}
                    </p>
                )}
            </div>

            {/* Social Icons Row */}
            {profile.socials && profile.socials.length > 0 && (
                <div className="flex gap-4 mt-2">
                    {profile.socials.map((social, i) => (
                        <a
                            key={i}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/80 hover:text-white hover:scale-110 transition-transform"
                        >
                            <Icon name={social.platform} className="h-6 w-6" />
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}
