"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, Target, Lightbulb, Globe } from "lucide-react";

export default function About() {
  return (
    <>
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Ony Group</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Building Africa's digital future through innovation, expertise, and dedication.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t py-24 md:py-32">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Founded with a vision to transform Africa's digital landscape, Ony Group has been at the forefront of technological innovation and strategic consulting. We combine deep industry expertise with cutting-edge technology to deliver solutions that drive growth and efficiency for our clients.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Our journey began with a simple mission: to make advanced technology and strategic consulting accessible to businesses across Africa. Today, we're proud to be a trusted partner for organizations looking to thrive in the digital age.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-lg border bg-card p-6">
                <Target className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">Our Mission</h3>
                <p className="mt-2 text-muted-foreground">Empowering African businesses through digital transformation</p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <Lightbulb className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">Our Vision</h3>
                <p className="mt-2 text-muted-foreground">Leading Africa's digital revolution through innovation</p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">Our Team</h3>
                <p className="mt-2 text-muted-foreground">Expert professionals dedicated to your success</p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <Globe className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">Our Reach</h3>
                <p className="mt-2 text-muted-foreground">Serving clients across the African continent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container">
          <div className="rounded-2xl bg-primary px-8 py-16 md:px-16 md:py-24 lg:px-24">
            <div className="mx-auto max-w-2xl text-center text-primary-foreground">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Work Together?</h2>
              <p className="mt-6 text-lg">
                Let's discuss how we can help transform your business with our innovative solutions.
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