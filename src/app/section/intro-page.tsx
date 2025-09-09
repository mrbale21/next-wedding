"use client";

import { useEffect, useState } from "react";
import { IoMdMailOpen } from "react-icons/io";
import { motion } from "framer-motion";
import { Options } from "canvas-confetti";

interface IntroPageProps {
  onOpen: () => void;
  guestName: string;
}

export default function IntroPage({ onOpen, guestName }: IntroPageProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);

  // fungsi scroll custom biar bisa atur speed
  const smoothScrollTo = (targetY: number, duration = 2000) => {
    const startY = window.scrollY;
    const diff = targetY - startY;
    let start: number | null = null;

    function step(timestamp: number) {
      if (!start) start = timestamp;
      const time = timestamp - start;
      const percent = Math.min(time / duration, 1);

      window.scrollTo(0, startY + diff * percent);

      if (time < duration) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  };

  const handleOpen = () => {
    import("canvas-confetti").then((confetti) => {
      const fireConfetti = (particleRatio: number, opts: Options) => {
        confetti.default({
          ...opts,
          particleCount: Math.floor(200 * particleRatio),
          spread: 70,
          startVelocity: 40,
          origin: { y: 0.7 },
          colors: ["#f1e8e0", "#8f7151", "#ffd300", "#fff0f5"],
        });
      };

      fireConfetti(0.25, { angle: 60 });
      fireConfetti(0.25, { angle: 120 });
      setTimeout(() => fireConfetti(0.2, { angle: 90 }), 200);
      setTimeout(() => fireConfetti(0.3, { angle: 60 }), 400);
      setTimeout(() => fireConfetti(0.3, { angle: 120 }), 600);
    });

    // kasih jeda confetti dulu
    setTimeout(() => {
      setIsUnlocked(true);
      onOpen();

      const target = document.getElementById("firstPage");
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY;
        smoothScrollTo(top, 2500); // ⏳ scroll pelan 2.5 detik
      }
    }, 100);
  };

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
