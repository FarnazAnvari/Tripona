"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

// دیتای نمونه برای تورها
const tripData = {
  "Only Intrepid experiences": [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800",
      experience: "Kinabalu summit at sunrise",
      duration: "11 days",
      title: "Sabah Adventure",
      originalPrice: "3,170",
      currentPrice: "2,536",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&q=80&w=800",
      experience: "Cappadocia weavin'",
      duration: "8 days",
      title: "Turkey Highlights",
      originalPrice: "1,840",
      currentPrice: "1,380",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1512100356956-c1227c331f01?auto=format&fit=crop&q=80&w=800",
      experience: "Galapagos swim stops",
      duration: "8 days",
      title: "Galapagos Island Hopping",
      originalPrice: "3,125",
      currentPrice: "2,257",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800",
      experience: "Late night bites",
      duration: "10 days",
      title: "Vietnam Express Southbound",
      currentPrice: "1,465",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800",
      experience: "Learning the lingo from locals",
      duration: "12 days",
      title: "Japan: Land of the Rising Sun",
      originalPrice: "5,330",
      currentPrice: "4,264",
    },
  ],
  "New trips": [],
  "Popular trips": [],
};

export default function TripSection() {
  const [activeTab, setActiveTab] = useState("Only Intrepid experiences");

  return (
    <section className="py-12 bg-white px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* هدر بخش: تب‌ها و دکمه Explore */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex gap-8 overflow-x-auto w-full md:w-auto no-scrollbar">
            {Object.keys(tripData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-lg font-bold whitespace-nowrap transition-all border-b-2 ${
                  activeTab === tab
                    ? "border-red-600 text-gray-900"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <button className="hidden md:flex items-center gap-2 px-4 py-2 border border-gray-900 rounded-md font-bold hover:bg-gray-50 transition-colors">
            Explore experiences
          </button>
        </div>

        {/* لیست کارت‌ها (اسکرول افقی در موبایل) */}
        <div className="flex gap-5 overflow-x-auto pb-6 no-scrollbar snap-x">
          {tripData[activeTab as keyof typeof tripData]?.map((trip) => (
            <div
              key={trip.id}
              className="min-w-[280px] md:min-w-[240px] flex-1 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden snap-start hover:shadow-md transition-shadow group cursor-pointer"
            >
              {/* تصویر با متن روی آن */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 p-4 flex items-center justify-center text-center">
                  <h3 className="text-white font-bold text-xl leading-tight drop-shadow-md">
                    {trip.experience}
                  </h3>
                </div>
              </div>

              {/* جزئیات پایین کارت */}
              <div className="p-4 flex flex-col h-[180px] justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{trip.duration}</p>
                  <h4 className="font-bold text-gray-900 leading-tight group-hover:text-red-600 transition-colors">
                    {trip.title}
                  </h4>
                </div>

                <div className="text-right mt-4">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">
                    From
                  </p>
                  <div className="flex items-center justify-end gap-2">
                    {trip.originalPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        USD ${trip.originalPrice}
                      </span>
                    )}
                    <span className="text-lg font-black text-gray-900">
                      USD ${trip.currentPrice}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* دکمه Explore در موبایل */}
        <button className="w-full mt-4 md:hidden py-3 border border-gray-900 rounded-md font-bold">
          Explore experiences
        </button>
      </div>
    </section>
  );
}
