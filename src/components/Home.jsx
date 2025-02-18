import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ImageCarousel from "../components/design/Carousel";
import curve from "/assets/home/curve.png";
import heroBackground from "/assets/home/hero-background.jpg";
import { BackgroundCircles, Gradient } from "./design/Hero.jsx";

const text = "UTKARSH 2025";

const welcomeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 1 + i * 0.15 },
  }),
};

const curveVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1 + text.length * 0.15 + 0.5, duration: 0.5 },
  },
};

const contentVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 1 + text.length * 0.15 + 1, duration: 0.8 },
  },
};

const Home = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    triggerOnce: false,
    margin: "-10% 0px",
  });

  // src/components/Home.jsx
// Update the content section styling

// src/components/Home.jsx
// Update the main content container

return (
  <div className="relative w-full min-h-screen overflow-hidden">
    {/* Background stays the same */}
    <div>
      <div className="absolute inset-0 bg-cover bg-no-repeat">
        <div
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Gradient />
          <BackgroundCircles />
        </div>
      </div>
    </div>

    {/* Main content - Updated positioning */}
    <div
      ref={sectionRef}
      className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full min-h-screen px-8 lg:px-16 max-w-[1440px] mx-auto"
    >
      {/* Left content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pr-12">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold font-aclonica text-white"
          initial="hidden"
          whileInView="visible"
          variants={welcomeVariants}
          viewport={{ once: false, amount: 0.2 }}
        >
          Welcome to
        </motion.h1>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-tiltPrism text-white mt-4">
          <span className="inline-block relative">
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={letterVariants}
                viewport={{ once: false, amount: 0.2 }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <motion.img
              src={curve}
              className="absolute top-full left-0 w-full xl:-mt-1"
              width={625}
              height={28}
              alt="curve"
              initial="hidden"
              whileInView="visible"
              variants={curveVariants}
              viewport={{ once: false, amount: 0.2 }}
            />
          </span>
        </h1>

        <motion.p
          className="text-xl lg:text-2xl text-white/90 font-montserrat mt-8"
          initial="hidden"
          whileInView="visible"
          variants={contentVariants}
          viewport={{ once: false, amount: 0.5 }}
        >
          Future Technology: Innovating Today, Transforming Tomorrow
        </motion.p>
      </div>

      {/* Right content */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0"
        initial="hidden"
        whileInView="visible"
        variants={contentVariants}
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="relative w-full max-w-2xl">
          <ImageCarousel />
        </div>
      </motion.div>
    </div>
  </div>
)};

export default Home;