"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface SpecialDayProps {
  targetDate: string | Date;
}

const SpecialDay: React.FC<SpecialDayProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // pastikan hanya di client
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const calculateTimeLeft = (): TimeLeft => {
      const difference = +new Date(targetDate) - +new Date();
      return difference > 0
        ? {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          }
        : { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, isClient]);

  if (!isClient || !timeLeft) return null; // jangan render di server

  return (
    <div className="max-h-auto w-full bg-primary text-primary flex flex-col justify-start items-center pb-10">
      <div
        data-aos="fade-up"
        data-aos-delay={150}
        className="flex flex-col justify-center items-center"
      >
        <div
          data-aos="zoom-out"
          className="text-center w-2/4 h-0.5 my-4 bg-neutral/70"
        />
        <div className="flex gap-15 mt-3 items-center text-secondary font-Prata">
          <div
            className="flex flex-col justify-center items-center "
            data-aos="fade-right"
          >
            <div className="text-xl font-semibold">{timeLeft.days}</div>
            <div className="text-md font-Duaro">Hari</div>
          </div>
          <div
            className="flex flex-col justify-center items-center  z-10"
            data-aos="fade-right"
          >
            <div className="text-xl font-semibold">{timeLeft.hours}</div>
            <div className="text-md font-Duaro">Jam</div>
          </div>
          <div
            className="flex flex-col justify-center items-center font-raleway z-10"
            data-aos="fade-left"
          >
            <div className="text-xl font-semibold">{timeLeft.minutes}</div>
            <div className="text-md font-Duaro">Menit</div>
          </div>
          <div
            className="flex flex-col justify-center items-center font-raleway z-10"
            data-aos="fade-left"
          >
            <div className="text-xl font-semibold">{timeLeft.seconds}</div>
            <div className="text-md font-Duaro">Detik</div>
          </div>
        </div>
        <div
          data-aos="zoom-out"
          className="text-center w-2/4 h-0.5 my-4 bg-neutral/70"
        />
      </div>
    </div>
  );
};

export default SpecialDay;
