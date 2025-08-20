"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "يجب أن يتكون الاسم من حرفين على الأقل.",
  }),
  email: z.string().email({
    message: "يرجى إدخال عنوان بريد إلكتروني صالح.",
  }),
  message: z
    .string()
    .min(10, {
      message: "يجب أن تتكون الرسالة من 10 أحرف على الأقل.",
    })
    .max(500, {
      message: "لا يمكن أن يتجاوز طول الرسالة 500 حرف.",
    }),
});

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);

    console.log(values);

    toast({
      title: "تم إرسال الرسالة!",
      description: "شكرًا لتواصلك معنا. سنرد عليك قريبًا.",
    });

    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>الاسم</FormLabel>
              <FormControl>
                <Input placeholder="اسمك" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>البريد الإلكتروني</FormLabel>
              <FormControl>
                <Input placeholder="your.email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>الرسالة</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="أخبرنا كيف يمكننا المساعدة"
                  className="resize-none"
                  rows={6}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
          {isLoading ? "جار الإرسال..." : "إرسال الرسالة"}
        </Button>
      </form>
    </Form>
  );
}
