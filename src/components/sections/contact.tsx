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
    <section id="contact" className="py-20 md:py-32 bg-secondary/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question or want to work with us? We'd love to hear from you.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Fill out the form and we'll get back to you as soon as possible.
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
                <h3 className="text-lg font-bold">Email</h3>
                <p className="text-muted-foreground">
                  Don't hesitate to reach out via email.
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
                <h3 className="text-lg font-bold">Phone</h3>
                <p className="text-muted-foreground">
                  Give us a call for immediate assistance.
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
                <h3 className="text-lg font-bold">Office</h3>
                <p className="text-muted-foreground">
                  123 Innovation Drive, Tech City, 12345
                </p>
                <a href="#" className="text-primary font-medium hover:underline">
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
