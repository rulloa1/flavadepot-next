import { Star } from "lucide-react";

export function ReviewsSection() {
    const reviews = [
        {
            id: 1,
            author: "Sarah M.",
            rating: 5,
            content: "Best selection in town! The staff is super knowledgeable and helped me find exactly what I was looking for. Will definitely be coming back.",
            date: "2 weeks ago"
        },
        {
            id: 2,
            author: "James T.",
            rating: 5,
            content: "Clean, professional, and great prices. They carry all the premium brands I like and the atmosphere is very welcoming.",
            date: "1 month ago"
        },
        {
            id: 3,
            author: "Elena R.",
            rating: 5,
            content: "Amazing customer service! The glass pieces are beautiful and high quality. Highly recommend checking them out.",
            date: "2 months ago"
        }
    ];

    return (
        <section className="py-24 bg-stone-900 border-t border-stone-800">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
                        What Our Customers Say
                    </h2>
                    <p className="text-stone-400">
                        Don&apos;t just take our word for it. Here are some recent reviews from our amazing customers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div key={review.id} className="p-8 rounded-2xl bg-stone-950 border border-stone-800">
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                                ))}
                            </div>
                            <p className="text-stone-300 mb-6 flex-grow">&quot;{review.content}&quot;</p>
                            <div className="flex items-center justify-between">
                                <p className="font-semibold text-white">{review.author}</p>
                                <p className="text-sm text-stone-500">{review.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
