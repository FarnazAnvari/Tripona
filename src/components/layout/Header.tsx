"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, User, Phone, ChevronRight, Menu, X } from "lucide-react";

// Destinations
const destinationsData: Record<string, string[]> = {
  Africa: ["Egypt", "Morocco", "South Africa", "Kenya", "Tanzania"],
  Asia: [
    "Armenia",
    "Hong Kong",
    "Maldives",
    "Taiwan",
    "Azerbaijan",
    "India",
    "Mongolia",
    "Tajikistan",
    "Bali",
    "Indonesia",
    "Nepal",
    "Thailand",
    "Bhutan",
    "Japan",
    "Pakistan",
    "Tibet",
    "Borneo",
    "Kazakhstan",
    "Philippines",
    "Timor-Leste",
    "Cambodia",
    "Kyrgyzstan",
    "Singapore",
    "Turkmenistan",
    "China",
    "Laos",
    "South Korea",
    "Uzbekistan",
    "Georgia",
    "Malaysia",
    "Sri Lanka",
    "Vietnam",
  ],
  "Australia & Oceania": ["Australia", "New Zealand"],
  "Central America": ["Costa Rica", "Belize"],
  Europe: ["Italy", "Greece", "Iceland", "Spain"],
  "Middle East": ["Jordan", "Turkey"],
  "North America": ["USA", "Canada"],
  Polar: ["Antarctica"],
  "South America": ["Peru", "Brazil"],
  "All destinations": [],
};

// Ways to travel
const waysToTravelData: Record<string, string[]> = {
  Themes: [
    "18 to 35s",
    "Rail",
    "Cruises",
    "Sailing",
    "Cycling",
    "Short Breaks",
    "Expeditions",
    "Solo travel",
    "Family",
    "Tailor-Made",
    "Festivals",
    "Walking & trekking",
    "Food",
    "Wildlife",
    "Multi-active",
    "Women's Expeditions",
    "Polar",
    "View all themes",
  ],
  Styles: ["Basics", "Original", "Comfort", "Premium"],
  "New trips": ["New for 2024", "New for 2025"],
};

// Deals
const dealsData = [
  "Last minute deals",
  "Early bird offers",
  "Discounted trips",
  "Special promotions",
  "View all deals",
];

