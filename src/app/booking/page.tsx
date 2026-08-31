"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BookingStepOne from "@/components/booking/BookingStepOne";
import BookingStepTwo from "@/components/booking/BookingStepTwo";
import BookingSummary from "@/components/booking/BookingSummary";
import { useBookingStore } from "@/store/bookingStore";

export default function BookingPage() {
  const router = useRouter();

  const tripId = useBookingStore((state) => state.tripId);
  const tripTitle = useBookingStore((state) => state.tripTitle);
  const bookingStatus = useBookingStore((state) => state.bookingStatus);

  const [step, setStep] = useState(1);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated && !tripId) {
      router.replace("/trips");
    }
  }, [isHydrated, router, tripId]);

  const handleComplete = (reference: string) => {
    router.push(`/booking/confirmation?ref=${reference}`);
  };

  if (!isHydrated || !tripId) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-4">
        <p className="text-slate-500">Loading booking...</p>
      </main>
    );
  }

  if (bookingStatus === "confirmed") {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-4">
        <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">
            This booking is already confirmed.
          </h1>
          <button
            type="button"
            onClick={() => router.push("/booking/confirmation")}
            className="mt-5 rounded-xl bg-orange-500 px-5 py-3 font-bold text-white"
          >
            View confirmation
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold text-orange-600">
            Tripona booking
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-slate-900">
            Complete your booking
          </h1>
          <p className="mt-2 text-slate-500">
            You are booking:{" "}
            <span className="font-semibold text-slate-700">{tripTitle}</span>
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            {step === 1 ? (
              <BookingStepOne onNext={() => setStep(2)} />
            ) : (
              <BookingStepTwo
                onBack={() => setStep(1)}
                onComplete={handleComplete}
              />
            )}
          </div>

          <BookingSummary />
        </div>
      </div>
    </main>
  );
}
