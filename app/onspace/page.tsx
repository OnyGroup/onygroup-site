"use client"

import { useState } from "react"
import { ArrowLeft, Send } from "lucide-react"
import { Toaster } from "react-hot-toast"
import WaitlistForm, { WaitlistFormData } from "./WaitlistForm"

export default function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleReset = () => {
    setSubmitted(false)
  }

  const handleSubmitSuccess = () => {
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#020220] text-gray-900 dark:text-white flex items-center justify-center">
        <div className="max-w-md w-full mx-auto p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#FF4500] rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Thank You for Submitting!</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Your application has been received. We'll be in touch soon to schedule your demo and discuss how OnSpace
              can transform your business.
            </p>
            <div className="space-x-4">
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-[#FF4500] text-white rounded-lg font-semibold hover:bg-[#E63F00] transition"
              >
                Submit Another Response
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#020220] text-gray-900 dark:text-white">
      <Toaster position="top-right" />
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Schedule a Call with OnSpace</h1>
          <p className="text-black mb-8">
          Let's discuss how OnSpace can streamline your operations and enhance productivity. Complete the form below to schedule a call.
          </p>

          <div className="bg-white/5 rounded-xl p-6 md:p-8">
            <WaitlistForm onSubmitSuccess={handleSubmitSuccess} />
          </div>
        </div>
      </div>
    </div>
  )
}