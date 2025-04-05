"use client"

import { useState } from "react"
import { ArrowLeft, Check } from "lucide-react"
import { Toaster } from "react-hot-toast"
import WaitlistForm from "./WaitlistForm"
import Image from "next/image"
// import { CarouselWithAutoplay } from "./carousel-plugin"
// import { MobileCarousel } from "./MobileCarousel"
import { useMobile } from "@/hooks/use-mobile"

export default function WaitlistPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [showFormOnMobile, setShowFormOnMobile] = useState(false)

  const isMobile = useMobile()

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

  const handleShowForm = () => {
    setShowFormOnMobile(true)
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
          </div>
        </div>
      </div>
    )
  }

  // Mobile landing page view
  if (isMobile && !showFormOnMobile) {
    return (
      <div className="min-h-screen bg-[#006B54] flex flex-col">
        <div className="flex-1 p-8 flex flex-col">
          {/* Logo */}
          <Image
            src="/onspclogo1.png?height=130&width=553"
            alt="OnSpace Logo"
            width={553}
            height={130}
            className="mb-8"
          />

            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get OnSpace</h1>
              <p className="text-white/90 text-3xl md:text-4xl mb-12">
            The best way to modernize and automate your operations
          </p>
            </div>

          {/* Spacer to push content to center */}
          <div className="flex-grow"></div>

          {/* Mobile Carousel */}
          {/* <MobileCarousel /> */}

          {/* Spacer to push button to bottom */}
          <div className="flex-grow"></div>

          {/* CTA Button */}
          <button
            onClick={handleShowForm}
            className="w-full py-4 bg-[#FF4500] text-white rounded-full font-semibold hover:bg-[#E63F00] transition mt-8"
          >
            Share information to book a demo
          </button>
        </div>
      </div>
    )
  }

  // Desktop view or mobile with form shown
  return (
    <div className="min-h-screen bg-white dark:bg-[#020220] text-gray-900 dark:text-white">
      <Toaster position="top-right" />
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Section - Green Background */}
        <div className="w-full md:w-2/5 bg-[#006B54] p-8 md:p-12 flex flex-col">
          <div className="flex flex-col h-full">
            {/* Logo */}
            <Image
              src="/onspclogo1.png?height=130&width=553"
              alt="OnSpace Logo"
              width={138}
              height={33}
              className="mb-12"
            />

            <div className="text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Start your retail digitization journey with us today!
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-12">
                The best way to modernize and automate your operations
              </p>

              <ul className="list-disc list-inside text-white/90 text-lg md:text-xl">
                <li>Sales Force Management</li>
                <li>Inventory Management</li>
                <li>Customer Management</li>
                <li>Logistics Management</li>
              </ul>
            </div>

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
            {/* <CarouselWithAutoplay /> */}
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-3/5 p-8 md:p-12">
          <div className="max-w-lg mx-auto">
            {/* Mobile Back Button */}
            {isMobile && showFormOnMobile && (
              <button
                onClick={() => setShowFormOnMobile(false)}
                className="flex items-center text-gray-600 dark:text-gray-300 mb-6 hover:text-gray-900 dark:hover:text-white"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                <span>Back</span>
              </button>
            )}

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

