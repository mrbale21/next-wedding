"use client";

import { FaHeart } from "react-icons/fa";
import Image from "next/image";

const GroomPage: React.FC = () => {
  return (
    <section className="bg-secondary flex flex-col justify-start pb-20 items-center text-center px-4">
      <h2 className="text-2xl md:text-4xl mb-4 font-prata">
        The Groom & Bride
      </h2>
      <p className="font-prata md:w-1/2 mx-auto text-center mb-8">
        Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i serta
        kerabat sekalian untuk menghadiri acara pernikahan kami.
      </p>

      <div className="flex flex-col md:flex-row gap-8 md:gap-20 justify-center items-center">
        {/* Groom */}
        <div className="flex flex-col items-center">
          <div className="bg-primary shadow-2xl shadow-black/80 rounded-lg overflow-hidden mb-4">
            <Image
              src="/assets/images/image-1.jpg"
              alt="Ridwan Setiawan"
              width={300}
              height={400}
              className="object-cover"
            />
          </div>
          <h2 className="text-xl text-primary font-semibold">
            Ridwan Setiawan
          </h2>
          <h3 className="text-sm pt-2">
            Putra Kedua Dari <br />
            <span className="font-semibold">Bapak Mayuti & Ibu Icah</span>
          </h3>
        </div>

        {/* Heart separator */}
        <div className="flex flex-col justify-center items-center">
          <FaHeart size={40} className="text-black/80 mb-4 md:mb-0" />
        </div>

        {/* Bride */}
        <div className="flex flex-col items-center">
          <div className="bg-primary shadow-2xl shadow-black/80 rounded-lg overflow-hidden mb-4">
            <Image
              src="/assets/images/image-5.jpg"
              alt="Nama Bride"
              width={300}
              height={400}
              className="object-cover"
            />
          </div>
          <h2 className="text-xl text-primary font-semibold">Nama Bride</h2>
          <h3 className="text-sm pt-2">
            Putri Dari <br />
            <span className="font-semibold">Bapak & Ibu ...</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default GroomPage;
