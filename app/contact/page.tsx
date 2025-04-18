"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent } from "@/components/ui/card"
import { Send, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import dynamic from "next/dynamic"

// Dynamically import the phone input component to avoid SSR issues
const PhoneInput = dynamic(() => import("react-phone-input-2"), {
  ssr: false,
  loading: () => <div className="h-10 w-full bg-gray-100 animate-pulse rounded-md"></div>,
})

// Import the CSS for the phone input
import "react-phone-input-2/lib/style.css"

export default function Contact() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    // Services step
    services: [] as string[],

    // Business step
    businessName: "",
    website: "",
    industry: "",
    timeline: "",

    // Contact step
    name: "",
    email: "",
    phone: "",
    businessDescription: "",

    // Consent
    consentGiven: false,
  })

  const [errors, setErrors] = useState({
    services: "",
    businessName: "",
    industry: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
    businessDescription: "",
    consentGiven: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when field is edited
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      phone: value,
    }))

    // Clear error when field is edited
    if (errors.phone) {
      setErrors((prev) => ({
        ...prev,
        phone: "",
      }))
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when field is edited
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleConsentChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      consentGiven: checked,
    }))

    // Clear error when field is edited
    if (errors.consentGiven) {
      setErrors((prev) => ({
        ...prev,
        consentGiven: "",
      }))
    }
  }

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const services = [...prev.services]
      if (services.includes(service)) {
        return { ...prev, services: services.filter((s) => s !== service) }
      } else {
        return { ...prev, services: [...services, service] }
      }
    })

    // Clear services error if at least one is selected
    if (errors.services) {
      setErrors((prev) => ({
        ...prev,
        services: "",
      }))
    }
  }

  const validateStep = (step: number): boolean => {
    let isValid = true
    const newErrors = { ...errors }

    if (step === 1) {
      if (formData.services.length === 0) {
        newErrors.services = "Please select at least one service"
        isValid = false
      }
    } else if (step === 2) {
      if (!formData.businessName.trim()) {
        newErrors.businessName = "Business name is required"
        isValid = false
      }
      if (!formData.industry) {
        newErrors.industry = "Please select an industry"
        isValid = false
      }
      if (!formData.timeline) {
        newErrors.timeline = "Please select a timeline"
        isValid = false
      }
    } else if (step === 3) {
      if (!formData.name.trim()) {
        newErrors.name = "Name is required"
        isValid = false
      }
      if (!formData.email.trim()) {
        newErrors.email = "Email is required"
        isValid = false
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Please enter a valid email"
        isValid = false
      }
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required"
        isValid = false
      }
      if (!formData.businessDescription.trim()) {
        newErrors.businessDescription = "Business description is required"
        isValid = false
      }
      if (!formData.consentGiven) {
        newErrors.consentGiven = "You must agree to the privacy policy"
        isValid = false
      }
    }

    setErrors(newErrors)
    return isValid
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateStep(3)) {
      return
    }

    setIsSubmitting(true)

    try {
      // Format submission data
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        businessDescription: formData.businessDescription,
        subject: `New Contact Form Submission from ${formData.name}`,
        from_name: "Ony Group Website",
        businessName: formData.businessName,
        website: formData.website,
        industry: formData.industry,
        timeline: formData.timeline,
        services: Array.isArray(formData.services) ? formData.services.join(", ") : formData.services,
        consentGiven: formData.consentGiven,
      }

      // 1. Attempt to send data to Web3Forms
      try {
        const web3FormsResponse = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: "b4aa257b-307a-4313-88b8-414e2203aedf",
            ...submissionData,
          }),
        })

        if (!web3FormsResponse.ok) {
          const errorText = await web3FormsResponse.text()
          console.error("Web3Forms response not OK:", web3FormsResponse.status, errorText)
          throw new Error(`Web3Forms submission failed: ${web3FormsResponse.status}`)
        }

        const web3FormsData = await web3FormsResponse.json()

        if (!web3FormsData.success) {
          throw new Error("Web3Forms submission failed")
        }
      } catch (web3FormsError) {
        console.error("Web3Forms submission error:", web3FormsError)
      }

      // 2. Send data to Lark regardless of Web3Forms success
      const larkResponse = await fetch("/api/lark-submit-ocg-contact-page", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      })

      if (!larkResponse.ok) {
        const larkErrorText = await larkResponse.text()
        throw new Error(`Lark submission failed: ${larkErrorText}`)
      }

      const larkResult = await larkResponse.json()

      if (!larkResult.success) {
        throw new Error("Lark submission failed")
      }

      // Move to success step
      setCurrentStep(4)
      window.scrollTo(0, 0)
    } catch (error) {
      console.error("Error during form submission:", error)
      toast({
        title: "Error",
        description: "An error occurred while submitting your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Render different steps based on currentStep
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold">Which of these solutions are you interested in?</h2>
              <p className="mt-2 text-muted-foreground">Select all that apply.</p>
              {errors.services && <p className="text-red-500 text-sm mt-1">{errors.services}</p>}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Website Development",
                "App Development",
                "Online Store",
                "POS System Implementation",
                "Contact Centre",
                "CRM",
                "AI Integration",
                "Unified Inbox",
              ].map((service) => (
                <div key={service} className="flex items-start space-x-3 space-y-0 rounded-md border p-4 bg-white">
                  <Checkbox
                    id={service.replace(/\s+/g, "-").toLowerCase()}
                    checked={formData.services.includes(service)}
                    onCheckedChange={() => handleServiceToggle(service)}
                  />
                  <Label htmlFor={service.replace(/\s+/g, "-").toLowerCase()} className="font-normal cursor-pointer">
                    {service}
                  </Label>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <Button onClick={nextStep} className="w-full sm:w-auto">
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold">Business & Project Basics</h2>
              <p className="mt-2 text-muted-foreground">Tell us more about your business and project requirements.</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="businessName">
                  Business Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Your business name"
                  className="bg-white"
                />
                {errors.businessName && <p className="text-red-500 text-sm">{errors.businessName}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Current Website URL (Optional)</Label>
                <Input
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  className="bg-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="industry">
                  Industry <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.industry} onValueChange={(value) => handleSelectChange("industry", value)}>
                  <SelectTrigger id="industry" className="bg-white">
                    <SelectValue placeholder="Select an industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="automotive">Automotive</SelectItem>
                    <SelectItem value="construction">Construction</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="energy & utilities">Energy & Utilities</SelectItem>
                    <SelectItem value="financial services">Financial Services</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="hospitality">Hospitality</SelectItem>
                    <SelectItem value="information technology">Information Technology</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="media & entertainment">Media & Entertainment</SelectItem>
                    <SelectItem value="professional services">Professional Services</SelectItem>
                    <SelectItem value="real estate">Real Estate</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="services (e.g. salons, clinics)">Services (e.g. salons, clinics)</SelectItem>
                    <SelectItem value="telecommunications">Telecommunications</SelectItem>
                    <SelectItem value="transportation & logistics">Transportation & Logistics</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.industry && <p className="text-red-500 text-sm">{errors.industry}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline">
                  Project Timeline <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.timeline} onValueChange={(value) => handleSelectChange("timeline", value)}>
                  <SelectTrigger id="timeline" className="bg-white">
                    <SelectValue placeholder="Select a timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">ASAP</SelectItem>
                    <SelectItem value="within 1-3 months">Within 1-3 months</SelectItem>
                    <SelectItem value="3-6 months">3-6 months</SelectItem>
                    <SelectItem value="6+ months">6+ months</SelectItem>
                  </SelectContent>
                </Select>
                {errors.timeline && <p className="text-red-500 text-sm">{errors.timeline}</p>}
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={prevStep}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button onClick={nextStep}>
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <p className="mt-2 text-muted-foreground">How can we reach you?</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="bg-white"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="bg-white"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <div className="phone-input-container">
                  <PhoneInput
                    country={"ke"}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    inputProps={{
                      name: "phone",
                      id: "phone",
                      required: true,
                    }}
                    containerStyle={{ width: "100%" }}
                    inputStyle={{ width: "100%", height: "40px" }}
                    buttonStyle={{ borderRadius: "0.375rem 0 0 0.375rem" }}
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessDescription">
                  Business Description <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="businessDescription"
                  name="businessDescription"
                  value={formData.businessDescription}
                  onChange={handleChange}
                  placeholder="Tell us about your business, what you do, and what products or services you offer..."
                  className="min-h-[150px] bg-white"
                />
                {errors.businessDescription && <p className="text-red-500 text-sm">{errors.businessDescription}</p>}
              </div>

              <div className="space-y-2 pt-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="consent"
                    checked={formData.consentGiven}
                    onCheckedChange={(checked) => handleConsentChange(checked as boolean)}
                  />
                  <Label htmlFor="consent" className="text-sm font-normal leading-tight">
                    By submitting this, you agree that we may use your info to contact you about your request. We'll
                    keep your details safe, never share them without your permission, and you can unsubscribe anytime.
                    See our{" "}
                    <Link href="/privacy-centre" className="text-orange-600 hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    for more details.
                  </Label>
                </div>
                {errors.consentGiven && <p className="text-red-500 text-sm">{errors.consentGiven}</p>}
              </div>

              <div className="flex justify-between pt-4">
                <Button type="button" variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      Submit <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        )

      case 4:
        return (
          <div className="text-center space-y-6 py-8">
            <div className="mx-auto w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-orange-500" />
            </div>

            <h2 className="text-3xl font-bold">Thanks! We'll be in touch within 24 hours.</h2>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Our team is reviewing your information and will reach out with a custom plan tailored to your needs.
            </p>
          </div>
        )

      default:
        return null
    }
  }

  // Progress indicator
  const renderProgressIndicator = () => {
    return (
      <div className="mb-12">
        <div className="flex justify-between items-center">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  currentStep === step
                    ? "border-orange-500 bg-orange-500 text-white"
                    : currentStep > step
                      ? "border-orange-500 bg-white text-orange-500"
                      : "border-gray-300 bg-white text-gray-400"
                }`}
              >
                {step}
              </div>
              <span
                className={`mt-2 text-sm ${
                  currentStep === step
                    ? "text-orange-500 font-medium"
                    : currentStep > step
                      ? "text-gray-700"
                      : "text-gray-400"
                }`}
              >
                {step === 1 ? "Services" : step === 2 ? "Business" : step === 3 ? "Contact" : "Details"}
              </span>
            </div>
          ))}
        </div>

        <div className="relative mt-2">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200"></div>
          <div
            className="absolute top-0 left-0 h-1 bg-orange-500 transition-all duration-300"
            style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
          ></div>
        </div>
      </div>
    )
  }

  return (
    <>
      <section className="py-12 md:py-16 bg-[#FFF5F2]">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-800">
              Ready to Grow? Let's Build Your Digitally Connected Commerce Business
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Tell us what you need and our team will reach out within 24 hours with a custom plan—no obligation.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32 bg-[#FFF5F2]">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            {renderProgressIndicator()}

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 sm:p-8">{renderStep()}</CardContent>
            </Card>

            <div className="mt-6 text-center text-sm text-gray-600">
              We respect your privacy. Your information stays with us and is only used to build your proposal.
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .phone-input-container .react-tel-input .form-control {
          width: 100%;
          height: 40px;
          border-radius: 0.375rem;
          border: 1px solid hsl(var(--input));
          font-size: 16px;
          padding-left: 48px;
        }
        
        .phone-input-container .react-tel-input .flag-dropdown {
          border-radius: 0.375rem 0 0 0.375rem;
          border: 1px solid hsl(var(--input));
          background-color: transparent;
        }
        
        .phone-input-container .react-tel-input .selected-flag {
          border-radius: 0.375rem 0 0 0.375rem;
          background-color: transparent;
        }
        
        .phone-input-container .react-tel-input .selected-flag:hover,
        .phone-input-container .react-tel-input .selected-flag:focus {
          background-color: transparent;
        }
        
        .phone-input-container .react-tel-input .form-control:focus {
          border-color: hsl(var(--ring));
          box-shadow: 0 0 0 2px hsl(var(--ring) / 0.3);
        }
      `}</style>
    </>
  )
}
