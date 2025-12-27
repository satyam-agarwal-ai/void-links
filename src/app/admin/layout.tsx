"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Icon } from "@/components/Icon";
import { Toaster } from "@/components/ui/sonner";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Sidebar({ className }: SidebarProps) {
    const pathname = usePathname();

    const routes = [
        {
            label: "Start",
            icon: "Zap",
            href: "/admin",
            isActive: pathname === "/admin",
        },
        {
            label: "Links & Blocks",
            icon: "Link",
            href: "/admin/blocks",
            isActive: pathname.startsWith("/admin/blocks"),
        },
        {
            label: "Appearance",
            icon: "Palette",
            href: "/admin/appearance",
            isActive: pathname.startsWith("/admin/appearance"),
        },
        {
            label: "Analytics",
            icon: "BarChart",
            href: "/admin/analytics",
            isActive: pathname.startsWith("/admin/analytics"),
        },
        {
            label: "Settings",
            icon: "Briefcase", // Using Briefcase as generic settings/account icon for now if Settings icon missing
            href: "/admin/settings",
            isActive: pathname.startsWith("/admin/settings"),
        },
    ];

    return (
        <div className={cn("pb-12 w-64 border-r border-white/10 bg-black/5 hidden md:block", className)}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <Link href="/" className="flex items-center pl-4 mb-8">
                        <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
                            VoidLinks
                        </span>
                    </Link>
                    <div className="space-y-1">
                        {routes.map((route) => (
                            <Link key={route.href} href={route.href}>
                                <Button
                                    variant={route.isActive ? "secondary" : "ghost"}
                                    className="w-full justify-start"
                                >
                                    <Icon name={route.icon} className="mr-2 h-4 w-4" />
                                    {route.label}
                                </Button>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="px-3 py-2">
                    <div className="px-4 text-xs font-semibold text-muted-foreground mb-2">
                        MY ACCOUNT
                    </div>
                    <Button variant="ghost" className="w-full justify-start">
                        <Icon name="Github" className="mr-2 h-4 w-4" />
                        Connected Utils
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 overflow-y-auto bg-background">
                <div className="h-full px-4 py-6 lg:px-8">
                    {children}
                </div>
            </main>
            <Toaster />
        </div>
    );
}
