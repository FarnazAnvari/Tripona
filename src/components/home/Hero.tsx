export default function Hero() {
  return (
    <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
      {/* تصویر پس‌زمینه */}
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000"
        alt="Travel Destination"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* لایه تیره برای خوانایی بهتر متن (اختیاری) */}
      <div className="absolute inset-0 bg-black/20" />

      {/* متن روی تصویر */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold tracking-tight drop-shadow-lg">
          Adventure starts here
        </h1>
        <p className="text-white text-lg md:text-xl mt-4 font-medium drop-shadow-md">
          Explore the world with Tripona
        </p>
      </div>
    </div>
  );
}
