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
            قصتنا ووعدنا
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            وُلد AppIntro من فكرة بسيطة: يجب أن تكون التكنولوجيا عامل تمكين، لا
            عائق. نحن ملتزمون بتقديم حلول ليست قوية فحسب، بل ممتعة في
            الاستخدام أيضًا.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mt-24">
          <div>
            <h2 className="text-3xl font-bold font-headline flex items-center gap-3">
              <Eye className="h-8 w-8 text-primary" />
              رؤيتنا
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              نتصور مستقبلاً يمكن فيه لأي شخص لديه فكرة أن يحييها، بغض النظر
              عن خبرته التقنية. هدفنا هو إضفاء الطابع الديمقراطي على الإبداع
              وتمكين جيل جديد من المبتكرين. نسعى جاهدين لنكون الشرارة التي
              تشعل الإبداع والمحرك الذي يدفع التقدم، وبناء مجتمع عالمي مترابط
              بشغف وهدف مشترك.
            </p>
          </div>
          <div className="relative aspect-video">
            <Image
              src="https://placehold.co/800x450.png"
              alt="الرؤية"
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
              alt="المهمة"
              fill
              className="rounded-xl shadow-lg object-cover"
              data-ai-hint="team collaboration"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold font-headline flex items-center gap-3">
              <Target className="h-8 w-8 text-primary" />
              مهمتنا
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              مهمتنا هي تقديم منصة سهلة الاستخدام وموثوقة بشكل استثنائي تزيل
              العقبات من العملية الإبداعية. نحن ملتزمون بالتحسين المستمر،
              مدفوعين بتعليقات المستخدمين وسعي لا هوادة فيه لتحقيق التميز،
              مما يضمن تطور أدواتنا مع احتياجات مجتمعنا.
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
              هذه المبادئ هي أساس ثقافتنا وتوجه كل قرار نتخذه.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>المستخدم أولاً</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  مستخدمونا في قلب كل شيء. نحن نستمع ونتعلم ونبني من أجلهم.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-primary mb-2" />
                <CardTitle>ابتكر بجرأة</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  نحن نتبنى التحديات، ونتساءل عن الوضع الراهن، ولا نخشى شق
                  طرق جديدة.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Package className="h-8 w-8 text-primary mb-2" />
                <CardTitle>قدم الجودة</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  نحن نلتزم بأعلى معايير الحرفية والموثوقية.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
