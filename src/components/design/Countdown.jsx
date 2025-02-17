import { useEffect, useState } from "react";
import bg from "/assets/bg.jpg";

const targetDate = new Date("2025-02-19T00:00:00").getTime();

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="flex justify-center items-center 
      h-[50vh] md:h-[70vh] lg:h-screen text-white px-4"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center font-tiltPrism bg-opacity-50 p-4 md:p-6 rounded-lg">
        <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold">
          COUNTDOWN
        </h2>
        <div className="flex gap-3 md:gap-5 text-xl md:text-4xl lg:text-5xl mt-3 md:mt-5 font-mono text-center justify-center">
          <div>{timeLeft.days}d</div>
          <div>{timeLeft.hours}h</div>
          <div>{timeLeft.minutes}m</div>
          <div>{timeLeft.seconds}s</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
