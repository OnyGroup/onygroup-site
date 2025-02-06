"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart, Code, HeartHandshake } from "lucide-react";
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
    link: "/services/digital-growth"
  },
  {
    icon: <Code className="h-14 w-14 text-primary" />,
    title: "SaaS & Tech Solutions",
    description: "Custom software solutions and SaaS products for your business needs",
    link: "/services/saas-tech"
  },
  {
    icon: <HeartHandshake className="h-14 w-14 text-primary" />,
    title: "BPO & Managed Services",
    description: "End-to-end business process outsourcing and management",
    link: "/services/bpo-managed"
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-36 lg:py-44">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Building Africa's Next-Gen
              <span className="text-primary"> Digital Ecosystem</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground md:text-xl">
              We help businesses transform and thrive in the digital age through innovative technology solutions and strategic consulting services.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <Button asChild size="lg" className="text-base">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-base">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="border-t py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Comprehensive solutions to drive your business forward
            </p>
          </div>

          {/* Desktop View */}
          <div className="mt-20 hidden sm:grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="rounded-xl border bg-card p-10">
                {service.icon}
                <h3 className="mt-6 text-2xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-muted-foreground">
                  {service.description}
                </p>
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

      {/* Stats Section */}
      <section className="border-t py-24 md:py-32 bg-muted/50">
        <div className="container">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary">50+</div>
              <div className="mt-4 text-base text-muted-foreground">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary">100+</div>
              <div className="mt-4 text-base text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary">30+</div>
              <div className="mt-4 text-base text-muted-foreground">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary">5+</div>
              <div className="mt-4 text-base text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="rounded-2xl bg-primary px-8 py-16 md:px-16 md:py-24 lg:px-24">
            <div className="mx-auto max-w-2xl text-center text-primary-foreground">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Ready to Transform Your Business?</h2>
              <p className="mt-6 text-lg md:text-xl">
                Let's discuss how we can help you achieve your digital transformation goals.
              </p>
              <Button size="lg" variant="secondary" className="mt-10 text-base" asChild>
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}