import Link from 'next/link'
import { siteConfig } from '@/config/site'

export function Footer() {
  const socialLinks = Object.entries(siteConfig.socialLinks).filter(([, url]) => Boolean(url))

  return (
    <footer className="border-t border-stone-800 bg-stone-950 text-stone-400 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">{siteConfig.businessName}</h3>
          <p className="mb-4 max-w-xs">{siteConfig.heroSubheadline}</p>
          {socialLinks.length > 0 && (
            <div className="flex gap-4">
              {socialLinks.map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors capitalize"
                >
                  {platform}
                </a>
              ))}
            </div>
          )}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/#services" className="hover:text-white transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact setup
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Launch status</h3>
          <p className="max-w-xs leading-6">
            Business contact details, location, hours, and official social profiles are awaiting
            verification before public launch.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-stone-800 text-sm flex flex-col items-center">
        <p>&copy; {new Date().getFullYear()} {siteConfig.businessName}. Prototype site.</p>
      </div>
    </footer>
  )
}
