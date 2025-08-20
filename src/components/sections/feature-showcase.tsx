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
    icon: <Zap className="h-8 w-8 text-white" />,
    title: "سرعة فائقة",
    description:
      "استمتع بسرعة واستجابة لا مثيل لهما. تم تحسين تطبيقنا للأداء على أي جهاز.",
    image: "https://placehold.co/600x400.png",
    imageHint: "speed dashboard",
  },
  {
    icon: <BarChart className="h-8 w-8 text-white" />,
    title: "تحليلات ثاقبة",
    description:
      "احصل على رؤى قيمة من خلال لوحة التحكم التحليلية القوية الخاصة بنا. تتبع تقدمك واتخذ قرارات تستند إلى البيانات.",
    image: "https://placehold.co/600x400.png",
    imageHint: "analytics chart",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-white" />,
    title: "آمن بالتصميم",
    description:
      "بياناتك آمنة معنا. نحن نستخدم أحدث الإجراءات الأمنية لحماية معلوماتك.",
    image: "https://placehold.co/600x400.png",
    imageHint: "security shield",
  },
  {
    icon: <UserCheck className="h-8 w-8 text-white" />,
    title: "سهل الاستخدام",
    description:
      "واجهة نظيفة وبديهية تجعل تطبيقنا ممتعًا للاستخدام للجميع، من المبتدئين إلى الخبراء.",
    image: "https://placehold.co/600x400.png",
    imageHint: "user interface",
  },
];

export function FeatureShowcase() {
  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            الميزات الرئيسية
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            كل ما تحتاجه للنجاح. تطبيقنا مليء بالميزات القوية لمساعدتك على تحقيق
            أهدافك.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-[#fc46aa] text-white"
            >
              <CardHeader className="flex flex-row items-center gap-4 p-6">
                {feature.icon}
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-white/80 mb-4">
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
