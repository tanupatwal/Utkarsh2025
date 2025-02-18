// src/components/Events.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "/assets/eventimg/img1.jpg";
import img2 from "/assets/eventimg/img2.jpg";
import img3 from "/assets/eventimg/img3.jpg";
import img4 from "/assets/eventimg/img4.jpg";
import img5 from "/assets/eventimg/img5.jpg";
import img6 from "/assets/eventimg/img6.jpg";
import img7 from "/assets/eventimg/img7.jpg";
import img8 from "/assets/eventimg/img8.jpg";
import img9 from "/assets/eventimg/img9.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const Events = () => {
  const [isExploding, setIsExploding] = useState(false);
  const [positions, setPositions] = useState([]);
  const [showGrid, setShowGrid] = useState(false);

  const handleExplosion = () => {
    if (isExploding) return;

    // Calculate random positions for scattered images
    const newPositions = images.map(() => {
      const angle = Math.random() * Math.PI * 2;
      const radius = 100 + Math.random() * 300;
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        scale: 0.5 + Math.random() * 1,
        rotation: Math.random() * 60 - 30,
        zIndex: Math.floor(Math.random() * 10)
      };
    });

    setPositions(newPositions);
    setIsExploding(true);

    // Show grid after explosion animation
    setTimeout(() => {
      setShowGrid(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 lg:p-16 bg-gradient-to-b from-[#1a1a2e] to-[#0E0C15]" id="events">
      <motion.h1 
        className="text-5xl lg:text-7xl md:text-6xl font-bold font-aclonica mb-16 text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        Event Highlights
      </motion.h1>

      {/* Center Image that triggers explosion */}
      {!isExploding && (
        <motion.div
          className="relative cursor-pointer transform transition-all duration-300 hover:scale-105"
          onClick={handleExplosion}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
        >
          <img
            src={img1}
            alt="Event Gallery"
            className="w-64 h-64 object-cover rounded-xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center">
            <span className="text-white text-xl font-semibold">Click to Explore</span>
          </div>
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl rounded-xl -z-10" />
        </motion.div>
      )}

      {/* Explosion Animation */}
      <AnimatePresence>
        {isExploding && (
          <div className="fixed inset-0 pointer-events-none">
            {images.map((src, index) => (
              <motion.div
                key={index}
                className="absolute left-1/2 top-1/2 origin-center"
                initial={{ 
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                  opacity: 1
                }}
                animate={{ 
                  x: positions[index]?.x || 0,
                  y: positions[index]?.y || 0,
                  scale: positions[index]?.scale || 1,
                  rotate: positions[index]?.rotation || 0,
                  opacity: showGrid ? 0 : 1
                }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  damping: 12,
                  stiffness: 100,
                  duration: 1.5,
                  delay: index * 0.05
                }}
                style={{ 
                  zIndex: positions[index]?.zIndex || 0,
                  transformOrigin: "center center"
                }}
              >
                <img
                  src={src}
                  alt={`Event ${index + 1}`}
                  className="w-40 h-40 object-cover rounded-lg shadow-2xl"
                  style={{ 
                    filter: 'brightness(0.9) contrast(1.1)',
                    boxShadow: '0 0 20px rgba(168,85,247,0.3)'
                  }}
                />
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Final Grid Layout */}
      <motion.div
        className="grid grid-cols-3 gap-6 w-full max-w-4xl mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: showGrid ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="aspect-square rounded-xl overflow-hidden group"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
          >
            <img
              src={src}
              alt={`Event ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Events;