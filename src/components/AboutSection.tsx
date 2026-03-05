import { siteConfig } from "@/config/site";

export function AboutSection() {
    return (
        <section id="about" className="py-24 bg-stone-950">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
                        About {siteConfig.businessName}
                    </h2>
                    <div className="space-y-4 text-stone-300 text-lg">
                        <p>
                            Welcome to {siteConfig.businessName}, {siteConfig.city}&apos;s premier smoke shop destination. We&apos;ve built our reputation on providing exceptional customer service and an unparalleled selection of premium products.
                        </p>
                        <p>
                            Our knowledgeable staff is passionate about helping you find exactly what you need, whether you&apos;re a seasoned connoisseur or completely new to the scene. We believe in providing a welcoming, educational environment for all our guests.
                        </p>
                    </div>
                    <div className="mt-8">
                        <a
                            href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
                            className="inline-flex h-12 items-center justify-center rounded-md px-8 text-base font-medium text-stone-950 transition-colors hover:opacity-90 bg-[var(--primary-color)]"
                        >
                            Contact Us Today
                        </a>
                    </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden aspect-square lg:aspect-[4/3] bg-stone-900 border border-stone-800 flex items-center justify-center">
                    <div className="text-stone-600 font-medium">Add Image Here</div>
                </div>
            </div>
        </section>
    );
}
