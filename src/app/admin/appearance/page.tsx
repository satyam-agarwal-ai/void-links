"use client";

import { BuilderProvider, useBuilder } from "@/lib/builder-context";
import { MobilePreview } from "@/components/preview/MobilePreview";
import ThemeEditor from "@/components/admin/ThemeEditor";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function AppearancePage() {
    return (
        <BuilderProvider>
            <AppearancePageContent />
        </BuilderProvider>
    );
}

function AppearancePageContent() {
    const { profile } = useBuilder();

    return (
        <ResizablePanelGroup direction="horizontal" className="min-h-[calc(100vh-4rem)] rounded-lg border">
            {/* Left Panel: Theme Editor */}
            <ResizablePanel defaultSize={50} minSize={30}>
                <div className="h-full flex flex-col">
                    <div className="p-6 border-b">
                        <h1 className="text-2xl font-bold">Appearance</h1>
                        <p className="text-muted-foreground">Customize the look and feel of your page.</p>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        <ThemeEditor />
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
