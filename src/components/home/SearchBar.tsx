"use client";

import { useState } from "react";
import { MapPin, Calendar, Search } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SearchBar() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div className="w-full max-w-[1100px] mx-auto px-4 relative z-20">
      <div className="bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 p-2 flex flex-col md:flex-row items-center">
        {/* Destination Section */}
        <div className="flex-[1.5] flex items-center gap-3 px-6 py-3 border-b md:border-b-0 md:border-r border-gray-200 w-full">
          <MapPin size={22} className="text-gray-900" />
          <div className="flex flex-col w-full">
            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest leading-none mb-1">
              Where to?
            </span>
            <input
              type="text"
              placeholder="Search destinations"
              className="text-[16px] text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent w-full font-medium"
            />
          </div>
        </div>

        {/* Date Section (DatePicker) */}
        <div className="flex-[2] flex items-center gap-3 px-6 py-3 w-full relative">
          <Calendar size={22} className="text-gray-900 shrink-0" />
          <div className="flex flex-col w-full">
            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest leading-none mb-1">
              When?
            </span>
            <div className="flex items-center gap-1 font-medium text-gray-800">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Start date"
                className="w-24 bg-transparent focus:outline-none cursor-pointer placeholder-gray-400"
                dateFormat="MMM d, yyyy"
              />
              <span className="text-gray-300 mx-1">—</span>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate || undefined}
                placeholderText="End date"
                className="w-24 bg-transparent focus:outline-none cursor-pointer placeholder-gray-400"
                dateFormat="MMM d, yyyy"
              />
            </div>
          </div>
        </div>

        {/* Search Button */}
        <button className="bg-[#e31c23] hover:bg-[#c4181d] transition-colors text-white rounded-full px-10 py-4 flex items-center gap-2 font-bold text-[16px] w-full md:w-auto justify-center">
          Search
          <Search size={20} strokeWidth={3} />
        </button>
      </div>

      {/* استایل‌های سفارشی برای تقویم */}
      <style jsx global>{`
        .react-datepicker {
          font-family: inherit;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        .react-datepicker__header {
          background-color: white;
          border-bottom: 1px solid #f3f4f6;
        }
        .react-datepicker__day--selected,
        .react-datepicker__day--in-range {
          background-color: #e31c23 !important;
          border-radius: 50%;
        }
        .react-datepicker__day:hover {
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
}
