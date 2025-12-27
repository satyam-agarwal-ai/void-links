import Link from "next/link";
import { Icon } from "@/components/Icon";

export function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-black/5 py-12 backdrop-blur-sm">
            <div className="container px-4 md:px-6">
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                    <div className="col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
                                VoidLinks
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            The ultimate link-in-bio tool for creators. Build your digital identity in minutes.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/features">Features</Link></li>
                            <li><Link href="/pricing">Pricing</Link></li>
                            <li><Link href="/templates">Templates</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/privacy">Privacy</Link></li>
                            <li><Link href="/terms">Terms</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground">
                        © 2024 VoidLinks Inc. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-muted-foreground hover:text-foreground"><Icon name="Twitter" className="h-5 w-5" /></a>
                        <a href="#" className="text-muted-foreground hover:text-foreground"><Icon name="Github" className="h-5 w-5" /></a>
                        <a href="#" className="text-muted-foreground hover:text-foreground"><Icon name="Instagram" className="h-5 w-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
