import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            تواصل معنا
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            هل لديك سؤال أو ترغب في العمل معنا؟ يسعدنا أن نسمع منك.
          </p>
        </div>
        <div className="grid lg:grid-cols-1 gap-12">
          <Card className="bg-[#fc46aa] text-white">
            <CardHeader>
              <CardTitle>أرسل لنا رسالة</CardTitle>
              <CardDescription className="text-white/80">
                املأ النموذج وسنعاود الاتصال بك في أقرب وقت ممكن.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
