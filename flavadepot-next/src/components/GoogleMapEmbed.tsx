import { siteConfig } from "@/config/site";

export function GoogleMapEmbed() {
    return (
        <div className="w-full aspect-video rounded-xl overflow-hidden border border-stone-800 bg-stone-900">
            <iframe
                src={siteConfig.googleMapsEmbed}
                width="100%"
                height="100%"
                className="border-0"
                title={`${siteConfig.businessName} map location`}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
}
