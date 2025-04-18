"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import TableOfContents from "./table-of-contents"

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")

      let currentActiveSection = ""
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        if (sectionTop < 100) {
          currentActiveSection = section.id
        }
      })

      setActiveSection(currentActiveSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="lg:w-1/4 lg:sticky lg:top-20 h-fit">
        <TableOfContents activeSection={activeSection} />
      </div>

      <div className="lg:w-3/4">
        <Card className="p-6 md:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Ony Group Privacy Policy</h1>
            <p className="text-gray-500 italic">Last updated: April 21, 2025</p>
          </div>

          <section id="introduction" className="mb-8 scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              Ony Group and its associated subsidiaries and partners ("Ony Group," "we," "us," or "our") are committed
              to protecting your privacy. This policy explains what information we collect, how we use and share it, and
              the controls you have. It applies whenever you interact with our websites, forms, or services—including
              our Yapa ecosystem (Business, Commerce, Point of Sale, Contact Centre, AI integrations, Super App,
              Government mini‑apps, Loyalty, Ngoks, etc.) and OnSpace.
            </p>
          </section>

          <section id="information-we-collect" className="mb-8 scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-medium mb-2">2.1 Information You Provide Directly</h3>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>
                <span className="font-medium">Contact & Identity:</span> Name, email, phone, business name, industry,
                etc.
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

            <h3 className="text-xl font-medium mb-2">2.2 Information from Your Use of Our Services</h3>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>
                <span className="font-medium">Technical Data:</span> IP address, device identifiers, browser
                type/version, pages visited, referring URLs.
              </li>
              <li>
                <span className="font-medium">Usage Data:</span> Features used, click‑streams, form‑fill progress.
              </li>
            </ul>

            <h3 className="text-xl font-medium mb-2">2.3 Information from Third Parties</h3>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>
                <span className="font-medium">Partners & Service Providers:</span> Analytics data, advertising partners,
                CRM platforms.
              </li>
            </ul>
          </section>

          <section id="how-we-use-information" className="mb-8 scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Information</h2>
            <p className="mb-2">We use your information to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>
                <span className="font-medium">Provide & Improve Services:</span> Respond to requests, deliver quotes,
                run campaigns, refine platform features.
              </li>
              <li>
                <span className="font-medium">Marketing & Communications:</span> Send updates and promotions—tailored to
                your interests in Yapa modules or OnSpace offerings.
              </li>
              <li>
                <span className="font-medium">Security & Compliance:</span> Detect fraud, enforce our terms, meet legal
                requirements.
              </li>
              <li>
                <span className="font-medium">Analytics & Insights:</span> Measure performance, understand usage trends,
                optimize user experience.
              </li>
            </ul>
          </section>

          <section id="how-we-share-information" className="mb-8 scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-4">4. How We Share Information</h2>
            <p className="mb-2">
              We do <strong>not</strong> sell personal data. We may share with:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>
                <span className="font-medium">Service Providers:</span> Email platforms, analytics providers, payment
                processors, under strict confidentiality.
              </li>
              <li>
                <span className="font-medium">Subsidiaries & Partners:</span> To coordinate marketing and service
                delivery across Ony Group entities (e.g., Yapa, Ngoks, OnSpace).
              </li>
              <li>
                <span className="font-medium">Legal & Safety:</span> Law enforcement or regulators when required by law
                or to protect rights and safety.
              </li>
              <li>
                <span className="font-medium">Business Transfers:</span> In connection with mergers, acquisitions, or
                asset sales, under confidentiality terms.
              </li>
            </ul>
          </section>

          <section id="cookies-similar-technologies" className="mb-8 scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-4">5. Cookies & Similar Technologies</h2>
            <p className="mb-2">We use cookies, pixels, local storage, and SDKs to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Remember your preferences and form progress.</li>
              <li>Authenticate sessions.</li>
              <li>Measure and improve performance.</li>
              <li>Serve and measure personalized advertising.</li>
            </ul>
            <p className="mb-4">
              <span className="font-medium">Your Controls:</span> Most browsers let you block or delete cookies—but
              disabling them may affect functionality.
            </p>
          </section>

          <section id="your-choices-controls" className="mb-8 scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-4">6. Your Choices & Controls</h2>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>
                <span className="font-medium">Access & Update:</span> Log in to your account or contact us to review and
                correct your data.
              </li>
              <li>
                <span className="font-medium">Marketing Opt‑Out:</span> Click "unsubscribe" in emails or adjust
                preferences in our communications settings.
              </li>
              <li>
                <span className="font-medium">Cookie Settings:</span> Use our cookie banner or your browser controls to
                manage tracking.
              </li>
              <li>
                <span className="font-medium">Data Deletion:</span> Request deletion of your data (subject to retention
                laws) by contacting us.
              </li>
            </ul>
          </section>

          <section id="data-security" className="mb-8 scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-4">7. Data Security</h2>
            <p className="mb-4">
              We implement industry‑standard measures—encryption in transit and at rest, access controls, regular
              audits—to protect your data against unauthorized access, disclosure, or alteration.
            </p>
          </section>

          <section id="data-retention" className="mb-8 scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-4">8. Data Retention</h2>
            <p className="mb-4">
              We retain your personal information only as long as necessary for the purposes outlined (service
              provision, legal compliance, dispute resolution). When no longer needed, we securely delete or anonymize
              it.
            </p>
          </section>

          <section id="international-data-transfers" className="mb-8 scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-4">9. International Data Transfers</h2>
            <p className="mb-4">
              Ony Group is a global organization. Your data may be transferred to and stored in servers located outside
              your jurisdiction. We take steps to ensure appropriate safeguards (e.g., Standard Contractual Clauses) are
              in place.
            </p>
          </section>

          <section id="childrens-privacy" className="mb-8 scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-4">10. Children's Privacy</h2>
            <p className="mb-4">
              Our services are not directed to children under 16. We do not knowingly collect personal data from minors.
              If we learn we have, we will delete it promptly.
            </p>
          </section>

          <section id="changes-to-this-policy" className="mb-8 scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-4">11. Changes to This Policy</h2>
            <p className="mb-4">
              We may update this policy to reflect changes in our practices or legal obligations. The "Last updated"
              date will indicate when it was most recently revised. Please review periodically.
            </p>
          </section>

          <section id="contact-us" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
            <p className="mb-2">For questions or to exercise your rights, contact us at:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>
                <span className="font-medium">Email:</span> privacy@ony‑group.com
              </li>
              <li>
                <span className="font-medium">Address:</span> [Your Company Address]
              </li>
            </ul>
            <p className="mt-6 text-sm">
              By using our services, you acknowledge you have read and agree to this Privacy Policy.
            </p>
          </section>
        </Card>
      </div>
    </div>
  )
}
