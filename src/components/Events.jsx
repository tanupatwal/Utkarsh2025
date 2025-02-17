import React, { useState } from "react";
import { motion } from "framer-motion";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4"
      id="events"
    >
      <h1 className="text-4xl lg:text-6xl md:text-5xl font-bold font-aclonica mb-10 text-white lg:mt-9">
        Event Highlights
      </h1>
      <div
        className="relative grid gap-4 place-items-center"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(80px, 1fr))",
          width: "min(90vw, 600px)",
          height: "min(90vw, 600px)",
        }}
      >
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Grid Item ${index + 1}`}
            className="rounded-lg shadow-lg w-full h-full object-cover"
            initial={{
              opacity: index === 4 ? 1 : 0,
              scale: index === 4 ? 2 : 0,
            }}
            animate={{
              opacity: isOpen || index === 4 ? 1 : 0,
              scale: isOpen || index === 4 ? 1 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: index === 4 ? 0 : 0.5 + index * 0.1,
            }}
          />
        ))}
      </div>
      {!isOpen ? (
        <button
          className="mt-8 px-6 py-3 bg-purple-600 text-white text-lg hover:bg-purple-700 transition inline-block rounded-md"
          onClick={() => setIsOpen(true)}
        >
          Unlock
        </button>
      ) : (
        <button
          className="mt-8 px-6 py-3 bg-purple-600 text-white text-lg hover:bg-purple-700 transition inline-block rounded-md"
          onClick={() => setIsOpen(false)}
        >
          Close
        </button>
      )}
    </div>
  );
};

export default Events;
