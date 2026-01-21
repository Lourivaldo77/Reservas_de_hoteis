"use client"

import { Button } from "@/components/ui/button"

interface SortBarProps {
  onSortChange?: (sortBy: string) => void
  resultCount?: number
}

export function SortBar({ onSortChange, resultCount = 0 }: SortBarProps) {
  const sortOptions = [
    { value: "price-asc", label: "Lowest Price" },
    { value: "price-desc", label: "Highest Price" },
    { value: "rating", label: "Highest Rated" },
    { value: "popular", label: "Most Popular" },
  ]

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-gray-600 font-medium">{resultCount} results found</p>
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-sm text-gray-600">Sort by:</span>
        {sortOptions.map((option) => (
          <Button
            key={option.value}
            variant="outline"
            size="sm"
            onClick={() => onSortChange?.(option.value)}
            className="text-xs"
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
