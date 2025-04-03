"use client"

import type React from "react"

import { useState, useMemo, useEffect } from "react"
import { Loader2 } from "lucide-react"
import toast from "react-hot-toast"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

export interface WaitlistFormData {
  name: string
  email: string
  phone: string
  role: string
  company: string
  businessCategory: string
  useCase: string
  city: string
  country: string
  teamSize: string
  revenueRange: string
}

interface WaitlistFormProps {
  step: number
  onNext: (data: Partial<WaitlistFormData>) => void
  onSubmit: (data: Partial<WaitlistFormData>) => void
  initialData?: Partial<WaitlistFormData>
}

export default function WaitlistForm({ step, onNext, onSubmit, initialData = {} }: WaitlistFormProps) {
  const [formData, setFormData] = useState<WaitlistFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    useCase: "",
    businessCategory: "",
    city: "",
    country: "",
    teamSize: "",
    revenueRange: "",
    ...initialData,
  })

  useEffect(() => {
    setFormData((prev) => ({ ...prev, ...initialData }))
  }, [initialData])

  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<WaitlistFormData>>({})

  const businessCategories = [
    "Agriculture/Agribusiness",
    "Automotive(Repair, Dealerships, Vendors)",
    "Construction/Engineering",
    "Distribution/Wholesale",
    "Healthcare (Hospitals, Clinics)",
    "Manufacturing (Production/Factory)",
    "Professional Services/Consulting",
    "Real Estate (Management, Development)",
    "Retail (Stores/Online Shops)",
    "Technology/IT Services",
    "Other",
  ]

  const teamSizes = ["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"]

  const revenueRanges = [
    "Less than KES 500K",
    "KES 500K - 1M",
    "KES 1M - 5M",
    "KES 5M - 10M",
    "KES 10M - 50M",
    "KES 50M+",
  ]

  const operationalChallenges = [
    "Inventory Management",
    "Sales Tracking & Reporting",
    "Cash Flow & Financial Management",
    "Workflow & Production Inefficiencies",
    "Communication & Team Coordination",
    "Data Accuracy & Integration",
    "Compliance & Regulatory Requirements",
    "Customer Relationship Management",
    "Technology Complexity",
    "Lack of Operational Visibility",
  ]

  const validateStep1 = () => {
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
    if (!formData.role) {
      newErrors.role = "Role is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors: Partial<WaitlistFormData> = {}

    if (!formData.company) {
      newErrors.company = "Company name is required"
    }
    if (!formData.businessCategory) {
      newErrors.businessCategory = "Business category is required"
    }
    if (!formData.teamSize) {
      newErrors.teamSize = "Team size is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateStep1()) {
      toast.error("Please check the form for errors")
      return
    }

    const step1Data = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      role: formData.role,
    }

    onNext(step1Data)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateStep2()) {
      toast.error("Please check the form for errors")
      return
    }

    setLoading(true)

    try {
      // Combine city and country for location field for backward compatibility
      const { city, country, ...submissionData } = formData;

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "b4aa257b-307a-4313-88b8-414e2203aedf",
          ...submissionData,
        }),
      })

      const data = await response.json()

      if (data.success) {
        onSubmit(formData)
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

  if (step === 1) {
    return (
      <form onSubmit={handleContinue} className="space-y-6">
        <h2 className="text-2xl font-bold mb-6">Tell us a bit about yourself</h2>

        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name*
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-[#006B54] focus:ring-1 focus:ring-[#006B54] focus:outline-none"
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
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-[#006B54] focus:ring-1 focus:ring-[#006B54] focus:outline-none"
              placeholder="john@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number*
            </label>
            <PhoneInput
              country={"ke"} 
              value={formData.phone}
              onChange={(phone) => setFormData({ ...formData, phone })}
              inputProps={{
                name: "phone",
                required: true,
              }}
              containerClass="w-full"
              inputClass="w-full pl-12 !border !border-gray-300 !rounded-lg !bg-white !text-gray-900 focus:!border-[#006B54] focus:!ring-1 focus:!ring-[#006B54] focus:!outline-none"
              buttonClass="!bg-white !border-r-gray-300 !px-3"
              dropdownClass="!bg-white !text-gray-900"
              enableSearch
            />

            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium mb-2">
              What's your role in the company*
            </label>
            <input
              type="text"
              id="role"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              placeholder="Enter your role"
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-[#006B54] focus:ring-1 focus:ring-[#006B54] focus:outline-none"
            />
            {errors.role && <p className="mt-1 text-sm text-red-500">{errors.role}</p>}
          </div>

        </div>

        <div className="mt-4 text-xs text-gray-600 dark:text-gray-400">
          By registering for an account, you are consenting to our{" "}
          <a href="/terms-of-service" className="text-[#006B54] hover:underline">
            Terms of Service
          </a>{" "}
          and confirming that you have reviewed and accepted the{" "}
          <a href="/privacy-statement" className="text-[#006B54] hover:underline">
            Global Privacy Statement
          </a>
          .
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-[#FF4500] text-white rounded-lg font-semibold hover:bg-[#E63F00] transition flex items-center justify-center"
        >
          Continue
        </button>
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Tell us a bit about your business</h2>

      <div className="space-y-4">
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            Company Name*
          </label>
          <input
            type="text"
            id="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-[#006B54] focus:ring-1 focus:ring-[#006B54] focus:outline-none"
            placeholder="Acme Inc."
          />
          {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
        </div>

        <div>
          <label htmlFor="businessCategory" className="block text-sm font-medium mb-2">
            Business category*
          </label>
          <select
            id="businessCategory"
            value={formData.businessCategory}
            onChange={(e) => setFormData({ ...formData, businessCategory: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-[#006B54] focus:ring-1 focus:ring-[#006B54] focus:outline-none"
          >
            <option value="">Select category</option>
            {businessCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.businessCategory && <p className="mt-1 text-sm text-red-500">{errors.businessCategory}</p>}
        </div>

        <div>
          <label htmlFor="useCase" className="block text-sm font-medium mb-2">
            What is your biggest operational challenge?
          </label>
          <select
            id="useCase"
            value={formData.useCase}
            onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-[#006B54] focus:ring-1 focus:ring-[#006B54] focus:outline-none"
          >
            <option value="">Select operational challenge(s) you need help with</option>
            {operationalChallenges.map((challenge) => (
              <option key={challenge} value={challenge}>
                {challenge}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="revenueRange" className="block text-sm font-medium mb-2">
            Annual Revenue Range
          </label>
          <select
            id="revenueRange"
            value={formData.revenueRange}
            onChange={(e) => setFormData({ ...formData, revenueRange: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-[#006B54] focus:ring-1 focus:ring-[#006B54] focus:outline-none"
          >
            <option value="">Select revenue range</option>
            {revenueRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="teamSize" className="block text-sm font-medium mb-2">
            Team size
          </label>
          <select
            id="teamSize"
            value={formData.teamSize}
            onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-[#006B54] focus:ring-1 focus:ring-[#006B54] focus:outline-none"
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
          "Submit and book a demo"
        )}
      </button>
    </form>
  )
}

