"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MOCK_HOTELS } from "@/data/hotels"
import { Star, Heart, MapPin, Wifi, Waves, Wind, UtensilsCrossed, ArrowLeft, ExternalLink, Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HotelDetailPage() {
  const params = useParams()
  const router = useRouter()
  const hotelId = params.id as string

  const hotel = MOCK_HOTELS.find((h) => h.id === hotelId)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  if (!hotel) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Hotel Not Found</h1>
          <p className="text-gray-600 mb-8">The hotel you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/">
            <Button className="bg-blue-600 hover:bg-blue-700">Back to Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const amenityIcons: { [key: string]: any } = {
    "Wi-Fi": Wifi,
    Pool: Waves,
    "Air Conditioning": Wind,
    Restaurant: UtensilsCrossed,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-20">
        {/* Gallery Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
            >
              <ArrowLeft size={20} />
              Back
            </button>

            {/* Main Image */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
              <div className="lg:col-span-2">
                <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={hotel.images[selectedImage] || "/placeholder.svg"}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="absolute top-4 right-4 p-3 rounded-full bg-white/90 hover:bg-white shadow-md transition-colors"
                    aria-label="Add to favorites"
                  >
                    <Heart size={24} className={isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"} />
                  </button>
                </div>

                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-4 gap-2 mt-4">
                  {hotel.images.map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`h-24 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === idx ? "border-blue-600" : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`View ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Info Card */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 h-fit sticky top-24">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{hotel.name}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: hotel.stars }).map((_, i) => (
                      <Star key={i} size={18} className="fill-blue-500 text-blue-500" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({hotel.stars}-star)</span>
                </div>

                <div className="flex items-start gap-2 mb-4">
                  <MapPin size={18} className="text-gray-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-900 font-medium">{hotel.location}</p>
                    <p className="text-sm text-gray-600">{hotel.description}</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-gray-900">${hotel.price}</span>
                    <span className="text-gray-600">per night</span>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2 text-blue-900">
                      <Star size={18} className="fill-yellow-400 text-yellow-400" />
                      <div>
                        <p className="font-semibold">{hotel.rating}</p>
                        <p className="text-xs">{hotel.reviewCount} reviews</p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg mb-2">
                    View All Offers
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About this hotel</h2>
                <p className="text-gray-700 leading-relaxed">{hotel.description}</p>
              </div>

              {/* Amenities */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {hotel.amenities.map((amenity) => {
                    const Icon = amenityIcons[amenity]
                    return (
                      <div key={amenity} className="flex items-center gap-3">
                        {Icon && <Icon size={20} className="text-blue-600" />}
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Reviews Section */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Guest Reviews</h2>
                <div className="space-y-4">
                  {[
                    {
                      name: "Michael S.",
                      rating: 5,
                      title: "Excellent stay!",
                      text: "Amazing hotel with great service and beautiful rooms. Highly recommended!",
                    },
                    {
                      name: "Lisa M.",
                      rating: 4,
                      title: "Very good",
                      text: "Clean, comfortable, and well-located. Would stay again.",
                    },
                    {
                      name: "John D.",
                      rating: 5,
                      title: "Perfect!",
                      text: "Everything was perfect. The staff went above and beyond to make our stay memorable.",
                    },
                  ].map((review, i) => (
                    <div key={i} className="border-b border-gray-200 pb-4 last:border-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-semibold text-gray-900">{review.name}</p>
                          <p className="text-sm text-gray-600">{review.title}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: review.rating }).map((_, j) => (
                            <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm">{review.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Offers Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Best Offers</h2>
                <div className="space-y-3">
                  {hotel.offers.map((offer, idx) => (
                    <div
                      key={idx}
                      className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:bg-blue-50 transition-all"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <p className="font-semibold text-gray-900">{offer.platform}</p>
                        <p className="text-2xl font-bold text-blue-600">${offer.price}</p>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="sm">
                        <ExternalLink size={16} className="mr-2" />
                        View Offer
                      </Button>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Why book here?</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Best price guarantee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Free cancellation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Instant confirmation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>24/7 support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
