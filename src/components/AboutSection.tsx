import Link from 'next/link'
import { siteConfig } from '@/config/site'

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
              This is an early storefront design concept for {siteConfig.businessName}. Its business
              story, verified service area, inventory policies, and customer-support details are
              still being prepared for launch.
            </p>
            <p>
              Public contact details and a live inquiry flow will be added only after they are
              verified and connected to the business operations team.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md px-8 text-base font-medium text-stone-950 transition-colors hover:opacity-90 bg-[var(--primary-color)]"
            >
              View launch checklist
            </Link>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden aspect-square lg:aspect-[4/3] bg-stone-900 border border-stone-800 flex items-center justify-center p-8 text-center">
          <p className="text-stone-500 font-medium">
            Authorized storefront imagery will be added after the business profile is verified.
          </p>
        </div>
      </div>
    </section>
  )
}
