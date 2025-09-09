"use client";

import { motion } from "framer-motion";

const stories = [
  {
    title: "Awwal Bertemu",
    description:
      "Kami pertama kali bertemu di sebuah kafe kecil. Tanpa disangka, percakapan kecil saat itu menjadi awal dari cerita panjang yang indah.",
  },
  {
    title: "Perjalanan Bersama",
    description:
      "Dari jalan-jalan sore hingga merancang masa depan, semua momen terasa lebih berarti saat dilalui bersama.",
  },
  {
    title: "Komitmen",
    description:
      "Cinta kami tumbuh perlahan, tapi pasti. Kini, kami yakin untuk melangkah ke tahap selanjutnya bersama.",
  },
];

const LoveStoryZigzag: React.FC = () => {
  return (
    <div
      className="relative -mt-30 flex flex-col items-center text-center overflow-hidden bg-cover bg-center bg-fixed z-0"
      style={{ backgroundImage: "url('/assets/images/image-3.webp')" }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-black/70"></div>
      <h1
        data-aos="fade-right"
        data-aos-delay={10}
        className="text-center font-Sacramneto text-4xl sm:text-5xl font-bold text-white mb-16 mt-40 z-20"
      >
        Our Love Story
      </h1>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical center line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-secondary/60" />

        {stories.map((story, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.4 }}
              className={`relative w-full mb-20 flex ${
                isLeft ? "justify-start" : "justify-end"
              }`}
            >
              <div className="relative w-1/2 sm:w-2/4 px-4 md:px-8">
                {/* Card */}
                <div
                  className={`p-6 rounded-xl shadow-lg ${
                    isLeft
                      ? "bg-neutral text-secondary"
                      : "bg-primary text-white"
                  }`}
                >
                  <h2 className="text-sm sm:text-2xl font-bold mb-2">
                    {story.title}
                  </h2>
                  <p className="text-[10px] sm:text-base">
                    {story.description}
                  </p>
                </div>

                {/* Dot on line */}
                <div
                  className="absolute top-6 w-5 h-5 rounded-full bg-secondary"
                  style={{
                    left: isLeft ? "100%" : undefined,
                    right: isLeft ? undefined : "92%",
                    transform: "translateX(-50%)",
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default LoveStoryZigzag;
