import Image from "next/image"
import {
  ArrowRight,
  BarChart3,
  Bird,
  CheckCircle,
  Cloud,
  Cog,
  Database,
  Globe,
  Leaf,
  Smartphone,
  Tablet,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
} from "@/components/ui/timeline"

export default function KaruanaFarmCaseStudy() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      {/* Hero Section */}
      <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <Badge className="px-3 py-1 text-sm" variant="secondary">
            Case Study
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Digital Transformation for Karuana Farm
          </h1>
          <p className="text-xl text-muted-foreground">
            How we modernized operations for a premium avian bird farm, increasing efficiency and sales
          </p>
          <div className="flex flex-wrap items-center gap-2 text-muted-foreground">
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Process Automation</span>
            </span>
            <Separator orientation="vertical" className="h-4" />
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>E-commerce Platform</span>
            </span>
            <Separator orientation="vertical" className="h-4" />
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Data Analytics</span>
            </span>
          </div>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-lg border bg-gradient-to-br from-[#e6f7ea] to-[#f0f9e6] p-8">
          <div className="flex h-full items-center justify-center">
            <div className="relative h-full w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/karuana-farm-logo.jpg?height=1502&width=3000"
                  alt="Karuana Farm Logo"
                  layout="fill"
                  objectFit="cover"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Overview */}
      <Card className="mb-16">
        <CardHeader>
          <CardTitle className="text-2xl">Client Overview</CardTitle>
          <CardDescription>
            Karuana Farm is a premium avian bird farm specializing in breeding and selling exotic birds
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-8 md:grid-cols-3">
          <div className="space-y-2">
            <h3 className="font-semibold">About Karuana Farm</h3>
            <p className="text-muted-foreground">
              Established in 2005, Karuana Farm has built a reputation for quality breeding and ethical practices in the
              avian industry. They specialize in rare and exotic bird species, serving both individual collectors and
              commercial clients.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Business Operations</h3>
            <ul className="space-y-1 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Bird className="mt-0.5 h-4 w-4 text-primary" />
                <span>Breeding and raising premium avian species</span>
              </li>
              <li className="flex items-start gap-2">
                <Leaf className="mt-0.5 h-4 w-4 text-primary" />
                <span>Specialized nutrition and habitat management</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="mt-0.5 h-4 w-4 text-primary" />
                <span>Distribution to collectors and retailers nationwide</span>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">The Challenge</h3>
            <p className="text-muted-foreground">
              Despite their expertise in avian care, Karuana Farm was operating with manual, paper-based systems that
              limited their growth potential and operational efficiency. They needed a comprehensive digital
              transformation to modernize their business.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Challenges */}
      <div className="mb-16 space-y-6">
        <h2 className="text-3xl font-bold">Key Challenges</h2>
        <p className="text-xl text-muted-foreground">
          Karuana Farm faced several operational challenges that were limiting their growth and efficiency.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Cog className="h-5 w-5 text-primary" />
                Manual Operations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                All breeding records, inventory management, and sales tracking were done manually on paper, leading to
                inefficiencies, errors, and limited data analysis capabilities.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Globe className="h-5 w-5 text-primary" />
                Limited Market Reach
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Without an online presence, Karuana Farm was limited to local customers and word-of-mouth referrals,
                missing opportunities to reach a broader market of avian enthusiasts.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Database className="h-5 w-5 text-primary" />
                Data-Driven Decisions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                The lack of centralized data made it difficult to track breeding success rates, optimize nutrition
                programs, and make informed business decisions based on performance metrics.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Our Solution */}
      <div className="mb-16 space-y-6">
        <h2 className="text-3xl font-bold">Our Solution</h2>
        <p className="text-xl text-muted-foreground">
          We implemented a comprehensive digital transformation strategy tailored to Karuana Farm's unique needs.
        </p>

        <Tabs defaultValue="operations" className="mt-8">
          <TabsList className="grid w-full grid-cols-3 md:w-[600px]">
            <TabsTrigger value="operations">Farm Operations</TabsTrigger>
            <TabsTrigger value="ecommerce">E-commerce Platform</TabsTrigger>
            <TabsTrigger value="analytics">Data & Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="operations" className="mt-6 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    Breeding Management System
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We developed a custom breeding management system that digitized all aspects of the breeding process,
                    from pairing decisions to offspring tracking.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Digital pedigree tracking and genetic analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Automated breeding schedules and reminders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Health and nutrition tracking for each bird</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5 text-primary" />
                    Mobile Farm Management
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We created a mobile application that allowed farm staff to update records, track tasks, and monitor
                    bird health in real-time from anywhere on the property.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Barcode scanning for quick bird identification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Task management and assignment system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Offline functionality with automatic syncing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="ecommerce" className="mt-6 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    Custom E-commerce Platform
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We built a specialized e-commerce platform designed specifically for the unique requirements of
                    selling live birds, with features tailored to Karuana Farm's business model.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Individual bird profiles with detailed information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Specialized shipping and pickup options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Waiting list management for high-demand species</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Tablet className="h-5 w-5 text-primary" />
                    Customer Portal
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We developed a customer portal that allowed bird owners to access care guides, track their birds'
                    lineage, and engage with the Karuana Farm community.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Digital care guides and feeding recommendations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Ancestry tracking for purchased birds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Community forums for bird enthusiasts</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="mt-6 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Business Intelligence Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We created a comprehensive analytics dashboard that provided Karuana Farm with actionable insights
                    into all aspects of their business operations.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Breeding success metrics and trend analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Sales performance and revenue forecasting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Inventory management and feed optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cloud className="h-5 w-5 text-primary" />
                    Integrated Data Ecosystem
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We integrated all systems into a unified data ecosystem, ensuring seamless information flow between
                    breeding operations, inventory, sales, and customer management.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Cloud-based infrastructure for reliability and accessibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Automated data synchronization across platforms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Comprehensive backup and security protocols</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Implementation Process */}
      <Card className="mb-16">
        <CardHeader>
          <CardTitle className="text-2xl">Implementation Journey</CardTitle>
          <CardDescription>Our phased approach ensured a smooth transition to digital operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="py-4">
            <div className="space-y-8">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot className="bg-primary" />
                  <TimelineConnector className="bg-muted" />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold">Phase 1: Discovery & Planning</h3>
                    <p className="text-muted-foreground">
                      We conducted a comprehensive assessment of Karuana Farm's operations, identifying key pain points
                      and opportunities for digital transformation. This included shadowing staff, analyzing existing
                      processes, and defining clear objectives.
                    </p>
                  </div>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot className="bg-primary" />
                  <TimelineConnector className="bg-muted" />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold">Phase 2: Core Systems Development</h3>
                    <p className="text-muted-foreground">
                      We built and implemented the breeding management system and mobile application, focusing on
                      digitizing the most critical operational aspects first. This phase included extensive staff
                      training and iterative refinements based on user feedback.
                    </p>
                  </div>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot className="bg-primary" />
                  <TimelineConnector className="bg-muted" />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold">Phase 3: E-commerce & Customer Experience</h3>
                    <p className="text-muted-foreground">
                      We launched the e-commerce platform and customer portal, expanding Karuana Farm's market reach and
                      enhancing the customer experience. This phase included professional photography, content
                      development, and marketing strategy.
                    </p>
                  </div>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot className="bg-primary" />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold">Phase 4: Analytics & Optimization</h3>
                    <p className="text-muted-foreground">
                      We integrated all systems and implemented the business intelligence dashboard, providing Karuana
                      Farm with comprehensive analytics and insights. This phase focused on data-driven optimization and
                      continuous improvement processes.
                    </p>
                  </div>
                </TimelineContent>
              </TimelineItem>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="mb-16 space-y-6">
        <h2 className="text-3xl font-bold">Results & Impact</h2>
        <p className="text-xl text-muted-foreground">
          Our digital transformation initiative delivered significant improvements across all aspects of Karuana Farm's
          operations.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          <Card className="text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-5xl font-bold text-primary">78%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Increase in Operational Efficiency</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-5xl font-bold text-primary">142%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Growth in Online Sales</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-5xl font-bold text-primary">35%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Improvement in Breeding Success</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-5xl font-bold text-primary">3.5x</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Return on Investment</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Additional Benefits */}
      <Card className="mb-16">
        <CardHeader>
          <CardTitle className="text-2xl">Additional Benefits</CardTitle>
          <CardDescription>
            Beyond the metrics, our digital transformation delivered numerous qualitative improvements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Enhanced Customer Experience</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Customers now have access to detailed information about their birds, including lineage, care
                  recommendations, and community support. This has significantly improved customer satisfaction and
                  fostered a loyal community around the Karuana Farm brand.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Improved Bird Welfare</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  The digital tracking of health metrics, nutrition, and breeding conditions has led to improved bird
                  welfare outcomes. Staff can now identify potential health issues earlier and implement preventative
                  measures more effectively.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Expanded Market Reach</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Karuana Farm now serves customers nationwide, with a growing international presence. The e-commerce
                  platform has opened new markets and customer segments that were previously inaccessible through
                  traditional sales channels.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Data-Driven Decision Making</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Farm management now has access to comprehensive data and analytics, enabling more informed
                  decision-making across all aspects of the business. This has led to optimized breeding programs, more
                  efficient resource allocation, and strategic business planning.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Testimonial */}
      <Card className="mb-16 border-primary/20 bg-gradient-to-r from-[#e6f7ea]/50 to-[#f0f9e6]/50">
        <CardContent className="pt-6">
          <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
            <div className="flex flex-col items-center justify-center">
              <Avatar className="h-24 w-24 border-4 border-background">
                <AvatarImage src="/images/maria-karuana.jpg?height=96&width=96" alt="Client" />
                <AvatarFallback>MK</AvatarFallback>
              </Avatar>
              <h3 className="mt-4 text-lg font-semibold">Maria Karuana</h3>
              <p className="text-sm text-muted-foreground">Head of Operations, Karuana Farm</p>
            </div>
            <div className="flex flex-col justify-center">
              <div className="space-y-4">
                <p className="text-lg italic text-muted-foreground">
                  "The digital transformation of our farm has been nothing short of revolutionary. What used to take
                  hours of paperwork now happens automatically, and we have insights into our operations that we never
                  thought possible. Our online sales have exploded, and we're connecting with bird enthusiasts around
                  the world. Most importantly, the improved tracking and data has helped us take even better care of our
                  birds, which has always been our primary mission. This investment has paid for itself many times
                  over."
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
          <CardDescription>Lessons from our successful digital transformation of Karuana Farm</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <h3 className="font-semibold">Phased Implementation</h3>
            <p className="text-sm text-muted-foreground">
              Our phased approach allowed for gradual adoption and refinement, minimizing disruption to daily operations
              while maximizing the impact of each new system component.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Industry-Specific Solutions</h3>
            <p className="text-sm text-muted-foreground">
              By developing solutions tailored specifically to avian farming rather than using generic systems, we
              addressed the unique challenges and requirements of Karuana Farm's business.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Integrated Ecosystem</h3>
            <p className="text-sm text-muted-foreground">
              The integration of all digital systems into a cohesive ecosystem created synergies that amplified the
              benefits of each individual component, delivering greater overall value.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="border-none bg-gradient-to-r from-[#e6f7ea] to-[#f0f9e6]">
        <CardHeader>
          <CardTitle className="text-2xl">Ready to transform your business with digital solutions?</CardTitle>
          <CardDescription>
            Let's discuss how our expertise in digital transformation can help your organization thrive in the digital
            age.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="group">
            Start Your Digital Journey
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

