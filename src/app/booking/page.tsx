"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BookingStepOne from "@/components/booking/BookingStepOne";
import BookingStepTwo from "@/components/booking/BookingStepTwo";
import BookingStepThree from "@/components/booking/BookingStepThree";
import BookingStepFour from "@/components/booking/BookingStepFour";
import BookingSummary from "@/components/booking/BookingSummary";
import { useBookingStore } from "@/store/bookingStore";

export default function BookingPage() {
  const router = useRouter();

  const tripId = useBookingStore((state) => state.tripId);
  const tripTitle = useBookingStore((state) => state.tripTitle);
  const bookingStatus = useBookingStore((state) => state.bookingStatus);

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
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
        <p className="text-slate-500">Loading booking details...</p>
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
            className="mt-5 rounded-xl bg-orange-500 px-5 py-3 font-bold text-white transition hover:bg-orange-600"
          >
            View Confirmation
          </button>
        </div>
      </main>
    );
  }

  const stepsList = [
    { num: 1, label: "Date & Guests" },
    { num: 2, label: "Passenger Info" },
    { num: 3, label: "Review" },
    { num: 4, label: "Payment" },
  ];

  return (
    <main className="bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-orange-600">Tripona Booking</p>
          <h1 className="mt-1 text-3xl font-extrabold text-slate-900">
            Complete your booking
          </h1>
          <p className="mt-1 text-slate-500">
            Tour: <span className="font-semibold text-slate-700">{tripTitle}</span>
          </p>
        </div>

        {/* Step Indicator */}
        <div className="mb-8 hidden sm:flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
          {stepsList.map((s, idx) => (
            <div key={s.num} className="flex items-center gap-3">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition ${
                  step === s.num
                    ? "bg-orange-500 text-white"
                    : step > s.num
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {step > s.num ? "✓" : s.num}
              </div>
              <span
                className={`text-sm font-medium ${
                  step >= s.num ? "text-slate-900" : "text-slate-400"
                }`}
              >
                {s.label}
              </span>
              {idx < stepsList.length - 1 && (
                <div className="ml-4 h-[1px] w-12 bg-slate-200 lg:w-20" />
              )}
            </div>
          ))}
        </div>

        {/* Content Layout */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            {step === 1 && <BookingStepOne onNext={() => setStep(2)} />}
            {step === 2 && (
              <BookingStepTwo
                onBack={() => setStep(1)}
                onNext={() => setStep(3)}
              />
            )}
            {step === 3 && (
              <BookingStepThree
                onBack={() => setStep(2)}
                onNext={() => setStep(4)}
              />
            )}
            {step === 4 && (
              <BookingStepFour
                onBack={() => setStep(3)}
                onComplete={handleComplete}
              />
            )}
          </div>

          <div>
            <BookingSummary />
          </div>
        </div>
      </div>
    </main>
  );
}
