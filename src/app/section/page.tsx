"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import FirstPage from "./first-page";
import DatePage from "./date-page";
import Gallery from "./gallery";
import CommentSection from "./comment";
import Footer from "./footer";
import { FaMusic, FaPause } from "react-icons/fa";
import Gift from "./gits";
import SectionClient from "./section-client";
import LoveStoryZigzag from "./love-story";

export default function SectionPage() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isUnlocked && audioRef.current) {
      audioRef.current.play().catch(() => console.log("Autoplay failed"));
      setIsPlaying(true);
    }
  }, [isUnlocked]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="w-full bg-secondary text-gray-800 overflow-hidden">
      <audio ref={audioRef} src="/assets/music/music.mp3" loop />

      {/* SectionClient yang aman memanggil useSearchParams() */}
      <Suspense fallback={<div>Loading...</div>}>
        <SectionClient onOpen={() => setIsUnlocked(true)} />
      </Suspense>

      <FirstPage triggerConfetti={isUnlocked} />
      <div>
        {/* Background tetap */}
        <div
          className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-50"
          style={{ backgroundImage: "url('/assets/images/image-3.webp')" }}
        ></div>

        {/* Konten */}
        <div className="relative z-10">
          <LoveStoryZigzag />
          <DatePage />
        </div>
      </div>

      <Gallery />
      <Gift />
      <CommentSection />
      <Footer />

      {isUnlocked && (
        <button
          onClick={toggleMusic}
          className="fixed top-5 right-5 z-50 p-2 bg-black/40 rounded-full text-white hover:bg-black/60 transition"
          aria-label={isPlaying ? "Pause Music" : "Play Music"}
        >
          {isPlaying ? (
            <FaPause className="text-lg animate-spin-slow" />
          ) : (
            <FaMusic className="text-lg" />
          )}
        </button>
      )}
    </div>
  );
}
