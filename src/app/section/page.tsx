"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation"; // <-- ambil query param di client
import FirstPage from "./first-page";
import IntroPage from "./intro-page";
import DatePage from "./date-page";
import Gallery from "./gallery";
import CommentSection from "./comment";
import Gift from "./gits";
import Footer from "./footer";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaMusic, FaPause } from "react-icons/fa";

interface SectionPageProps {
  guestName: string;
}

export default function SectionPage({ guestName }: SectionPageProps) {
  const searchParams = useSearchParams();
  const guestFromQuery = searchParams.get("to");
  const displayName = guestFromQuery
    ? decodeURIComponent(guestFromQuery)
    : guestName;

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
    <div className="max-h-auto w-full bg-secondary text-gray-800 overflow-hidden">
      <audio ref={audioRef} src="/assets/music/music.mp3" loop />

      <Suspense fallback={<p>Loading...</p>}>
        <IntroPage onOpen={() => setIsUnlocked(true)} guestName={displayName} />
      </Suspense>

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
