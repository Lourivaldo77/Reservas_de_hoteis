import { Suspense } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HomeContent } from "./home-content"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Suspense fallback={null}>
        <HomeContent />
      </Suspense>

      <Footer />
    </div>
  )
}
