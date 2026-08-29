// src/data/trips.ts

export interface Trip {
  id: number;
  slug?: string;
  image: string;
  experience: string;
  duration: string;
  title: string;
  originalPrice?: string;
  currentPrice: string;
  country?: string;
  category?: string;
}

export const tripCategories = {
  "Only Tripona experiences": [
    {
      id: 1,
      slug: "sabah-adventure",
      image: "/images/trips/trip1.jpg",
      experience: "Kinabalu summit at sunrise",
      duration: "11 days",
      title: "Sabah Adventure",
      originalPrice: "3170",
      currentPrice: "2536",
      country: "Malaysia",
    },
    {
      id: 2,
      slug: "turkey-highlights",
      image: "/images/trips/trip2.jpg",
      experience: "Cappadocia weaving",
      duration: "8 days",
      title: "Turkey Highlights",
      originalPrice: "1840",
      currentPrice: "1380",
      country: "Turkey",
    },
    {
      id: 3,
      slug: "galapagos-island-hopping",
      image: "/images/trips/trip3.jpg",
      experience: "Galapagos swim stops",
      duration: "8 days",
      title: "Galapagos Island Hopping",
      originalPrice: "3125",
      currentPrice: "2257",
      country: "Ecuador",
    },
    {
      id: 4,
      slug: "vietnam-express-southbound",
      image: "/images/trips/trip4.jpg",
      experience: "Late night bites",
      duration: "10 days",
      title: "Vietnam Express Southbound",
      currentPrice: "1465",
      country: "Vietnam",
    },
    {
      id: 5,
      slug: "japan-land-of-the-rising-sun",
      image: "/images/trips/trip5.jpg",
      experience: "Learning from locals",
      duration: "12 days",
      title: "Japan: Land of the Rising Sun",
      originalPrice: "5330",
      currentPrice: "4264",
      country: "Japan",
    },
  ],

  "New trips": [
    {
      id: 11,
      slug: "arctic-norway-explorer",
      image: "/images/trips/trip11.jpg",
      experience: "Northern lights hunting",
      duration: "7 days",
      title: "Arctic Norway Explorer",
      currentPrice: "2990",
      country: "Norway",
    },
    {
      id: 12,
      slug: "peru-adventure-trek",
      image: "/images/trips/trip12.jpg",
      experience: "Andes mountain trails",
      duration: "9 days",
      title: "Peru Adventure Trek",
      originalPrice: "2490",
      currentPrice: "1990",
      country: "Peru",
    },
    {
      id: 13,
      slug: "kenya-wildlife-safari",
      image: "/images/trips/trip13.jpg",
      experience: "Safari under the stars",
      duration: "8 days",
      title: "Kenya Wildlife Safari",
      currentPrice: "3290",
      country: "Kenya",
    },
    {
      id: 14,
      slug: "greek-islands-escape",
      image: "/images/trips/trip14.jpg",
      experience: "Mediterranean island hopping",
      duration: "10 days",
      title: "Greek Islands Escape",
      originalPrice: "2690",
      currentPrice: "2190",
      country: "Greece",
    },
    {
      id: 15,
      slug: "costa-rica-nature-break",
      image: "/images/trips/trip15.jpg",
      experience: "Rainforest wildlife",
      duration: "6 days",
      title: "Costa Rica Nature Break",
      currentPrice: "1750",
      country: "Costa Rica",
    },
  ],

  "Popular trips": [
    {
      id: 19,
      slug: "inca-trail-express",
      image: "/images/trips/trip19.jpg",
      experience: "Classic Inca Trail",
      duration: "8 days",
      title: "Inca Trail Express",
      originalPrice: "2250",
      currentPrice: "1890",
      country: "Peru",
    },
    {
      id: 20,
      slug: "serengeti-ngorongoro-safari",
      image: "/images/trips/trip20.jpg",
      experience: "Big five safari",
      duration: "10 days",
      title: "Serengeti & Ngorongoro Safari",
      currentPrice: "3490",
      country: "Tanzania",
    },
    {
      id: 21,
      slug: "cambodia-vietnam-discovery",
      image: "/images/trips/trip21.jpg",
      experience: "Temples at sunrise",
      duration: "9 days",
      title: "Cambodia & Vietnam Discovery",
      originalPrice: "1980",
      currentPrice: "1590",
      country: "Cambodia",
    },
    {
      id: 22,
      slug: "turkey-sailing-adventure",
      image: "/images/trips/trip22.jpg",
      experience: "Sailing the turquoise coast",
      duration: "8 days",
      title: "Turkey Sailing Adventure",
      currentPrice: "1740",
      country: "Turkey",
    },
    {
      id: 23,
      slug: "best-of-thailand",
      image: "/images/trips/trip23.jpg",
      experience: "Local food markets",
      duration: "12 days",
      title: "Best of Thailand",
      originalPrice: "2290",
      currentPrice: "1832",
      country: "Thailand",
    },
  ],
};

// لیست تمام تورها به صورت یکجا (برای صفحه /trips و جست‌وجو)
export const allTrips: Trip[] = Object.values(tripCategories).flat();
