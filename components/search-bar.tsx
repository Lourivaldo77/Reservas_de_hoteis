"use client"

import { useState } from "react"
import { Search, MapPin, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SearchBarProps {
  onSearch?: (data: any) => void
  compact?: boolean
}

export function SearchBar({ onSearch, compact = false }: SearchBarProps) {
  const [destination, setDestination] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState(1)

  const handleSearch = () => {
    onSearch?.({
      destination,
      checkIn,
      checkOut,
      guests,
    })
  }

  if (compact) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm">
        <div className="flex flex-col md:flex-row gap-2 items-center">
          <div className="flex-1 flex items-center gap-2 bg-gray-50 rounded px-3 py-2">
            <MapPin size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Where to?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="flex-1 bg-transparent text-sm outline-none"
            />
          </div>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded text-sm"
          />
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded text-sm"
          />
          <select
            value={guests}
            onChange={(e) => setGuests(Number.parseInt(e.target.value))}
            className="px-3 py-2 border border-gray-200 rounded text-sm"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
          <Button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-700 text-white px-6">
            <Search size={18} />
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Where are you going?</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Which city or area?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 text-gray-400" size={18} />
            <Input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="pl-10" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 text-gray-400" size={18} />
            <Input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="pl-10" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
          <div className="relative">
            <Users className="absolute left-3 top-3 text-gray-400" size={18} />
            <select
              value={guests}
              onChange={(e) => setGuests(Number.parseInt(e.target.value))}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-gray-900"
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? "Guest" : "Guests"}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex items-end">
          <Button onClick={handleSearch} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2">
            <Search className="mr-2" size={20} />
            Search Hotels
          </Button>
        </div>
      </div>
    </div>
  )
}
