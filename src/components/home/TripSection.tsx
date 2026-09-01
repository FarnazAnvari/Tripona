"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { tripCategories } from "@/data/trips";

const cardWidth = 270;
const gap = 20;
const move = cardWidth + gap;

export default function TripSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof tripCategories>(
    "Only Tripona experiences",
  );
  const [index, setIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const sliderRef = useRef<HTMLDivElement | null>(null);

  const trips = useMemo(() => tripCategories[activeTab] || [], [activeTab]);

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
          {Object.keys(tripCategories).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab as keyof typeof tripCategories);
                setIndex(0);
              }}
              className={`text-lg font-bold whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? "text-gray-900 border-b-2 border-black pb-1"
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
              aria-label="Previous trips"
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
              {trips.map((trip) => {
                const imageSrc = trip.image || "/images/fallback-trip.jpg";

                return (
                  <Link
                    key={trip.id}
                    href={`/trips/${trip.slug}`}
                    style={{ width: `${cardWidth}px` }}
                    className="flex-shrink-0 bg-white rounded-xl border border-gray-100
      overflow-hidden shadow-sm hover:shadow-xl transition group/card cursor-pointer block"
                  >
                    <div className="relative h-48">
                      <Image
                        src={imageSrc}
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
                  </Link>
                );
              })}
            </div>
          </div>

          {canGoNext && (
            <button
              onClick={next}
              aria-label="Next trips"
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
