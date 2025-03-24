import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Tappi",
    description: "Sales & Engagement Support",
    category: "Digital Growth",
    link: "/portfolio/tappi"
  },
  {
    title: "OnSpace",
    description: "Acquisition & Retention Strategy",
    category: "Consulting",
    link: "/portfolio/onspace"
  },
  {
    title: "Karuana Farm",
    description: "Digital Transformation",
    category: "Tech Solutions",
    link: "/portfolio/karuana-farm"
  },
  // {
  //   title: "Gee Designs",
  //   description: "Sales Optimization",
  //   category: "Digital Growth",
  //   link: "/portfolio/gee-designs"
  // },
  {
    title: "BuuPass",
    description: "Customer Segmentation",
    category: "Consulting",
    link: "/portfolio/buupass-segmentation"
  },
  // {
  //   title: "BuuPass",
  //   description: "Product Design (Book a Flight on Safaricom Mini Apps)",
  //   category: "Tech Solutions",
  //   link: "/portfolio/buupass-product"
  // },
  {
    title: "Africa Management Institute",
    description: "Landing Page Redesign",
    category: "Tech Solutions",
    link: "/portfolio/ami"
  }
];

export default function Portfolio() {
  return (
    <>
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Portfolio</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Explore our successful projects and see how we've helped businesses across Africa transform and grow.
            </p>
          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg">
                <div className="p-8">
                  <div className="text-sm font-medium text-muted-foreground">
                    {project.category}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-4 text-muted-foreground">
                    {project.description}
                  </p>
                  <Button variant="link" asChild className="mt-6 p-0">
                    <Link href={project.link} className="group">
                      View Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t py-24 md:py-32">
        <div className="container">
          <div className="rounded-2xl bg-primary px-8 py-16 md:px-16 md:py-24 lg:px-24">
            <div className="mx-auto max-w-2xl text-center text-primary-foreground">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Start Your Project?</h2>
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