import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";

const images = [
  {
    src: "/assets/about/knowledge.png",
    title: "Knowledge",
    description: "Expanding horizons through learning and innovation",
  },
  {
    src: "/assets/about/game.png",
    title: "Games",
    description: "Engaging activities and competitive challenges",
  },
  {
    src: "/assets/about/dance.jpg",
    title: "Dance",
    description: "Expressing creativity through movement and rhythm",
  },
  {
    src: "/assets/about/music.jpg",
    title: "Music",
    description: "Celebrating talent and musical diversity",
  },
];

const AboutGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="px-6 max-w-6xl mx-auto lg:mt-24 lg:mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`relative group cursor-pointer overflow-hidden rounded-xl bg-gray-800/30 backdrop-blur-sm border-2 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 ${
              index === 0
                ? "lg:row-span-2 lg:h-[400px]"
                : index === 3
                ? "lg:col-span-2 lg:h-[300px]"
                : "lg:h-[250px]"
            }`}
            onClick={() => setSelectedImage(image)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: false }}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-end p-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
              <p className="text-gray-300 text-center text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                {image.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
        
        <motion.div 
          className="relative bg-gray-900 rounded-xl p-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          {selectedImage && (
            <>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="rounded-lg w-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </>
          )}
        </motion.div>
      </Dialog>
    </div>
  );
};

export default AboutGrid;