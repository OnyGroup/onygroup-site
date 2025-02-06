import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code, ArrowRight, Database, Cloud, Shield, Smartphone } from "lucide-react";

export default function SaasTech() {
  return (
    <>
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">SaaS & Tech Solutions</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Custom software solutions and SaaS products designed to meet your unique business needs and drive digital innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t py-24 md:py-32">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Our Solutions</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We develop scalable, secure, and innovative software solutions that help businesses streamline operations and enhance customer experiences.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-lg border bg-card p-6">
                <Cloud className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">Cloud Solutions</h3>
                <p className="mt-2 text-muted-foreground">Scalable cloud infrastructure and applications</p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <Smartphone className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">Mobile Apps</h3>
                <p className="mt-2 text-muted-foreground">Native and cross-platform mobile applications</p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <Database className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">Custom Software</h3>
                <p className="mt-2 text-muted-foreground">Tailored software solutions for your needs</p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <Shield className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">Security</h3>
                <p className="mt-2 text-muted-foreground">Enterprise-grade security and compliance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container">
          <div className="rounded-2xl bg-primary px-8 py-16 md:px-16 md:py-24 lg:px-24">
            <div className="mx-auto max-w-2xl text-center text-primary-foreground">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Build Your Solution?</h2>
              <p className="mt-6 text-lg">
                Let's discuss how our tech solutions can help transform your business.
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