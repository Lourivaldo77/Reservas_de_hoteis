import { Suspense } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SearchContent } from "./search-content"

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Suspense fallback={null}>
        <SearchContent />
      </Suspense>

      <Footer />
    </div>
  )
}
