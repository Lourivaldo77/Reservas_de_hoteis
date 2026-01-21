"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false)
      // In a real app, this would authenticate the user
      alert(`${isSignUp ? "Account created" : "Logged in"} successfully!`)
      setFormData({ name: "", email: "", password: "", confirmPassword: "" })
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-20 pb-12">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          {/* Card */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{isSignUp ? "Create Account" : "Welcome Back"}</h1>
              <p className="text-gray-600">
                {isSignUp ? "Join HotelFinder to save your favorites" : "Sign in to access your account"}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field (Sign Up Only) */}
              {isSignUp && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required={isSignUp}
                    className="w-full"
                  />
                </div>
              )}

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    required
                    className="pl-10 w-full"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    required
                    className="pl-10 pr-10 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password (Sign Up Only) */}
              {isSignUp && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                    <Input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm your password"
                      required={isSignUp}
                      className="pl-10 w-full"
                    />
                  </div>
                </div>
              )}

              {/* Remember Me / Forgot Password */}
              {!isSignUp && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                    <span className="text-gray-700">Remember me</span>
                  </label>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    Forgot password?
                  </a>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 mt-6"
              >
                {isLoading ? "Processing..." : isSignUp ? "Create Account" : "Sign In"}
              </Button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center gap-4">
              <div className="flex-1 border-t border-gray-200" />
              <span className="text-sm text-gray-500">or</span>
              <div className="flex-1 border-t border-gray-200" />
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <Button
                variant="outline"
                className="w-full border-gray-300 hover:bg-gray-50 bg-transparent"
                onClick={() => alert("Google login - demo only")}
              >
                Google
              </Button>
              <Button
                variant="outline"
                className="w-full border-gray-300 hover:bg-gray-50 bg-transparent"
                onClick={() => alert("Apple login - demo only")}
              >
                Apple
              </Button>
            </div>

            {/* Toggle Sign Up / Sign In */}
            <div className="text-center pt-6 border-t border-gray-200">
              <p className="text-gray-700 text-sm">
                {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
                </button>
              </p>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-8 bg-blue-50 rounded-lg border border-blue-200 p-4 text-sm text-blue-900">
            This is a demo authentication UI. In production, this would integrate with a real authentication service.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
