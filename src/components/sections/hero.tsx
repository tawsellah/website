
"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { TermsAndConditions } from "@/components/terms-and-conditions";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Hero() {
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const handleDownload = (url: string) => {
    if (downloadUrl) {
      window.location.href = url;
    }
  };

  return (
    <>
      <AlertDialog
        onOpenChange={(open) => {
          if (!open) {
            setDownloadUrl(null);
          }
        }}
      >
        <section className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
          <div className="flex flex-col gap-6 items-start">
            <h1 className="text-4xl md:text-6xl font-bold font-headline leading-tight">
              <span className="text-primary">توصيلة</span>، مشوارك يبدأ من هنا.
            </h1>
            <p className="text-lg text-muted-foreground">
              هل تحتاج إلى توصيلة سريعة وموثوقة؟ تطبيق توصيلة يوصلك إلى وجهتك
              بأمان وراحة. حمّل التطبيق الآن وابدأ رحلتك الأولى.
            </p>
            <div className="flex flex-wrap gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="lg">
                    <svg
                      className="ml-2 h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3 20.999v-18l15 9-15 9z" />
                    </svg>
                    تحميل التطبيق اندرويد
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <AlertDialogTrigger asChild>
                    <DropdownMenuItem
                      onSelect={() => setDownloadUrl("/Tawseela_customer.apk")}
                    >
                      نسخة العميل
                    </DropdownMenuItem>
                  </AlertDialogTrigger>
                  <AlertDialogTrigger asChild>
                    <DropdownMenuItem
                      onSelect={() => setDownloadUrl("/Tawseela_driver.apk")}
                    >
                      نسخة السائق
                    </DropdownMenuItem>
                  </AlertDialogTrigger>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button size="lg" variant="secondary" disabled>
                <svg
                  className="ml-2 h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.167 12.155c0-3.953-2.138-5.32-5.122-5.32-2.934 0-4.664 2.063-5.833 2.063-1.22 0-3.565-2.03-5.21-2.03-.12 0-2.83 1.252-2.83 5.513 0 2.313.91 4.88 2.063 6.44.96 1.3 1.954 3.55 3.73 3.55 1.745 0 2.375-1.162 4.74-1.162 2.333 0 2.862 1.162 4.752 1.162 1.954 0 2.9-2.313 3.743-3.64.91-1.428 1.15-3.46 1.15-4.576zm-3.68-8.522c1.08-.18 2.34-1.6 2.34-3.23 0-.15-.015-.3-.046-.44-.99.045-2.375 1.147-3.218 2.313-.765.99-1.365 2.4-1.12 3.848.06.39.15.765.285 1.12 1.05-1.282 2.375-3.098 1.76-3.61z" />
                </svg>
                تحميل IOS قريبا
              </Button>
            </div>
          </div>
          <div className="relative aspect-square">
            <Image
              src="https://res.cloudinary.com/dorbgzcrz/image/upload/v1755657554/qqhtdzxhpehier64uxft.png"
              alt="لقطة شاشة لتطبيق توصيلة"
              fill
              className="rounded-2xl shadow-2xl object-cover"
              data-ai-hint="app mockup"
            />
          </div>
        </section>
        <AlertDialogContent className="max-w-3xl">
          <AlertDialogHeader>
            <AlertDialogTitle>الشروط والأحكام</AlertDialogTitle>
            <AlertDialogDescription>
              يرجى قراءة الشروط والأحكام بعناية قبل تحميل التطبيق.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <ScrollArea className="h-96 w-full rounded-md border p-4">
            <TermsAndConditions />
          </ScrollArea>
          <AlertDialogFooter>
            <AlertDialogCancel>إلغاء</AlertDialogCancel>
            <AlertDialogAction onClick={() => handleDownload(downloadUrl!)}>
              أوافق وأرغب بالتحميل
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
