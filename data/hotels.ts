export interface Hotel {
  id: string
  name: string
  location: string
  rating: number
  reviewCount: number
  image: string
  price: number
  stars: number
  amenities: string[]
  accommodationType: string
  description: string
  images: string[]
  offers: Offer[]
}

export interface Offer {
  platform: string
  price: number
  url: string
}

export interface SearchFilters {
  destination: string
  checkIn: string
  checkOut: string
  guests: number
  minPrice: number
  maxPrice: number
  stars: number[]
  minRating: number
  amenities: string[]
  accommodationType: string[]
  sortBy: "price-asc" | "price-desc" | "rating" | "popular"
}

export const AMENITIES = [
  "Wi-Fi",
  "Pool",
  "Air Conditioning",
  "Restaurant",
  "Gym",
  "Spa",
  "Bar",
  "Parking",
  "Pet Friendly",
  "Business Center",
]

export const ACCOMMODATION_TYPES = ["Hotel", "Apartment", "Hostel", "Resort", "Boutique", "Bed & Breakfast"]

export const MOCK_HOTELS: Hotel[] = [
  {
    id: "1",
    name: "Luxury Ocean View Resort",
    location: "Miami, Florida",
    rating: 4.8,
    reviewCount: 2543,
    image: "/luxury-ocean-view-resort-miami.jpg",
    price: 245,
    stars: 5,
    amenities: ["Pool", "Restaurant", "Spa", "Gym"],
    accommodationType: "Resort",
    description: "Experience ultimate luxury with stunning ocean views and world-class amenities.",
    images: ["/luxury-ocean-view-resort-bedroom.jpg", "/luxury-ocean-view-resort-pool.jpg", "/luxury-ocean-view-resort-restaurant.jpg"],
    offers: [
      { platform: "Booking.com", price: 245, url: "#" },
      { platform: "Expedia", price: 252, url: "#" },
      { platform: "Hotels.com", price: 248, url: "#" },
    ],
  },
  {
    id: "2",
    name: "Downtown Modern Hotel",
    location: "New York, New York",
    rating: 4.6,
    reviewCount: 1832,
    image: "/modern-downtown-hotel-new-york.jpg",
    price: 180,
    stars: 4,
    amenities: ["Wi-Fi", "Business Center", "Gym", "Bar"],
    accommodationType: "Hotel",
    description: "Contemporary design meets urban convenience in the heart of Manhattan.",
    images: ["/modern-hotel-bedroom-new-york.jpg", "/modern-hotel-lobby-new-york.jpg", "/modern-hotel-gym-new-york.jpg"],
    offers: [
      { platform: "Booking.com", price: 180, url: "#" },
      { platform: "Hotels.com", price: 185, url: "#" },
      { platform: "Kayak", price: 178, url: "#" },
    ],
  },
  {
    id: "3",
    name: "Cozy Boutique Inn",
    location: "Paris, France",
    rating: 4.7,
    reviewCount: 945,
    image: "/cozy-boutique-inn-paris.jpg",
    price: 125,
    stars: 3,
    amenities: ["Wi-Fi", "Restaurant", "Pet Friendly"],
    accommodationType: "Boutique",
    description: "Charming Parisian accommodation with local character and personalized service.",
    images: ["/boutique-inn-bedroom-paris.jpg", "/boutique-inn-courtyard-paris.jpg", "/boutique-inn-restaurant-paris.jpg"],
    offers: [
      { platform: "Booking.com", price: 125, url: "#" },
      { platform: "Expedia", price: 130, url: "#" },
    ],
  },
  {
    id: "4",
    name: "Beach Paradise Hotel",
    location: "Bali, Indonesia",
    rating: 4.5,
    reviewCount: 1567,
    image: "/beach-paradise-hotel-bali.jpg",
    price: 95,
    stars: 4,
    amenities: ["Pool", "Beach Access", "Restaurant", "Spa", "Gym"],
    accommodationType: "Resort",
git    description: "Tropical paradise with pristine beaches and authentic island hospitality.",
    images: ["/beach-resort-bedroom-bali.jpg", "/beach-resort-pool-bali.jpg", "/beach-paradise-hotel-bali.jpg"],
    offers: [
      { platform: "Booking.com", price: 95, url: "#" },
      { platform: "Agoda", price: 92, url: "#" },
      { platform: "Hotels.com", price: 98, url: "#" },
    ],
  },
  {
    id: "5",
    name: "Alpine Mountain Lodge",
    location: "Interlaken, Switzerland",
    rating: 4.9,
    reviewCount: 734,
    image: "/cozy-boutique-inn-paris.jpg",
    price: 210,
    stars: 5,
    amenities: ["Spa", "Restaurant", "Hiking", "Fireplace"],
    accommodationType: "Boutique",
    description: "Breathtaking mountain views and cozy Swiss hospitality in the heart of the Alps.",
    images: [
      "/boutique-inn-bedroom-paris.jpg",
      "/boutique-inn-courtyard-paris.jpg",
      "/cozy-boutique-inn-paris.jpg",
    ],
    offers: [
      { platform: "Booking.com", price: 210, url: "#" },
      { platform: "Hotels.com", price: 215, url: "#" },
    ],
  },
  {
    id: "6",
    name: "Urban Hostel & Café",
    location: "Barcelona, Spain",
    rating: 4.3,
    reviewCount: 2156,
    image: "/modern-downtown-hotel-new-york.jpg",
    price: 45,
    stars: 2,
    amenities: ["Wi-Fi", "Common Kitchen", "Bar", "Rooftop"],
    accommodationType: "Hostel",
    description: "Budget-friendly accommodation with vibrant social atmosphere and city views.",
    images: [
      "/modern-hotel-bedroom-new-york.jpg",
      "/modern-hotel-lobby-new-york.jpg",
      "/modern-hotel-gym-new-york.jpg",
    ],
    offers: [
      { platform: "Booking.com", price: 45, url: "#" },
      { platform: "Hostelworld", price: 42, url: "#" },
    ],
  },
  {
    id: "7",
    name: "Zen Garden Retreat",
    location: "Kyoto, Japan",
    rating: 4.7,
    reviewCount: 612,
    image: "/beach-resort-pool-bali.jpg",
    price: 155,
    stars: 4,
    amenities: ["Spa", "Traditional Bath", "Garden", "Restaurant"],
    accommodationType: "Boutique",
    description: "Traditional Japanese hospitality with serene gardens and authentic cultural experiences.",
    images: [
      "/beach-resort-bedroom-bali.jpg",
      "/beach-paradise-hotel-bali.jpg",
      "/beach-resort-pool-bali.jpg",
    ],
    offers: [
      { platform: "Booking.com", price: 155, url: "#" },
      { platform: "Agoda", price: 150, url: "#" },
    ],
  },
  {
    id: "8",
    name: "Rio Beachfront Apartment",
    location: "Rio de Janeiro, Brazil",
    rating: 4.4,
    reviewCount: 883,
    image: "/luxury-ocean-view-resort-miami.jpg",
    price: 110,
    stars: 3,
    amenities: ["Pool", "Beach Access", "Parking", "Gym"],
    accommodationType: "Apartment",
    description: "Modern beachfront living with stunning views of Copacabana and Ipanema beaches.",
    images: [
      "/luxury-ocean-view-resort-bedroom.jpg",
      "/luxury-ocean-view-resort-pool.jpg",
      "/luxury-ocean-view-resort-restaurant.jpg",
    ],
    offers: [
      { platform: "Booking.com", price: 110, url: "#" },
      { platform: "Airbnb", price: 108, url: "#" },
    ],
  },
]
