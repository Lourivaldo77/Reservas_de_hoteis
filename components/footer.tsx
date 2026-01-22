import Link from "next/link"
import { Instagram, Linkedin, Github } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                H
              </div>
              <span className="font-bold text-lg">HotelFinder</span>
            </div>
            <p className="text-sm text-gray-400">
              Find and compare the best hotel deals from thousands of properties worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/buscar" className="text-gray-400 hover:text-white transition">
                  Search Hotels
                </Link>
              </li>
              <li>
                <Link href="/favoritos" className="text-gray-400 hover:text-white transition">
                  My Favorites
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-white mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} HotelFinder. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
