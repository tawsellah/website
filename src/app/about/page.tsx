import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, Target, Heart, Users, Lightbulb, Package } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-secondary/50">
      <div className="container py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">
            Our Story and Our Promise
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            AppIntro was born from a simple idea: technology should be an
            enabler, not a barrier. We are dedicated to crafting solutions that
            are not only powerful but also a joy to use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mt-24">
          <div>
            <h2 className="text-3xl font-bold font-headline flex items-center gap-3">
              <Eye className="h-8 w-8 text-primary" />
              Our Vision
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We envision a future where anyone with an idea can bring it to
              life, regardless of their technical expertise. Our goal is to
              democratize creation and empower a new generation of innovators.
              We strive to be the spark that ignites creativity and the engine
              that powers progress, building a global community connected by
              shared passion and purpose.
            </p>
          </div>
          <div className="relative aspect-video">
            <Image
              src="https://placehold.co/800x450.png"
              alt="Vision"
              fill
              className="rounded-xl shadow-lg object-cover"
              data-ai-hint="future landscape"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mt-24">
          <div className="relative aspect-video order-last md:order-first">
            <Image
              src="https://placehold.co/800x450.png"
              alt="Mission"
              fill
              className="rounded-xl shadow-lg object-cover"
              data-ai-hint="team collaboration"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold font-headline flex items-center gap-3">
              <Target className="h-8 w-8 text-primary" />
              Our Mission
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our mission is to deliver an exceptionally intuitive and reliable
              platform that removes friction from the creative process. We are
              committed to continuous improvement, driven by user feedback and a
              relentless pursuit of excellence, ensuring our tools evolve with
              the needs of our community.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-headline flex items-center justify-center gap-3">
              <Heart className="h-8 w-8 text-primary" />
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              These principles are the foundation of our culture and guide every
              decision we make.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>User-First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our users are at the heart of everything. We listen, learn,
                  and build for them.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Innovate Boldly</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We embrace challenges, question the status quo, and are not
                  afraid to forge new paths.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Package className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Deliver Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We hold ourselves to the highest standards of craftsmanship
                  and reliability.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
