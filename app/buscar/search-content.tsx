"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { SearchBar } from "@/components/search-bar"
import { HotelCard } from "@/components/hotel-card"
import { HotelFilters } from "@/components/hotel-filters"
import { SortBar } from "@/components/sort-bar"
import { MOCK_HOTELS } from "@/data/hotels"
import { SkeletonLoader } from "@/components/skeleton-loader"

interface FilterState {
  priceRange: number[]
  selectedStars: number[]
  minRating: number
  selectedAmenities: string[]
  selectedTypes: string[]
}

export function SearchContent() {
  const searchParams = useSearchParams()
  const destination = searchParams.get("destination") || ""

  const [favorites, setFavorites] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<string>("popular")
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 500],
    selectedStars: [],
    minRating: 0,
    selectedAmenities: [],
    selectedTypes: [],
  })
  const [isLoading, setIsLoading] = useState(false)

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const filteredHotels = useMemo(() => {
    const results = MOCK_HOTELS.filter((hotel) => {
      if (hotel.price < filters.priceRange[0] || hotel.price > filters.priceRange[1]) {
        return false
      }

      if (filters.selectedStars.length > 0 && !filters.selectedStars.includes(hotel.stars)) {
        return false
      }

      if (hotel.rating < filters.minRating) {
        return false
      }

      if (
        filters.selectedAmenities.length > 0 &&
        !filters.selectedAmenities.every((amenity) => hotel.amenities.includes(amenity))
      ) {
        return false
      }

      if (filters.selectedTypes.length > 0 && !filters.selectedTypes.includes(hotel.accommodationType)) {
        return false
      }

      if (destination && !hotel.location.toLowerCase().includes(destination.toLowerCase())) {
        return false
      }

      return true
    })

    switch (sortBy) {
      case "price-asc":
        results.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        results.sort((a, b) => b.price - a.price)
        break
      case "rating":
        results.sort((a, b) => b.rating - a.rating)
        break
      case "popular":
      default:
        results.sort((a, b) => b.reviewCount - a.reviewCount)
        break
    }

    return results
  }, [filters, sortBy, destination])

  const handleSearch = (data: any) => {
    setIsLoading(true)
    setTimeout(() => {
      window.location.href = `/buscar?destination=${encodeURIComponent(data.destination)}`
    }, 300)
  }

  return (
    <>
      {/* Search Bar Section */}
      <div className="pt-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <SearchBar onSearch={handleSearch} compact />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            {destination ? `Hotels in ${destination}` : "Search Results"}
          </h1>
          <p className="text-gray-600 mt-2">
            {filteredHotels.length} {filteredHotels.length === 1 ? "hotel" : "hotels"} found
          </p>
        </div>

        {/* Sort Bar */}
        <div className="mb-6">
          <SortBar onSortChange={setSortBy} resultCount={filteredHotels.length} />
        </div>

        {/* Filters and Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <HotelFilters onFiltersChange={setFilters} />
          </div>

          {/* Results Grid */}
          <div className="lg:col-span-3">
            {isLoading ? (
              <SkeletonLoader />
            ) : filteredHotels.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredHotels.map((hotel) => (
                  <HotelCard
                    key={hotel.id}
                    hotel={hotel}
                    isFavorite={favorites.includes(hotel.id)}
                    onFavoriteToggle={toggleFavorite}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                <p className="text-gray-600 text-lg">No hotels found matching your criteria.</p>
                <p className="text-gray-500 mt-2">Try adjusting your filters or search for a different destination.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
