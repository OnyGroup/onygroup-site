import { cn } from "@/lib/utils"

interface TableOfContentsProps {
  activeSection: string
}

export default function TableOfContents({ activeSection }: TableOfContentsProps) {
  const sections = [
    { id: "introduction", title: "1. Introduction" },
    { id: "information-we-collect", title: "2. Information We Collect" },
    { id: "how-we-use-information", title: "3. How We Use Information" },
    { id: "how-we-share-information", title: "4. How We Share Information" },
    { id: "cookies-similar-technologies", title: "5. Cookies & Similar Technologies" },
    { id: "your-choices-controls", title: "6. Your Choices & Controls" },
    { id: "data-security", title: "7. Data Security" },
    { id: "data-retention", title: "8. Data Retention" },
    { id: "international-data-transfers", title: "9. International Data Transfers" },
    { id: "childrens-privacy", title: "10. Children's Privacy" },
    { id: "changes-to-this-policy", title: "11. Changes to This Policy" },
    { id: "contact-us", title: "12. Contact Us" },
  ]

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold text-lg mb-3">Table of Contents</h3>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={cn(
                "block text-sm hover:text-primary transition-colors",
                activeSection === section.id ? "text-primary font-medium" : "text-gray-600",
              )}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
