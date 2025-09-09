"use client";

import { useEffect, useState } from "react";
import Bride from "./bride";
import LoveStoryZigzag from "./love-story";
import SpecialDay from "./special-day";
import Confetti from "react-confetti";

interface FirstPageProps {
  triggerConfetti?: boolean;
}

export default function FirstPage({ triggerConfetti }: FirstPageProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (triggerConfetti) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [triggerConfetti]);

  // Smooth scroll ke firstPage saat unlock
  useEffect(() => {
    if (triggerConfetti) {
      const target = document.getElementById("firstPage");
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  }, [triggerConfetti]);

  return (
    <>
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={500} // lebih banyak muncrat
          gravity={0.5}
        />
      )}

      <div
        id="firstPage"
        className="parallax relative flex flex-col justify-end items-center text-center h-[450px] md:h-[600px] lg:h-[700px] text-white overflow-hidden bg-cover bg-center z-10"
        style={{ backgroundImage: "url('/assets/images/image-2.webp')" }}
      >
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-primary"></div>
      </div>

      <div className="bg-primary flex flex-col justify-start items-center text-white -mt-1">
        <h1
          data-aos="fade-up"
          data-aos-delay={20}
          className="text-lg font-Prata mb-2 md:text-2xl"
        >
          Save The Date
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-delay={30}
          className="text-6xl mb-4 font-Chalisa md:text-8xl"
        >
          Ebot & Nina
        </h2>
        <SpecialDay targetDate="2025-09-20T00:00:00" />
      </div>

      <Bride />
      <LoveStoryZigzag />
    </>
  );
}
