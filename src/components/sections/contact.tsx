import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            تواصل معنا
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            هل لديك سؤال أو ترغب في العمل معنا؟ يسعدنا أن نسمع منك.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>أرسل لنا رسالة</CardTitle>
              <CardDescription>
                املأ النموذج وسنعاود الاتصال بك في أقرب وقت ممكن.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
          <div className="flex flex-col gap-8 justify-center">
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 text-primary p-3 rounded-lg">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">البريد الإلكتروني</h3>
                <p className="text-muted-foreground">
                  لا تتردد في التواصل عبر البريد الإلكتروني.
                </p>
                <a
                  href="mailto:contact@appintro.com"
                  className="text-primary font-medium hover:underline"
                >
                  contact@appintro.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 text-primary p-3 rounded-lg">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">الهاتف</h3>
                <p className="text-muted-foreground">
                  اتصل بنا للحصول على مساعدة فورية.
                </p>
                <a
                  href="tel:+1234567890"
                  className="text-primary font-medium hover:underline"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 text-primary p-3 rounded-lg">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">المكتب</h3>
                <p className="text-muted-foreground">
                  123 شارع الابتكار، مدينة التكنولوجيا، 12345
                </p>
                <a href="#" className="text-primary font-medium hover:underline">
                  الحصول على الاتجاهات
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
