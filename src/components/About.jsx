import { useInView } from "react-intersection-observer";
import AboutGrid from "./design/AboutGrid";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const About = () => {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  const { ref: gridRef, inView: gridInView } = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const [textAnimationDone, setTextAnimationDone] = useState(false);

  useEffect(() => {
    if (textInView) {
      const animationDuration = 0.1 * text.split(" ").length * 1000;
      setTimeout(() => {
        setTextAnimationDone(true);
      }, animationDuration / 12);
    }
  }, [textInView]);

  const text =
    "Utkarsh, formerly known as INNOVIZ, is a three-day extravaganza celebrating arts, culture, and engineering. As a premier tech fest, it brings together bright minds, groundbreaking ideas, and cutting-edge advancements that shape the future. From hands-on workshops and competitive hackathons to insightful talks by industry experts and research paper presentations, Utkarsh is the ultimate platform for students, professionals, and tech enthusiasts to explore, learn, and showcase their talents. Since its inception in 2006, UTKARSH has established itself as a premier event in Delhi & NCR, attracting over 10,000 attendees annually. Join us in pushing boundaries, redefining the present, and pioneering a smarter tomorrow. The future begins here!";

  return (
    <section className="text-white py-24 px-6 sm:px-12 bg-gradient-to-b from-[#0E0C15] to-[#1a1a2e]" id="about">
      <div className="container mx-auto flex flex-col items-center justify-center text-left w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
          className="text-5xl lg:text-7xl md:text-6xl font-bold font-aclonica text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          The Most Awaited Fest of the Year!
        </motion.h2>

        <div
          ref={textRef}
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            textInView ? "opacity-100" : "opacity-0"
          }`}
        >
          {text.split(" ").map((word, wordIndex) => (
            <span
              key={wordIndex}
              className={`word inline-block text-lg sm:text-xl lg:text-2xl font-[Montserrat] leading-relaxed ${
                textInView ? "visible" : ""
              }`}
              style={{ 
                animationDelay: `${wordIndex * 0.1}s`,
                marginRight: "8px",
                color: wordIndex % 3 === 0 ? '#a78bfa' : 'white'
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      {textAnimationDone && (
        <motion.div
          ref={gridRef}
          className="w-full mt-24"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: gridInView ? 1 : 0.8,
            opacity: gridInView ? 1 : 0,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <AboutGrid />
        </motion.div>
      )}
    </section>
  );
};

export default About;