import { businesses } from "@/data/businesses"
import { notFound } from "next/navigation"

type Props = {
  params: {
    city: string
    slug: string
  }
}

export async function generateStaticParams() {
  return businesses.map((b) => ({
    city: b.city,
    slug: b.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const business = businesses.find(
    (b) => b.city === params.city && b.slug === params.slug
  )

  if (!business) return {}

  return {
    title: `${business.title} | Smoke Shop in ${business.city}`,
    description: `${business.title} is rated ${business.totalScore} stars from ${business.reviewsCount} reviews in ${business.city}. Visit today.`,
  }
}

export default function BusinessPage({ params }: Props) {
  const business = businesses.find(
    (b) => b.city === params.city && b.slug === params.slug
  )

  if (!business) return notFound()

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl font-bold">
        {business.title}
      </h1>

      <p className="mt-4">
        ⭐ {business.totalScore} ({business.reviewsCount} reviews)
      </p>

      <p className="mt-2">
        {business.street}, {business.city}, {business.state}
      </p>

      <p className="mt-2">
        📞 {business.phone}
      </p>
    </div>
  )
}