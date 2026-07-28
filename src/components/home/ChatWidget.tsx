"use client";

import React, { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
}

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatWidget({ isOpen, onClose }: ChatWidgetProps) {
  // ۱. ساخت لیستی از پیام‌ها (با یک پیام خوش‌آمدگویی اولیه)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Welcome to Tripona! How can I help you?",
      sender: "bot",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // اسکرول خودکار به انتهای چت هنگام اضافه شدن پیام جدید
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!isOpen) return null;

  // ۲. مدیریت ارسال پیام
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // ایجاد شیء پیام کاربر
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: "user",
    };

    // اضافه کردن پیام کاربر به لیست
    setMessages((prev) => [...prev, userMessage]);
    setInputText("");

    // شبیه‌سازی پاسخ موقت از طرف ربات (در آینده به API بک‌اند متصل می‌شود)
    setTimeout(() => {
      const botReply: Message = {
        id: (Date.now() + 1).toString(),
        text: `You said: "${userMessage.text}". We are setting up our AI backend to answer you properly soon!`,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botReply]);
    }, 800);
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-2xl animate-in slide-in-from-bottom-4">
      {/* هدر */}
      <div className="flex items-center justify-between bg-[#E41F26] p-4 text-white">
        <h3 className="font-bold">Ask Tripona</h3>
        <button onClick={onClose} className="hover:text-gray-200 text-lg">
          ✕
        </button>
      </div>

      {/* لیست پیام‌ها */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm shadow-sm border ${
                msg.sender === "user"
                  ? "bg-[#E41F26] text-white border-transparent rounded-tr-none"
                  : "bg-white text-gray-800 border-gray-100 rounded-tl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {/* نشانگر اسکرول خودکار */}
        <div ref={messagesEndRef} />
      </div>

      {/* بخش ورودی متن */}
      <div className="border-t border-gray-200 p-3 bg-white">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#E41F26]"
          />
          <button
            type="submit"
            className="bg-[#E41F26] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#c91b21] transition active:scale-95"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
