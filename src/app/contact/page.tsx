import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ContactForm } from '@/components/ContactForm'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Contact setup required',
  description: `Contact details for ${siteConfig.businessName} are awaiting verification.`,
  robots: {
    index: false,
    follow: false,
  },
}

export const revalidate = 3600

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full bg-stone-950">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-6">
              Contact Setup Required
            </h1>
            <p className="text-lg text-stone-300">
              This Flava Depot prototype is not connected to a verified business inbox, phone line,
              address, or map listing yet.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <section className="bg-stone-900 border border-stone-800 p-8 rounded-2xl">
              <h2 className="text-2xl font-semibold text-white mb-6">Online inquiry status</h2>
              <ContactForm />
            </section>

            <section className="bg-stone-900 border border-stone-800 p-8 rounded-2xl">
              <h2 className="text-2xl font-semibold text-white mb-4">Before public launch</h2>
              <p className="text-stone-300 leading-7">
                Add the verified business address, operating hours, phone number, support email,
                official social profiles, map listing, and a secure contact-delivery service before
                publishing this page as a live storefront.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
