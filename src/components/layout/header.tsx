
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Rocket } from "lucide-react";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/#features", label: "الميزات" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "تواصل معنا" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">افتح القائمة</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-bold text-lg"
                >
                  <Rocket className="h-6 w-6 text-primary" />
                  <span>توصيلة</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="w-full">ابدأ الآن</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuItem>
                      <Link href="#" className="w-full text-right">
                        كعميل
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="#" className="w-full text-right">
                        كسائق
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>ابدأ الآن</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>
                <Link href="#" className="w-full text-right">
                  كعميل
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#" className="w-full text-right">
                  كسائق
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Rocket className="h-6 w-6 text-primary" />
          <span>توصيلة</span>
        </Link>
      </div>
    </header>
  );
}
