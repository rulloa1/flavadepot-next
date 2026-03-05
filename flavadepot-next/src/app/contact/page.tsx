import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { GoogleMapEmbed } from "@/components/GoogleMapEmbed";
import { siteConfig } from "@/config/site";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with " + siteConfig.businessName + " for inquiries, inventory checks, and support.",
};

export const revalidate = 3600;

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="flex-1 w-full bg-stone-950">
                <div className="container mx-auto px-4 py-24">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-6">
                            Contact Us
                        </h1>
                        <p className="text-lg text-stone-300">
                            Have a question about our products or want to check inventory? We&apos;re here to help. Reach out to us using the form below or stop by our store.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-stone-900 border border-stone-800 p-8 rounded-2xl">
                            <h2 className="text-2xl font-semibold text-white mb-6">Send us a message</h2>
                            <ContactForm />
                        </div>

                        <div className="space-y-8">
                            <div className="bg-stone-900 border border-stone-800 p-8 rounded-2xl">
                                <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <MapPin className="w-6 h-6 text-stone-400 shrink-0" />
                                        <div>
                                            <p className="font-medium text-white">Address</p>
                                            <p className="text-stone-300">{siteConfig.address}</p>
                                            <p className="text-stone-300">{siteConfig.city}, {siteConfig.state} {siteConfig.zip}</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <Phone className="w-6 h-6 text-stone-400 shrink-0" />
                                        <div>
                                            <p className="font-medium text-white">Phone</p>
                                            <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="text-stone-300 hover:text-white transition-colors">
                                                {siteConfig.phone}
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <Mail className="w-6 h-6 text-stone-400 shrink-0" />
                                        <div>
                                            <p className="font-medium text-white">Email</p>
                                            <a href={`mailto:${siteConfig.email}`} className="text-stone-300 hover:text-white transition-colors">
                                                {siteConfig.email}
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <Clock className="w-6 h-6 text-stone-400 shrink-0" />
                                        <div>
                                            <p className="font-medium text-white">Hours</p>
                                            <div className="text-stone-300 space-y-1">
                                                <div className="flex justify-between"><span className="w-24">Mon-Thu:</span><span>{siteConfig.hours.monday}</span></div>
                                                <div className="flex justify-between"><span className="w-24">Fri-Sat:</span><span>{siteConfig.hours.friday}</span></div>
                                                <div className="flex justify-between"><span className="w-24">Sunday:</span><span>{siteConfig.hours.sunday}</span></div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <GoogleMapEmbed />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
