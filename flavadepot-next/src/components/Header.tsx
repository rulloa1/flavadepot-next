import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-stone-800 bg-stone-950/80 backdrop-blur">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="font-bold text-xl tracking-tight text-white hover:opacity-80 transition-opacity">
                    {siteConfig.businessName}
                </Link>

                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/#services" className="text-sm font-medium text-stone-300 hover:text-white transition-colors">
                        Services
                    </Link>
                    <Link href="/#about" className="text-sm font-medium text-stone-300 hover:text-white transition-colors">
                        About
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-stone-300 hover:text-white transition-colors">
                        Contact
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <a
                        href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
                        className="hidden sm:inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-stone-950 transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stone-300 disabled:pointer-events-none disabled:opacity-50 bg-[var(--primary-color)]"
                    >
                        Call Us
                    </a>
                </div>
            </div>
        </header>
    );
}
