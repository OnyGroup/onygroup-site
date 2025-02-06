"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Heart, Zap } from "lucide-react";

export default function Careers() {
  const benefits = [
    {
      icon: <GraduationCap className="h-12 w-12 text-primary" />,
      title: "Learning & Development",
      description: "Continuous learning opportunities and professional development programs"
    },
    {
      icon: <Heart className="h-12 w-12 text-primary" />,
      title: "Health & Wellness",
      description: "Comprehensive health coverage and wellness programs"
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options"
    },
    {
      icon: <Briefcase className="h-12 w-12 text-primary" />,
      title: "Career Growth",
      description: "Clear career progression paths and mentorship opportunities"
    }
  ];

  return (
    <>
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Join Our Team</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Be part of Africa's digital transformation journey.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl border bg-card p-8 text-center">
              <h2 className="text-2xl font-semibold">Current Openings</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We currently don't have any open positions, but we're always looking for talented individuals to join our team.
              </p>
              <p className="mt-4 text-muted-foreground">
                Please check back periodically for new opportunities, or send your CV to{" "}
                <Link href="mailto:connect@onygroup.com" className="text-primary hover:underline">
                  connect@onygroup.com
                </Link>
                {" "}for future consideration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">Why Join Us?</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              At Ony Group, we offer more than just a job. We provide an opportunity to make a real impact while growing your career.
            </p>
          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="rounded-lg border bg-card p-6">
                {benefit.icon}
                <h3 className="mt-4 text-lg font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container">
          <div className="rounded-2xl bg-primary px-8 py-16 md:px-16 md:py-24 lg:px-24">
            <div className="mx-auto max-w-2xl text-center text-primary-foreground">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Stay Connected</h2>
              <p className="mt-6 text-lg">
                Follow us on social media to stay updated on new opportunities and company news.
              </p>
              <Button size="lg" variant="secondary" className="mt-10" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}