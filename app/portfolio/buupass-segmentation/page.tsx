import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart3, Bus, CheckCircle, Clock, Filter, LineChart, Map, PieChart, Plane, Search, SectionIcon as Segments, Train, TrendingUp, Users, Zap } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Progress } from "@/components/ui/progress"

export default function BuuPassCaseStudy() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      {/* Hero Section */}
      <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
            <Badge className="px-3 py-1 text-sm" variant="secondary">Case Study</Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Transforming BuuPass with Advanced Customer Segmentation
            </h1>
            <p className="text-xl text-muted-foreground">
            How we helped Kenya's leading transportation booking platform increase conversions and customer loyalty
            </p>
            <div className="flex flex-wrap items-center gap-2 text-muted-foreground">
            <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Data Analysis</span>
            </span>
            <Separator orientation="vertical" className="h-4" />
            <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Customer Segmentation</span>
            </span>
            <Separator orientation="vertical" className="h-4" />
            <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Personalization Strategy</span>
            </span>
            </div>
        </div>
            <div className="relative aspect-video overflow-hidden rounded-lg border bg-gradient-to-br from-[#e6f7ff] to-[#f0f9ff] p-8">
                <div className="flex h-full items-center justify-center">
                <div className="relative h-full w-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                        src="/images/buupass-logo.webp?height=720&width=1280"
                        alt="BuuPass Logo"
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
            BuuPass is Kenya's leading transportation booking platform, connecting travelers with affordable buses, trains, and flights
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-8 md:grid-cols-3">
          <div className="space-y-2">
            <h3 className="font-semibold">About BuuPass</h3>
            <p className="text-muted-foreground">
              Founded in 2016, BuuPass has revolutionized transportation booking in Kenya by providing a digital platform that connects travelers with various transportation options. Their mission is to make travel in East Africa more accessible, affordable, and convenient.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Their Services</h3>
            <ul className="space-y-1 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Bus className="mt-0.5 h-4 w-4 text-primary" />
                <span>Online booking for intercity and long-distance buses</span>
              </li>
              <li className="flex items-start gap-2">
                <Train className="mt-0.5 h-4 w-4 text-primary" />
                <span>Train ticket reservations for the Madaraka Express</span>
              </li>
              <li className="flex items-start gap-2">
                <Plane className="mt-0.5 h-4 w-4 text-primary" />
                <span>Domestic and regional flight bookings</span>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">The Challenge</h3>
            <p className="text-muted-foreground">
              Despite strong growth, BuuPass was treating all customers with a one-size-fits-all approach. They needed a sophisticated customer segmentation strategy to better understand their diverse user base and deliver more personalized experiences.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Problem Analysis */}
      <div className="mb-16 space-y-6">
        <h2 className="text-3xl font-bold">The Challenge</h2>
        <p className="text-xl text-muted-foreground">
          Our analysis identified several key issues that BuuPass was facing due to their lack of customer segmentation.
        </p>
        
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="h-5 w-5 text-primary" />
                Generic User Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                BuuPass was offering the same experience to all users, regardless of their travel preferences, frequency, or budget. This resulted in missed opportunities to tailor offerings to specific customer needs.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <LineChart className="h-5 w-5 text-primary" />
                Ineffective Marketing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Marketing campaigns were broad and untargeted, leading to lower conversion rates and higher acquisition costs. Without proper segmentation, BuuPass couldn't effectively allocate their marketing budget.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <TrendingUp className="h-5 w-5 text-primary" />
                Limited Customer Loyalty
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Without understanding different customer types and their specific needs, BuuPass struggled to implement effective loyalty programs and retention strategies, resulting in higher churn rates.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Our Approach */}
      <div className="mb-16 space-y-6">
        <h2 className="text-3xl font-bold">Our Approach</h2>
        <p className="text-xl text-muted-foreground">
          We implemented a comprehensive customer segmentation strategy using advanced data analytics and machine learning.
        </p>
        
        <Tabs defaultValue="data" className="mt-8">
          <TabsList className="grid w-full grid-cols-4 md:w-[600px]">
            <TabsTrigger value="data">Data Collection</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
            <TabsTrigger value="segmentation">Segmentation</TabsTrigger>
            <TabsTrigger value="implementation">Implementation</TabsTrigger>
          </TabsList>
          <TabsContent value="data" className="mt-6 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5 text-primary" />
                    Data Audit & Collection
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We began by conducting a comprehensive audit of BuuPass's existing data and implementing additional tracking to fill gaps:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Analyzed 18 months of historical booking data across all transportation types</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Implemented enhanced user behavior tracking on web and mobile platforms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Conducted customer surveys to gather qualitative insights on preferences and pain points</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Filter className="h-5 w-5 text-primary" />
                    Data Enrichment
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We enriched BuuPass's customer data with additional contextual information:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Integrated demographic data to understand regional travel patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Added seasonal and event-based context to identify travel motivations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Incorporated economic indicators to understand price sensitivity by region</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="analysis" className="mt-6 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Behavioral Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We conducted in-depth analysis of customer behavior patterns:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Analyzed booking frequency, preferred transportation modes, and typical routes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Identified price sensitivity thresholds across different customer groups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Mapped seasonal travel patterns and advance booking behaviors</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-5 w-5 text-primary" />
                    Predictive Modeling
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We developed predictive models to understand customer value and behavior:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Created customer lifetime value (CLV) models to identify high-value segments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Developed churn prediction models to identify at-risk customers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Built recommendation engines based on travel patterns and preferences</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="segmentation" className="mt-6 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Segments className="h-5 w-5 text-primary" />
                    Segment Identification
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Based on our analysis, we identified key customer segments:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Developed a multi-dimensional segmentation framework based on behavior, value, and needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Used cluster analysis to identify natural groupings in the customer base</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Validated segments through qualitative research and stakeholder workshops</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Map className="h-5 w-5 text-primary" />
                    Segment Mapping
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We created detailed profiles for each customer segment:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Developed comprehensive personas for each segment with key characteristics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Mapped customer journeys specific to each segment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Identified key opportunities for personalization and targeted marketing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="implementation" className="mt-6 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Activation Strategy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We developed strategies to activate the segmentation across BuuPass's operations:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Created segment-specific marketing campaigns and messaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Developed personalized user experiences for the website and mobile app</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Designed targeted loyalty programs for high-value segments</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Ongoing Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We implemented systems for continuous refinement of the segmentation model:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Set up automated data pipelines for real-time segment assignment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Established KPIs to measure the effectiveness of segmentation strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Created a quarterly review process to refine segments based on new data</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Customer Segments */}
      <Card className="mb-16">
        <CardHeader>
          <CardTitle className="text-2xl">Key Customer Segments</CardTitle>
          <CardDescription>
            Our analysis identified five distinct customer segments with unique characteristics and needs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4 rounded-lg border p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Bus className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Business Travelers</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Segment Size</span>
                  <span className="font-medium">18%</span>
                </div>
                <Progress value={18} className="h-2" />
                <div className="flex items-center justify-between text-sm">
                  <span>Customer Value</span>
                  <span className="font-medium">High</span>
                </div>
                <Progress value={85} className="h-2" />
                <div className="flex items-center justify-between text-sm">
                  <span>Booking Frequency</span>
                  <span className="font-medium">Weekly/Bi-weekly</span>
                </div>
                <Progress value={90} className="h-2" />
              </div>
              <div className="space-y-1 text-sm">
                <p className="font-medium">Key Characteristics:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 text-primary" />
                    <span>Regular intercity travel for work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 text-primary" />
                    <span>Value reliability and convenience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 text-primary" />
                    <span>Less price sensitive, often expense accounts</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4 rounded-lg border p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Weekend Travelers</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Segment Size</span>
                  <span className="font-medium">27%</span>
                </div>
                <Progress value={27} className="h-2" />
                <div className="flex items-center justify-between text-sm">
                  <span>Customer Value</span>
                  <span className="font-medium">Medium</span>
                </div>
                <Progress value={60} className="h-2" />
                <div className="flex items-center justify-between text-sm">
                  <span>Booking Frequency</span>
                  <span className="font-medium">Monthly</span>
                </div>
                <Progress value={50} className="h-2" />
              </div>
              <div className="space-y-1 text-sm">
                <p className="font-medium">Key Characteristics:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 text-primary" />
                    <span>Travel for leisure and family visits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 text-primary" />
                    <span>Book primarily on weekends and holidays</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 text-primary" />
                    <span>Moderately price sensitive</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4 rounded-lg border p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Train className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Budget Travelers</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Segment Size</span>
                  <span className="font-medium">32%</span>
                </div>
                <Progress value={32} className="h-2" />
                <div className="flex items-center justify-between text-sm">
                  <span>Customer Value</span>
                  <span className="font-medium">Low-Medium</span>
                </div>
                <Progress value={40} className="h-2" />
                <div className="flex items-center justify-between text-sm">
                  <span>Booking Frequency</span>
                  <span className="font-medium">Quarterly</span>
                </div>
                <Progress value={25} className="h-2" />
              </div>
              <div className="space-y-1 text-sm">
                <p className="font-medium">Key Characteristics:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 text-primary" />
                    <span>Highly price sensitive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 text-primary" />
                    <span>Willing to compromise on comfort for savings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 text-primary" />
                    <span>Often book well in advance for better rates</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4 rounded-lg border p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Plane className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Premium Travelers</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Segment Size</span>
                  <span className="font-medium">8%</span>
                </div>
                <Progress value={8} className="h-2" />
                <div className="flex items-center justify-between text-sm">
                  <span>Customer Value</span>
                  <span className="font-medium">Very High</span>
                </div>
                <Progress value={95} className="h-2" />
                <div className="flex items-center justify-between text-sm">
                  <span>Booking Frequency</span>
                  <span className="font-medium">Monthly</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div className="space-y-1 text-sm">
                <p className="font-medium">Key Characteristics:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 text-primary" />
                    <span>Prefer premium services and comfort</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 text-primary" />
                    <span>Prefer premium services and comfort</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 text-primary" />
                    <span>Not price sensitive, value time and experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 text-primary" />
                    <span>Often book flights and first-class train options</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4 rounded-lg border p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Map className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Occasional Travelers</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Segment Size</span>
                  <span className="font-medium">15%</span>
                </div>
                <Progress value={15} className="h-2" />
                <div className="flex items-center justify-between text-sm">
                  <span>Customer Value</span>
                  <span className="font-medium">Low</span>
                </div>
                <Progress value={20} className="h-2" />
                <div className="flex items-center justify-between text-sm">
                  <span>Booking Frequency</span>
                  <span className="font-medium">1-2 times yearly</span>
                </div>
                <Progress value={10} className="h-2" />
              </div>
              <div className="space-y-1 text-sm">
                <p className="font-medium">Key Characteristics:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 text-primary" />
                    <span>Travel for special occasions or emergencies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 text-primary" />
                    <span>Less familiar with booking process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-3 w-3 text-primary" />
                    <span>Need more guidance and support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="mb-16 space-y-6">
        <h2 className="text-3xl font-bold">Results & Impact</h2>
        <p className="text-xl text-muted-foreground">
          Our customer segmentation strategy delivered significant improvements across all key performance indicators.
        </p>
        
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          <Card className="text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-5xl font-bold text-primary">32%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Increase in Conversion Rate</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-5xl font-bold text-primary">47%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Increase in Customer Retention</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-5xl font-bold text-primary">28%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Reduction in Acquisition Cost</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-5xl font-bold text-primary">53%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Increase in Repeat Bookings</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Testimonial */}
      <Card className="mb-16 border-primary/20 bg-[#e6f7ff]/50">
        <CardContent className="pt-6">
          <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
            <div className="flex flex-col items-center justify-center">
              <Avatar className="h-24 w-24 border-4 border-background">
                <AvatarImage src="/images/james-kimani-buupass.jpg?height=96&width=96" alt="Client" />
                <AvatarFallback>JK</AvatarFallback>
              </Avatar>
              <h3 className="mt-4 text-lg font-semibold">James Kimani</h3>
              <p className="text-sm text-muted-foreground">Chief Marketing Officer, BuuPass</p>
            </div>
            <div className="flex flex-col justify-center">
              <div className="space-y-4">
                <p className="text-lg italic text-muted-foreground">
                  "The customer segmentation work has completely transformed how we approach our business. Before, we were treating all customers the same way, missing opportunities to deliver personalized experiences. Now, we understand our customers on a much deeper level and can tailor everything from our marketing to our user experience based on their specific needs and preferences. The results have been remarkable - higher conversion rates, better customer retention, and a significant increase in repeat bookings. This has been one of our most valuable strategic investments."
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
          <CardDescription>
            Lessons from our successful customer segmentation project with BuuPass
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <h3 className="font-semibold">Data-Driven Decisions</h3>
            <p className="text-sm text-muted-foreground">
              By leveraging comprehensive data analysis, we were able to identify natural customer segments that might not have been apparent through intuition alone, leading to more effective targeting.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Personalization Drives Growth</h3>
            <p className="text-sm text-muted-foreground">
              The significant improvements in conversion and retention demonstrate that customers respond positively to experiences tailored to their specific needs and preferences.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Continuous Refinement</h3>
            <p className="text-sm text-muted-foreground">
              Customer segments are not static; implementing systems for ongoing data collection and analysis ensures the segmentation model remains relevant as customer behaviors evolve.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="border-none bg-gradient-to-r from-[#e6f7ff] to-[#f0f9ff]">
        <CardHeader>
          <CardTitle className="text-2xl">Ready to unlock the power of customer segmentation?</CardTitle>
          <CardDescription>
            Let's discuss how our data-driven approach can help your business better understand and serve your customers.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="group">
            Start Your Segmentation Journey
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

