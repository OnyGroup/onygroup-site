"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import toast from "react-hot-toast"

export interface WaitlistFormData {
  name: string
  email: string
  phone: string
  company: string
  role: string
  useCase: string
  businessCategory: string
  location: string
  teamSize: string
  revenueRange: string
}

interface WaitlistFormProps {
  onSubmitSuccess: () => void
}

export default function WaitlistForm({ onSubmitSuccess }: WaitlistFormProps) {
  const [formData, setFormData] = useState<WaitlistFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    useCase: "",
    businessCategory: "",
    location: "",
    teamSize: "",
    revenueRange: ""
  })

  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<WaitlistFormData>>({})

  const businessCategories = [
    "E-commerce",
    "SaaS",
    "Healthcare",
    "Finance",
    "Retail",
    "Manufacturing",
    "Education",
    "Technology",
    "Other"
  ]

  const teamSizes = [
    "1-10",
    "11-50",
    "51-200",
    "201-500",
    "501-1000",
    "1000+"
  ]

  const revenueRanges = [
    "Less than KES 500K",
    "KES 500K - 1M",
    "KES 1M - 5M",
    "KES 5M - 10M",
    "KES 10M - 50M",
    "KES 50M+"
  ]

  const validateForm = () => {
    const newErrors: Partial<WaitlistFormData> = {}

    if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters long"
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required"
    }
    if (!formData.company) {
      newErrors.company = "Company name is required"
    }
    if (!formData.role) {
      newErrors.role = "Role is required"
    }
    if (!formData.businessCategory) {
      newErrors.businessCategory = "Business category is required"
    }
    if (!formData.location) {
      newErrors.location = "Location is required"
    }
    if (!formData.teamSize) {
      newErrors.teamSize = "Team size is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      toast.error("Please check the form for errors")
      return
    }

    setLoading(true)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "b4aa257b-307a-4313-88b8-414e2203aedf",
          ...formData,
        }),
      })

      const data = await response.json()

      if (data.success) {
        onSubmitSuccess()
        toast.success("Form submitted successfully!")
      } else {
        throw new Error("Submission failed")
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Information Section */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Full Name*
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] focus:outline-none"
            placeholder="John Doe"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address*
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] focus:outline-none"
            placeholder="john@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone Number*
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] focus:outline-none"
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium mb-2">
            Role/Position*
          </label>
          <input
            type="text"
            id="role"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] focus:outline-none"
            placeholder="CEO, Marketing Manager, etc."
          />
          {errors.role && <p className="mt-1 text-sm text-red-500">{errors.role}</p>}
        </div>

        {/* Company Information Section */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            Company Name*
          </label>
          <input
            type="text"
            id="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] focus:outline-none"
            placeholder="Acme Inc."
          />
          {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
        </div>

        <div>
          <label htmlFor="businessCategory" className="block text-sm font-medium mb-2">
            Business Category*
          </label>
          <select
            id="businessCategory"
            value={formData.businessCategory}
            onChange={(e) => setFormData({ ...formData, businessCategory: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] focus:outline-none"
          >
            <option value="">Select a category</option>
            {businessCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.businessCategory && <p className="mt-1 text-sm text-red-500">{errors.businessCategory}</p>}
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium mb-2">
            Location*
          </label>
          <input
            type="text"
            id="location"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] focus:outline-none"
            placeholder="City, Country"
          />
          {errors.location && <p className="mt-1 text-sm text-red-500">{errors.location}</p>}
        </div>

        <div>
          <label htmlFor="teamSize" className="block text-sm font-medium mb-2">
            Team Size*
          </label>
          <select
            id="teamSize"
            value={formData.teamSize}
            onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] focus:outline-none"
          >
            <option value="">Select team size</option>
            {teamSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          {errors.teamSize && <p className="mt-1 text-sm text-red-500">{errors.teamSize}</p>}
        </div>

        <div>
          <label htmlFor="revenueRange" className="block text-sm font-medium mb-2">
            Annual Revenue Range
          </label>
          <select
            id="revenueRange"
            value={formData.revenueRange}
            onChange={(e) => setFormData({ ...formData, revenueRange: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] focus:outline-none"
          >
            <option value="">Select revenue range</option>
            {revenueRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Use Case Section - Full Width */}
      <div>
        <label htmlFor="useCase" className="block text-sm font-medium mb-2">
          Use Case/Pain Points
        </label>
        <textarea
          id="useCase"
          value={formData.useCase}
          onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] focus:outline-none"
          placeholder="Describe your current challenges and what you hope to achieve with OnSpace..."
          rows={4}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3 bg-[#FF4500] text-white rounded-lg font-semibold hover:bg-[#E63F00] transition flex items-center justify-center"
      >
        {loading ? (
          <>
            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Form"
        )}
      </button>
    </form>
  )
}