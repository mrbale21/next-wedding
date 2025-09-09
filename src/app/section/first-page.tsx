"use client";

import { useEffect, useState } from "react";
import Bride from "./bride";
import LoveStoryZigzag from "./love-story";
import SpecialDay from "./special-day";
import Confetti from "react-confetti";

interface FirstPageProps {
  triggerConfetti?: boolean;
}

export default function FirstPage({ triggerConfetti }: FirstPageProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (triggerConfetti) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [triggerConfetti]);

  // Smooth scroll ke firstPage saat unlock
  useEffect(() => {
    if (triggerConfetti) {
      const target = document.getElementById("firstPage");
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  }, [triggerConfetti]);

  return (
    <>
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={500} // lebih banyak muncrat
          gravity={0.5}
        />
      )}

      <div
        id="firstPage"
        className="parallax relative flex flex-col justify-end items-center text-center h-[450px] md:h-[600px] lg:h-[700px] text-white overflow-hidden bg-cover bg-center z-10"
        style={{ backgroundImage: "url('/assets/images/image-2.webp')" }}
      >
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

      {/* Wave transition */}
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

      {/* Ayat */}
      <div className="max-h-auto bg-primary text-white pb-14 -mt-1 flex flex-col items-center">
        <i className="fa-regular fa-heart fa-3x py-12"></i>
        <h2 className="text-4xl mb-4 font-Chalisa md:text-6xl">
          Bissmillahirrohmanirrohim
        </h2>
        <p className="font-Palatino px-4 text-center md:w-1/2 md:text-lg">
          {`"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
  pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
  dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
  kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat
  tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."`}
          <br />
          <br />
          (Qs. Ar-Rum Ayat 21)
        </p>
      </div>

      {/* Wave bawah */}
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150 z-30 relative"
      >
        <path
          d="M 0,400 L 0,100 C 52.04137037722383,110.43822199899547 104.08274075444766,120.87644399799095 155,129 C 205.91725924555234,137.12355600200905 255.7104073594333,142.93244600703164 301,142 C 346.2895926405667,141.06755399296836 387.0756298078193,133.39377197388245 434,123 C 480.9243701921807,112.60622802611753 533.9870734092891,99.49246609743847 580,105 C 626.0129265907109,110.50753390256153 664.9760765550241,134.63636363636363 719,146 C 773.0239234449759,157.36363636363637 842.108620370615,155.962079357107 889,143 C 935.891379629385,130.037920642893 960.5894419625156,105.51531893520844 1004,100 C 1047.4105580374844,94.48468106479156 1109.5336117793227,107.97664490205926 1163,118 C 1216.4663882206773,128.02335509794074 1261.2761109201936,134.5781014565545 1306,131 C 1350.7238890798064,127.42189854344551 1395.361944539903,113.71094927172275 1440,100 L 1440,400 L 0,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#8f7151"
          fillOpacity="0.53"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 200)"
        ></path>
        <path
          d="M 0,400 L 0,233 C 56.32658806735574,222.15348013428851 112.65317613471149,211.30696026857703 158,222 C 203.3468238652885,232.69303973142297 237.71388352850983,264.9256390599804 275,259 C 312.2861164714902,253.07436094001955 352.49128975124904,208.99048349150124 407,200 C 461.50871024875096,191.00951650849876 530.320957466494,217.11242697401468 579,236 C 627.679042533506,254.88757302598532 656.2248803827752,266.5598086124402 697,263 C 737.7751196172248,259.4401913875598 790.7795210024055,240.6483385762246 840,222 C 889.2204789975945,203.3516614237754 934.6570356076024,184.84683708266144 990,186 C 1045.3429643923976,187.15316291733856 1110.592336567184,207.96431309312962 1160,223 C 1209.407663432816,238.03568690687038 1242.9736181236617,247.2959105448201 1287,248 C 1331.0263818763383,248.7040894551799 1385.5131909381691,240.85204472758994 1440,233 L 1440,400 L 0,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#8f7151"
          fillOpacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-1"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>

      <LoveStoryZigzag />
    </>
  );
}
