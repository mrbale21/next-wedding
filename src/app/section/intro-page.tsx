"use client";

import { useEffect, useRef, useState } from "react";
import { IoMdMailOpen } from "react-icons/io";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

interface IntroPageProps {
  onOpen: () => void;
}

export default function IntroPage({ onOpen }: IntroPageProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to") || "Tamu Undangan";

  const handleOpen = () => {
    import("canvas-confetti").then((confetti) => {
      confetti.default({
        particleCount: 180,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#f1e8e0", "#8f7151", "#ffd300", "#fff0f5"],
      });

      confetti.default({
        particleCount: 120,
        spread: 50,
        origin: { x: 0, y: 0.7 },
        colors: ["#8f7151", "#fff0f5"],
      });

      confetti.default({
        particleCount: 120,
        spread: 50,
        origin: { x: 1, y: 0.7 },
        colors: ["#ffd300", "#f1e8e0"],
      });
    });

    setIsUnlocked(true);

    const target = document.getElementById("firstPage");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }

    onOpen();
  };

  useEffect(() => {
    document.body.style.overflow = isUnlocked ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isUnlocked]);

  return (
    <section
      id="intro"
      data-aos="fade-down"
      data-aos-delay={150}
      className="h-screen text-white flex flex-col justify-end pb-20 items-center text-center relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/images/image-4.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 flex flex-col items-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-lg font-Prata mb-4 md:text-2xl"
        >
          Save The Date
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="text-5xl mb-6 font-Chalisa md:text-5xl"
        >
          Ebot & Nina
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="font-Garamond text-smd mb-6 md:text-lg"
        >
          Kepada Yth. Bapak/Ibu/Saudara/i
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-xl font-Garamond font-semibold mb-8 text-accent md:text-2xl"
        >
          {guestName}
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          onClick={handleOpen}
          className="bg-white flex items-center gap-2 text-black px-5 py-2.5 rounded-lg hover:bg-secondary hover:text-white font-Palatino font-semibold transition text-sm shadow-md"
        >
          <IoMdMailOpen size={18} /> Buka Undangan
        </motion.button>
      </motion.div>
    </section>
  );
}
