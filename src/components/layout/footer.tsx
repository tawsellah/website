import { Rocket, Twitter, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-secondary/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4 items-start">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl"
            >
              <Rocket className="h-7 w-7 text-primary" />
              <span>AppIntro</span>
            </Link>
            <p className="text-muted-foreground">
              The future of apps is here. Join us on our journey.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-2">
            <div className="flex flex-col gap-3">
              <h4 className="font-bold">Product</h4>
              <Link
                href="/#features"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Features
              </Link>
              <Link
                href="/#about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/#contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold">Company</h4>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Our Vision
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Our Mission
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Our Values
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold">Social</h4>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Twitter
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AppIntro. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
