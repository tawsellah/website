import { Rocket, Twitter, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4 items-start">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl"
            >
              <Rocket className="h-7 w-7 text-primary" />
              <span>توصيلة</span>
            </Link>
            <p className="text-muted-foreground">
              مستقبل التطبيقات هنا. انضم إلينا في رحلتنا.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-2">
            <div className="flex flex-col gap-3">
              <h4 className="font-bold">المنتج</h4>
              <Link
                href="/#features"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                الميزات
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                من نحن
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                تواصل معنا
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold">الشركة</h4>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                رؤيتنا
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                مهمتنا
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                قيمنا
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold">التواصل الاجتماعي</h4>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                تويتر
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
            &copy; {new Date().getFullYear()} توصيلة. جميع الحقوق محفوظة.
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
