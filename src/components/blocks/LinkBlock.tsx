"use client";

import { motion } from "framer-motion";
import { LinkBlock as LinkBlockType } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/Icon";
import Image from "next/image";

interface LinkBlockProps {
    block: LinkBlockType;
}

export function LinkBlock({ block }: LinkBlockProps) {
    const { label, url, style, icon, thumbnailUrl } = block.data;

    const baseStyles = "relative w-full p-4 rounded-xl flex items-center gap-4 transition-all duration-300 group overflow-hidden";

    const variants = {
        glass: "bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white shadow-lg mix-blend-overlay-safe",
        solid: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md",
        outline: "border-2 border-primary/50 hover:border-primary bg-transparent hover:bg-primary/5 text-primary",
        default: "bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground shadow-sm border",
    };

    return (
        <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(baseStyles, variants[style || "default"])}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            {/* Thumbnail or Icon */}
            {thumbnailUrl ? (
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-white/10">
                    <Image
                        src={thumbnailUrl}
                        alt={label}
                        fill
                        className="object-cover"
                    />
                </div>
            ) : icon ? (
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10 text-xl">
                    <Icon name={icon} className="h-6 w-6" />
                </div>
            ) : null}

            {/* Label */}
            <div className="flex-1 text-center font-medium sm:text-lg">
                {label}
            </div>

            {/* spacer to balance the icon/thumb on left if centered text is desired, 
          or just right arrow. For now, simple flex. */}
            {(thumbnailUrl || icon) && <div className="w-12" />}

            {/* Gloss Effect for Glass variant */}
            {style === 'glass' && (
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
            )}
        </motion.a>
    );
}
