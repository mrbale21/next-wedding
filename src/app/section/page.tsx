"use client";
import { useEffect, useRef, useState } from "react";
import FirstPage from "./first-page";
import IntroPage from "./intro-page";
import GroomPage from "./groom-page";
import DatePage from "./date-page";
import Gallery from "./gallery";
import WishPage from "./wish/wishPage";
import CommentSection from "./comment";
import Gift from "./gits";
import LoveStory from "./love-story";
import Footer from "./footer";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaMusic, FaPause } from "react-icons/fa";

export default function SectionPage() {
  const [isUnlocked, setIsUnlocked] = useState(false); // trigger Buka Undangan
  const [isPlaying, setIsPlaying] = useState(false); // status musik
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // start musik saat unlock
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
      {/* Render audio hidden */}
      <audio ref={audioRef} src="/assets/music/music.mp3" loop />

      {/* IntroPage dikasih trigger unlock */}
      <IntroPage onOpen={() => setIsUnlocked(true)} />

      <FirstPage />
      <DatePage />
      <Gallery />
      <Gift />
      <CommentSection />
      <Footer />

      {/* Tombol musik fixed */}
      {isUnlocked && (
        <button
          onClick={toggleMusic}
          className="fixed top-5 right-5 z-50 p-2 bg-black/40 rounded-full text-white hover:bg-black/60 transition"
          aria-label={isPlaying ? "Pause Music" : "Play Music"}
        >
          {isPlaying ? (
            <FaPause className="text-lg animate-spin-slow" />
          ) : (
            <FaMusic className="text-lg " />
          )}
        </button>
      )}
    </div>
  );
}
