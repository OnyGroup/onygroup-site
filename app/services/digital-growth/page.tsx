import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BarChart, ArrowRight, LineChart, PieChart, TrendingUp } from "lucide-react";

export default function DigitalGrowth() {
  return (
    <>
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Digital & Growth Consulting</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Strategic consulting services to accelerate your digital transformation journey and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t py-24 md:py-32">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Our Approach</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We combine deep industry expertise with data-driven insights to help businesses navigate their digital transformation journey and achieve sustainable growth.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-lg border bg-card p-6">
                <LineChart className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">Growth Strategy</h3>
                <p className="mt-2 text-muted-foreground">Data-driven strategies for sustainable business growth</p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <PieChart className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">Market Analysis</h3>
                <p className="mt-2 text-muted-foreground">Deep insights into market trends and opportunities</p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <TrendingUp className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">Performance Optimization</h3>
                <p className="mt-2 text-muted-foreground">Improve operational efficiency and ROI</p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <BarChart className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">Digital Analytics</h3>
                <p className="mt-2 text-muted-foreground">Advanced analytics for better decision making</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container">
          <div className="rounded-2xl bg-primary px-8 py-16 md:px-16 md:py-24 lg:px-24">
            <div className="mx-auto max-w-2xl text-center text-primary-foreground">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Accelerate Your Growth?</h2>
              <p className="mt-6 text-lg">
                Let's discuss how our digital consulting services can help transform your business.
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