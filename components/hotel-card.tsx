"use client"

import { Star, MapPin, Heart, Wifi, Waves, Wind, UtensilsCrossed } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Hotel } from "@/data/hotels"

interface HotelCardProps {
  hotel: Hotel
  isFavorite?: boolean
  onFavoriteToggle?: (id: string) => void
}

export function HotelCard({ hotel, isFavorite = false, onFavoriteToggle }: HotelCardProps) {
  const amenityIcons: { [key: string]: any } = {
    "Wi-Fi": Wifi,
    Pool: Waves,
    "Air Conditioning": Wind,
    Restaurant: UtensilsCrossed,
  }

  const visibleAmenities = hotel.amenities.slice(0, 3)

  return (
    <div className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src={hotel.image || "/placeholder.svg"}
          alt={hotel.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={() => onFavoriteToggle?.(hotel.id)}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white shadow-md transition-colors"
          aria-label="Add to favorites"
        >
          <Heart size={20} className={isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">
        {/* Header */}
        <div>
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <Link href={`/hotel/${hotel.id}`}>
                <h3 className="font-bold text-gray-900 hover:text-blue-600 transition-colors line-clamp-2 text-sm">
                  {hotel.name}
                </h3>
              </Link>
              <div className="flex items-center gap-1 text-xs text-gray-600 mt-1">
                <MapPin size={14} />
                <span className="line-clamp-1">{hotel.location}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
              <Star size={16} className="fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold text-gray-900">{hotel.rating}</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-1">({hotel.reviewCount} reviews)</p>
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1">
          {Array.from({ length: hotel.stars }).map((_, i) => (
            <Star key={i} size={14} className="fill-blue-500 text-blue-500" />
          ))}
          <span className="text-xs text-gray-600 ml-1">{hotel.stars}-star</span>
        </div>

        {/* Amenities */}
        <div className="flex items-center gap-2 flex-wrap">
          {visibleAmenities.map((amenity) => {
            const Icon = amenityIcons[amenity]
            return (
              <div key={amenity} className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded text-xs text-gray-700">
                {Icon && <Icon size={12} />}
                <span>{amenity}</span>
              </div>
            )
          })}
          {hotel.amenities.length > 3 && (
            <span className="text-xs text-gray-600">+{hotel.amenities.length - 3} more</span>
          )}
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between gap-2 pt-2 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-600">from</p>
            <p className="text-lg font-bold text-gray-900">${hotel.price}</p>
          </div>
          <Link href={`/hotel/${hotel.id}`}>
            <Button variant="default" size="sm" className="bg-blue-600 hover:bg-blue-700">
              View Offers
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
