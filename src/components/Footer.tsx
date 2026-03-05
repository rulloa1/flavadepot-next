import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
    return (
        <footer className="border-t border-stone-800 bg-stone-950 text-stone-400 py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">{siteConfig.businessName}</h3>
                    <p className="mb-4 max-w-xs">{siteConfig.heroSubheadline}</p>
                    <div className="flex gap-4">
                        {Object.entries(siteConfig.socialLinks).map(([platform, url]) => (
                            url && (
                                <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors capitalize">
                                    {platform}
                                </a>
                            )
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
                        </li>
                        <li>
                            <Link href="/#about" className="hover:text-white transition-colors">About Us</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Hours & Location</h3>
                    <p className="mb-2">{siteConfig.address}, {siteConfig.city}, {siteConfig.state} {siteConfig.zip}</p>
                    <p className="mb-4">
                        <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white transition-colors">
                            {siteConfig.phone}
                        </a>
                    </p>
                    <ul className="space-y-1 text-sm">
                        <li><span className="inline-block w-24">Mon - Thu:</span> {siteConfig.hours.monday}</li>
                        <li><span className="inline-block w-24">Fri - Sat:</span> {siteConfig.hours.friday}</li>
                        <li><span className="inline-block w-24">Sunday:</span> {siteConfig.hours.sunday}</li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-stone-800 text-sm flex flex-col items-center">
                <p>&copy; {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.</p>
            </div>
        </footer>
    );
}