// About
const aboutData = [
  "About Tripona",
  "Our mission",
  "Responsible travel",
  "Careers",
  "Press & media",
  "Contact us",
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [activeContinent, setActiveContinent] = useState("Asia");
  const [activeWay, setActiveWay] = useState("Themes");
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10 h-full">
          {/* Logo */}

          <Link href="/" className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="48" fill="#e31c23" />
              <path
                d="M50 20V80M20 50H80"
                stroke="white"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M30 30L70 70M30 70L70 30"
                stroke="white"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <circle cx="50" cy="50" r="8" fill="white" />
            </svg>

            <span className="text-[#e31c23] text-[24px] font-bold tracking-tighter">
              Tripona
            </span>
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-8 h-full">
            {/* Destinations */}

            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setOpenMenu("destinations")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span className="relative flex items-center h-full text-[15px] font-semibold text-[#222] cursor-pointer">
                Destinations
                <span
                  className={`absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#e31c23] transition-opacity ${openMenu === "destinations" ? "opacity-100" : "opacity-0"}`}
                ></span>
              </span>

              {openMenu === "destinations" && (
                <div className="absolute left-0 top-full mt-[1px] w-[980px] bg-white border border-gray-200 shadow-2xl flex rounded-b-lg overflow-hidden">
                  <div className="w-[280px] border-r border-gray-100 p-4 flex flex-col gap-1">
                    {Object.keys(destinationsData).map((item) => (
                      <div
                        key={item}
                        onMouseEnter={() => setActiveContinent(item)}
                        className={`flex items-center justify-between px-4 py-2.5 rounded-md cursor-pointer ${
                          activeContinent === item
                            ? "bg-gray-100 font-bold"
                            : "hover:bg-gray-50 font-semibold text-gray-700"
                        }`}
                      >
                        <span className="text-[14px]">{item}</span>
                        {item !== "All destinations" && (
                          <ChevronRight size={14} className="text-gray-400" />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="flex-1 p-8">
                    <h2 className="text-2xl font-bold mb-6">
                      {activeContinent}
                    </h2>

                    <div className="grid grid-cols-4 gap-y-3.5 gap-x-6">
                      {destinationsData[activeContinent]?.map((country) => (
                        <Link
                          key={country}
                          href="#"
                          className="text-[14px] text-gray-600 hover:text-[#e31c23]"
                        >
                          {country}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Ways to travel */}

            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setOpenMenu("ways")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span className="relative flex items-center h-full text-[15px] font-semibold text-[#222] cursor-pointer">
                Ways to travel
                <span
                  className={`absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#e31c23] transition-opacity ${openMenu === "ways" ? "opacity-100" : "opacity-0"}`}
                ></span>
              </span>

              {openMenu === "ways" && (
                <div className="absolute left-0 top-full mt-[1px] w-[700px] bg-white border border-gray-200 shadow-2xl flex rounded-b-lg overflow-hidden">
                  <div className="w-[220px] border-r border-gray-100 p-4 flex flex-col gap-1">
                    {Object.keys(waysToTravelData).map((item) => (
                      <div
                        key={item}
                        onMouseEnter={() => setActiveWay(item)}
                        className={`flex items-center justify-between px-4 py-2.5 rounded-md cursor-pointer ${
                          activeWay === item
                            ? "bg-gray-100 font-bold"
                            : "hover:bg-gray-50 font-semibold text-gray-700"
                        }`}
                      >
                        <span className="text-[14px]">{item}</span>
                        {item !== "New trips" && (
                          <ChevronRight size={14} className="text-gray-400" />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="flex-1 p-8">
                    <h2 className="text-2xl font-bold mb-6">{activeWay}</h2>

                    <div className="grid grid-cols-2 gap-y-4 gap-x-12">
                      {waysToTravelData[activeWay]?.map((item) => (
                        <Link
                          key={item}
                          href="#"
                          className="text-[15px] text-gray-600 hover:text-[#e31c23]"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Deals */}

            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setOpenMenu("deals")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span className="relative flex items-center h-full text-[15px] font-semibold text-[#222] cursor-pointer">
                Deals
                <span
                  className={`absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#e31c23] transition-opacity ${openMenu === "deals" ? "opacity-100" : "opacity-0"}`}
                ></span>
              </span>

              {openMenu === "deals" && (
                <div className="absolute left-0 top-full mt-[1px] w-[260px] bg-white border border-gray-200 shadow-xl rounded-b-lg p-4 flex flex-col gap-1">
                  {dealsData.map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="px-4 py-2.5 rounded-md font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#e31c23]"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About */}

            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setOpenMenu("about")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <span className="relative flex items-center h-full text-[15px] font-semibold text-[#222] cursor-pointer">
                About
                <span
                  className={`absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#e31c23] transition-opacity ${openMenu === "about" ? "opacity-100" : "opacity-0"}`}
                ></span>
              </span>

              {openMenu === "about" && (
                <div className="absolute left-0 top-full mt-[1px] w-[260px] bg-white border border-gray-200 shadow-xl rounded-b-lg p-4 flex flex-col gap-1">
                  {aboutData.map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="px-4 py-2.5 rounded-md font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#e31c23]"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Right side */}

        <div className="flex items-center gap-6 text-gray-800">
          {/* Desktop icons */}

          <div className="hidden lg:flex items-center gap-6">
            <Link href="#" className="hover:text-[#e31c23]">
              <Heart size={22} strokeWidth={1.5} />
            </Link>

            <Link href="#" className="hover:text-[#e31c23]">
              <User size={22} strokeWidth={1.5} />
            </Link>

            <Link href="#" className="hover:text-[#e31c23]">
              <Phone size={22} strokeWidth={1.5} />
            </Link>
          </div>

          {/* Mobile hamburger */}

          <button
            className="lg:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}

      {mobileMenu && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col p-4">
            <Link href="#" className="py-3 font-semibold border-b">
              Destinations
            </Link>

            <Link href="#" className="py-3 font-semibold border-b">
              Ways to travel
            </Link>

            <Link href="#" className="py-3 font-semibold border-b">
              Deals
            </Link>

            <Link href="#" className="py-3 font-semibold border-b">
              About
            </Link>

            <div className="flex gap-6 pt-4">
              <Heart size={22} />
              <User size={22} />
              <Phone size={22} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
