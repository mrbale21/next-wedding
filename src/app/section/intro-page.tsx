"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import coverImage from "@/public/assets/images/cover.jpg";

interface IntroPageProps {
  onOpen: () => void;
  guestName: string;
}

export default function IntroPage({ onOpen, guestName }: IntroPageProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleOpen = () => {
    setIsVisible(false);
    setTimeout(() => {
      onOpen();
    }, 1000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center text-white p-6">
        <Image
          src={coverImage}
          alt="Cover"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h2 className="text-xl font-light mb-2">The Wedding Of</h2>
        <h1 className="text-3xl font-bold mb-4">Bale & Rani</h1>
        <p className="text-sm mb-6">Kepada Yth: {guestName}</p>
        <button
          onClick={handleOpen}
          className="bg-white text-black px-8 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Buka Undangan
        </button>
      </div>
    </div>
  );
}
