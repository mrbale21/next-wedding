"use client";

import { useState } from "react";
import { RiFileCopyLine } from "react-icons/ri";
import Image from "next/image";

const Gift = () => {
  const [copiedDana, setCopiedDana] = useState(false);
  const [copiedMandiri, setCopiedMandiri] = useState(false);

  const rekeningBca = "5737161469";
  const rekeningDana = "082261578396";

  const handleCopy = (rekening: string, type: "dana" | "bca") => {
    navigator.clipboard.writeText(rekening).then(() => {
      if (type === "dana") {
        setCopiedDana(true);
        setTimeout(() => setCopiedDana(false), 2000);
      } else {
        setCopiedMandiri(true);
        setTimeout(() => setCopiedMandiri(false), 2000);
      }
    });
  };

  return (
    <section className="w-full bg-secondary py-12 px-4">
      <div className="max-w-xl md:max-w-3xl mx-auto bg-neutral text-center rounded-2xl shadow-md shadow-primary/40 p-8 md:p-12">
        {/* --- Section Gift --- */}
        <h2
          data-aos="zoom-in"
          className="text-4xl sm:text-5xl font-bold font-Sacramneto text-primary mb-4"
        >
          Wedding Gift
        </h2>
        <p
          data-aos="zoom-in"
          data-aos-delay={200}
          className="font-cal-sans text-sm sm:text-base text-secondary leading-relaxed mb-8"
        >
          Doa restu keluarga, sahabat, serta rekan-rekan semua di pernikahan
          kami sudah sangat cukup sebagai hadiah. Namun jika memberi merupakan
          tanda kasih, kami dengan senang hati menerimanya dan tentunya semakin
          melengkapi kebahagiaan kami.
        </p>

        {/* --- Cards Container --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Mandiri */}
          <div
            data-aos="zoom-in"
            className="bg-neutral border border-primary rounded-xl shadow shadow-primary/30 flex flex-col items-center p-6 relative"
          >
            <Image
              src="/assets/images/bca.png"
              alt="Mandiri"
              width={70}
              height={40}
              className="mb-3"
            />
            <div className="w-2/3 h-[1px] bg-neutral-400 mb-3" />
            <p className="font-cal-sans text-sm text-secondary">
              a/n Abdul Waldi
            </p>
            <p className="font-raleway text-base font-semibold text-white mt-4">
              {rekeningBca}
            </p>
            {copiedMandiri && (
              <span className="text-white text-xs absolute bottom-2 ">
                Tersalin!
              </span>
            )}
            <button
              onClick={() => handleCopy(rekeningBca, "bca")}
              className="flex items-center gap-2 bg-primary text-neutral px-3 py-1.5 rounded-md hover:bg-primary/90 mt-4 transition"
            >
              <span className="font-raleway font-bold text-xs">
                Copy Rekening
              </span>
              <RiFileCopyLine size={16} />
            </button>
          </div>

          {/* Dana */}
          <div
            data-aos="zoom-in"
            className="bg-neutral border border-primary rounded-xl shadow shadow-primary/30 flex flex-col items-center p-6 relative"
          >
            <Image
              src="/assets/images/dana.png"
              alt="Dana"
              width={70}
              height={40}
              className="mb-3"
            />
            <div className="w-2/3 h-[1px] bg-neutral-400 mb-3" />
            <p className="font-cal-sans text-sm text-secondary">
              a/n Abdul Waldi
            </p>
            <p className="font-raleway text-base font-semibold text-white/80 mt-4">
              {rekeningDana}
            </p>
            {copiedDana && (
              <span className="text-white text-xs absolute bottom-2 ">
                Tersalin!
              </span>
            )}
            <button
              onClick={() => handleCopy(rekeningDana, "dana")}
              className="flex items-center gap-2 bg-primary text-neutral px-3 py-1.5 rounded-md hover:bg-primary/90 mt-4 transition"
            >
              <span className="font-raleway font-bold text-xs">
                Copy Rekening
              </span>
              <RiFileCopyLine size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gift;
