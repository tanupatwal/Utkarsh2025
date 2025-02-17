import { useState } from "react";
import { Dialog } from "@headlessui/react";

const images = [
  {
    src: "/assets/about/knowledge.png",
    title: "Knowledge",
  },
  {
    src: "/assets/about/game.png",
    title: "Games",
  },
  {
    src: "/assets/about/dance.jpg",
    title: "Dance",
  },
  {
    src: "/assets/about/music.jpg",
    title: "Music",
  },
];

const AboutGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="px-4 max-w-5xl mx-auto lg:mt-20 lg:mb-7">
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative group cursor-pointer overflow-hidden rounded-lg ${
              index === 0
                ? "lg:row-span-2 lg:h-[350px]"
                : index === 3
                ? "lg:col-span-2 lg:h-[250px]"
                : "lg:h-[200px]"
            }`}
            onClick={() => setSelectedImage(image.src)}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <p className="text-white text-xl font-semibold">{image.title}</p>
            </div>
          </div>
        ))}
      </div>

      <Dialog
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        className="fixed inset-0 flex items-center justify-center z-50"
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-75"
          aria-hidden="true"
        ></div>
        <Dialog.Panel className="relative bg-black rounded-lg p-4 max-w-3xl mx-auto">
          <img
            src={selectedImage}
            alt="Selected"
            className="rounded-lg w-full"
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-2 right-2 text-black text-xl font-bold bg-white"
          >
            ✖
          </button>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default AboutGrid;
