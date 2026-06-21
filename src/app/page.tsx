import Hero from "@/components/home/Hero";
import SearchBar from "@/components/home/SearchBar";
import Features from "@/components/home/Features"; // وارد کردن کامپوننت جدید
import TripSection from "@/components/home/TripSection";
import Newsletter from "@/components/home/Newsletter";

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
      <div>
        <Newsletter />
        <h2>Fooooter</h2>
      </div>
    </main>
  );
}
