// src/components/design/Countdown.jsx

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import bg from "/assets/bg.jpg";

const targetDate = new Date("2025-02-19T00:00:00").getTime();

const CountdownDigit = ({ value, label, index, shouldAnimate }) => (
  <motion.div
    initial={{ 
      opacity: 0, 
      rotateX: -180,
      z: -300,
      y: 100
    }}
    animate={shouldAnimate ? { 
      opacity: 1, 
      rotateX: 0,
      z: 0,
      y: 0
    } : {
      opacity: 0, 
      rotateX: -180,
      z: -300,
      y: 100
    }}
    transition={{
      duration: 0.8,
      delay: index * 0.2,
      type: "spring",
      stiffness: 100,
      damping: 12
    }}
    className="flex flex-col items-center justify-center backdrop-blur-sm bg-black/20 rounded-xl px-6 py-4 border border-purple-500/20 perspective-1000"
  >
    <motion.span 
      className="text-3xl md:text-5xl lg:text-7xl font-mono font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"
      key={value}
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {String(value).padStart(2, '0')}
    </motion.span>
    <span className="text-sm md:text-base lg:text-lg text-gray-400 mt-2">
      {label}
    </span>
  </motion.div>
);

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const sectionRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const teamSection = document.getElementById('team');
      const teamSectionBottom = teamSection?.getBoundingClientRect().bottom + window.scrollY;
      
      // Only trigger animation when scrolling down from teams section
      if (currentScrollY > lastScrollY && currentScrollY > teamSectionBottom) {
        setShouldAnimate(true);
      } else if (currentScrollY < teamSectionBottom) {
        setShouldAnimate(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
      ref={sectionRef}
      className="relative flex justify-center items-center h-[50vh] md:h-[70vh] lg:h-screen text-white px-6 overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        perspective: "1000px"
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      <div className="relative z-10 text-center">
        <motion.h2
          initial={{ 
            opacity: 0, 
            rotateX: -90,
            y: -100,
            z: -300
          }}
          animate={shouldAnimate ? { 
            opacity: 1, 
            rotateX: 0,
            y: 0,
            z: 0
          } : {
            opacity: 0, 
            rotateX: -90,
            y: -100,
            z: -300
          }}
          transition={{ 
            duration: 1,
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
          className="text-5xl md:text-7xl lg:text-9xl font-bold font-tiltPrism mb-16 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 text-transparent bg-clip-text"
        >
          COUNTDOWN
        </motion.h2>
        
        <div className="flex gap-4 md:gap-6 lg:gap-8 justify-center perspective-1000">
          <CountdownDigit value={timeLeft.days} label="Days" index={0} shouldAnimate={shouldAnimate} />
          <CountdownDigit value={timeLeft.hours} label="Hours" index={1} shouldAnimate={shouldAnimate} />
          <CountdownDigit value={timeLeft.minutes} label="Minutes" index={2} shouldAnimate={shouldAnimate} />
          <CountdownDigit value={timeLeft.seconds} label="Seconds" index={3} shouldAnimate={shouldAnimate} />
        </div>
      </div>
    </div>
  );
};

export default Countdown;