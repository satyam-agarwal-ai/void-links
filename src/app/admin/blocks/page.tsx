"use client";

import { BuilderProvider, useBuilder } from "@/lib/builder-context";
import { MobilePreview } from "@/components/preview/MobilePreview";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/Icon";
import { LinkBlockForm } from "@/components/admin/LinkBlockForm";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function BlocksPage() {
    return (
        <BuilderProvider>
            <BlocksPageContent />
        </BuilderProvider>
    );
}

function BlocksPageContent() {
    const { profile, addBlock, selectBlock, selectedBlockId, removeBlock } = useBuilder();

    return (
        <ResizablePanelGroup direction="horizontal" className="min-h-[calc(100vh-4rem)] rounded-lg border">
            {/* Left Panel: Block List & Editor */}
            <ResizablePanel defaultSize={50} minSize={30}>
                <div className="h-full flex flex-col p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">Content Blocks</h1>
                        <div className="flex gap-2">
                            <Button onClick={() => addBlock('link')} size="sm">
                                <Icon name="Link" className="mr-2 h-4 w-4" />
                                Add Link
                            </Button>
                            <Button onClick={() => addBlock('text')} size="sm" variant="outline">
                                <Icon name="Type" className="mr-2 h-4 w-4" /> {/* Type icon needs adding */}
                                Add Text
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 overflow-hidden">
                        {/* List Column */}
                        <div className="flex flex-col gap-4 overflow-y-auto pr-2">
                            {profile.blocks.length === 0 && (
                                <div className="text-center text-muted-foreground py-10 border-2 border-dashed rounded-xl">
                                    No blocks yet. Add one to get started!
                                </div>
                            )}

                            {profile.blocks.map((block) => (
                                <Card
                                    key={block.id}
                                    className={`cursor-pointer transition-all hover:border-primary/50 relative group ${selectedBlockId === block.id ? 'border-primary ring-1 ring-primary' : ''}`}
                                    onClick={() => selectBlock(block.id)}
                                >
                                    <div className="p-4 flex items-center gap-3">
                                        <div className="bg-secondary/50 p-2 rounded-md">
                                            <Icon name={block.type === 'link' ? 'Link' : 'Type'} className="h-4 w-4" />
                                        </div>
                                        <div className="flex-1 font-medium truncate">
                                            {block.type === 'link' ? (block.data as any).label : 'Text Block'}
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="opacity-0 group-hover:opacity-100 text-destructive hover:text-destructive hover:bg-destructive/10"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                removeBlock(block.id);
                                            }}
                                        >
                                            <Icon name="Trash" className="h-4 w-4" />  {/* Trash icon needed */}
                                        </Button>
                                    </div>
                                </Card>
                            ))}
                        </div>

                        {/* Editor Column */}
                        <div className="border-l pl-6 overflow-y-auto">
                            {selectedBlockId ? (
                                <LinkBlockForm />
                            ) : (
                                <div className="h-full flex items-center justify-center text-muted-foreground text-sm">
                                    Select a block to edit
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </ResizablePanel>

            <ResizableHandle />

            {/* Right Panel: Preview */}
            <ResizablePanel defaultSize={50} minSize={30}>
                <div className="h-full bg-secondary/10 flex items-center justify-center p-8">
                    <div className="scale-90 xl:scale-100 transition-transform">
                        <MobilePreview profile={profile} />
                    </div>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}
