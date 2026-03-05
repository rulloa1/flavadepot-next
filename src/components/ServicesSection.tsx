import { siteConfig } from "@/config/site";
import { GlassWater, Cigarette, Sparkles, Leaf } from "lucide-react";

export function ServicesSection() {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "glass": return <GlassWater className="w-8 h-8 text-stone-300" />;
            case "vape": return <Cigarette className="w-8 h-8 text-stone-300" />;
            case "cbd": return <Leaf className="w-8 h-8 text-stone-300" />;
            case "accessories": return <Sparkles className="w-8 h-8 text-stone-300" />;
            default: return <Sparkles className="w-8 h-8 text-stone-300" />;
        }
    };

    return (
        <section id="services" className="py-24 bg-stone-900 border-t border-stone-800">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                        Our Premium Selection
                    </h2>
                    <p className="text-lg text-stone-400">
                        We curate only the highest quality products for our customers.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {siteConfig.services.map((service, idx) => (
                        <div
                            key={idx}
                            className="relative p-8 rounded-2xl border border-stone-800 bg-stone-950/50 hover:bg-stone-950 transition-colors"
                        >
                            <div
                                className="mb-4 inline-flex items-center justify-center p-3 rounded-lg bg-stone-900"
                            >
                                {getIcon(service.icon)}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {service.title}
                            </h3>
                            <p className="text-stone-400">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
