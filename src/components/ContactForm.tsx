"use client";

import { siteConfig } from "@/config/site";

export function ContactForm() {
    return (
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-stone-300">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full bg-stone-950 border border-stone-800 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-colors"
                        placeholder="John Doe"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-stone-300">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full bg-stone-950 border border-stone-800 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-colors"
                        placeholder="john@example.com"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-stone-300">
                    Message
                </label>
                <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-stone-950 border border-stone-800 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-colors resize-none"
                    placeholder="How can we help you?"
                />
            </div>

            <button
                type="submit"
                className="w-full h-12 rounded-md font-medium text-stone-950 transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 bg-[var(--primary-color)] focus-visible:ring-[var(--primary-color)]"
            >
                Send Message
            </button>
        </form>
    );
}
