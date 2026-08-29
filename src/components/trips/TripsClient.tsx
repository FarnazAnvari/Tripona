"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, Clock } from "lucide-react";
import { allTrips } from "@/data/trips";

export default function TripsClient() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("query") || "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  const filteredTrips = useMemo(() => {
    if (!searchQuery.trim()) return allTrips;

    const q = searchQuery.toLowerCase().trim();
    return allTrips.filter(
      (trip) =>
        trip.title.toLowerCase().includes(q) ||
        trip.experience.toLowerCase().includes(q) ||
        trip.country?.toLowerCase().includes(q),
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header & Search Input */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">
              Explore All Trips
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Showing {filteredTrips.length} amazing experiences
            </p>
          </div>

          <div className="relative w-full max-w-md">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, experience, or country..."
              className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Trips Grid */}
        {filteredTrips.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredTrips.map((trip) => (
              <Link
                key={trip.id}
                href={`/trips/${trip.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    <Clock size={12} />
                    {trip.duration}
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    {trip.country && (
                      <div className="flex items-center gap-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        <MapPin size={12} />
                        {trip.country}
                      </div>
                    )}
                    <h2 className="mt-1 font-bold text-gray-900 group-hover:text-red-600 transition">
                      {trip.title}
                    </h2>
                    <p className="mt-1 text-xs text-gray-500 line-clamp-1">
                      {trip.experience}
                    </p>
                  </div>

                  <div className="mt-4 flex items-baseline justify-between border-t border-gray-50 pt-3">
                    <span className="text-[11px] font-medium text-gray-400 uppercase">
                      From
                    </span>
                    <div className="flex items-center gap-1.5">
                      {trip.originalPrice && (
                        <span className="text-xs text-gray-400 line-through">
                          USD ${trip.originalPrice}
                        </span>
                      )}
                      <span className="text-base font-extrabold text-gray-900">
                        USD ${trip.currentPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="rounded-2xl border border-dashed border-gray-200 bg-white py-16 text-center">
            <Search className="mx-auto text-gray-300" size={48} />
            <h2 className="mt-4 text-lg font-bold text-gray-900">
              No trips found
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              We couldn&apos;t find anything matching &quot;{searchQuery}&quot;.
              Try searching for another country or tour.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition"
            >
              View all trips
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
