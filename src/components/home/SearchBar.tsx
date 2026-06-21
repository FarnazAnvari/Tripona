"use client";

import { MapPin, Calendar, Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="w-full max-w-[1100px] mx-auto px-4 -mt-10 relative z-10">
      <div className="bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 p-2 flex flex-col md:flex-row items-center">
        {/* Destination Section */}
        <div className="flex-1 flex items-center gap-3 px-6 py-3 border-b md:border-b-0 md:border-r border-gray-200 w-full group cursor-pointer">
          <MapPin size={22} className="text-gray-900" />
          <div className="flex flex-col">
            <span className="text-[13px] font-bold text-gray-500 uppercase tracking-wider leading-none mb-1">
              Where to?
            </span>
            <input
              type="text"
              placeholder="Search cruises"
              className="text-[16px] text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent w-full font-medium"
            />
          </div>
        </div>

        {/* Date Section */}
        <div className="flex-1 flex items-center gap-3 px-6 py-3 w-full group cursor-pointer">
          <Calendar size={22} className="text-gray-900" />
          <div className="flex flex-col w-full">
            <span className="text-[13px] font-bold text-gray-500 uppercase tracking-wider leading-none mb-1">
              When?
            </span>
            <div className="flex items-center gap-2 text-[16px] font-medium text-gray-800">
              <span className="text-gray-400">Start date</span>
              <span className="text-gray-300">—</span>
              <span className="text-gray-400">End date</span>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <button className="bg-[#e31c23] hover:bg-[#c4181d] transition-colors text-white rounded-full px-10 py-4 flex items-center gap-2 font-bold text-[16px] w-full md:w-auto justify-center ml-2">
          Search
          <Search size={20} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}
