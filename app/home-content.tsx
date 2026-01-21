"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { SearchBar } from "@/components/search-bar"
import { HotelCard } from "@/components/hotel-card"
import { MOCK_HOTELS } from "@/data/hotels"
import { Star, Award, TrendingUp, Zap } from "lucide-react"

export function HomeContent() {
  const router = useRouter()
  const [favorites, setFavorites] = useState<string[]>([])

  const handleSearch = (data: any) => {
    router.push(`/buscar?destination=${encodeURIComponent(data.destination)}`)
  }

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const popularHotels = MOCK_HOTELS.slice(0, 6)

  return (
    <>
      {/* Hero Section */}
      <div className="pt-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Find Your Perfect Hotel</h1>
            <p className="text-xl text-gray-600">
              Compare prices across thousands of properties and book with confidence
            </p>
          </div>

          {/* Search Bar */}
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      {/* Platform Benefits */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why book with HotelFinder?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-blue-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Best Price Guarantee</h3>
              <p className="text-gray-600">
                Find the lowest prices and compare offers from multiple booking platforms instantly.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-blue-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Trusted & Secure</h3>
              <p className="text-gray-600">
                Book with confidence through verified and trusted accommodation partners worldwide.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-blue-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Instant Confirmation</h3>
              <p className="text-gray-600">
                Get instant booking confirmation and 24/7 customer support for peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Hotels */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Hotels</h2>
          <p className="text-gray-600 mb-8">Discover our most booked properties from travelers worldwide</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularHotels.map((hotel) => (
              <HotelCard
                key={hotel.id}
                hotel={hotel}
                isFavorite={favorites.includes(hotel.id)}
                onFavoriteToggle={toggleFavorite}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "New York, USA",
                rating: 5,
                text: "HotelFinder helped me save $200 on my vacation! The comparison feature is amazing.",
              },
              {
                name: "Marco Rossi",
                location: "Rome, Italy",
                rating: 5,
                text: "Great interface and instant confirmation. I booked my entire trip in minutes.",
              },
              {
                name: "Li Chen",
                location: "Beijing, China",
                rating: 5,
                text: "The best prices I found anywhere. Customer support was super helpful!",
              },
            ].map((review, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{review.text}"</p>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-600">{review.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partner Logos */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-12">
            We partner with leading booking platforms
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {["Booking.com", "Expedia", "Hotels.com", "Agoda", "Kayak", "Trivago"].map((partner) => (
              <div
                key={partner}
                className="px-6 py-3 bg-white rounded-lg border border-gray-200 font-semibold text-gray-700"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
