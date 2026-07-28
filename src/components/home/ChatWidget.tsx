"use client";

import { useState } from "react";

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatWidget({ isOpen, onClose }: ChatWidgetProps) {
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-2xl animate-in slide-in-from-bottom-4">
      {/* هدر */}
      <div className="flex items-center justify-between bg-[#E41F26] p-4 text-white">
        <h3 className="font-bold">Ask Tripona</h3>
        <button onClick={onClose} className="hover:text-gray-200">✕</button>
      </div>

      {/* محتوای چت */}
      <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
        <p className="text-sm text-gray-700 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
          Welcome to Tripona! How can I help you?
        </p>
      </div>

      {/* بخش تایپ کردن (Input Area) */}
      <div className="border-t border-gray-200 p-3 bg-white">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            console.log("User sent:", message);
            setMessage(""); // پاک کردن باکس بعد از ارسال
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#E41F26]"
          />
          <button 
            type="submit"
            className="bg-[#E41F26] text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-[#c91b21] transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
