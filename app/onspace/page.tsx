"use client"

import { useState } from "react"
import { ArrowLeft, Check } from "lucide-react"
import { Toaster } from "react-hot-toast"
import WaitlistForm from "./WaitlistForm"
import Image from "next/image"
import { CarouselWithIndicators } from "./carousel-plugin"

export default function WaitlistPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleNext = (data) => {
    setFormData((prev) => ({ ...prev, ...data }))
    setStep(2)
  }

  const handleBack = () => {
    setStep(1)
  }

  const handleSubmit = (data) => {
    setFormData((prev) => ({ ...prev, ...data }))
    setSubmitted(true)
  }

  const handleReset = () => {
    setStep(1)
    setFormData({})
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#020220] text-gray-900 dark:text-white flex items-center justify-center">
        <div className="max-w-md w-full mx-auto p-8 text-center">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/onspace-logo.svg?height=31&width=119"
              alt="OnSpace Logo"
              width={119}
              height={31}
              className="mx-auto"
            />
          </div>

          {/* Success Icon */}
          <div className="w-24 h-24 bg-[#FF4500] rounded-full flex items-center justify-center mx-auto mb-6 relative">
            <div className="w-20 h-20 bg-[#f8f9fa] rounded-full flex items-center justify-center">
              <Check className="h-10 w-10 text-[#FF4500]" />
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Thank You for Submitting!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Your application has been received. We'll be in touch soon to schedule your demo and discuss how OnSpace can
            transform your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/stef_ost"
              className="px-6 py-3 bg-[#FF4500] text-white rounded-lg font-semibold hover:bg-[#E63F00] transition text-center min-w-[220px] whitespace-nowrap underline"
            >
              Schedule a Demo with Stef
            </a>
            <a
              href="https://ony-group.com"
              className="px-6 py-3 border border-gray-300 text-gray-700 dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-white/10 transition text-center min-w-[220px] whitespace-nowrap underline"
            >
              Visit Ony Group Website
            </a>
          </div>

        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#020220] text-gray-900 dark:text-white">
      <Toaster position="top-right" />
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Section - Green Background */}
        <div className="w-full md:w-2/5 bg-[#006B54] p-8 md:p-12 flex flex-col">
          <div className="flex flex-col h-full">
            {/* Logo */}
            <Image
              src="/onspace-logo.svg?height=31&width=119"
              alt="OnSpace Logo"
              width={119}
              height={31}
              className="mb-12"
            />

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get OnSpace</h1>
            <p className="text-white/90 mb-12">The best way to modernize and automate your operations</p>

            {step === 2 && (
              <div className="mt-8">
                {/* <h2 className="text-3xl font-bold text-white mb-4">Start your remarkable journey with us!</h2>
                <p className="text-white/90">
                  Our cold email automation helps you send personalized cold emails at scale with high email
                  deliverability.
                </p> */}
              </div>
            )}

            {/* Product Screenshots - Using shadcn/ui Carousel with Autoplay and Indicators */}
            <CarouselWithIndicators />
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-3/5 p-8 md:p-12">
          <div className="max-w-lg mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">Account set up</h2>
                <span className="text-sm font-medium">{step}/2</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#006B54] rounded-full" style={{ width: step === 1 ? "50%" : "100%" }}></div>
              </div>
            </div>

            {step === 2 && (
              <button
                onClick={handleBack}
                className="flex items-center text-gray-600 dark:text-gray-300 mb-6 hover:text-gray-900 dark:hover:text-white"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                <span>Back</span>
              </button>
            )}

            <WaitlistForm step={step} onNext={handleNext} onSubmit={handleSubmit} initialData={formData} />
          </div>
        </div>
      </div>
    </div>
  )
}

