"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HotelCard } from "@/components/hotel-card"
import { MOCK_HOTELS } from "@/data/hotels"
import { useFavorites } from "@/hooks/use-favorites"
import { Heart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FavoritesPage() {
  const { favorites, toggleFavorite, isLoaded } = useFavorites()

  // Get favorite hotels
  const favoriteHotels = MOCK_HOTELS.filter((hotel) => favorites.includes(hotel.id))

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg h-64 animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-20">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Heart size={24} className="text-red-500 fill-red-500" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900">My Favorites</h1>
            </div>
            <p className="text-gray-600">
              {favoriteHotels.length} {favoriteHotels.length === 1 ? "hotel" : "hotels"} saved
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {favoriteHotels.length > 0 ? (
            <>
              <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-900 text-sm">
                  Your favorite hotels are saved locally on this device. Create an account to sync them across all your
                  devices.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteHotels.map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} isFavorite={true} onFavoriteToggle={toggleFavorite} />
                ))}
              </div>
            </>
          ) : (
            <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <Heart size={32} className="text-gray-400" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">No favorites yet</h2>
              <p className="text-gray-600 mb-8">
                Start adding hotels to your favorites to compare prices and features later.
              </p>
              <Link href="/">
                <Button className="bg-blue-600 hover:bg-blue-700">Browse Hotels</Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
