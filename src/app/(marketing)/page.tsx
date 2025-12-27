"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Icon } from "@/components/Icon";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center w-full">
            {/* Hero Section */}
            <section className="relative w-full py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                    <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
                </div>

                <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Badge className="mb-4 px-4 py-1 text-sm bg-secondary/50 hover:bg-secondary/70 backdrop-blur-sm border-white/10">
                            ✨ New: Glassmorphism Themes
                        </Badge>
                    </motion.div>

                    <motion.h1
                        className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Your Digital Identity, <br className="hidden sm:inline" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">
                            Elevated.
                        </span>
                    </motion.h1>

                    <motion.p
                        className="mx-auto mt-6 max-w-[700px] text-lg text-muted-foreground md:text-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        The only link-in-bio tool designed for quality.
                        Beautiful animations, premium themes, and powerful analytics.
                    </motion.p>

                    <motion.div
                        className="mt-10 flex flex-col sm:flex-row gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Link href="/auth/signup">
                            <Button size="lg" className="h-12 px-8 text-lg bg-white text-black hover:bg-white/90">
                                Claim your link
                            </Button>
                        </Link>
                        <Link href="/demo">
                            <Button size="lg" variant="outline" className="h-12 px-8 text-lg hover:bg-white/10">
                                View Demo
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Abstract Phone Preview Mockup */}
                    <motion.div
                        className="mt-20 relative mx-auto w-full max-w-[300px] h-[600px] bg-black border-[8px] border-neutral-800 rounded-[3rem] shadow-2xl overflow-hidden"
                        initial={{ opacity: 0, y: 100, rotateX: 20 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ duration: 1, delay: 0.4, type: "spring" }}
                        style={{ perspective: "1000px" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-900">
                            {/* Mock Content */}
                            <div className="flex flex-col items-center pt-12 p-4 gap-4">
                                <div className="h-20 w-20 rounded-full bg-white/20 animate-pulse"></div>
                                <div className="h-4 w-32 bg-white/20 rounded-full"></div>
                                <div className="h-3 w-48 bg-white/10 rounded-full"></div>

                                <div className="w-full mt-6 space-y-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="h-14 w-full bg-white/10 backdrop-blur-md rounded-xl border border-white/5 shadow-lg flex items-center px-4">
                                            <div className="h-8 w-8 rounded-full bg-white/20"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="w-full py-24 bg-black/5">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">Built for Creators</h2>
                        <p className="mt-4 text-muted-foreground text-lg"> everything you need to grow your audience.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon="Palette"
                            title="Premium Themes"
                            description="Ditch the flat look. Use glassmorphism, gradients, and video backgrounds."
                        />
                        <FeatureCard
                            icon="BarChart"
                            title="Deep Analytics"
                            description="Understand your audience with detailed click maps and conversion tracking."
                        />
                        <FeatureCard
                            icon="Zap"
                            title="Blazing Fast"
                            description="Powered by Next.js 14 and Edge computing for instant load times."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

function FeatureCard({ icon, title, description }: { icon: string, title: string, description: string }) {
    return (
        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all hover:y-1">
            <div className="h-12 w-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400">
                <Icon name={icon} className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </div>
    )
}
