"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { FaInstagram } from "react-icons/fa6";

const Bride: React.FC = () => {
  return (
    <div className="w-full pt-18 pb-4 bg-secondary overflow-hidden md:px-80 relative">
      {/* Header / Pengantar */}

      <div
        data-aos="zoom-in"
        data-aos-delay={100}
        className="grid place-items-center"
      >
        <h2 className="font-Sacramneto text-3xl md:text-5xl font-semibold text-neutral">
          Assalamualaikum Wr. Wb
        </h2>
        <p className=" text-neutral font-Palatino z-10 text-center mt-2 pb-10 px-6">
          Dengan memohon Rahmat dan Ridho Allah SWT yang telah menciptakan
          makhluk-Nya secara berpasang-pasangan Kami bermaksud menyelenggarakan
          pernikahan kami
        </p>
      </div>

      <div className="grid-rows-2 grid w-full relative">
        {/* Box Background Tengah */}
        <div
          data-aos="zoom-in"
          data-aos-delay={20}
          className="absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-full z-0 bg-white/80 flex items-center justify-center rounded-tr-[100px] rounded-bl-[100px]"
        >
          <h1 className="font-Chalisa text-5xl text-primary font-semibold z-20 mt-28">
            &
          </h1>
        </div>

        {/* Box Mempelai Pria */}
        <div className="-mb-4 z-10 flex flex-col items-start w-full">
          <div
            data-aos="fade-right"
            data-aos-delay={20}
            className="relative h-[230px] w-[200px] flex justify-start items-end rounded-tr-[70px] rounded-br-[70px] overflow-hidden"
          >
            <img
              src={"/assets/images/image-4.webp"}
              alt="Mempelai Pria"
              className="object-cover object-center h-[200px] w-[350px] bg-contain bg-top flex justify-start items-end rounded-tr-[70px] rounded-br-[70px]"
            />
          </div>
          <div className="p-4 pl-6 flex flex-col items-start w-full">
            <h1
              data-aos="fade-right"
              data-aos-delay={30}
              className="font-Chalisa font-semibold text-4xl text-neutral"
            >
              Abdul Waldi
            </h1>
            <p
              data-aos="fade-right"
              data-aos-delay={40}
              className="text-start font-Prata text-black text-[12px]"
            >
              Putra bungsu dari Bapak Kusmono & <br />
              Ibu Julaeha
            </p>
            <a
              href="https://www.instagram.com/ebotwaldi/"
              data-aos="fade-right"
              data-aos-delay={45}
              className="text-xs font-semibold p-1 px-2 text-center bg-neutral/90 hover:bg-primary/80 text-white rounded-sm flex items-center gap-1 mt-4"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Box Mempelai Wanita */}
        <div className="-mt-8 z-10 flex flex-col items-end justify-self-end w-full">
          <div
            data-aos="fade-left"
            data-aos-delay={20}
            className="relative h-[230px] w-[200px] flex items-end rounded-tl-[70px] rounded-bl-[70px] overflow-hidden"
          >
            <img
              src={"/assets/images/image-1.webp"}
              alt="Mempelai Wanita"
              className="object-cover object-center h-[200px] w-[350px] flex items-end rounded-tl-[70px] rounded-bl-[70px]"
            />
          </div>
          <div className="p-4 pr-6 flex flex-col items-end ml-10">
            <h1
              data-aos="fade-left"
              data-aos-delay={30}
              className="font-Chalisa font-semibold text-4xl text-neutral"
            >
              Nina Marlina
            </h1>
            <p
              data-aos="fade-left"
              data-aos-delay={35}
              className="text-end font-Prata text-[12px] text-black"
            >
              Putri ke-empat dari Bapak Kosasih Koharmutahar (alm) & <br />
              Ibu Dedeh
            </p>
            <a
              href="https://www.instagram.com/ninamrl29/"
              data-aos="fade-left"
              data-aos-delay={40}
              className="text-xs font-semibold p-1 px-2 text-center bg-neutral/90 hover:bg-primary/80 text-white rounded-sm flex items-center gap-1 mt-4"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bride;
