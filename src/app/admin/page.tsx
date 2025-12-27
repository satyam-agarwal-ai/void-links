import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/Icon";
import Link from "next/link";

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                <div className="flex items-center space-x-2">
                    <Link href="/demo" target="_blank">
                        <Button variant="outline" className="hidden md:flex">
                            <Icon name="Globe" className="mr-2 h-4 w-4" />
                            View live page
                        </Button>
                    </Link>
                    <Button>
                        <Icon name="Link" className="mr-2 h-4 w-4" />
                        Copy Link
                    </Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatsCard title="Total Views" value="45.2K" change="+20.1%" icon="BarChart" />
                <StatsCard title="Total Clicks" value="12.5K" change="+15.2%" icon="Zap" />
                <StatsCard title="CTR" value="27.6%" change="+2.4%" icon="BarChart" />
                <StatsCard title="Active Blocks" value="8" change="0" icon="Link" />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 bg-white/5 border-white/10">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>
                            You made 265 views today.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {/* Placeholder for a chart */}
                        <div className="h-[200px] flex items-center justify-center text-muted-foreground border-2 border-dashed border-white/10 rounded-xl">
                            Chart Area
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-3 bg-white/5 border-white/10">
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                        <CardDescription>
                            Manage your page
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Link href="/admin/blocks">
                            <Button variant="secondary" className="w-full justify-between h-12 mb-2">
                                <span>Manage Links</span>
                                <Icon name="Link" className="h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/admin/appearance">
                            <Button variant="secondary" className="w-full justify-between h-12 mb-2">
                                <span>Customize Theme</span>
                                <Icon name="Palette" className="h-4 w-4" />
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

function StatsCard({ title, value, change, icon }: any) {
    return (
        <Card className="bg-white/5 border-white/10">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <Icon name={icon} className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                <p className="text-xs text-muted-foreground">{change} from last month</p>
            </CardContent>
        </Card>
    )
}
