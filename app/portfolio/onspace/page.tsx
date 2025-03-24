import Image from "next/image"
import { ArrowRight, BarChart3, CheckCircle, ClipboardCheck, Database, LineChart, Target, Users } from "lucide-react"
import Link from 'next/link'; 
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function OnSpaceCaseStudy() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      {/* Hero Section */}
      <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <Badge className="px-3 py-1 text-sm" variant="secondary">
            Case Study
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Elevating OnSpace's Acquisition & Retention Strategy
          </h1>
          <p className="text-xl text-muted-foreground">
            How we helped a field operations automation platform increase customer acquisition and reduce churn
          </p>
          <div className="flex flex-wrap items-center gap-2 text-muted-foreground">
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Customer Acquisition</span>
            </span>
            <Separator orientation="vertical" className="h-4" />
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>User Retention</span>
            </span>
            <Separator orientation="vertical" className="h-4" />
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Growth Strategy</span>
            </span>
          </div>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-lg border bg-gradient-to-br from-primary/5 to-primary/10 p-8">
          <div className="flex h-full items-center justify-center">
            <Image
              src="/images/onspace-logo.svg?height=200&width=400"
              alt="OnSpace Logo"
              width={400}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Client Overview */}
      <Card className="mb-16">
        <CardHeader>
          <CardTitle className="text-2xl">Client Overview</CardTitle>
          <CardDescription>
            OnSpace is a platform that helps businesses automate field team operations, data collection, and reporting
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-8 md:grid-cols-3">
          <div className="space-y-2">
            <h3 className="font-semibold">Their Platform</h3>
            <p className="text-muted-foreground">
              OnSpace provides a comprehensive solution for businesses to streamline field operations, collect and
              organize data, and generate real-time insights for better decision-making.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Key Features</h3>
            <ul className="space-y-1 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Database className="mt-0.5 h-4 w-4 text-primary" />
                <span>Custom form builder for data collection and organization</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="mt-0.5 h-4 w-4 text-primary" />
                <span>Centralized work communication management</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="mt-0.5 h-4 w-4 text-primary" />
                <span>Real-time data visualization and insights</span>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">The Challenge</h3>
            <p className="text-muted-foreground">
              Despite having a powerful platform, OnSpace struggled with customer acquisition and retention. They needed
              a strategy to attract more qualified leads and reduce customer churn.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Problem Analysis */}
      <div className="mb-16 space-y-6">
        <h2 className="text-3xl font-bold">Problem Analysis</h2>
        <p className="text-xl text-muted-foreground">
          We conducted a comprehensive analysis of OnSpace's acquisition and retention challenges.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Acquisition Challenges
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium">Lead Generation Efficiency</span>
                  <span className="text-sm text-muted-foreground">42%</span>
                </div>
                <Progress value={42} className="h-2" />
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium">Conversion Rate</span>
                  <span className="text-sm text-muted-foreground">28%</span>
                </div>
                <Progress value={28} className="h-2" />
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium">Customer Acquisition Cost</span>
                  <span className="text-sm text-muted-foreground">High</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <p className="text-sm text-muted-foreground">
                OnSpace was struggling with inefficient lead generation processes, low conversion rates, and high
                customer acquisition costs, limiting their growth potential.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Retention Challenges
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium">User Onboarding Completion</span>
                  <span className="text-sm text-muted-foreground">53%</span>
                </div>
                <Progress value={53} className="h-2" />
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium">30-Day Retention Rate</span>
                  <span className="text-sm text-muted-foreground">62%</span>
                </div>
                <Progress value={62} className="h-2" />
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium">Feature Adoption</span>
                  <span className="text-sm text-muted-foreground">47%</span>
                </div>
                <Progress value={47} className="h-2" />
              </div>
              <p className="text-sm text-muted-foreground">
                Customer retention was hampered by incomplete onboarding, low feature adoption, and insufficient
                engagement strategies to demonstrate ongoing value.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Our Solution */}
      <div className="mb-16 space-y-6">
        <h2 className="text-3xl font-bold">Our Solution</h2>
        <p className="text-xl text-muted-foreground">
          We implemented a comprehensive Acquisition & Retention Strategy to address OnSpace's challenges.
        </p>

        <Tabs defaultValue="acquisition" className="mt-8">
          <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
            <TabsTrigger value="acquisition">Acquisition Strategy</TabsTrigger>
            <TabsTrigger value="retention">Retention Strategy</TabsTrigger>
          </TabsList>
          <TabsContent value="acquisition" className="mt-6 space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Target className="h-5 w-5 text-primary" />
                    Targeted Messaging
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We developed industry-specific messaging that highlighted OnSpace's value proposition for different
                    market segments, increasing relevance and conversion rates.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <LineChart className="h-5 w-5 text-primary" />
                    Optimized Funnel
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We redesigned the customer acquisition funnel with streamlined touchpoints, clearer CTAs, and
                    personalized follow-up sequences.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <ClipboardCheck className="h-5 w-5 text-primary" />
                    Demo Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We created industry-specific demo templates that showcased relevant use cases, making it easier for
                    prospects to envision value.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="retention" className="mt-6 space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="h-5 w-5 text-primary" />
                    Enhanced Onboarding
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We developed a structured onboarding program with interactive tutorials, milestone celebrations, and
                    personalized check-ins to ensure customer success.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Value Demonstration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We implemented automated reporting that highlighted key metrics and ROI, ensuring customers could
                    see the tangible value OnSpace was providing.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Database className="h-5 w-5 text-primary" />
                    Engagement Program
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We created a customer engagement program with regular touchpoints, feature spotlights, and
                    usage-based recommendations to drive deeper platform adoption.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Implementation Process */}
      <Card className="mb-16">
        <CardHeader>
          <CardTitle className="text-2xl">Implementation Process</CardTitle>
          <CardDescription>Our structured approach ensured successful strategy execution</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-3 md:flex-row md:space-x-12 md:space-y-0">
              <div className="flex md:w-1/4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-primary/10 text-primary">
                  1
                </div>
                <div className="ml-4 md:hidden">
                  <h3 className="text-lg font-semibold">Discovery & Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive audit of existing acquisition and retention processes
                  </p>
                </div>
              </div>
              <div className="md:w-3/4 md:pt-2">
                <h3 className="hidden text-lg font-semibold md:block">Discovery & Analysis</h3>
                <p className="hidden text-muted-foreground md:block">
                  We conducted a thorough analysis of OnSpace's existing customer journey, identifying key drop-off
                  points and opportunities for improvement. This included customer interviews, data analysis, and
                  competitive benchmarking.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-3 md:flex-row md:space-x-12 md:space-y-0">
              <div className="flex md:w-1/4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-primary/10 text-primary">
                  2
                </div>
                <div className="ml-4 md:hidden">
                  <h3 className="text-lg font-semibold">Strategy Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Creation of tailored acquisition and retention frameworks
                  </p>
                </div>
              </div>
              <div className="md:w-3/4 md:pt-2">
                <h3 className="hidden text-lg font-semibold md:block">Strategy Development</h3>
                <p className="hidden text-muted-foreground md:block">
                  Based on our findings, we developed comprehensive acquisition and retention strategies tailored to
                  OnSpace's specific market and customer needs. This included messaging frameworks, funnel optimization,
                  and engagement programs.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-3 md:flex-row md:space-x-12 md:space-y-0">
              <div className="flex md:w-1/4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-primary/10 text-primary">
                  3
                </div>
                <div className="ml-4 md:hidden">
                  <h3 className="text-lg font-semibold">Implementation</h3>
                  <p className="text-sm text-muted-foreground">Phased rollout of new strategies and systems</p>
                </div>
              </div>
              <div className="md:w-3/4 md:pt-2">
                <h3 className="hidden text-lg font-semibold md:block">Implementation</h3>
                <p className="hidden text-muted-foreground md:block">
                  We worked closely with OnSpace's team to implement the strategies in phases, ensuring minimal
                  disruption while maximizing impact. This included training sessions, content development, and system
                  integrations.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-3 md:flex-row md:space-x-12 md:space-y-0">
              <div className="flex md:w-1/4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-primary/10 text-primary">
                  4
                </div>
                <div className="ml-4 md:hidden">
                  <h3 className="text-lg font-semibold">Optimization</h3>
                  <p className="text-sm text-muted-foreground">Continuous improvement based on performance data</p>
                </div>
              </div>
              <div className="md:w-3/4 md:pt-2">
                <h3 className="hidden text-lg font-semibold md:block">Optimization</h3>
                <p className="hidden text-muted-foreground md:block">
                  We established measurement frameworks and regular review cycles to monitor performance and make
                  data-driven adjustments to the strategies, ensuring continuous improvement over time.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="mb-16 space-y-6">
        <h2 className="text-3xl font-bold">Results</h2>
        <p className="text-xl text-muted-foreground">
          Our partnership with OnSpace delivered significant improvements across key business metrics.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          <Card className="text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-5xl font-bold text-primary">67%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Increase in Qualified Leads</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-5xl font-bold text-primary">52%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Improvement in Conversion Rate</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-5xl font-bold text-primary">38%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Reduction in Customer Churn</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-5xl font-bold text-primary">2.8x</CardTitle>
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
              <Avatar className="h-24 w-24 border-4 border-background">
                <AvatarImage src="/images/hassan-abi-onspace.jpg?height=96&width=96" alt="Client" />
                <AvatarFallback>RK</AvatarFallback>
              </Avatar>
              <h3 className="mt-4 text-lg font-semibold">Hassan Abi</h3>
              <p className="text-sm text-muted-foreground">Co-founder & CEO, OnSpace</p>
            </div>
            <div className="flex flex-col justify-center">
              <div className="space-y-4">
                <p className="text-lg italic text-muted-foreground">
                  "Their team's strategic approach to acquisition and retention transformed our business. Before working
                  with them, we had a great product but struggled to effectively communicate its value and keep
                  customers engaged. Their comprehensive strategy addressed both challenges simultaneously, resulting in
                  more qualified leads, higher conversion rates, and significantly improved customer retention. The ROI
                  has been exceptional, and we now have sustainable growth systems in place."
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="mb-16">
        <CardHeader>
          <CardTitle className="text-2xl">Key Takeaways</CardTitle>
          <CardDescription>Lessons from our successful partnership with OnSpace</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <h3 className="font-semibold">Aligned Acquisition & Retention</h3>
            <p className="text-sm text-muted-foreground">
              By aligning acquisition and retention strategies, we created a cohesive customer journey that set
              appropriate expectations and delivered on promises, reducing friction and churn.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Value Demonstration</h3>
            <p className="text-sm text-muted-foreground">
              Consistently demonstrating the platform's value through automated reporting and success metrics helped
              customers justify their investment and increased long-term retention.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Personalized Engagement</h3>
            <p className="text-sm text-muted-foreground">
              Tailoring messaging and engagement based on customer segments and usage patterns significantly improved
              relevance and customer satisfaction.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="border-none bg-gradient-to-r from-primary/10 to-primary/5">
        <CardHeader>
          <CardTitle className="text-2xl">Ready to transform your acquisition and retention strategy?</CardTitle>
          <CardDescription>
            Let's discuss how our expertise can help your business attract more customers and keep them longer.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link href="/contact">  {/* Wrap the button directly with Link */}
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

