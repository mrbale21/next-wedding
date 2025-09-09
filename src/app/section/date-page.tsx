"use client";

import { FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function DatePage() {
  const events = [
    {
      title: "Akad Nikah",
      date: "Sabtu, 20 September 2025",
      time: "08.00 WIB",
      location: "Kediaman Mempelai Wanita",
      icon: "/assets/images/ring.png",
      bg: "/assets/images/image-1.webp",
      href: "https://maps.app.goo.gl/pKS5VhPyGiw2fVZG7?g_st=ipc",
    },
    {
      title: "Resepsi",
      date: "Jum'at, 19 September 2025",
      time: "10.00 WIB",
      location: "Kediaman Mempelai Pria",
      icon: "/assets/images/ring.png",
      bg: "/assets/images/image-5.webp",
      href: "https://maps.app.goo.gl/1hQd6FtzuZthdoky7?g_st=ipc",
    },
  ];

  return (
    <div className="relative flex flex-col items-center text-center overflow-hidden bg-cover bg-center bg-fixed pt-8">
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="z-10 w-full flex flex-col items-center py-16 px-4 md:px-0">
        <div
          data-aos="fade-left"
          data-aos-delay={10}
          className="text-5xl md:text-6xl font-Sacramneto text-white mb-16"
        >
          Wedding Event
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.3 }}
              className="relative flex flex-col justify-center items-center rounded-3xl overflow-hidden shadow-2xl transform transition"
            >
              {/* Card Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center z-0 opacity-70"
                style={{ backgroundImage: `url(${event.bg})` }}
              ></div>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col justify-center items-center bg-black/40 w-full p-8 rounded-3xl">
                <img
                  src={event.icon}
                  alt="cincin"
                  className="w-16 md:w-20 mb-4"
                />
                <h2 className="text-3xl md:text-4xl font-Prata mb-2 text-white">
                  {event.title}
                </h2>
                <h3 className="text-sm md:text-lg font-Prata text-white">
                  {event.date}
                </h3>
                <h4 className="text-sm md:text-lg mb-6 font-Palatino text-white">
                  {event.time}
                </h4>

                <div className="flex w-2/3 md:w-1/2 gap-2 py-6 justify-center items-center">
                  <div className="w-1/2 h-[1px] bg-white/80"></div>
                  <FaMapMarkedAlt size={30} className="text-white" />
                  <div className="w-1/2 h-[1px] bg-white/80"></div>
                </div>

                <h3 className="mb-4 font-Palatino text-white">
                  {event.location}
                </h3>
                <a
                  href={event.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-3 bg-white py-2 px-4 rounded-md w-3/4 md:w-1/2 text-primary font-semibold hover:bg-gray-100 transition"
                >
                  <FaMapMarkedAlt />
                  GOOGLE MAPS
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
