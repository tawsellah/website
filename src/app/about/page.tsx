import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, Target, Heart, Users, Shield, Award, Globe, Car } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="">
      <div className="container py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">
            قصتنا: رحلة توصيلة
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            بدأت "توصيلة" من فكرة بسيطة: جعل التنقل في مدننا أسهل، أسرع، وأكثر أمانًا للجميع. نحن نؤمن بأن التكنولوجيا يمكنها تحويل طريقة تنقلنا، وربط الناس بأماكنهم وأحبائهم بكفاءة وموثوقية.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mt-24">
          <div>
            <h2 className="text-3xl font-bold font-headline flex items-center gap-3">
              <Eye className="h-8 w-8 text-primary" />
              رؤيتنا
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              نتطلع إلى مستقبل تكون فيه المدن أكثر اتصالاً وأقل ازدحامًا. رؤيتنا هي أن نكون جزءًا من الحل، من خلال توفير شبكة نقل ذكية ومستدامة تخدم الملايين، وتقلل من الاعتماد على السيارات الخاصة وتجعل الحياة اليومية أبسط.
            </p>
          </div>
          <div className="relative aspect-video flex items-center justify-center bg-card rounded-xl shadow-lg">
            <Globe
              className="h-24 w-24 text-primary"
              strokeWidth={1.5}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mt-24">
          <div className="relative aspect-video order-last md:order-first flex items-center justify-center bg-card rounded-xl shadow-lg">
             <Car
              className="h-24 w-24 text-primary"
              strokeWidth={1.5}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold font-headline flex items-center gap-3">
              <Target className="h-8 w-8 text-primary" />
              مهمتنا
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              مهمتنا هي توفير منصة نقل آمنة وموثوقة وبأسعار معقولة. نحن ملتزمون بتمكين شركائنا السائقين من خلال توفير فرص اقتصادية مرنة، وتقديم أفضل تجربة لعملائنا في كل رحلة.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-headline flex items-center justify-center gap-3">
              <Heart className="h-8 w-8 text-primary" />
              قيمنا الأساسية
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              هذه المبادئ هي البوصلة التي توجه كل قراراتنا وأعمالنا في "توصيلة".
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="bg-[#fc46aa] text-white">
              <CardHeader>
                <Users className="h-8 w-8 text-white mb-2" />
                <CardTitle>العميل أولاً</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/80">
                  احتياجات عملائنا وراحتهم هي أولويتنا القصوى في كل ما نقوم به.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-[#fc46aa] text-white">
              <CardHeader>
                <Shield className="h-8 w-8 text-white mb-2" />
                <CardTitle>الأمان فوق كل شيء</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/80">
                  نحن ملتزمون بتطبيق أعلى معايير الأمان لضمان رحلات آمنة لعملائنا وشركائنا.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-[#fc46aa] text-white">
              <CardHeader>
                <Award className="h-8 w-8 text-white mb-2" />
                <CardTitle>الجودة والابتكار</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/80">
                  نسعى باستمرار لتحسين خدماتنا وابتكار حلول جديدة لتلبية احتياجاتكم المتغيرة.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
