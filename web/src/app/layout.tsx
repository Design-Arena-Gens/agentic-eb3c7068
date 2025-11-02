import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "خاخ واقي الشمس SPF 50 | حماية متكاملة للوجه والجسم",
  description:
    "اكتشف خاخ واقي الشمس بعامل حماية 50 بتقنية الدرع النباتي للحماية من الأشعة فوق البنفسجية وترطيب يدوم 12 ساعة.",
  openGraph: {
    title: "خاخ واقي الشمس SPF 50 | حماية متكاملة للوجه والجسم",
    description:
      "حماية فورية، لمسة مخملية، وترطيب يدوم طوال اليوم للوجه والجسم.",
    locale: "ar_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "خاخ واقي الشمس SPF 50",
    description:
      "درعك اليومي ضد الشمس مع ترطيب عميق ولمسة نهائية مخملية بدون لمعان.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} antialiased bg-orange-50/40`}>
        {children}
      </body>
    </html>
  );
}
