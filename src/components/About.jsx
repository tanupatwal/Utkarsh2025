// src/components/About.jsx

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

  // Split text into lines for a more dynamic animation
  const lines = text.split('. ').filter(line => line.length > 0);

  return (
    <section className="text-white py-24 px-6 sm:px-12 bg-gradient-to-b from-[#0E0C15] to-[#1a1a2e]" id="about">
      <div className="container mx-auto flex flex-col items-center justify-center w-full">
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
          className="max-w-4xl mx-auto space-y-8 text-center"
        >
          {lines.map((line, lineIndex) => (
            <motion.div
              key={lineIndex}
              initial={{ 
                opacity: 0, 
                x: lineIndex % 2 === 0 ? -100 : 100,
                y: 20
              }}
              animate={textInView ? { 
                opacity: 1, 
                x: 0,
                y: 0
              } : {}}
              transition={{
                duration: 1.2,
                delay: lineIndex * 0.2,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="overflow-hidden relative"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={textInView ? { scale: 1 } : {}}
                transition={{
                  duration: 0.8,
                  delay: lineIndex * 0.2,
                  ease: "easeOut"
                }}
              >
                {line.split(' ').map((word, wordIndex) => (
                  <motion.span
                    key={wordIndex}
                    className="inline-block text-lg sm:text-xl lg:text-2xl font-[Montserrat] leading-relaxed"
                    initial={{ y: 50, opacity: 0 }}
                    animate={textInView ? { y: 0, opacity: 1 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: lineIndex * 0.2 + wordIndex * 0.03,
                      ease: [0.33, 1, 0.68, 1]
                    }}
                    style={{
                      marginRight: "8px",
                      color: 
                        wordIndex % 5 === 0 ? '#a78bfa' : 
                        wordIndex % 4 === 0 ? '#818cf8' : 
                        wordIndex % 3 === 0 ? '#93c5fd' : 
                        wordIndex % 2 === 0 ? '#e879f9' : 'white',
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
              
              {/* Decorative line elements */}
              {lineIndex % 3 === 0 && (
                <motion.div
                  className="absolute -left-4 top-1/2 w-2 h-2 rounded-full bg-purple-500"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={textInView ? { scale: 1, opacity: 0.6 } : {}}
                  transition={{ delay: lineIndex * 0.2 + 0.5 }}
                />
              )}
              {lineIndex % 4 === 0 && (
                <motion.div
                  className="absolute -right-4 top-1/2 w-2 h-2 rounded-full bg-pink-500"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={textInView ? { scale: 1, opacity: 0.6 } : {}}
                  transition={{ delay: lineIndex * 0.2 + 0.5 }}
                />
              )}
            </motion.div>
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