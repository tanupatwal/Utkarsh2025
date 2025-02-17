import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "/assets/carousel/collegeimg.jpg";
import img2 from "/assets/logo1.jpg";
import img3 from "/assets/futuretech.jpg";

const ImageCarousel = () => {
  return (
    <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showArrows={true}
        showStatus={false}
        interval={3000}
        className="carousel-root"
      >
        {[img1, img2, img3].map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="rounded-lg object-cover w-full h-64"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
