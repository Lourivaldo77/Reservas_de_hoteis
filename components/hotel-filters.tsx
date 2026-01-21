"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { AMENITIES, ACCOMMODATION_TYPES } from "@/data/hotels"

interface FiltersProps {
  onFiltersChange: (filters: any) => void
}

export function HotelFilters({ onFiltersChange }: FiltersProps) {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [selectedStars, setSelectedStars] = useState<number[]>([])
  const [minRating, setMinRating] = useState(0)
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value)
    emitFilters()
  }

  const handleStarChange = (star: number) => {
    const newStars = selectedStars.includes(star) ? selectedStars.filter((s) => s !== star) : [...selectedStars, star]
    setSelectedStars(newStars)
    emitFilters()
  }

  const handleAmenityChange = (amenity: string) => {
    const newAmenities = selectedAmenities.includes(amenity)
      ? selectedAmenities.filter((a) => a !== amenity)
      : [...selectedAmenities, amenity]
    setSelectedAmenities(newAmenities)
    emitFilters()
  }

  const handleTypeChange = (type: string) => {
    const newTypes = selectedTypes.includes(type) ? selectedTypes.filter((t) => t !== type) : [...selectedTypes, type]
    setSelectedTypes(newTypes)
    emitFilters()
  }

  const emitFilters = () => {
    onFiltersChange({
      priceRange,
      selectedStars,
      minRating,
      selectedAmenities,
      selectedTypes,
    })
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 space-y-6 sticky top-24">
      {/* Price Filter */}
      <div>
        <h3 className="font-bold text-gray-900 text-sm mb-3">Price per night</h3>
        <Slider value={priceRange} onValueChange={handlePriceChange} min={0} max={500} step={10} className="mb-2" />
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Star Rating */}
      <div>
        <h3 className="font-bold text-gray-900 text-sm mb-3">Star Rating</h3>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center gap-2">
              <Checkbox
                id={`star-${star}`}
                checked={selectedStars.includes(star)}
                onCheckedChange={() => handleStarChange(star)}
              />
              <Label htmlFor={`star-${star}`} className="text-sm font-normal cursor-pointer">
                {star} Star{star !== 1 ? "s" : ""}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Guest Rating */}
      <div>
        <h3 className="font-bold text-gray-900 text-sm mb-3">Guest Rating</h3>
        <div className="space-y-2">
          {[
            { label: "4.5+", value: 4.5 },
            { label: "4.0+", value: 4.0 },
            { label: "3.5+", value: 3.5 },
            { label: "Any", value: 0 },
          ].map(({ label, value }) => (
            <div key={value} className="flex items-center gap-2">
              <Checkbox
                id={`rating-${value}`}
                checked={minRating === value}
                onCheckedChange={() => setMinRating(value)}
              />
              <Label htmlFor={`rating-${value}`} className="text-sm font-normal cursor-pointer">
                {label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div>
        <h3 className="font-bold text-gray-900 text-sm mb-3">Amenities</h3>
        <div className="space-y-2">
          {AMENITIES.map((amenity) => (
            <div key={amenity} className="flex items-center gap-2">
              <Checkbox
                id={amenity}
                checked={selectedAmenities.includes(amenity)}
                onCheckedChange={() => handleAmenityChange(amenity)}
              />
              <Label htmlFor={amenity} className="text-sm font-normal cursor-pointer">
                {amenity}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Accommodation Type */}
      <div>
        <h3 className="font-bold text-gray-900 text-sm mb-3">Type</h3>
        <div className="space-y-2">
          {ACCOMMODATION_TYPES.map((type) => (
            <div key={type} className="flex items-center gap-2">
              <Checkbox
                id={type}
                checked={selectedTypes.includes(type)}
                onCheckedChange={() => handleTypeChange(type)}
              />
              <Label htmlFor={type} className="text-sm font-normal cursor-pointer">
                {type}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      <Button
        variant="outline"
        className="w-full bg-transparent"
        onClick={() => {
          setPriceRange([0, 500])
          setSelectedStars([])
          setMinRating(0)
          setSelectedAmenities([])
          setSelectedTypes([])
          onFiltersChange({
            priceRange: [0, 500],
            selectedStars: [],
            minRating: 0,
            selectedAmenities: [],
            selectedTypes: [],
          })
        }}
      >
        Reset Filters
      </Button>
    </div>
  )
}
