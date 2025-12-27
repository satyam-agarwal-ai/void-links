"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { UserProfile, Block } from "@/lib/types";
import { MOCK_PROFILE } from "@/lib/mock-data";

interface BuilderContextType {
    profile: UserProfile;
    updateProfile: (updates: Partial<UserProfile>) => void;
    addBlock: (type: Block['type']) => void;
    updateBlock: (id: string, data: any) => void;
    removeBlock: (id: string) => void;
    reorderBlocks: (startIndex: number, endIndex: number) => void;
    selectedBlockId: string | null;
    selectBlock: (id: string | null) => void;
}

const BuilderContext = createContext<BuilderContextType | undefined>(undefined);

export function BuilderProvider({ children }: { children: ReactNode }) {
    const [profile, setProfile] = useState<UserProfile>(MOCK_PROFILE);
    const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);

    const updateProfile = (updates: Partial<UserProfile>) => {
        setProfile((prev) => ({ ...prev, ...updates }));
    };

    const addBlock = (type: Block['type']) => {
        const newBlock: Block = {
            id: crypto.randomUUID(),
            type: type as any,
            isVisible: true,
            data: {
                label: "New Link",
                url: "#",
                style: 'default'
            } as any // Simplified for brevity, would switch based on type
        };

        if (type === 'text') {
            newBlock.data = { content: "New Text Block", align: "center", size: "md" };
        }

        setProfile((prev) => ({
            ...prev,
            blocks: [...prev.blocks, newBlock],
        }));
        setSelectedBlockId(newBlock.id);
    };

    const updateBlock = (id: string, data: any) => {
        setProfile((prev) => ({
            ...prev,
            blocks: prev.blocks.map((b) => (b.id === id ? { ...b, data: { ...b.data, ...data } } : b)),
        }));
    };

    const removeBlock = (id: string) => {
        setProfile((prev) => ({
            ...prev,
            blocks: prev.blocks.filter((b) => b.id !== id),
        }));
        if (selectedBlockId === id) setSelectedBlockId(null);
    };

    const reorderBlocks = (startIndex: number, endIndex: number) => {
        setProfile((prev) => {
            const result = Array.from(prev.blocks);
            const [removed] = result.splice(startIndex, 1);
            result.splice(endIndex, 0, removed);
            return { ...prev, blocks: result };
        });
    };

    const selectBlock = (id: string | null) => {
        setSelectedBlockId(id);
    }

    return (
        <BuilderContext.Provider
            value={{
                profile,
                updateProfile,
                addBlock,
                updateBlock,
                removeBlock,
                reorderBlocks,
                selectedBlockId,
                selectBlock,
            }}
        >
            {children}
        </BuilderContext.Provider>
    );
}

export function useBuilder() {
    const context = useContext(BuilderContext);
    if (context === undefined) {
        throw new Error("useBuilder must be used within a BuilderProvider");
    }
    return context;
}
