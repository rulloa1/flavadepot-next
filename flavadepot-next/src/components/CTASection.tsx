import Link from "next/link";
import { siteConfig } from "@/config/site";

export function CTASection() {
    return (
        <section className="py-24 bg-stone-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-950 to-stone-950 -z-10" />

            <div className="container mx-auto px-4 text-center max-w-4xl">
                <h2 className="text-3xl sm:text-4xl hover:text-white font-bold tracking-tight text-white mb-6">
                    Ready to Elevate Your Experience?
                </h2>
                <p className="text-lg text-stone-300 mb-10">
                    Visit {siteConfig.businessName} today or contact us for inventory inquiries.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/contact"
                        className="inline-flex h-12 items-center justify-center rounded-md px-8 text-base font-medium text-stone-950 transition-colors hover:opacity-90 bg-[var(--primary-color)]"
                    >
                        Contact Us
                    </Link>
                    <a
                        href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
                        className="inline-flex h-12 items-center justify-center rounded-md border border-stone-700 bg-transparent px-8 text-base font-medium text-white transition-colors hover:bg-stone-800"
                    >
                        Call {siteConfig.phone}
                    </a>
                </div>
            </div>
        </section>
    );
}
