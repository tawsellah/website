import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Target, Heart } from "lucide-react";
import Link from "next/link";

const aboutItems = [
  {
    icon: <Eye className="h-8 w-8 text-white" />,
    title: "رؤيتنا",
    description:
      "تمكين المبدعين والمبتكرين من خلال توفير أدوات قوية وسهلة الوصول، وتعزيز عالم يمكن أن تزدهر فيه الأفكار العظيمة.",
  },
  {
    icon: <Target className="h-8 w-8 text-white" />,
    title: "مهمتنا",
    description:
      "بناء منصة بديهية وموثوقة وملهمة تبسط التعقيد وتطلق العنان للإمكانات الكاملة لمستخدمينا.",
  },
  {
    icon: <Heart className="h-8 w-8 text-white" />,
    title: "قيمنا",
    description:
      "نحن نسترشد بالتركيز على المستخدم، وشغف الابتكار، والالتزام بالنزاهة في كل ما نقوم به.",
  },
];

export function AboutSummary() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            من نحن
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            نحن فريق من المطورين والمصممين والمفكرين الشغوفين الذين يوحدهم هدف
            مشترك.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {aboutItems.map((item, index) => (
            <Card
              key={index}
              className="text-center flex flex-col items-center p-6 bg-[#fc46aa] text-white"
            >
              <CardHeader className="p-0 mb-4">{item.icon}</CardHeader>
              <CardContent className="p-0 flex flex-col gap-2">
                <CardTitle>{item.title}</CardTitle>
                <p className="text-white/80">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/about">اعرف المزيد عنا</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
