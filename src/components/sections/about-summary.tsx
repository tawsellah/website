import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Target, Heart } from "lucide-react";
import Link from "next/link";

const aboutItems = [
  {
    icon: <Eye className="h-8 w-8 text-primary" />,
    title: "Our Vision",
    description:
      "To empower creators and innovators by providing tools that are both powerful and accessible, fostering a world where great ideas can thrive.",
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Our Mission",
    description:
      "To build an intuitive, reliable, and inspiring platform that simplifies complexity and unlocks our users' full potential.",
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Our Values",
    description:
      "We are guided by user-centricity, a passion for innovation, and a commitment to integrity in everything we do.",
  },
];

export function AboutSummary() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Who We Are
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We are a team of passionate developers, designers, and thinkers
            united by a common goal.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {aboutItems.map((item, index) => (
            <Card
              key={index}
              className="text-center flex flex-col items-center p-6"
            >
              <CardHeader className="p-0 mb-4">{item.icon}</CardHeader>
              <CardContent className="p-0 flex flex-col gap-2">
                <CardTitle>{item.title}</CardTitle>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
