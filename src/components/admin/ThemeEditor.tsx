"use client";

import { useBuilder } from "@/lib/builder-context";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ThemeEditor() {
    const { profile, updateProfile } = useBuilder();
    const { theme } = profile;

    const updateTheme = (key: string, value: any) => {
        updateProfile({ theme: { ...theme, [key]: value } });
    }

    return (
        <div className="space-y-8 p-6">
            <div>
                <h3 className="text-lg font-medium mb-4">Background</h3>
                <RadioGroup
                    value={theme.backgroundType}
                    onValueChange={(v) => updateTheme('backgroundType', v)}
                    className="grid grid-cols-3 gap-4"
                >
                    <div className="cursor-pointer">
                        <RadioGroupItem value="solid" id="bg-solid" className="peer sr-only" />
                        <Label
                            htmlFor="bg-solid"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                            <div className="h-20 w-full rounded-md bg-zinc-900 mb-2" />
                            Flat Color
                        </Label>
                    </div>
                    <div>
                        <RadioGroupItem value="gradient" id="bg-gradient" className="peer sr-only" />
                        <Label
                            htmlFor="bg-gradient"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                            <div className="h-20 w-full rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 mb-2" />
                            Gradient
                        </Label>
                    </div>
                    <div>
                        <RadioGroupItem value="image" id="bg-image" className="peer sr-only" />
                        <Label
                            htmlFor="bg-image"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                            <div className="h-20 w-full rounded-md bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&h=100&fit=crop')] bg-cover mb-2" />
                            Image
                        </Label>
                    </div>
                </RadioGroup>

                {theme.backgroundType === 'image' && (
                    <div className="mt-4">
                        <Label>Image URL</Label>
                        <Input
                            className="mt-2"
                            value={theme.backgroundImage || ''}
                            onChange={(e) => updateTheme('backgroundImage', e.target.value)}
                            placeholder="https://..."
                        />
                        <p className="text-xs text-muted-foreground mt-1">Paste an Unsplash URL for now.</p>
                    </div>
                )}
            </div>

            <div>
                <h3 className="text-lg font-medium mb-4">Buttons</h3>
                <RadioGroup
                    value={theme.buttonStyle}
                    onValueChange={(v) => updateTheme('buttonStyle', v)}
                    className="grid grid-cols-3 gap-4"
                >
                    <div>
                        <RadioGroupItem value="rounded" id="btn-rounded" className="peer sr-only" />
                        <Label htmlFor="btn-rounded" className="flex items-center justify-center p-4 border rounded-md peer-data-[state=checked]:border-primary cursor-pointer">
                            <div className="h-8 w-20 bg-primary rounded-lg" />
                        </Label>
                        <div className="text-center text-sm mt-1">Rounded</div>
                    </div>
                    <div>
                        <RadioGroupItem value="square" id="btn-square" className="peer sr-only" />
                        <Label htmlFor="btn-square" className="flex items-center justify-center p-4 border rounded-md peer-data-[state=checked]:border-primary cursor-pointer">
                            <div className="h-8 w-20 bg-primary rounded-none" />
                        </Label>
                        <div className="text-center text-sm mt-1">Square</div>
                    </div>
                    <div>
                        <RadioGroupItem value="pill" id="btn-pill" className="peer sr-only" />
                        <Label htmlFor="btn-pill" className="flex items-center justify-center p-4 border rounded-md peer-data-[state=checked]:border-primary cursor-pointer">
                            <div className="h-8 w-20 bg-primary rounded-full" />
                        </Label>
                        <div className="text-center text-sm mt-1">Pill</div>
                    </div>
                </RadioGroup>
            </div>

            {/* Font selection could go here */}
        </div>
    )
}
