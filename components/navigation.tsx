"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu } from "lucide-react";

const services = [
  {
    title: "Digital & Growth Consulting",
    href: "/services/digital-growth",
    description: "Strategic consulting to accelerate your digital transformation journey",
  },
  {
    title: "SaaS & Tech Solutions",
    href: "/services/saas-tech",
    description: "Custom software solutions and SaaS products for your business needs",
  },
  {
    title: "BPO & Managed Services",
    href: "/services/bpo-managed",
    description: "End-to-end business process outsourcing and management",
  },
];

const company = [
  {
    title: "About Us",
    href: "/about",
    description: "Learn about our mission, vision, and values",
  },
  {
    title: "Careers",
    href: "/careers",
    description: "Join our team and make an impact in African tech",
  },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const MobileNavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      className="block py-2 text-lg text-foreground hover:text-primary"
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          Ony Group
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="space-x-2">

            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-4 p-6 md:w-[500px] md:grid-cols-2">
                  {services.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/portfolio" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Portfolio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}

            <NavigationMenuItem>
              <NavigationMenuTrigger>Company</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-4 p-6 md:w-[500px] md:grid-cols-2">
                  {company.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="https://yapahub.com" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Yapa Hub
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">Contact Us</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <h2 className="text-lg font-semibold mb-2">Company</h2>
                {company.map((item) => (
                  <MobileNavItem key={item.title} href={item.href}>
                    {item.title}
                  </MobileNavItem>
                ))}

                <h2 className="text-lg font-semibold mb-2 mt-6">Services</h2>
                {services.map((item) => (
                  <MobileNavItem key={item.title} href={item.href}>
                    {item.title}
                  </MobileNavItem>
                ))}

                <div className="space-y-4 mt-6">
                  <MobileNavItem href="/portfolio">Portfolio</MobileNavItem>
                  {/* <MobileNavItem href="/blog">Blog</MobileNavItem> */}
                  <MobileNavItem href="https://yapahub.com">Yapa Hub</MobileNavItem>
                </div>

                <Button asChild className="mt-6">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-2 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";