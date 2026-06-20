import Link from "next/link";
import { Heart, User, Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* بخش سمت چپ: لوگو و ناوبری */}
        <div className="flex items-center gap-10">
          {/* لوگوی اصلاح شده */}
          <Link href="/" className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="#e31c23" />
              <path
                d="M50 20 L50 80 M30 50 L70 50 M35 35 L65 65 M35 65 L65 35"
                stroke="white"
                strokeWidth="8"
                fill="none"
              />
            </svg>

            <span className="text-[#e31c23] text-[26px] font-bold tracking-tighter">
              Intrepid
            </span>
          </Link>

          {/* منوی اصلی */}
          <nav className="hidden lg:flex items-center gap-7">
            {["Destinations", "Ways to travel", "Deals", "About"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-[15px] font-medium text-[#222] hover:text-brand-red transition-colors"
                >
                  {item}
                </Link>
              ),
            )}
          </nav>
        </div>

        {/* بخش سمت راست: آیکون‌ها */}
        <div className="flex items-center gap-5 text-gray-800">
          <Link href="#" className="hover:text-brand-red transition-colors">
            <Heart size={22} strokeWidth={1.5} />
          </Link>
          <Link href="#" className="hover:text-brand-red transition-colors">
            <User size={22} strokeWidth={1.5} />
          </Link>
          <Link href="#" className="hover:text-brand-red transition-colors">
            <Phone size={22} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </header>
  );
}
