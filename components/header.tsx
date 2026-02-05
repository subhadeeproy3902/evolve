"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const navItems = [
    {
      name: "Use Cases",
      link: "/services",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Tools",
      link: "/tools",
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar className="z-150">
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-3">
          <NavbarButton variant="gradient" className="rounded-lg! font-medium">
            <Link
              prefetch={false}
              href="/login"
              className="flex items-center justify-center gap-2 px-2"
            >
              Login
            </Link>
          </NavbarButton>

          <NavbarButton
            variant="dark"
            className="rounded-lg! text-foreground bg-secondary hover:bg-secondary/60 font-medium"
          >
            <Link
              href="/register"
              prefetch={false}
              className="flex items-center justify-center gap-2"
            >
              Sign Up
            </Link>
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center gap-4">
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative flex items-center justify-between text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
              {item.name === "Tools" && (
                <button className="group border-primary bg-primary pointer-events-none relative z-50 ml-1 inline-block cursor-pointer rounded-md border-2 px-1 py-0.5 text-[9px] font-medium text-white duration-1000 select-none hover:shadow-lg hover:shadow-red-500/50">
                  <span className="absolute top-0 left-0 size-full rounded-sm border border-dashed border-white shadow-inner shadow-white/30 group-active:shadow-white/10"></span>
                  <span className="absolute top-0 left-0 size-full rotate-180 rounded-sm border-white shadow-inner shadow-black/30 group-active:shadow-black/10"></span>
                  New
                </button>
              )}
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <NavbarButton
              variant="gradient"
              className="flex w-full items-center justify-center gap-1"
            >
              <Link
                prefetch={false}
                href="/login"
                className="flex items-center justify-center gap-2 px-2"
              >
                Login
              </Link>
            </NavbarButton>

            <NavbarButton
              variant="dark"
              className="flex w-full items-center justify-center gap-1 text-foreground bg-secondary hover:bg-secondary/60"
            >
              <Link
                href="/register"
                prefetch={false}
                className="flex items-center justify-center gap-2"
              >
                Sign Up
              </Link>
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
