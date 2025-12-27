import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/Icon";

export default function PricingPage() {
    return (
        <div className="container mx-auto px-4 py-24">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h1>
                <p className="text-xl text-muted-foreground">Choose the plan that fits your needs.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Free Tier */}
                <PricingCard
                    title="Starter"
                    price="$0"
                    description="Perfect for getting started."
                    features={[
                        "Unlimited Links",
                        "Basic Analytics",
                        "Standard Themes",
                        "VoidLinks Logo"
                    ]}
                    cta="Start for Free"
                />

                {/* Pro Tier */}
                <PricingCard
                    title="Creator"
                    price="$9"
                    period="/mo"
                    description="For serious creators growing their brand."
                    features={[
                        "Everything in Starter",
                        "Remove VoidLinks Logo",
                        "Custom Backgrounds",
                        "Priority Support",
                        "Advanced Analytics"
                    ]}
                    cta="Get Creator"
                    highlighted
                />

                {/* Business Tier */}
                <PricingCard
                    title="Agency"
                    price="$29"
                    period="/mo"
                    description="Manage multiple accounts and brands."
                    features={[
                        "Everything in Creator",
                        "Up to 5 Profiles",
                        "Team Collaboration",
                        "API Access",
                        "Dedicated Manager"
                    ]}
                    cta="Contact Sales"
                />
            </div>
        </div>
    );
}

function PricingCard({ title, price, period, description, features, cta, highlighted = false }: any) {
    return (
        <div className={`relative p-8 rounded-3xl border flex flex-col ${highlighted ? 'border-indigo-500/50 bg-indigo-500/5' : 'border-white/10 bg-white/5'}`}>
            {highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-indigo-500 hover:bg-indigo-600">Most Popular</Badge>
                </div>
            )}

            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{price}</span>
                    {period && <span className="text-muted-foreground">{period}</span>}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{description}</p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
                {features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                        <Icon name="Check" className="h-4 w-4 text-green-500 shrink-0" /> {/* Fix: Check icon might not be mapped in Icon.tsx, will need fallback */}
                        {feature}
                    </li>
                ))}
            </ul>

            <Button className={`w-full ${highlighted ? 'bg-indigo-600 hover:bg-indigo-700' : ''}`} variant={highlighted ? 'default' : 'outline'}>
                {cta}
            </Button>
        </div>
    )
}
