import Image from "next/image";
import Link from "next/link";
import { Trip } from "@/data/trips"; // تایپ Trip که ساختی

interface TripCardProps {
  trip: Trip;
}

export default function TripCard({ trip }: TripCardProps) {
  return (
    <Link
      href={`/trips/${trip.slug}`}
      className="group block overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <Image
          src={trip.image}
          alt={trip.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 backdrop-blur-sm">
          {trip.duration}
        </span>
      </div>

      <div className="p-5">
        <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
          {trip.location}, {trip.country}
        </div>
        <h3 className="mt-1 text-lg font-bold text-gray-900 group-hover:text-red-600 transition">
          {trip.title}
        </h3>

        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-xs text-gray-400">From</span>
          <span className="text-lg font-bold text-gray-900">
            USD ${trip.price}
          </span>
          {trip.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              USD ${trip.oldPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
