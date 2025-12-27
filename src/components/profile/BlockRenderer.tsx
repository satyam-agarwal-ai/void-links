"use client";

import { Block } from "@/lib/types";
import { LinkBlock } from "../blocks/LinkBlock";
import { motion } from "framer-motion";

interface BlockRendererProps {
    blocks: Block[];
}

export function BlockRenderer({ blocks }: BlockRendererProps) {
    return (
        <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto p-4">
            {blocks.filter(b => b.isVisible).map((block, index) => (
                <motion.div
                    key={block.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    {renderBlock(block)}
                </motion.div>
            ))}
        </div>
    );
}

function renderBlock(block: Block) {
    switch (block.type) {
        case "link":
            return <LinkBlock block={block} />;
        case "text":
            // Fallback for simple text block
            return (
                <div className={`text-${block.data.align || 'center'} text-${block.data.size || 'md'} py-2 opacity-80`}>
                    {block.data.content}
                </div>
            )
        case "video":
            // Simple video embed placeholder
            const videoId = block.data.url.split('v=')[1];
            return (
                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-white/10 bg-black">
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={block.data.title || "Video"}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            );
        default:
            return null;
    }
}
