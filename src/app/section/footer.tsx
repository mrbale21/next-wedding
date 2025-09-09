"use client";

import Image, { StaticImageData } from "next/image";
import { FaInstagram } from "react-icons/fa6";
const Footer: React.FC = () => {
  return (
    <div className="w-full bg-neutral text-white flex flex-col items-center justify-start">
      {/* Bagian Atas - Gambar Mempelai */}
      <div className="relative w-full h-[520px] flex items-end justify-center">
        {/* Background Image dengan Next.js Image */}
        <img
          src="/assets/images/image-5.jpg"
          alt="Background Footer"
          className="absolute inset-0 object-cover w-full h-full"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral z-0" />

        {/* Konten teks */}
        <div className="relative z-10 text-center mb-10 px-4">
          <h3 data-aos="fade-up" className="font-Chalisa text-5xl font-medium">
            Ebot & Nina
          </h3>
          <h5
            data-aos="fade-up"
            data-aos-delay={200}
            className="text-xs font-Prata mt-2"
          >
            Merupakan suatu kebahagiaan dan kehormatan kami, apabila
            Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada
            kami.
          </h5>
          <h4
            data-aos="fade-up"
            data-aos-delay={400}
            className="font-Chalisa text-2xl mt-3"
          >
            Wassalamualaikum Wr. Wb.
          </h4>
        </div>
      </div>

      {/* Bagian Bawah - Kontak & Credit */}
      <div className="w-full max-w-md h-[250px] bg-neutral flex flex-col items-center justify-start pt-8">
        <div className="text-center flex flex-col items-center gap-2 pt-8">
          <h5
            data-aos="fade-up"
            className="font-akaya-kanadaka text-[10px] text-secondary"
          >
            Design by Iqbaal_bel
          </h5>
          <div data-aos="fade-up" className="flex gap-3 text-lg">
            {/* Instagram */}
            <a
              href="https://instagram.com/iqbaal_bel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary te transition-all"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
