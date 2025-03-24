import Image from "next/image"
import Link from 'next/link';
import { ArrowRight, CheckCircle, LineChart, MessageSquare, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function TappiCaseStudy() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      {/* Hero Section */}
      <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <Badge className="px-3 py-1 text-sm" variant="secondary">
            Case Study
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Transforming Tappi's Sales & Engagement Strategy
          </h1>
          <p className="text-xl text-muted-foreground">
            How we helped a digital SMB enablement platform increase conversions and customer satisfaction
          </p>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Sales Support</span>
            </span>
            <Separator orientation="vertical" className="h-4" />
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Engagement Strategy</span>
            </span>
            <Separator orientation="vertical" className="h-4" />
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Conversion Optimization</span>
            </span>
          </div>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-lg border bg-muted/20 p-8">
          <div className="flex h-full items-center justify-center">
            <Image
              src="/images/tappi-logo.png?height=400&width=800"
              alt="Tappi Logo"
              width={800}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Client Overview */}
      <Card className="mb-16">
        <CardHeader>
          <CardTitle className="text-2xl">Client Overview</CardTitle>
          <CardDescription>Tappi is a digital enablement platform for small and medium businesses</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-8 md:grid-cols-3">
          <div className="space-y-2">
            <h3 className="font-semibold">Their Mission</h3>
            <p className="text-muted-foreground">
              Tappi digitizes small and medium businesses and builds their online identity through optimized landing
              pages, social media advertising, and reputation management.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Their Process</h3>
            <ul className="space-y-1 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                  1
                </span>
                <span>Simplify: Create optimized business landing pages</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                  2
                </span>
                <span>Amplify: 3-step process for Facebook/Instagram ads</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                  3
                </span>
                <span>Trust: Build online reputation with verified reviews</span>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">The Challenge</h3>
            <p className="text-muted-foreground">
              Tappi needed to scale their sales operations and improve customer engagement to handle their growing
              client base while maintaining quality service.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Our Approach */}
      <div className="mb-16 space-y-6">
        <h2 className="text-3xl font-bold">Our Approach</h2>
        <p className="text-xl text-muted-foreground">
          We implemented a comprehensive Sales & Engagement Support strategy to help Tappi scale their operations and
          improve customer satisfaction.
        </p>

        <Tabs defaultValue="sales" className="mt-8">
          <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
            <TabsTrigger value="sales">Sales Support</TabsTrigger>
            <TabsTrigger value="engagement">Engagement Strategy</TabsTrigger>
          </TabsList>
          <TabsContent value="sales" className="mt-6 space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="h-5 w-5 text-primary" />
                    Lead Qualification
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We developed a robust lead qualification system that helped Tappi's sales team focus on
                    high-potential clients, increasing conversion rates by 45%.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    Sales Scripts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We created customized sales scripts and conversation flows that addressed common objections and
                    highlighted Tappi's unique value proposition.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <LineChart className="h-5 w-5 text-primary" />
                    CRM Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We implemented and optimized their CRM system to track customer interactions, automate follow-ups,
                    and provide actionable insights.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="engagement" className="mt-6 space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    Customer Onboarding
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We redesigned the customer onboarding process to be more intuitive and informative, reducing
                    time-to-value and increasing initial satisfaction.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Star className="h-5 w-5 text-primary" />
                    Feedback Loops
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We established systematic feedback collection points throughout the customer journey to identify
                    improvement opportunities.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="h-5 w-5 text-primary" />
                    Retention Strategy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We developed a customer retention program that included regular check-ins, success celebrations, and
                    proactive support interventions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Results */}
      <div className="mb-16 space-y-6">
        <h2 className="text-3xl font-bold">Results</h2>
        <p className="text-xl text-muted-foreground">
          Our partnership with Tappi delivered significant improvements across key business metrics.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          <Card className="text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-5xl font-bold text-primary">45%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Increase in Sales Conversion Rate</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-5xl font-bold text-primary">68%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Improvement in Customer Satisfaction</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-5xl font-bold text-primary">37%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Reduction in Customer Churn</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-5xl font-bold text-primary">3.2x</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Return on Investment</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Testimonial */}
      <Card className="mb-16 border-primary/20 bg-primary/5">
        <CardContent className="pt-6">
          <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
            <div className="flex flex-col items-center justify-center">
              <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-background">
                <Image
                  src="/images/tappi-co-founder.jpg?height=380&width=380"
                  alt="Client"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Louis Majanja</h3>
              <p className="text-sm text-muted-foreground">Co-Founder, Tappi</p>
            </div>
            <div className="flex flex-col justify-center">
              <div className="space-y-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg italic text-muted-foreground">
                  "The team's expertise in sales and customer engagement transformed our business. They didn't just
                  provide a service; they became true partners in our growth. Their strategic approach to sales support
                  and customer engagement has been instrumental in our ability to scale while maintaining the personal
                  touch our clients expect."
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="border-none bg-gradient-to-r from-primary/10 to-primary/5">
        <CardHeader>
            <CardTitle className="text-2xl">
            Ready to transform your sales and engagement strategy?
            </CardTitle>
            <CardDescription>
            Let's discuss how our expertise can help your business grow and thrive.
            </CardDescription>
        </CardHeader>
        <CardFooter>
            <Link href="/contact" passHref>
            <Button className="group">
                Contact Us Today
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            </Link>
        </CardFooter>
        </Card>
    </div>
  )
}

