"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building2, 
  Users, 
  Target, 
  Trophy, 
  TrendingUp,
  BarChart3,
  Rocket
} from "lucide-react";

export default function OnSpaceCaseStudy() {
  return (
    <Card className="w-full max-w-5xl mx-auto bg-gradient-to-b from-background to-secondary/20">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl font-bold tracking-tight">OnSpace</h2>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                Field Operations
              </Badge>
            </div>
            <p className="text-muted-foreground">
              Acquisition & Retention Strategy Enhancement
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
                <Building2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Company Focus</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Field team operations automation and data collection solutions
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Challenge</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Improve user acquisition and reduce customer churn rate
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
                65% increase in user retention and 45% growth in new signups
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="strategy" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="strategy">Strategy</TabsTrigger>
            <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
          </TabsList>
          <TabsContent value="strategy" className="space-y-4">
            <div className="grid gap-6 mt-4">
              <div className="flex items-start gap-4">
                <TrendingUp className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">User Journey Optimization</h4>
                  <p className="text-sm text-muted-foreground">
                    Redesigned onboarding flow and implemented targeted feature discovery
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <BarChart3 className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Data-Driven Engagement</h4>
                  <p className="text-sm text-muted-foreground">
                    Developed personalized usage analytics and proactive support system
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Rocket className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Growth Framework</h4>
                  <p className="text-sm text-muted-foreground">
                    Created scalable customer success program with milestone-based engagement
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="outcomes" className="space-y-4">
            <div className="grid gap-4 mt-4">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-xl">Key Metrics</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h5 className="font-medium text-primary">Acquisition</h5>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• 45% increase in trial-to-paid conversion</li>
                          <li>• 3x growth in qualified lead generation</li>
                          <li>• 30% reduction in CAC</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h5 className="font-medium text-primary">Retention</h5>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• 65% improvement in user retention</li>
                          <li>• 40% decrease in churn rate</li>
                          <li>• 85% customer satisfaction score</li>
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