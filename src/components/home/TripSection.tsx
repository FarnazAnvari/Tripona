"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const cardWidth = 270;
const gap = 20;
const move = cardWidth + gap;

const tripData = {
  "Only Tripona experiences": [
    {
      id: 1,
      image: "/images/trips/trip1.jpg",
      experience: "Kinabalu summit at sunrise",
      duration: "11 days",
      title: "Sabah Adventure",
      originalPrice: "3170",
      currentPrice: "2536",
    },
    {
      id: 2,
      image: "/images/trips/trip2.jpg",
      experience: "Cappadocia weaving",
      duration: "8 days",
      title: "Turkey Highlights",
      originalPrice: "1840",
      currentPrice: "1380",
    },
    {
      id: 3,
      image: "/images/trips/trip3.jpg",
      experience: "Galapagos swim stops",
      duration: "8 days",
      title: "Galapagos Island Hopping",
      originalPrice: "3125",
      currentPrice: "2257",
    },
    {
      id: 4,
      image: "/images/trips/trip4.jpg",
      experience: "Late night bites",
      duration: "10 days",
      title: "Vietnam Express Southbound",
      currentPrice: "1465",
    },
    {
      id: 5,
      image: "/images/trips/trip5.jpg",
      experience: "Learning from locals",
      duration: "12 days",
      title: "Japan: Land of the Rising Sun",
      originalPrice: "5330",
      currentPrice: "4264",
    },
  ],

  "New trips": [
    {
      id: 11,
      image: "/images/trips/trip11.jpg",
      experience: "Northern lights hunting",
      duration: "7 days",
      title: "Arctic Norway Explorer",
      currentPrice: "2990",
    },
    {
      id: 12,
      image: "/images/trips/trip12.jpg",
      experience: "Andes mountain trails",
      duration: "9 days",
      title: "Peru Adventure Trek",
      originalPrice: "2490",
      currentPrice: "1990",
    },
    {
      id: 13,
      image: "/images/trips/trip13.jpg",
      experience: "Safari under the stars",
      duration: "8 days",
      title: "Kenya Wildlife Safari",
      currentPrice: "3290",
    },
    {
      id: 14,
      image: "/images/trips/trip14.jpg",
      experience: "Mediterranean island hopping",
      duration: "10 days",
      title: "Greek Islands Escape",
      originalPrice: "2690",
      currentPrice: "2190",
    },
    {
      id: 15,
      image: "/images/trips/trip15.jpg",
      experience: "Rainforest wildlife",
      duration: "6 days",
      title: "Costa Rica Nature Break",
      currentPrice: "1750",
    },
  ],

  "Popular trips": [
    {
      id: 19,
      image: "/images/trips/trip19.jpg",
      experience: "Classic Inca Trail",
      duration: "8 days",
      title: "Inca Trail Express",
      originalPrice: "2250",
      currentPrice: "1890",
    },
    {
      id: 20,
      image: "/images/trips/trip20.jpg",
      experience: "Big five safari",
      duration: "10 days",
      title: "Serengeti & Ngorongoro Safari",
      currentPrice: "3490",
    },
    {
      id: 21,
      image: "/images/trips/trip21.jpg",
      experience: "Temples at sunrise",
      duration: "9 days",
      title: "Cambodia & Vietnam Discovery",
      originalPrice: "1980",
      currentPrice: "1590",
    },
    {
      id: 22,
      image: "/images/trips/trip22.jpg",
      experience: "Sailing the turquoise coast",
      duration: "8 days",
      title: "Turkey Sailing Adventure",
      currentPrice: "1740",
    },
    {
      id: 23,
      image: "/images/trips/trip23.jpg",
      experience: "Local food markets",
      duration: "12 days",
      title: "Best of Thailand",
      originalPrice: "2290",
      currentPrice: "1832",
    },
  ],
};

export default function TripSection() {
  const [activeTab, setActiveTab] = useState("Only Tripona experiences");
  const [index, setIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const sliderRef = useRef<HTMLDivElement | null>(null);

  const trips = useMemo(
    () => tripData[activeTab as keyof typeof tripData] || [],
    [activeTab],
  );

  const maxTranslate = Math.max(
    trips.length * cardWidth +
      Math.max(trips.length - 1, 0) * gap -
      containerWidth,
    0,
  );

  const currentTranslate = Math.min(index * move, maxTranslate);
  const canGoPrev = currentTranslate > 0;
  const canGoNext = currentTranslate < maxTranslate;

  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        setContainerWidth(sliderRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const next = () => {
    if (canGoNext) setIndex((i) => i + 1);
  };

  const prev = () => {
    if (canGoPrev) setIndex((i) => Math.max(i - 1, 0));
  };

  return (
    <section className="py-12 bg-white px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8 mb-8 overflow-x-auto">
          {Object.keys(tripData).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setIndex(0);
              }}
              className={`text-lg font-bold whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? "text-gray-900"
                  : "text-gray-400 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative group">
          {canGoPrev && (
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20
              w-10 h-10 flex items-center justify-center
              rounded-full bg-white/90 shadow-md
              opacity-0 group-hover:opacity-100
              hover:scale-110 transition"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          <div ref={sliderRef} className="overflow-hidden py-3">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentTranslate}px)`,
                gap: `${gap}px`,
              }}
            >
              {trips.map((trip) => (
                <div
                  key={trip.id}
                  style={{ width: `${cardWidth}px` }}
                  className="flex-shrink-0 bg-white rounded-xl border border-gray-100
                  overflow-hidden shadow-sm hover:shadow-xl transition group/card"
                >
                  <div className="relative h-48">
                    <Image
                      src={trip.image}
                      alt={trip.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 270px"
                      className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/25" />

                    <div className="absolute inset-0 flex items-center justify-center text-center p-4">
                      <h3 className="text-white font-bold text-xl drop-shadow-md">
                        {trip.experience}
                      </h3>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col h-[150px] justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        {trip.duration}
                      </p>

                      <h4 className="font-bold text-gray-900 group-hover/card:text-red-600 transition">
                        {trip.title}
                      </h4>
                    </div>

                    <div className="text-right">
                      <p className="text-[10px] text-gray-500 uppercase">
                        From
                      </p>

                      <div className="flex justify-end gap-2 items-center">
                        {trip.originalPrice && (
                          <span className="text-gray-400 line-through text-sm">
                            USD ${trip.originalPrice}
                          </span>
                        )}

                        <span className="text-lg font-black">
                          USD ${trip.currentPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {canGoNext && (
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20
              w-10 h-10 flex items-center justify-center
              rounded-full bg-white/90 shadow-md
              opacity-0 group-hover:opacity-100
              hover:scale-110 transition"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
