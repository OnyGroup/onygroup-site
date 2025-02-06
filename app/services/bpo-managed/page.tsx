import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeartHandshake, ArrowRight, Users, Headphones, Clock, Settings } from "lucide-react";

export default function BpoManaged() {
  return (
    <>
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">BPO & Managed Services</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              End-to-end business process outsourcing and management services to optimize your operations and reduce costs.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t py-24 md:py-32">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Our Services</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We provide comprehensive BPO and managed services to help businesses focus on their core competencies while we handle their operational needs.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-lg border bg-card p-6">
                <Headphones className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">Customer Support</h3>
                <p className="mt-2 text-muted-foreground">24/7 multi-channel customer service</p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">Back Office</h3>
                <p className="mt-2 text-muted-foreground">Efficient back-office operations support</p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <Settings className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">IT Management</h3>
                <p className="mt-2 text-muted-foreground">Comprehensive IT infrastructure management</p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <Clock className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">Process Automation</h3>
                <p className="mt-2 text-muted-foreground">Streamline operations with automation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container">
          <div className="rounded-2xl bg-primary px-8 py-16 md:px-16 md:py-24 lg:px-24">
            <div className="mx-auto max-w-2xl text-center text-primary-foreground">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Optimize Your Operations?</h2>
              <p className="mt-6 text-lg">
                Let's discuss how our BPO and managed services can help transform your business.
              </p>
              <Button size="lg" variant="secondary" className="mt-10" asChild>
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}