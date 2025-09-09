"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import IntroPage from "./intro-page";
import FirstPage from "./first-page";
import DatePage from "./date-page";
import Gallery from "./gallery";
import CommentSection from "./comment";
import Gift from "./gits";
import Footer from "./footer";

import { FaMusic, FaPause } from "react-icons/fa";

export default function SectionPage() {
  const searchParams = useSearchParams();
  const rawTo = searchParams.get("to");
  const guestName = rawTo ? decodeURIComponent(rawTo) : "Tamu Undangan";

  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

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

      <IntroPage onOpen={() => setIsUnlocked(true)} guestName={guestName} />

      <FirstPage />
      <DatePage />
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
