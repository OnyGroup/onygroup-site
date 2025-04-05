"use client"

import type React from "react"

import { useState, useMemo, useEffect } from "react"
import { Loader2, Check } from "lucide-react"
import toast from "react-hot-toast"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import { Checkbox } from "@/components/ui/checkbox"

export interface WaitlistFormData {
  name: string;
  email: string;
  phone: string;
  role: string;
  company: string;
  businessCategory: string;
  useCase: string[];
  city: string;
  country: string;
  teamSize: string;
  revenueRange: string;
}

interface WaitlistFormProps {
  step: number;
  onNext: (data: Partial<WaitlistFormData>) => void;
  onSubmit: (data: Partial<WaitlistFormData>) => void;
  initialData?: Partial<WaitlistFormData>;
}

export default function WaitlistForm({ step, onNext, onSubmit, initialData = {} }: WaitlistFormProps) {
  const [formData, setFormData] = useState<WaitlistFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    useCase: [],
    businessCategory: "",
    city: "",
    country: "",
    teamSize: "",
    revenueRange: "",
    ...initialData,
  });

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

  const commonRoles = [
    "CEO/Founder",
    "COO/Operations Manager",
    "CFO/Finance Manager",
    "CTO/Technical Lead",
    "Sales Manager",
    "Marketing Manager",
    "HR Manager",
    "IT Manager",
    "Administrative Staff",
    "Business Analyst",
    "Procurement Officer",
    "Customer Service Manager",
    "General Manager",
    "Director",
    "Other"
  ];

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

  const handleMultiSelectChange = (e: React.ChangeEvent<HTMLSelectElement>, field: string) => {
    const options = e.target.options;
    const selectedValues: string[] = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    setFormData((prev) => ({ ...prev, [field]: selectedValues }));
  };

  const handleCheckboxChange = (challenge: string) => {
    setFormData((prev) => {
      const currentSelection = [...prev.useCase];
      
      if (currentSelection.includes(challenge)) {
        // Remove item if already selected
        return { ...prev, useCase: currentSelection.filter(item => item !== challenge) };
      } else {
        // Add item if not already selected
        return { ...prev, useCase: [...currentSelection, challenge] };
      }
    });
  };

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
    e.preventDefault();
  
    if (!validateStep2()) {
      toast.error("Please check the form for errors");
      return;
    }
  
    setLoading(true);
  
    try {
      // Combine city and country for location field for backward compatibility
      const { city, country, ...submissionData } = formData;
  
      console.log('Submission Data:', submissionData); // Log the submission data
  
      // Attempt to send data to Web3Forms
      try {
        const web3FormsResponse = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: "b4aa257b-307a-4313-88b8-414e2203aedf",
            ...submissionData,
            useCase: submissionData.useCase.join(', '),
          }),
        });
  
        if (!web3FormsResponse.ok) {
          const errorText = await web3FormsResponse.text();
          console.error('Web3Forms response not OK:', web3FormsResponse.status, errorText);
          throw new Error(`Web3Forms submission failed: ${web3FormsResponse.status}`);
        }
  
        const web3FormsData = await web3FormsResponse.json();
  
        if (!web3FormsData.success) {
          throw new Error("Web3Forms submission failed");
        }
  
        toast.success("Submission successful!");
      } catch (web3FormsError) {
        console.error('Web3Forms submission error:', web3FormsError);
        toast.error("Web3Forms submission failed, but proceeding with Lark.");
      }
  
      // Send data to Lark regardless of Web3Forms success
      const larkResponse = await fetch('/api/lark-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...submissionData,
          useCase: submissionData.useCase.join(', '),
        }),
      });
  
      if (!larkResponse.ok) {
        const larkErrorText = await larkResponse.text();
        throw new Error(`Lark submission failed: ${larkErrorText}`);
      }
  
      const larkResult = await larkResponse.json();
  
      if (!larkResult.success) {
        throw new Error("Lark submission failed");
      }
  
      onSubmit(formData);
      toast.success("Form submitted successfully to Lark!");
    } catch (error) {
      console.error('Error during form submission:', error);
      toast.error("An error occurred while submitting to Lark. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  
    

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
              containerStyle={{ width: "100%" }}
              inputStyle={{ 
                width: "100%", 
                height: "46px",
                borderRadius: "0.5rem",
                backgroundColor: "white",
                color: "#111827",
                border: "1px solid #D1D5DB",
                fontSize: "1rem",
                paddingLeft: "48px"
              }}
              buttonStyle={{
                backgroundColor: "white",
                borderRight: "1px solid #D1D5DB",
                borderTopLeftRadius: "0.5rem",
                borderBottomLeftRadius: "0.5rem"
              }}
              dropdownStyle={{
                backgroundColor: "white",
                color: "#111827"
              }}
              enableSearch
            />
            
            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium mb-2">
              What's your role in the company*
            </label>
            <select
              id="role"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-[#006B54] focus:ring-1 focus:ring-[#006B54] focus:outline-none"
            >
              <option value="">Select your role</option>
              {commonRoles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
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
          <label className="block text-sm font-medium mb-2">
            What is your biggest operational challenge? <span className="text-gray-500 text-xs">(Select multiple options)</span>
          </label>
          
          {/* Hidden select to maintain backward compatibility with existing form handling logic */}
          <select
            id="useCase"
            value={formData.useCase}
            onChange={(e) => handleMultiSelectChange(e, 'useCase')}
            className="hidden"
            multiple
          >
            {operationalChallenges.map((challenge) => (
              <option key={challenge} value={challenge}>
                {challenge}
              </option>
            ))}
          </select>
          
          {/* Checkbox group for better UX */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 border border-gray-300 rounded-lg p-4 bg-white">
            {operationalChallenges.map((challenge) => (
              <div key={challenge} className="flex items-center space-x-2">
                <Checkbox 
                  id={`challenge-${challenge.replace(/\s+/g, '-').toLowerCase()}`}
                  checked={formData.useCase.includes(challenge)}
                  onCheckedChange={() => handleCheckboxChange(challenge)}
                />
                <label 
                  htmlFor={`challenge-${challenge.replace(/\s+/g, '-').toLowerCase()}`}
                  className="text-sm cursor-pointer"
                >
                  {challenge}
                </label>
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-gray-500">You can select multiple challenges that apply to your business</p>
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