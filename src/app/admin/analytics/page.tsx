import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/Icon";

export default function AnalyticsPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatsCard title="Total Views" value="45.2K" change="+20.1%" icon="BarChart" />
                <StatsCard title="Unique Visitors" value="32.1K" change="+12.5%" icon="Users" /> {/* Users icon needs mapping if used */}
                <StatsCard title="CTR" value="27.6%" change="+2.4%" icon="BarChart" />
                <StatsCard title="Avg. Time" value="45s" change="-5%" icon="Clock" /> {/* Clock icon needs mapping */}
            </div>

            <Card className="bg-white/5 border-white/10">
                <CardHeader>
                    <CardTitle>Coming Soon</CardTitle>
                    <CardDescription>
                        Detailed analytics charts will be available in the next update.
                    </CardDescription>
                </CardHeader>
                <CardContent className="h-[400px] flex items-center justify-center border-2 border-dashed border-white/10 rounded-xl mx-6 mb-6">
                    <div className="text-center text-muted-foreground">
                        <Icon name="BarChart" className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>Advanced data visualization engine under construction.</p>
                    </div>
                </CardContent>
            </Card>
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
                <p className={`text-xs ${change?.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{change} from last month</p>
            </CardContent>
        </Card>
    )
}
