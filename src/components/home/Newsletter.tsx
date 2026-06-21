import React from "react";
import Image from "next/image";

const Newsletter = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-4 py-12">
      {/* Container با پس‌زمینه کرم روشن و لبه‌های گرد */}
      <div className="bg-[#f7f6f2] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
        {/* بخش تصویر سمت چپ */}
        <div className="w-full md:w-1/2">
          <div className="relative h-[300px] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/newsletter-bg.jpg" // یادت نره این تصویر رو در public/images بذاری
              alt="Travel Sunset"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* بخش فرم سمت راست */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Subscribe to save USD $100 on your next trip^
            </h2>
            <p className="text-sm text-gray-600">
              Subscribe to emails for travel deals, new trips, inspiration and
              more.
              <span className="underline cursor-pointer ml-1 text-gray-700">
                ^Terms and conditions
              </span>
              <span className="text-sm text-gray-600"> apply.</span>
            </p>
          </div>

          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* فیلد نام */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">
                  First name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
              {/* فیلد ایمیل */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
            </div>

            {/* چک‌باکس قوانین */}
            <div className="flex items-start gap-3 mt-2">
              <input
                type="checkbox"
                id="privacy"
                required
                className="mt-1 h-5 w-5 border-gray-300 rounded accent-black"
              />
              <label htmlFor="privacy" className="text-sm text-gray-700">
                I have read and agree to the{" "}
                <span className="underline cursor-pointer">privacy policy</span>
                <span className="text-red-500">*</span>
              </label>
            </div>

            {/* دکمه سابمیت */}
            <button
              type="submit"
              className="mt-4 w-fit bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors cursor-pointer"
            >
              Subscribe to emails
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
