import {
    Briefcase,
    Calendar,
    Github,
    Globe,
    Instagram,
    Linkedin,
    Mail,
    Twitter,
    Youtube,
    Music,
    Video,
    Link as LinkIcon,
    Facebook,
    Check,
    Zap,
    Palette,
    BarChart,
    Trash,
    Type,
    Users,
    Clock
} from "lucide-react";

export const IconMap = {
    Briefcase,
    Calendar,
    Github,
    Globe,
    Instagram,
    Linkedin,
    Mail,
    Twitter,
    Youtube,
    Music,
    Video,
    Link: LinkIcon,
    Facebook,
    Check,
    Zap,
    Palette,
    BarChart,
    Trash,
    Type,
    Users,
    Clock
};

export type IconName = keyof typeof IconMap;

interface IconProps {
    name: string;
    className?: string;
}

export function Icon({ name, className }: IconProps) {
    const LucideIcon = IconMap[name as IconName] || LinkIcon;
    return <LucideIcon className={className} />;
}
