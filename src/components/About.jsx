// src/components/About.jsx
import { useInView } from "react-intersection-observer";
import AboutGrid from "./design/AboutGrid";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const About = () => {
  const containerRef = useRef(null);
  const lastLineRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const textBlur = useTransform(
    scrollYProgress, 
    [0.6, 0.7, 0.85], 
    [0, 0, scrollDirection === 'down' ? 8 : 0]
  );
  
  const textOpacity = useTransform(
    scrollYProgress,
    [0.6, 0.7, 0.85],
    [1, 1, scrollDirection === 'down' ? 0.3 : 1]
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const text = "Utkarsh, formerly known as INNOVIZ, is a three-day extravaganza celebrating arts, culture, and engineering. As a premier tech fest, it brings together bright minds, groundbreaking ideas, and cutting-edge advancements that shape the future. From hands-on workshops and competitive hackathons to insightful talks by industry experts and research paper presentations, Utkarsh is the ultimate platform for students, professionals, and tech enthusiasts to explore, learn, and showcase their talents. Since its inception in 2006, UTKARSH has established itself as a premier event in Delhi & NCR, attracting over 10,000 attendees annually. Join us in pushing boundaries, redefining the present, and pioneering a smarter tomorrow.";

  const lines = text.split('. ').filter(line => line.length > 0);
  const lastLine = "The future begins here!";

  return (
    <section 
      ref={containerRef}
      className="relative text-white py-24 px-6 sm:px-12 min-h-screen bg-gradient-to-b from-[#0E0C15] to-[#1a1a2e]" 
      id="about"
    >
      <div className="container mx-auto flex flex-col items-center justify-center w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl lg:text-7xl md:text-6xl font-bold font-aclonica text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          The Most Awaited Fest of the Year!
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto space-y-8 text-center relative z-10"
          style={{ 
            filter: textBlur.get() > 0 ? `blur(${textBlur.get()}px)` : 'none',
            opacity: textOpacity
          }}
        >
          {lines.map((line, lineIndex) => (
            <motion.div
              key={lineIndex}
              initial={{ 
                opacity: 0,
                x: lineIndex % 2 === 0 ? -50 : 50,
                y: 20
              }}
              whileInView={{ 
                opacity: 1,
                x: 0,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: lineIndex * 0.1,
                ease: [0.33, 1, 0.68, 1]
              }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {line.split(' ').map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  className="inline-block text-lg sm:text-xl lg:text-2xl font-[Montserrat] leading-relaxed"
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
          ))}
        </motion.div>

        <motion.div
          ref={lastLineRef}
          className="fixed left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
          style={{
            opacity: useTransform(scrollYProgress, [0.7, 0.85], [1, 0])
          }}
        >
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 whitespace-nowrap filter drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            {lastLine}
          </span>
        </motion.div>
      </div>

      <motion.div
        className="w-full mt-24"
        style={{
          opacity: textOpacity
        }}
      >
        <AboutGrid />
      </motion.div>
    </section>
  );
};

export default About;