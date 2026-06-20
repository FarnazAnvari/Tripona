import { Search, MapPin, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[540px] overflow-visible">
      {/* تصویر پس‌زمینه */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000"
          alt="Travel Adventure"
          className="w-full h-full object-cover"
        />
        {/* لایه تیره روی عکس برای خوانایی متن */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* محتوای روی عکس */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 h-full flex flex-col justify-center">
        <h2 className="text-white text-6xl md:text-7xl font-bold mb-6 tracking-tight">
          Last minute deals
        </h2>
        <button className="bg-brand-red text-white px-8 py-3 rounded-md font-bold text-lg w-fit hover:bg-red-700 transition">
          Explore trips
        </button>
      </div>

      {/* نوار جستجوی شناور (Floating Search Bar) */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 z-20">
        <div className="bg-white rounded-full shadow-2xl p-2 flex items-center border border-gray-100">
          {/* مقصد */}
          <div className="flex-1 flex items-center gap-3 px-6 py-2 border-r border-gray-200">
            <Search size={20} className="text-gray-400" />
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase text-gray-500">
                Search wildlife
              </span>
              <input
                type="text"
                placeholder="Where to?"
                className="outline-none text-sm font-semibold placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* تاریخ */}
          <div className="flex-1 flex items-center gap-3 px-6 py-2 border-r border-gray-200">
            <Calendar size={20} className="text-gray-400" />
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase text-gray-500">
                Dates
              </span>
              <input
                type="text"
                placeholder="Start date — End date"
                className="outline-none text-sm font-semibold placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* دکمه جستجو */}
          <button className="bg-brand-red text-white px-10 py-4 rounded-full font-bold text-base hover:bg-red-700 transition ml-2">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
