"use client"

import { useState } from "react"
import {
  ChevronDown,
  ChevronUp,
  Search,
  ExternalLink,
  Shield,
  Settings,
  Home,
  User,
  Info,
  FileText,
  HelpCircle,
} from "lucide-react"
import Image from "next/image"

export default function PrivacyPolicyPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>("privacy-policy")
  const [expandedOtherPolicies, setExpandedOtherPolicies] = useState(false)
  const [expandedHighlights, setExpandedHighlights] = useState(true)
  const [activeSection, setActiveSection] = useState("what-is")

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null)
    } else {
      setExpandedSection(section)
    }
  }

  const handleSectionClick = (section: string) => {
    setActiveSection(section)
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar - 3 columns on desktop, full width on mobile */}
          <div className="col-span-12 lg:col-span-3 bg-white border border-gray-200 rounded-lg shadow-sm p-4 mt-6 lg:sticky lg:top-6 h-fit">
            <div className="mb-6">
              <Image src="/abstract-geometric-logo.png" alt="Ony Group" width={80} height={30} className="mb-2" />
              <h1 className="text-2xl font-bold">Privacy Centre</h1>
            </div>

            <nav className="space-y-2">
              <div className="border border-gray-200 rounded-lg">
                <button className="flex items-center justify-between w-full p-3 text-left">
                  <div className="flex items-center">
                    <User className="h-5 w-5 mr-3 text-gray-600" />
                    <div>
                      <div className="text-sm font-medium">Manage your accounts</div>
                      <div className="text-xs text-gray-500">Accounts Centre</div>
                    </div>
                  </div>
                  <ChevronDown size={16} />
                </button>
              </div>

              <button className="flex items-center w-full p-3 text-left hover:bg-gray-50 rounded-lg">
                <Home className="h-5 w-5 mr-3 text-gray-600" />
                <span className="text-sm">Privacy Centre home</span>
              </button>

              <button className="flex items-center w-full p-3 text-left hover:bg-gray-50 rounded-lg">
                <Search className="h-5 w-5 mr-3 text-gray-600" />
                <span className="text-sm">Search</span>
              </button>

              <button className="flex items-center w-full p-3 text-left hover:bg-gray-50 rounded-lg">
                <Settings className="h-5 w-5 mr-3 text-gray-600" />
                <span className="text-sm">Common privacy settings</span>
              </button>

              <button className="flex items-center w-full p-3 text-left hover:bg-gray-50 rounded-lg">
                <Shield className="h-5 w-5 mr-3 text-gray-600" />
                <span className="text-sm">Privacy topics</span>
              </button>

              <button className="flex items-center w-full p-3 text-left hover:bg-gray-50 rounded-lg">
                <HelpCircle className="h-5 w-5 mr-3 text-gray-600" />
                <span className="text-sm">More privacy resources</span>
              </button>

              <div>
                <button
                  className="flex items-center justify-between w-full p-3 text-left hover:bg-gray-50 rounded-lg"
                  onClick={() => toggleSection("privacy-policy")}
                >
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 mr-3 text-gray-600" />
                    <span className="text-sm">Privacy Policy</span>
                  </div>
                  {expandedSection === "privacy-policy" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {expandedSection === "privacy-policy" && (
                  <div className="pl-11 pr-3 py-2 space-y-3">
                    <button
                      onClick={() => handleSectionClick("what-is")}
                      className={`block text-sm text-left w-full ${activeSection === "what-is" ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}`}
                    >
                      What is the Privacy Policy and what does it cover?
                    </button>
                    <button
                      onClick={() => handleSectionClick("collect")}
                      className={`block text-sm text-left w-full ${activeSection === "collect" ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}`}
                    >
                      What information do we collect?
                    </button>
                    <button
                      onClick={() => handleSectionClick("use")}
                      className={`block text-sm text-left w-full ${activeSection === "use" ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}`}
                    >
                      How do we use your information?
                    </button>
                    <button
                      onClick={() => handleSectionClick("share")}
                      className={`block text-sm text-left w-full ${activeSection === "share" ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}`}
                    >
                      How do we share information with third parties?
                    </button>
                    <button
                      onClick={() => handleSectionClick("companies")}
                      className={`block text-sm text-left w-full ${activeSection === "companies" ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}`}
                    >
                      How do the Ony Companies work together?
                    </button>
                    <button
                      onClick={() => handleSectionClick("manage")}
                      className={`block text-sm text-left w-full ${activeSection === "manage" ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}`}
                    >
                      How can you manage or delete your information?
                    </button>
                    <button
                      onClick={() => handleSectionClick("retention")}
                      className={`block text-sm text-left w-full ${activeSection === "retention" ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}`}
                    >
                      How long do we keep your information for?
                    </button>
                    <button
                      onClick={() => handleSectionClick("transfer")}
                      className={`block text-sm text-left w-full ${activeSection === "transfer" ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}`}
                    >
                      How do we transfer information?
                    </button>
                    <button
                      onClick={() => handleSectionClick("legal")}
                      className={`block text-sm text-left w-full ${activeSection === "legal" ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}`}
                    >
                      How do we respond to legal requests?
                    </button>
                    <button
                      onClick={() => handleSectionClick("changes")}
                      className={`block text-sm text-left w-full ${activeSection === "changes" ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}`}
                    >
                      How will you know that the Policy has changed?
                    </button>
                    <button
                      onClick={() => handleSectionClick("global")}
                      className={`block text-sm text-left w-full ${activeSection === "global" ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}`}
                    >
                      Global data protection compliance
                    </button>
                    <button
                      onClick={() => handleSectionClick("contact")}
                      className={`block text-sm text-left w-full ${activeSection === "contact" ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}`}
                    >
                      How to contact Ony with questions
                    </button>
                  </div>
                )}
              </div>

              <div>
                <button
                  className="flex items-center justify-between w-full p-3 text-left hover:bg-gray-50 rounded-lg"
                  onClick={() => setExpandedOtherPolicies(!expandedOtherPolicies)}
                >
                  <div className="flex items-center">
                    <Info className="h-5 w-5 mr-3 text-gray-600" />
                    <span className="text-sm">Other policies and articles</span>
                  </div>
                  {expandedOtherPolicies ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {expandedOtherPolicies && (
                  <div className="pl-11 pr-3 py-2 space-y-3">
                    <button className="block text-sm text-left w-full text-gray-600 hover:text-blue-600">
                      Cookies policy
                    </button>
                    <div className="flex items-center justify-between">
                      <button className="block text-sm text-left text-gray-600 hover:text-blue-600">
                        Information for people who don't use Ony Products
                      </button>
                      <ExternalLink size={14} className="text-gray-400" />
                    </div>
                    <button className="block text-sm text-left w-full text-gray-600 hover:text-blue-600">
                      How Ony uses information for generative AI models and features
                    </button>
                    <button className="block text-sm text-left w-full text-gray-600 hover:text-blue-600">
                      Data privacy framework disclosure
                    </button>
                    <div className="flex items-center justify-between">
                      <button className="block text-sm text-left text-gray-600 hover:text-blue-600">
                        More terms and policies
                      </button>
                      <ExternalLink size={14} className="text-gray-400" />
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Main Content - 6 columns centered on desktop, full width on mobile */}
          <div className="col-span-12 lg:col-span-6 bg-white border border-gray-200 rounded-lg shadow-sm p-6 mt-6 mb-6">
            <div id="what-is" className="mb-8 scroll-mt-6">
              <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
              <h2 className="text-2xl font-semibold mb-4">What is the Privacy Policy and what does it cover?</h2>
              <p className="text-gray-600 mb-4">
                Effective from 21 April 2025 |{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  View printable version
                </a>{" "}
                |{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  See previous versions
                </a>
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-gray-700">
                  Ony Group Limited is a Kenyan company and operates under the{" "}
                  <a
                    href="https://www.odpc.go.ke/resources/data-protection-act/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center inline-flex"
                  >
                    Data Protection Act of Kenya <ExternalLink size={14} className="ml-1" />
                  </a>
                  . This is our primary jurisdiction for data protection matters.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg mb-6">
                <button
                  className="flex items-center justify-between w-full p-4 text-left"
                  onClick={() => setExpandedHighlights(!expandedHighlights)}
                >
                  <div className="flex items-center">
                    <span className="mr-3 text-yellow-400">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="font-medium">Highlights</span>
                  </div>
                  {expandedHighlights ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {expandedHighlights && (
                  <div className="p-4 pt-0 border-t border-gray-200">
                    <p className="mb-4">
                      We at Ony Group want you to understand what information we collect, and how we use and share it.
                      That's why we encourage you to read our Privacy Policy. This helps you use{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Ony Products
                      </a>{" "}
                      in the way that's right for you.
                    </p>

                    <p className="mb-4">
                      In the Privacy Policy, we explain how we collect, use, share, retain and transfer information in
                      accordance with the Data Protection Act of Kenya. We also let you know your rights. Each section
                      of this Policy includes helpful examples and simpler language to make our practices easier to
                      understand. We've also added links to resources where you can learn more about the privacy topics
                      that interest you.
                    </p>

                    <p className="mb-4">
                      It's important to us that you know how to control your privacy, so we also show you where you can
                      manage your information in the settings of the Ony Products you use. You can{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        update these settings
                      </a>{" "}
                      to shape your experience.
                    </p>

                    <p>Read the full Policy below.</p>
                  </div>
                )}
              </div>

              <div className="border border-gray-200 rounded-lg mb-6">
                <button className="flex items-center justify-between w-full p-4 text-left">
                  <span className="font-medium">What Products does this Policy cover?</span>
                  <ChevronDown size={20} />
                </button>
              </div>

              <div className="border border-gray-200 rounded-lg mb-6">
                <button className="flex items-center justify-between w-full p-4 text-left">
                  <span className="font-medium">Learn more in Privacy Centre about managing your privacy</span>
                  <ChevronDown size={20} />
                </button>
              </div>
            </div>

            <div id="collect" className="mb-8 scroll-mt-6">
              <h2 className="text-2xl font-semibold mb-4">What information do we collect?</h2>

              <div className="border border-gray-200 rounded-lg mb-6">
                <button className="flex items-center justify-between w-full p-4 text-left">
                  <div className="flex items-center">
                    <span className="mr-3 text-yellow-400">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="font-medium">Highlights</span>
                  </div>
                  <ChevronDown size={20} />
                </button>
              </div>

              <div className="mb-6">
                <Image
                  src="/connected-with-privacy.png"
                  alt="Privacy illustration"
                  width={600}
                  height={300}
                  className="w-full rounded-lg"
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium">Information You Provide Directly</h3>
                <p>We collect various types of information that you provide directly to us:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-medium">Contact & Identity:</span> Name, email, phone, business name,
                    industry, etc.
                  </li>
                  <li>
                    <span className="font-medium">Project Details:</span> Service selections, timelines, "Additional
                    Details" messages.
                  </li>
                  <li>
                    <span className="font-medium">Communications:</span> Survey responses, support inquiries, newsletter
                    sign‑ups.
                  </li>
                </ul>

                <h3 className="text-xl font-medium mt-6">Information from Your Use of Our Services</h3>
                <p>We also collect information about how you use our services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-medium">Technical Data:</span> IP address, device identifiers, browser
                    type/version, pages visited, referring URLs.
                  </li>
                  <li>
                    <span className="font-medium">Usage Data:</span> Features used, click‑streams, form‑fill progress.
                  </li>
                </ul>

                <h3 className="text-xl font-medium mt-6">Information from Third Parties</h3>
                <p>We may receive information about you from:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-medium">Partners & Service Providers:</span> Analytics data, advertising
                    partners, CRM platforms.
                  </li>
                </ul>
              </div>
            </div>

            <div id="use" className="mb-8 scroll-mt-6">
              <h2 className="text-2xl font-semibold mb-4">How do we use your information?</h2>

              <div className="border border-gray-200 rounded-lg mb-6">
                <button className="flex items-center justify-between w-full p-4 text-left">
                  <div className="flex items-center">
                    <span className="mr-3 text-yellow-400">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="font-medium">Highlights</span>
                  </div>
                  <ChevronDown size={20} />
                </button>
              </div>

              <p className="mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>
                  <span className="font-medium">Provide & Improve Services:</span> Respond to requests, deliver quotes,
                  run campaigns, refine platform features.
                </li>
                <li>
                  <span className="font-medium">Marketing & Communications:</span> Send updates and promotions—tailored
                  to your interests in our products and services.
                </li>
                <li>
                  <span className="font-medium">Security & Compliance:</span> Detect fraud, enforce our terms, meet
                  legal requirements.
                </li>
                <li>
                  <span className="font-medium">Analytics & Insights:</span> Measure performance, understand usage
                  trends, optimize user experience.
                </li>
              </ul>

              <h3 className="text-xl font-medium mb-3">Our products/platforms</h3>
              <p className="mb-4">This includes targeted communications about our Yapa ecosystem modules, such as:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium mb-1">Yapa Business</h4>
                  <p className="text-sm text-gray-600">CRM, customer management, unified inbox</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium mb-1">Yapa Commerce</h4>
                  <p className="text-sm text-gray-600">Online store, multi‑channel selling</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium mb-1">Point of Sale</h4>
                  <p className="text-sm text-gray-600">Mobile POS, in‑store payments, kiosk mode</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium mb-1">Contact Centre</h4>
                  <p className="text-sm text-gray-600">Call‑centre integrations, chat‑commerce</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium mb-1">SMS & WhatsApp Marketing</h4>
                  <p className="text-sm text-gray-600">Email & Push Notifications</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium mb-1">AI Integration</h4>
                  <p className="text-sm text-gray-600">Ndonga AI‑powered insights, automation</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium mb-1">Yapa Super App</h4>
                  <p className="text-sm text-gray-600">Consumer‑facing marketplace</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium mb-1">Yapa Government</h4>
                  <p className="text-sm text-gray-600">Public sector mini‑apps</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium mb-1">Loyalty & Rewards</h4>
                  <p className="text-sm text-gray-600">Customer Directory, Staff Management</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium mb-1">Ngoks</h4>
                  <p className="text-sm text-gray-600">
                    Agritech platform for farm management and produce marketplaces
                  </p>
                </div>
              </div>
            </div>

            <div id="share" className="mb-8 scroll-mt-6">
              <h2 className="text-2xl font-semibold mb-4">How do we share information with third parties?</h2>

              <div className="border border-gray-200 rounded-lg mb-6">
                <button className="flex items-center justify-between w-full p-4 text-left">
                  <div className="flex items-center">
                    <span className="mr-3 text-yellow-400">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="font-medium">Highlights</span>
                  </div>
                  <ChevronDown size={20} />
                </button>
              </div>

              <p className="mb-4">
                We do <strong>not</strong> sell personal data. We may share with:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>
                  <span className="font-medium">Service Providers:</span> Email platforms, analytics providers, payment
                  processors, under strict confidentiality.
                </li>
                <li>
                  <span className="font-medium">Subsidiaries & Partners:</span> To coordinate marketing and service
                  delivery across Ony Group entities (e.g., Yapa, Ngoks).
                </li>
                <li>
                  <span className="font-medium">Legal & Safety:</span> Law enforcement or regulators when required by
                  law or to protect rights and safety.
                </li>
                <li>
                  <span className="font-medium">Business Transfers:</span> In connection with mergers, acquisitions, or
                  asset sales, under confidentiality terms.
                </li>
              </ul>

              <p className="mb-4">
                When we share information with third-party service providers, we require them to use your information in
                accordance with our instructions and terms or with your express permission. We take steps to ensure that
                these third parties handle your information with the same level of care as we do.
              </p>
            </div>

            <div id="companies" className="mb-8 scroll-mt-6">
              <h2 className="text-2xl font-semibold mb-4">How do the Ony Companies work together?</h2>

              <p className="mb-4">
                Ony Group Limited is part of a family of companies that work together to provide services to our users
                worldwide. These companies include:
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Ony Group Limited (Kenya) - Our parent company</li>
                <li>Yapa Technologies Ltd - Our technology and product development arm</li>
                <li>Ngoks Agricultural Solutions - Our agricultural technology division</li>
                <li>Ony Payments Ltd - Our financial services entity</li>
              </ul>

              <p className="mb-4">
                We share infrastructure, systems, and technology with these companies to provide an integrated
                experience that enables better services. For example, this allows us to:
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Provide seamless, consistent, and quality services across Ony products</li>
                <li>Show relevant product recommendations across our ecosystem</li>
                <li>Develop and test new features more efficiently</li>
                <li>Address harmful or illegal activity, security concerns, and abuse across our platforms</li>
              </ul>

              <p className="mb-4">
                All Ony companies follow this Privacy Policy and maintain the same high standards of data protection.
              </p>
            </div>

            <div id="manage" className="mb-8 scroll-mt-6">
              <h2 className="text-2xl font-semibold mb-4">How can you manage or delete your information?</h2>

              <p className="mb-4">We provide you with various tools to control your information:</p>

              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>
                  <span className="font-medium">Access & Update:</span> You can access and update most of your personal
                  information directly through your account settings. If you cannot access certain information there,
                  you can contact us to request access.
                </li>
                <li>
                  <span className="font-medium">Data Portability:</span> You can request a copy of your data in a
                  structured, commonly used, and machine-readable format.
                </li>
                <li>
                  <span className="font-medium">Deletion:</span> You can delete your account or specific information at
                  any time. When you delete your account, we remove your personal information, though some information
                  may remain in backup copies for a limited period.
                </li>
                <li>
                  <span className="font-medium">Marketing Preferences:</span> You can opt out of marketing
                  communications by using the "unsubscribe" link in our emails or adjusting your communication
                  preferences in your account settings.
                </li>
              </ul>

              <p className="mb-4">
                To exercise these rights, visit your account settings or contact our privacy team at
                privacy@ony-group.com.
              </p>
            </div>

            <div id="retention" className="mb-8 scroll-mt-6">
              <h2 className="text-2xl font-semibold mb-4">How long do we keep your information for?</h2>

              <p className="mb-4">
                We retain your personal information only as long as necessary to provide you with our services and for
                legitimate and essential business purposes, such as:
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Maintaining the performance and functionality of our services</li>
                <li>Making data-driven business decisions about new features and offerings</li>
                <li>Complying with our legal obligations</li>
                <li>Resolving disputes</li>
              </ul>

              <p className="mb-4">The retention periods depend on the type of information and its purpose:</p>

              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>
                  <span className="font-medium">Account information:</span> Retained while your account is active or as
                  needed to provide services
                </li>
                <li>
                  <span className="font-medium">Transaction data:</span> Kept for 7 years to comply with financial
                  regulations
                </li>
                <li>
                  <span className="font-medium">Communication records:</span> Stored for 2 years after your last
                  interaction
                </li>
                <li>
                  <span className="font-medium">Usage data:</span> Retained for up to 13 months, then aggregated for
                  analytics
                </li>
              </ul>

              <p className="mb-4">When we no longer need personal information, we securely delete or anonymize it.</p>
            </div>

            <div id="transfer" className="mb-8 scroll-mt-6">
              <h2 className="text-2xl font-semibold mb-4">How do we transfer information?</h2>

              <p className="mb-4">
                Ony Group is a global organization with operations across multiple countries. Your data may be
                transferred to and stored in servers located outside your jurisdiction, including countries that may
                have different data protection laws than your own.
              </p>

              <p className="mb-4">
                When we transfer personal data across borders, we take steps to ensure that your information is
                protected and transferred according to applicable data protection laws. These measures include:
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>
                  <span className="font-medium">Data Transfer Agreements:</span> We implement appropriate safeguards
                  such as Standard Contractual Clauses approved by relevant authorities.
                </li>
                <li>
                  <span className="font-medium">Security Measures:</span> We use encryption, access controls, and other
                  technical and organizational measures to protect data during transfer and storage.
                </li>
              </ul>
            </div>

            <div id="legal" className="mb-8 scroll-mt-6">
              <h2 className="text-2xl font-semibold mb-4">How do we respond to legal requests?</h2>

              <p className="mb-4">
                We access, preserve, and share your information with regulators, law enforcement, or others:
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>In response to a legal request if we have a good-faith belief that the law requires us to do so</li>
                <li>
                  When we believe it's necessary to detect, prevent, and address fraud, unauthorized use of our
                  products, violations of our terms or policies, or other harmful or illegal activity
                </li>
                <li>To protect ourselves, you, or others, including as part of investigations</li>
                <li>In connection with court proceedings, or to comply with legal process</li>
              </ul>

              <p className="mb-4">
                We carefully review each request to ensure it is legally valid, and we may reject requests that are
                overly broad, vague, or do not comply with legal requirements. When possible and legally permissible, we
                will notify affected users about requests for their data.
              </p>
            </div>

            <div id="changes" className="mb-8 scroll-mt-6">
              <h2 className="text-2xl font-semibold mb-4">How will you know that the Policy has changed?</h2>

              <p className="mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology,
                legal requirements, and other factors. When we make changes, we will:
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Update the "Effective Date" at the top of this Privacy Policy</li>
                <li>Post the updated policy on our website and mobile applications</li>
                <li>For significant changes, provide notice through our services or by other means, such as email</li>
              </ul>

              <p className="mb-4">
                We encourage you to review the Privacy Policy whenever you access our services to stay informed about
                our information practices and your privacy rights. Your continued use of our services after any changes
                to this Privacy Policy constitutes your acceptance of the revised policy.
              </p>
            </div>

            <div id="global" className="mb-8 scroll-mt-6">
              <h2 className="text-2xl font-semibold mb-4">Global data protection compliance</h2>

              <p className="mb-4">
                While Ony Group Limited is primarily governed by the Data Protection Act of Kenya, we recognize our
                responsibility to comply with other global data protection regulations when serving users outside Kenya.
                We have implemented measures to ensure compliance with:
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>
                  <span className="font-medium">GDPR (European Union):</span> For EU residents, we uphold the rights and
                  protections granted under the General Data Protection Regulation, including data subject access
                  rights, data portability, and the right to be forgotten.
                </li>
                <li>
                  <span className="font-medium">CCPA/CPRA (California):</span> We respect the privacy rights of
                  California residents as outlined in the California Consumer Privacy Act and the California Privacy
                  Rights Act.
                </li>
                <li>
                  <span className="font-medium">POPIA (South Africa):</span> We comply with the Protection of Personal
                  Information Act for South African users.
                </li>
                <li>
                  <span className="font-medium">Other Regional Regulations:</span> We monitor and adapt to emerging
                  privacy regulations in other jurisdictions where our users are located.
                </li>
              </ul>

              <p className="mb-4">
                This approach allows us to provide consistent privacy protections to all our users while respecting
                regional variations in data protection requirements. If you have specific questions about how we comply
                with data protection laws in your region, please contact our privacy team.
              </p>
            </div>

            <div id="contact" className="mt-12 border-t border-gray-200 pt-6 scroll-mt-6">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="mb-2">For questions or to exercise your rights, contact us at:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>
                  <span className="font-medium">Email:</span> privacy@ony‑group.com
                </li>
                <li>
                  <span className="font-medium">Address:</span> Ony Group Limited, Syokimau, Nairobi, Kenya
                </li>
              </ul>
              <p className="mt-6 text-sm text-gray-600">
                By using our services, you acknowledge you have read and agree to this Privacy Policy.
              </p>
            </div>
          </div>

          {/* Right sidebar or empty column for balance - 3 columns on desktop, hidden on mobile */}
          <div className="hidden lg:block lg:col-span-3"></div>
        </div>
      </div>
    </div>
  )
}
