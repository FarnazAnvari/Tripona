import type { Metadata } from "next";
import { Inter } from "next/font/google"; // استفاده از فونت استاندارد و تمیز
import "./globals.css";
import Header from "@/components/layout/Header";

// تنظیم فونت برای کل پروژه
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Intrepid Travel Clone",
  description: "Adventure Travel & Tours",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-white text-brand-gray`}
      >
        {/* هدر در بالاترین سطح قرار می‌گیرد تا در همه صفحات باشد */}
        <Header />

        {/* محتوای اصلی صفحات اینجا رندر می‌شود */}
        {children}

        {/* در آینده Footer را اینجا اضافه می‌کنیم */}
      </body>
    </html>
  );
}
