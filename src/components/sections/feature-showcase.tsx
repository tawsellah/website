import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Zap, BarChart, ShieldCheck, UserCheck } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Blazing Fast",
    description:
      "Experience unparalleled speed and responsiveness. Our app is optimized for performance on any device.",
    image: "https://placehold.co/600x400.png",
    imageHint: "speed dashboard",
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "Insightful Analytics",
    description:
      "Gain valuable insights with our powerful analytics dashboard. Track your progress and make data-driven decisions.",
    image: "https://placehold.co/600x400.png",
    imageHint: "analytics chart",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Secure by Design",
    description:
      "Your data is safe with us. We use state-of-the-art security measures to protect your information.",
    image: "https://placehold.co/600x400.png",
    imageHint: "security shield",
  },
  {
    icon: <UserCheck className="h-8 w-8 text-primary" />,
    title: "Easy to Use",
    description:
      "A clean and intuitive interface that makes our app a joy to use for everyone, from beginners to experts.",
    image: "https://placehold.co/600x400.png",
    imageHint: "user interface",
  },
];

export function FeatureShowcase() {
  return (
    <section id="features" className="py-20 md:py-32 bg-secondary/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Key Features
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to succeed. Our app is packed with powerful
            features to help you achieve your goals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <CardHeader className="flex flex-row items-center gap-4 p-6">
                {feature.icon}
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-muted-foreground mb-4">
                  {feature.description}
                </p>
                <div className="aspect-video relative">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="rounded-lg object-cover"
                    data-ai-hint={feature.imageHint}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
