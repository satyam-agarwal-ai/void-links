import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-24 max-w-4xl">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold tracking-tight mb-6">Built for the future of creators.</h1>
                <p className="text-xl text-muted-foreground">
                    VoidLinks was born from a simple observation: Link-in-bios are boring.
                    We're here to change that.
                </p>
            </div>

            <div className="prose prose-invert mx-auto">
                <p>
                    In a world where attention is the most valuable currency, your digital identity shouldn't be a
                    list of blue links on a white background. It should be an experience.
                </p>

                <h3>Our Mission</h3>
                <p>
                    To empower creators with tools that match their ambition. We believe in design first,
                    performance always, and giving you full control over your brand.
                </p>

                <div className="my-12 p-8 bg-white/5 rounded-2xl border border-white/10 text-center">
                    <h3 className="text-2xl font-bold mb-4">Ready to upgrade your bio?</h3>
                    <Link href="/auth/signup">
                        <Button size="lg">Get Started Free</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
