import Hero from "@/components/home/Hero";
import SearchBar from "@/components/home/SearchBar";
import Features from "@/components/home/Features"; // وارد کردن کامپوننت جدید
import TripSection from "@/components/home/TripSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* بخش تصویر اصلی */}
      <Hero />
      {/* نوار جستجو که کمی روی تصویر قرار می‌گیرد */}
      <div className="relative -mt-10 z-20">
        <SearchBar />
      </div>
      <Features /> {/* اینجا اضافه شود */}
      <TripSection />
      {/* بخش‌های بعدی مثل تورها را اینجا اضافه خواهیم کرد */}
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Trips</h2>
        {/* محل قرارگیری کارت‌ها */}
      </div>
    </main>
  );
}
