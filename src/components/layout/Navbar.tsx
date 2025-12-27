"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
            <div className="container flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
                            VoidLinks
                        </span>
                    </Link>
                    <nav className="hidden md:flex gap-6">
                        <Link href="/templates" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Templates
                        </Link>
                        <Link href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Pricing
                        </Link>
                        <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            About
                        </Link>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/auth/login" className="hidden sm:block">
                        <Button variant="ghost" size="sm">
                            Log in
                        </Button>
                    </Link>
                    <Link href="/auth/signup">
                        <Button size="sm" className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
