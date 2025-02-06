"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BarChart, Code, HeartHandshake, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const services = [
  {
    icon: <BarChart className="h-14 w-14 text-primary" />,
    title: "Digital & Growth Consulting",
    description: "Strategic consulting to accelerate your digital transformation journey",
    link: "/services/digital-growth",
    features: ["Market Analysis", "Growth Strategy", "Digital Transformation", "Performance Optimization"]
  },
  {
    icon: <Code className="h-14 w-14 text-primary" />,
    title: "SaaS & Tech Solutions",
    description: "Custom software solutions and SaaS products for your business needs",
    link: "/services/saas-tech",
    features: ["Custom Software", "Cloud Solutions", "Mobile Apps", "Security"]
  },
  {
    icon: <HeartHandshake className="h-14 w-14 text-primary" />,
    title: "BPO & Managed Services",
    description: "End-to-end business process outsourcing and management",
    link: "/services/bpo-managed",
    features: ["Customer Support", "Back Office", "IT Management", "Process Automation"]
  }
];

export default function Services() {
  return (
    <>
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Services</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Comprehensive solutions to drive your business forward in the digital age.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t py-24 md:py-32">
        <div className="container">
          {/* Desktop View */}
          <div className="mt-20 hidden sm:grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="rounded-xl border bg-card p-10">
                {service.icon}
                <h3 className="mt-6 text-2xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-muted-foreground">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="link" asChild className="mt-6 p-0">
                  <Link href={service.link} className="group">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Mobile View with Swiper */}
          <div className="mt-20 sm:hidden">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="pb-12"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="rounded-xl border bg-card p-10">
                    {service.icon}
                    <h3 className="mt-6 text-2xl font-semibold">{service.title}</h3>
                    <p className="mt-4 text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="mt-6 space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-muted-foreground">
                          <ArrowRight className="mr-2 h-4 w-4" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="link" asChild className="mt-6 p-0">
                      <Link href={service.link} className="group">
                        Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container">
          <div className="rounded-2xl bg-primary px-8 py-16 md:px-16 md:py-24 lg:px-24">
            <div className="mx-auto max-w-2xl text-center text-primary-foreground">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Business?</h2>
              <p className="mt-6 text-lg">
                Let's discuss how our services can help you achieve your goals.
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