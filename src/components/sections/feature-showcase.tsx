import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Zap, Map, ShieldCheck, CreditCard, Smartphone, MapPinned, UserCheck, Wallet } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <Zap className="h-8 w-8 text-white" />,
    title: "حجز سريع وسهل",
    description:
      "اطلب رحلتك بلمسة زر. تطبيقنا يحدد موقعك تلقائيًا ويوصلك بأقرب سائق في دقائق.",
    showcaseIcon: <Smartphone className="h-24 w-24 text-primary" strokeWidth={1.5} />,
  },
  {
    icon: <Map className="h-8 w-8 text-white" />,
    title: "تتبع مباشر للرحلة",
    description:
      "شاهد سائقك وهو يقترب على الخريطة في الوقت الفعلي. لا مزيد من الانتظار في المجهول.",
    showcaseIcon: <MapPinned className="h-24 w-24 text-primary" strokeWidth={1.5} />,
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-white" />,
    title: "الأمان أولويتنا",
    description:
      "جميع سائقينا معتمدون وتتم مراجعة بياناتهم. يمكنك مشاركة تفاصيل رحلتك مع الأصدقاء والعائلة.",
    showcaseIcon: <UserCheck className="h-24 w-24 text-primary" strokeWidth={1.5} />,
  },
  {
    icon: <CreditCard className="h-8 w-8 text-white" />,
    title: "أسعار شفافة",
    description:
      "اعرف تكلفة رحلتك مقدمًا قبل تأكيد الحجز. لا مفاجآت، وادفع نقدًا أو بالبطاقة بسهولة.",
    showcaseIcon: <Wallet className="h-24 w-24 text-primary" strokeWidth={1.5} />,
  },
];

export function FeatureShowcase() {
  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            لماذا تختار توصيلة؟
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            نحن نقدم لك أكثر من مجرد رحلة. نمنحك تجربة تنقل موثوقة ومريحة، مصممة خصيصًا لك.
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
                <div className="aspect-video relative flex items-center justify-center bg-card rounded-lg">
                  {feature.showcaseIcon}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
