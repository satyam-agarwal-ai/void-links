import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TemplatesPage() {
    return (
        <div className="container mx-auto px-4 py-24">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Start with a stunning template</h1>
                <p className="text-xl text-muted-foreground">Choose a design and make it yours in seconds.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { name: "Minimalist", type: "Personal", color: "bg-zinc-100 dark:bg-zinc-900" },
                    { name: "Glassmorphism", type: "Creative", color: "bg-gradient-to-br from-indigo-500 to-purple-600" },
                    { name: "Neo-Brutalism", type: "Portfolio", color: "bg-yellow-400 border-4 border-black" },
                    { name: "Dark Mode", type: "Developer", color: "bg-black border border-zinc-800" },
                    { name: "Soft Pastel", type: "Influencer", color: "bg-pink-100 dark:bg-pink-900" },
                    { name: "Professional", type: "Business", color: "bg-blue-900" },
                ].map((template, i) => (
                    <div key={i} className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 hover:shadow-2xl transition-all">
                        <div className={`absolute inset-0 ${template.color}`} />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                            <Badge className="mb-2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border-none">
                                {template.type}
                            </Badge>
                            <h3 className="text-2xl font-bold text-white mb-4">{template.name}</h3>
                            <Link href="/auth/signup">
                                <Button className="w-full bg-white text-black hover:bg-white/90">
                                    Use Template
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
