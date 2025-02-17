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

  return (
    <div className="relative w-full h-screen overflow-hidden">
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

      <div
        ref={sectionRef}
        className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full px-6 lg:px-20 text-white h-full"
      >
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center">
          <motion.h1
            className="text-4xl font-bold font-aclonica lg:text-6xl pt-5 md:text-5xl"
            initial="hidden"
            whileInView="visible"
            variants={welcomeVariants}
            viewport={{ once: false, amount: 0.2 }}
          >
            Welcome to
          </motion.h1>

          <h1 className="text-4xl font-bold lg:text-6xl md:text-5xl font-tiltPrism">
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={contentVariants}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="mt-10 text-xl lg:text-2xl font-montserrat">
              Future Technology: Innovating Today, Transforming Tomorrow
            </p>
          </motion.div>
        </div>

        <motion.div
          className="w-full lg:w-1/2 flex justify-center mt-10 lg:flex"
          initial="hidden"
          whileInView="visible"
          variants={contentVariants}
          viewport={{ once: false, amount: 0.5 }}
        >
          <ImageCarousel />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
