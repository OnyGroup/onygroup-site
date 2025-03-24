"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bus, 
  Target, 
  Trophy,
  UserCheck,
  LineChart,
  Zap
} from "lucide-react";

export default function BuuPassCaseStudy() {
  return (
    <Card className="w-full max-w-5xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/20">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl font-bold tracking-tight">BuuPass</h2>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                Travel Tech
              </Badge>
            </div>
            <p className="text-muted-foreground">
              Customer Segmentation & Personalization Strategy
            </p>
          </div>
          <Badge variant="secondary" className="text-sm">
            Case Study
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2">
                <Bus className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Company Focus</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Digital booking platform for buses, trains & flights across Kenya
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Challenge</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Improve customer targeting and personalization at scale
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Results</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                52% increase in booking conversion and 35% higher customer engagement
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="approach" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="approach">Our Approach</TabsTrigger>
            <TabsTrigger value="impact">Impact</TabsTrigger>
          </TabsList>
          <TabsContent value="approach" className="space-y-4">
            <div className="grid gap-6 mt-4">
              <div className="flex items-start gap-4">
                <UserCheck className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Advanced Segmentation Model</h4>
                  <p className="text-sm text-muted-foreground">
                    Developed ML-powered customer segments based on travel patterns and preferences
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <LineChart className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Behavioral Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    Implemented real-time tracking of booking patterns and user journey analysis
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Zap className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Dynamic Recommendations</h4>
                  <p className="text-sm text-muted-foreground">
                    Created personalized route suggestions and pricing strategies per segment
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="impact" className="space-y-4">
            <div className="grid gap-4 mt-4">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-xl">Key Achievements</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h5 className="font-medium text-primary">Customer Metrics</h5>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• 52% higher booking conversion rate</li>
                          <li>• 35% increase in customer engagement</li>
                          <li>• 28% improvement in customer satisfaction</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h5 className="font-medium text-primary">Business Impact</h5>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• 4 distinct customer segments identified</li>
                          <li>• 45% reduction in marketing costs</li>
                          <li>• 30% increase in repeat bookings</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}