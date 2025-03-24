import Image from "next/image"
import Link from 'next/link';
import {
  ArrowRight,
  Award,
  BarChart3,
  CheckCircle,
  Clock,
  Code,
  Eye,
  Globe,
  Lightbulb,
  LineChart,
  MousePointer,
  Palette,
  Smartphone,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AMICaseStudy() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      {/* Hero Section */}
      <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <Badge className="px-3 py-1 text-sm" variant="secondary">
            Case Study
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Transforming Africa Management Institute's Digital Presence
          </h1>
          <p className="text-xl text-muted-foreground">
            How our landing page redesign increased conversions and enhanced user experience
          </p>
          <div className="flex flex-wrap items-center gap-2 text-muted-foreground">
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>UX/UI Design</span>
            </span>
            <Separator orientation="vertical" className="h-4" />
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Conversion Optimization</span>
            </span>
            <Separator orientation="vertical" className="h-4" />
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Responsive Development</span>
            </span>
          </div>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-lg border bg-gradient-to-br from-primary/5 to-primary/10 p-8">
          <div className="flex h-full items-center justify-center">
            <Image
              src="/images/ami-logo.avif?height=200&width=400"
              alt="Africa Management Institute Logo"
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
            Africa Management Institute (AMI) is a leading provider of management training and development programs
            across Africa
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-8 md:grid-cols-3">
          <div className="space-y-2">
            <h3 className="font-semibold">About AMI</h3>
            <p className="text-muted-foreground">
              Africa Management Institute empowers entrepreneurs and managers through practical management training and
              development programs. They combine in-person workshops with online learning and on-the-job practice to
              build practical management skills.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Their Impact</h3>
            <ul className="space-y-1 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Users className="mt-0.5 h-4 w-4 text-primary" />
                <span>Trained over 35,000 managers and entrepreneurs</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="mt-0.5 h-4 w-4 text-primary" />
                <span>Operating in 15+ African countries</span>
              </li>
              <li className="flex items-start gap-2">
                <Award className="mt-0.5 h-4 w-4 text-primary" />
                <span>Award-winning blended learning approach</span>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">The Challenge</h3>
            <p className="text-muted-foreground">
              Despite their impressive impact, AMI's landing page wasn't effectively communicating their value
              proposition or converting visitors into program applicants. They needed a redesign that would better
              showcase their offerings and drive enrollment.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Problem Analysis */}
      <div className="mb-16 space-y-6">
        <h2 className="text-3xl font-bold">The Challenge</h2>
        <p className="text-xl text-muted-foreground">
          Our analysis identified several key issues with AMI's existing landing page that were hindering conversions.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Eye className="h-5 w-5 text-primary" />
                Poor Visual Hierarchy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                The existing page lacked clear visual hierarchy, making it difficult for visitors to quickly understand
                AMI's offerings and value proposition. Key information was buried and call-to-action elements didn't
                stand out.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Smartphone className="h-5 w-5 text-primary" />
                Poor Mobile Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                With over 70% of AMI's traffic coming from mobile devices, the non-responsive design was creating a
                frustrating experience for the majority of visitors, leading to high bounce rates.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <MousePointer className="h-5 w-5 text-primary" />
                Unclear User Journeys
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                The page lacked clear pathways for different user segments (entrepreneurs, managers, organizations),
                making it difficult for visitors to find relevant programs and take appropriate action.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Our Approach */}
      <div className="mb-16 space-y-6">
        <h2 className="text-3xl font-bold">Our Approach</h2>
        <p className="text-xl text-muted-foreground">
          We implemented a comprehensive redesign strategy focused on user experience and conversion optimization.
        </p>

        <Tabs defaultValue="research" className="mt-8">
          <TabsList className="grid w-full grid-cols-4 md:w-[600px]">
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="development">Development</TabsTrigger>
            <TabsTrigger value="testing">Testing</TabsTrigger>
          </TabsList>
          <TabsContent value="research" className="mt-6 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    User Research
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We conducted extensive user research to understand the needs and pain points of AMI's target
                    audience, including:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Interviews with 15 current and prospective students</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Analysis of user behavior through heatmaps and session recordings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Surveys of program graduates to understand value drivers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Competitive Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We benchmarked AMI against leading management training providers globally to identify best practices
                    and differentiation opportunities:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Analyzed 12 competitor websites for UX patterns and messaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Identified key differentiators for AMI's Africa-focused approach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Evaluated conversion strategies across the education sector</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="design" className="mt-6 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    UX Strategy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We developed a user experience strategy focused on clarity, relevance, and conversion:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Created user personas for entrepreneurs, managers, and organizational decision-makers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Mapped optimized user journeys for each persona</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Developed information architecture to highlight key programs and benefits</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="h-5 w-5 text-primary" />
                    Visual Design
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We created a modern, professional visual design that reflected AMI's brand and resonated with their
                    audience:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>
                        Refreshed color palette that maintained brand recognition while improving accessibility
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Custom iconography to illustrate key benefits and program features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Authentic photography showcasing real AMI participants and success stories</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="development" className="mt-6 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    Technical Implementation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We built the new landing page using modern web technologies to ensure performance and
                    maintainability:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Responsive design implementation with mobile-first approach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Performance optimization for fast loading in low-bandwidth environments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Integration with AMI's existing CMS for easy content updates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LineChart className="h-5 w-5 text-primary" />
                    Conversion Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We implemented specific features to maximize conversion rates:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Strategic placement of CTAs based on user journey mapping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Social proof elements including testimonials and success metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Simplified application forms with progressive disclosure</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="testing" className="mt-6 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    User Testing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">We validated our design through comprehensive user testing:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Conducted usability testing with 10 participants from target audience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Gathered feedback on prototypes through moderated sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Iterated design based on user feedback before final implementation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    A/B Testing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">We used data-driven optimization to refine the final design:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Implemented A/B testing for key page elements including headlines and CTAs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Tested different value proposition messaging with live traffic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Continuously optimized based on performance data post-launch</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Key Design Elements */}
      <Card className="mb-16">
        <CardHeader>
          <CardTitle className="text-2xl">Key Design Elements</CardTitle>
          <CardDescription>Strategic design decisions that transformed the user experience</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Eye className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Clear Value Proposition</h3>
            <p className="text-sm text-muted-foreground">
              We created a compelling hero section that immediately communicates AMI's unique value proposition and
              differentiators, helping visitors quickly understand what makes their programs special.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Persona-Based Journeys</h3>
            <p className="text-sm text-muted-foreground">
              We implemented clear pathways for different user segments (entrepreneurs, managers, organizations), making
              it easy for visitors to find relevant programs and information tailored to their specific needs.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Social Proof Integration</h3>
            <p className="text-sm text-muted-foreground">
              We strategically incorporated success stories, testimonials, and impact metrics throughout the page to
              build credibility and demonstrate the real-world value of AMI's programs.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Smartphone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Mobile-First Design</h3>
            <p className="text-sm text-muted-foreground">
              We prioritized the mobile experience with a responsive design that works seamlessly across all devices,
              ensuring a consistent and engaging experience for AMI's predominantly mobile audience.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Performance Optimization</h3>
            <p className="text-sm text-muted-foreground">
              We optimized the page for fast loading in low-bandwidth environments, ensuring accessibility across
              Africa's diverse internet infrastructure and improving both user experience and SEO.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <MousePointer className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Strategic CTAs</h3>
            <p className="text-sm text-muted-foreground">
              We designed clear, compelling calls-to-action with strategic placement throughout the user journey, making
              it easy for interested visitors to take the next step at any point in their exploration.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="mb-16 space-y-6">
        <h2 className="text-3xl font-bold">Results & Impact</h2>
        <p className="text-xl text-muted-foreground">
          Our landing page redesign delivered significant improvements across all key performance indicators.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          <Card className="text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-5xl font-bold text-primary">239%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Increase in Conversions</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-5xl font-bold text-primary">53%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Reduction in Bounce Rate</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-5xl font-bold text-primary">142%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Increase in Time on Page</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-5xl font-bold text-primary">87%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Increase in Mobile Conversions</p>
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
                <AvatarImage src="/images/ami-fiona-maina.avif?height=96&width=96" alt="Client" />
                <AvatarFallback>FM</AvatarFallback>
              </Avatar>
              <h3 className="mt-4 text-lg font-semibold">Fiona Maina</h3>
              <p className="text-sm text-muted-foreground">Programme Marketing Manager, Africa Management Institute</p>
            </div>
            <div className="flex flex-col justify-center">
              <div className="space-y-4">
                <p className="text-lg italic text-muted-foreground">
                  "The landing page redesign has been transformative for our digital recruitment efforts. Not only does
                  it better represent our brand and the quality of our programs, but it has dramatically improved our
                  conversion rates. The team took the time to truly understand our audience and our unique value
                  proposition, resulting in a design that speaks directly to the needs of African entrepreneurs and
                  managers. The mobile-first approach has been particularly impactful given our audience demographics."
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
          <CardDescription>Lessons from our successful landing page redesign for AMI</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <h3 className="font-semibold">User-Centered Design Pays Off</h3>
            <p className="text-sm text-muted-foreground">
              By deeply understanding AMI's audience and their needs, we were able to create a design that resonated
              with visitors and guided them effectively toward conversion.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Mobile Optimization is Critical</h3>
            <p className="text-sm text-muted-foreground">
              The significant improvement in mobile conversions underscores the importance of prioritizing mobile
              experience, especially for organizations operating in regions with high mobile usage.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Clear Pathways Drive Conversions</h3>
            <p className="text-sm text-muted-foreground">
              Creating distinct user journeys for different audience segments significantly improved engagement and
              conversion rates by helping visitors quickly find relevant information.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="border-none bg-gradient-to-r from-primary/10 to-primary/5">
        <CardHeader>
          <CardTitle className="text-2xl">Ready to transform your digital presence?</CardTitle>
          <CardDescription>
            Let's discuss how our expertise in UX/UI design and conversion optimization can help your organization
            achieve its goals.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link href="/contact" passHref>
            <Button className="group">
              Start Your Design Journey
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

