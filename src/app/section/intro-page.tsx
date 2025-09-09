"use client";

import { useEffect, useState } from "react";
import { IoMdMailOpen } from "react-icons/io";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

interface IntroPageProps {
  onOpen: () => void;
  guestName: string;
}

export default function IntroPage({ onOpen, guestName }: IntroPageProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Ambil ukuran window untuk confetti
  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const smoothScrollTo = (targetY: number, duration = 2000) => {
    const startY = window.scrollY;
    const diff = targetY - startY;
    let start: number | null = null;

    function step(timestamp: number) {
      if (!start) start = timestamp;
      const time = timestamp - start;
      const percent = Math.min(time / duration, 1);
      window.scrollTo(0, startY + diff * percent);
      if (time < duration) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  };

  const handleOpen = () => {
    setShowConfetti(true);

    // Matikan confetti setelah 3 detik
    setTimeout(() => setShowConfetti(false), 3000);

    setTimeout(() => {
      setIsUnlocked(true);
      onOpen();

      // Scroll halus ke firstPage
      const target = document.getElementById("firstPage");
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY;
        smoothScrollTo(top, 2500);
      }
    }, 100);
  };

  // Disable scroll sebelum dibuka
  useEffect(() => {
    document.body.style.overflow = isUnlocked ? "auto" : "hidden";
  }, [isUnlocked]);

  return (
    <section
      id="intro"
      data-aos="fade-down"
      data-aos-delay={150}
      suppressHydrationWarning
      className="h-screen text-white flex flex-col justify-center pb-20 items-center text-center relative bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/image-4.webp')" }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />

      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.4}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 flex flex-col items-center"
      >
        <motion.h1 className="text-lg font-Prata mb-4 md:text-2xl mt-38">
          Save The Date
        </motion.h1>

        <motion.h2 className="text-6xl mb-6 font-Chalisa md:text-5xl">
          Ebot & Nina
        </motion.h2>

        <motion.p className="font-Garamond text-smd mb-6 md:text-lg">
          Kepada Yth. Bapak/Ibu/Saudara/i
        </motion.p>

        <motion.h1 className="text-xl font-Garamond font-semibold mb-8 text-accent md:text-2xl">
          {guestName}
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleOpen}
          className="bg-white flex items-center gap-2 text-black px-5 py-2.5 rounded-lg hover:bg-secondary hover:text-white font-Palatino font-semibold transition text-sm shadow-md"
        >
          <IoMdMailOpen size={18} /> Buka Undangan
        </motion.button>
      </motion.div>
    </section>
  );
}
