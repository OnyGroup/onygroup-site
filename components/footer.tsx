import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <span className="text-lg font-semibold">Ony Group</span>
            <p className="mt-6 text-base text-muted-foreground">
              Building Africa's Next-Gen Digital Ecosystem through innovative technology solutions and strategic consulting.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold">Quick Links</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link href="/about" className="text-base text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-base text-muted-foreground hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-base text-muted-foreground hover:text-foreground">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-base text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold">Services</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link href="/services/digital-growth" className="text-base text-muted-foreground hover:text-foreground">
                  Digital & Growth Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/saas-tech" className="text-base text-muted-foreground hover:text-foreground">
                  SaaS & Tech Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/bpo-managed" className="text-base text-muted-foreground hover:text-foreground">
                  BPO & Managed Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold">Contact</h3>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center space-x-3 text-base text-muted-foreground">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-3 text-base text-muted-foreground">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+254 011 055 189</span>
              </li>
              <li className="flex items-center space-x-3 text-base text-muted-foreground">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>connect@onygroup.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t pt-8">
          <p className="text-center text-base text-muted-foreground">
            © {new Date().getFullYear()} Ony Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}