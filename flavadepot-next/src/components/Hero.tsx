import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-stone-950 py-24 sm:py-32">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-stone-800/40 via-stone-950 to-stone-950 -z-10" />

            <div className="container mx-auto px-4 flex flex-col items-center text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl max-w-3xl mb-6">
                    {siteConfig.heroHeadline}
                </h1>

                <p className="mt-4 text-lg text-stone-300 max-w-2xl mb-10">
                    {siteConfig.heroSubheadline}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/contact"
                        className="inline-flex h-12 items-center justify-center rounded-md px-8 text-base font-medium text-stone-950 transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-300 disabled:pointer-events-none disabled:opacity-50 bg-[var(--primary-color)]"
                    >
                        Visit Us Today
                    </Link>
                    <Link
                        href="/#services"
                        className="inline-flex h-12 items-center justify-center rounded-md border border-stone-700 bg-transparent px-8 text-base font-medium text-white transition-colors hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-300 disabled:pointer-events-none disabled:opacity-50"
                    >
                        Explore Options
                    </Link>
                </div>
            </div>
        </section>
    );
}
