"use client"

import { useState, useEffect } from "react"

const FAVORITES_KEY = "hotel_favorites"

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load favorites from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY)
    setFavorites(stored ? JSON.parse(stored) : [])
    setIsLoaded(true)
  }, [])

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
    }
  }, [favorites, isLoaded])

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const isFavorite = (id: string) => favorites.includes(id)

  const addFavorite = (id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev : [...prev, id]))
  }

  const removeFavorite = (id: string) => {
    setFavorites((prev) => prev.filter((fav) => fav !== id))
  }

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    addFavorite,
    removeFavorite,
    isLoaded,
  }
}
