// src/components/design/Carousel.jsx

import React from "react";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "/assets/carousel/collegeimg.jpg";
import img2 from "/assets/logo1.jpg";
import img3 from "/assets/futuretech.jpg";

const ImageCarousel = () => {
  return (
    <motion.div 
      className="w-full max-w-2xl mx-auto overflow-hidden rounded-xl shadow-2xl"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-blue-500/20 to-pink-600/20 blur-xl transform -rotate-6 scale-105" />
      
      {/* Carousel Container */}
      <div className="relative bg-black/5 backdrop-blur-sm rounded-xl">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
          showArrows={true}
          className="carousel-root"
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <button
                onClick={onClickHandler}
                className="absolute left-0 z-10 p-3 m-2 bg-black/30 hover:bg-black/50 rounded-full transition-all duration-300 top-1/2 transform -translate-y-1/2"
              >
                <svg 
                  className="w-6 h-6 text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 19l-7-7 7-7" 
                  />
                </svg>
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext) =>
            hasNext && (
              <button
                onClick={onClickHandler}
                className="absolute right-0 z-10 p-3 m-2 bg-black/30 hover:bg-black/50 rounded-full transition-all duration-300 top-1/2 transform -translate-y-1/2"
              >
                <svg 
                  className="w-6 h-6 text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </button>
            )
          }
          renderIndicator={(onClickHandler, isSelected, index) => (
            <button
              onClick={onClickHandler}
              className={`inline-block w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                isSelected ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          )}
        >
          {[img1, img2, img3].map((image, index) => (
            <div key={index} className="relative aspect-video">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent" />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Bottom Glow */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-purple-500/10 to-transparent" />
    </motion.div>
  );
};

export default ImageCarousel;