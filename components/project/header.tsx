"use client";
import { useScroll } from "@/hooks/use-scroll";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";
import { NavbarLogo } from "../ui/resizable-navbar";
import { ChevronDown, Github, Globe, Lock } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";

export const navLinks = [
  {
    label: "Features",
    href: "#",
  },
  {
    label: "Pricing",
    href: "#",
  },
  {
    label: "About",
    href: "#",
  },
];

export function Header() {
  const scrolled = useScroll(10);

  return (
    <header
      className={cn("sticky top-0 z-50 w-full border-border border-b", {
        "border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50":
          scrolled,
      })}
    >
      <nav className="mx-auto flex h-14 w-full items-center justify-between px-4">
        <div className="rounded-md p-2 hidden items-center justify-between gap-1 md:flex">
          <NavbarLogo imageClassName="w-6! h-6! mr-2" textClassName="hidden!" />
					<div className="flex items-center gap-1.5 text-muted-foreground">
            <span>subhadeeproy3902</span>
          </div>
          <span className="text-muted-foreground">/</span>
          <div className="flex items-center gap-1.5 text-foreground">
            <span>Devops Saas</span>
            <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Button variant="outline" size="smaller">
            <Lock className="h-4 w-4" />
            Share
          </Button>
          <Button size="smaller">
            <Globe className="h-4 w-4" /> Publish
          </Button>
          <Avatar>
            <AvatarImage src="/subha.jpg" />
          </Avatar>
        </div>
        <MobileNav />
      </nav>
    </header>
  );
}
