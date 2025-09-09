"use client";

import Bride from "./bride";
import DatePage from "./date-page";
import LoveStoryZigzag from "./love-story";
import SpecialDay from "./special-day";

export default function FirstPage() {
  return (
    <>
      <div
        id="firstPage"
        data-aos="fade-up"
        data-aos-delay={10}
        className="parallax relative flex flex-col justify-end items-center text-center h-[450px] md:h-[600px] lg:h-[700px] text-white  overflow-hidden bg-cover bg-center z-10"
        style={{ backgroundImage: "url('/assets/images/image-2.jpg')" }}
      >
        {/* Overlay gradient */}
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

      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 L 0,100 C 64.08953015168332,89.4027870267604 128.17906030336664,78.80557405352077 175,78 C 221.82093969663336,77.19442594647923 251.37328893821677,86.18049081267729 295,96 C 338.6267110617832,105.81950918732271 396.3277839437662,116.47246269577013 453,109 C 509.6722160562338,101.52753730422987 565.3155752867185,75.92965840424219 624,76 C 682.6844247132815,76.07034159575781 744.4099149093598,101.80890368726108 795,107 C 845.5900850906402,112.19109631273892 885.0447650758418,96.83472684671354 931,95 C 976.9552349241582,93.16527315328646 1029.4110247872734,104.8521889258848 1094,109 C 1158.5889752127266,113.1478110741152 1235.3111357750647,109.75651744974721 1295,107 C 1354.6888642249353,104.24348255025279 1397.3444321124675,102.1217412751264 1440,100 L 1440,400 L 0,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#8f7151"
          fillOpacity="0.53"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
        <path
          d="M 0,400 L 0,233 C 47.949636206683934,229.88262424466643 95.89927241336787,226.76524848933286 147,215 C 198.10072758663213,203.23475151066714 252.35254655321245,182.821630287335 305,195 C 357.64745344678755,207.178369712665 408.69054137378225,251.94823036132692 466,257 C 523.3094586262177,262.0517696386731 586.8852879516586,227.38544826735728 639,209 C 691.1147120483414,190.61455173264272 731.7683068195832,188.50997656924403 790,188 C 848.2316931804168,187.49002343075597 924.0414847700088,188.5746454556665 972,201 C 1019.9585152299912,213.4253545443335 1040.0657541003823,237.1914416080898 1094,242 C 1147.9342458996177,246.8085583919102 1235.6954988284624,232.65958811197436 1299,228 C 1362.3045011715376,223.34041188802564 1401.1522505857688,228.17020594401282 1440,233 L 1440,400 L 0,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#8f7151"
          fillOpacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-1"
        ></path>
      </svg>
      <div className="max-h-auto bg-primary text-white pb-14 -mt-1 flex flex-col items-center">
        <i className="fa-regular fa-heart fa-3x py-12"></i>
        <h2
          data-aos="zoom-out"
          data-aos-delay={10}
          className="text-4xl mb-4 font-Chalisa md:text-6xl"
        >
          Bissmillahirrohmanirrohim
        </h2>
        <p
          data-aos="zoom-out"
          data-aos-delay={30}
          className="font-Palatino px-4 text-center md:w-1/2 md:text-lg"
        >
          " Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat
          tanda-tanda (kebesaran Allah) bagi kaum yang berpikir. "
          <br />
          <br />
          (Qs. Ar-Rum Ayat 21)
        </p>
      </div>
      <section className="relative">
        {/* Wave Top */}
        <div className="absolute -top-[1px] left-0 w-full overflow-hidden leading-[0] z-10">
          <svg
            viewBox="0 0 1440 390"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[120px] md:h-[180px]"
            preserveAspectRatio="none"
          >
            <path
              d="M 0,400 L 0,100 C 52.041,110.438 104.082,120.876 155,129 C 205.917,137.123 255.71,142.932 301,142 C 346.289,141.067 387.075,133.393 434,123 C 480.924,112.606 533.987,99.492 580,105 C 626.013,110.507 664.976,134.636 719,146 C 773.023,157.364 842.109,155.962 889,143 C 935.891,130.038 960.589,105.515 1004,100 C 1047.411,94.485 1109.534,107.977 1163,118 C 1216.466,128.023 1261.276,134.578 1306,131 C 1350.724,127.421 1395.362,113.711 1440,100 L 1440,400 L 0,400 Z"
              fill="#8f7151"
              fillOpacity="0.53"
              transform="rotate(-180 720 200)"
            />
            <path
              d="M 0,400 L 0,233 C 56.327,222.153 112.653,211.307 158,222 C 203.347,232.693 237.714,264.926 275,259 C 312.286,253.074 352.491,208.99 407,200 C 461.509,191.01 530.321,217.112 579,236 C 627.679,254.888 656.225,266.56 697,263 C 737.775,259.44 790.78,240.648 840,222 C 889.22,203.352 934.657,184.847 990,186 C 1045.343,187.153 1110.592,207.964 1160,223 C 1209.408,238.036 1242.974,247.296 1287,248 C 1331.026,248.704 1385.513,240.852 1440,233 L 1440,400 L 0,400 Z"
              fill="#8f7151"
              transform="rotate(-180 720 200)"
            />
          </svg>
        </div>

        {/* Love Story Content */}
        <div className="bg-[#8f7151] relative z-0">
          <LoveStoryZigzag />
        </div>
      </section>
    </>
  );
}
