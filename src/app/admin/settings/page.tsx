import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Account Settings</h3>
                <p className="text-sm text-muted-foreground">
                    Manage your account settings and preferences.
                </p>
            </div>
            <Separator />

            <div className="space-y-4 max-w-xl">
                <div className="space-y-2">
                    <Label>Display Name</Label>
                    <Input defaultValue="Sarah Creator" />
                </div>
                <div className="space-y-2">
                    <Label>Email</Label>
                    <Input defaultValue="hello@example.com" />
                </div>
                <div className="space-y-2">
                    <Label>Username</Label>
                    <div className="flex gap-2">
                        <span className="flex items-center px-3 border rounded-md bg-muted text-muted-foreground">voidlinks.com/</span>
                        <Input defaultValue="demo" />
                    </div>
                </div>
                <Button>Save Changes</Button>
            </div>
        </div>
    );
}
