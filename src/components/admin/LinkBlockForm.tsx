"use client";

import { useBuilder } from "@/lib/builder-context";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LinkBlock } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Icon, IconName, IconMap } from "@/components/Icon";

export function LinkBlockForm() {
    const { profile, selectedBlockId, updateBlock } = useBuilder();

    const block = profile.blocks.find(b => b.id === selectedBlockId) as LinkBlock | undefined;

    if (!block || block.type !== 'link') return <div>Select a link block to edit</div>;

    const handleChange = (key: string, value: any) => {
        updateBlock(block.id, { [key]: value });
    }

    return (
        <div className="space-y-4 p-4 border rounded-lg bg-card">
            <h3 className="font-semibold mb-4">Edit Link</h3>

            <div className="space-y-2">
                <Label>Label</Label>
                <Input
                    value={block.data.label}
                    onChange={(e) => handleChange('label', e.target.value)}
                />
            </div>

            <div className="space-y-2">
                <Label>URL</Label>
                <Input
                    value={block.data.url}
                    onChange={(e) => handleChange('url', e.target.value)}
                />
            </div>

            <div className="space-y-2">
                <Label>Style</Label>
                <Select value={block.data.style || 'default'} onValueChange={(v) => handleChange('style', v)}>
                    <SelectTrigger>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="default">Default</SelectItem>
                        <SelectItem value="outline">Outline</SelectItem>
                        <SelectItem value="solid">Solid</SelectItem>
                        <SelectItem value="glass">Glass (Premium)</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
                <Label>Icon</Label>
                <Select value={block.data.icon || ''} onValueChange={(v) => handleChange('icon', v)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select an icon" />
                    </SelectTrigger>
                    <SelectContent>
                        {Object.keys(IconMap).map((iconName) => (
                            <SelectItem key={iconName} value={iconName}>
                                <div className="flex items-center">
                                    <Icon name={iconName} className="mr-2 h-4 w-4" />
                                    {iconName}
                                </div>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}
