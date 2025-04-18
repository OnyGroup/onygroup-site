import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
        <p>
          At Ony Group, we respect your privacy and are committed to protecting your personal data. This privacy policy
          will inform you about how we look after your personal data when you visit our website and tell you about your
          privacy rights and how the law protects you.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. The Data We Collect About You</h2>
        <p>
          Personal data means any information about an individual from which that person can be identified. We may
          collect, use, store and transfer different kinds of personal data about you which we have grouped together as
          follows:
        </p>
        <ul className="list-disc pl-6 my-4 space-y-2">
          <li>
            <strong>Identity Data</strong> includes first name, last name, username or similar identifier.
          </li>
          <li>
            <strong>Contact Data</strong> includes email address, telephone numbers, and physical address.
          </li>
          <li>
            <strong>Business Data</strong> includes information about your business, industry, and services you're
            interested in.
          </li>
          <li>
            <strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone
            setting and location, browser plug-in types and versions, operating system and platform, and other
            technology on the devices you use to access this website.
          </li>
          <li>
            <strong>Usage Data</strong> includes information about how you use our website and services.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Collect Your Personal Data</h2>
        <p>We use different methods to collect data from and about you including through:</p>
        <ul className="list-disc pl-6 my-4 space-y-2">
          <li>
            <strong>Direct interactions.</strong> You may give us your Identity, Contact, and Business Data by filling
            in forms or by corresponding with us by post, phone, email, or otherwise.
          </li>
          <li>
            <strong>Automated technologies or interactions.</strong> As you interact with our website, we may
            automatically collect Technical Data about your equipment, browsing actions, and patterns.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. How We Use Your Personal Data</h2>
        <p>
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data
          in the following circumstances:
        </p>
        <ul className="list-disc pl-6 my-4 space-y-2">
          <li>To respond to your inquiries and provide you with information about our services.</li>
          <li>To perform the contract we are about to enter into or have entered into with you.</li>
          <li>
            Where it is necessary for our legitimate interests (or those of a third party) and your interests and
            fundamental rights do not override those interests.
          </li>
          <li>Where we need to comply with a legal obligation.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
        <p>
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost,
          used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal
          data to those employees, agents, contractors, and other third parties who have a business need to know.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Retention</h2>
        <p>
          We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we
          collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting, or
          reporting requirements.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Your Legal Rights</h2>
        <p>
          Under certain circumstances, you have rights under data protection laws in relation to your personal data,
          including the right to:
        </p>
        <ul className="list-disc pl-6 my-4 space-y-2">
          <li>Request access to your personal data.</li>
          <li>Request correction of your personal data.</li>
          <li>Request erasure of your personal data.</li>
          <li>Object to processing of your personal data.</li>
          <li>Request restriction of processing your personal data.</li>
          <li>Request transfer of your personal data.</li>
          <li>Right to withdraw consent.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to the Privacy Policy</h2>
        <p>
          We may update our privacy policy from time to time. We will notify you of any changes by posting the new
          privacy policy on this page and updating the "Last Updated" date at the top of this privacy policy.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
        <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
        <p className="mt-2">
          <strong>Email:</strong> connect@onygroup.com
          <br />
          <strong>Phone:</strong> +254 011 055 189
        </p>

        <div className="mt-12 pt-6 border-t">
          <Link href="/contact" className="text-orange-600 hover:underline">
            &larr; Back to Contact Form
          </Link>
        </div>
      </div>
    </div>
  )
}
