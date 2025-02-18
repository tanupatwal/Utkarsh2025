// src/components/Team.jsx

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import Countdown from "./design/Countdown";
import "swiper/css";

const teamMembers = [
  {
    name: "Rashi Varshney",
    post: "General Secretary",
    image: "/assets/team/gs.png",
  },
  {
    name: "Pranava Hegde",
    post: "AGS",
    image: "/assets/team/gs1.jpg",
  },
  {
    name: "Tanishq Kashla",
    post: "AGS",
    image: "/assets/team/gs2.jpg",
  },
  {
    name: "Revanta Biswas",
    post: "AGS",
    image: "/assets/team/gs3.jpg",
  },
  {
    name: "Dhanraj Sardana",
    post: "AGS",
    image: "/assets/team/audi1.jpg",
  },
  // {
  //   name: "Madhav Maheshwari",
  //   post: "TCC President",
  //   image: "/assets/team/madhav.jpg",
  // },
  {
    name: "Ankit Bhardwaj",
    post: "AGS Web Designing",
    image: "/assets/team/agsweb1.png",
  },
  {
    name: "Tanu Patwal ",
    post: "AGS Web Designing",
    image: "/assets/team/agsweb2.png",
  },
  {
    name: "Yuri Verma",
    post: "AGS Main Stage",
    image: "/assets/team/agstage.png",
  },
  {
    name: "Raman Anand",
    post: "AGS Main Stage",
    image: "/assets/team/agstage2.png",
  },
  {
    name: "Hemang Maheshwari",
    post: "AGS Media",
    image: "/assets/team/media1.png",
  },
  {
    name: "Rajeshwari Vakharia",
    post: "AGS Media",
    image: "/assets/team/media3.png",
  },
  {
    name: "Yashu Kumar",
    post: "AGS Media",
    image: "/assets/team/media2.png",
  },
 
  {
    name: "Krishna Mishra",
    post: "AGS Auditorium",
    image: "/assets/team/audi2.jpg",
  },
  {
    name: "Shashank",
    post: "AGS Amphitheater",
    image: "/assets/team/amphi.png",
  },
  {
    name: "Ritika",
    post: "AGS Tech Events",
    image: "/assets/team/tech1.png",
  },
  {
    name: "Nitika",
    post: "AGS Tech Events",
    image: "/assets/team/tech2.png",
  },
  {
    name: "Madhur",
    post: "AGS Non Tech Events",
    image: "/assets/team/nontech1.jpg",
  },
  {
    name: "Farhan Manzer",
    post: "AGS Non Tech Events",
    image: "/assets/team/nontech2.jpg",
  },
  {
    name: "Himanshu Mehra",
    post: "AGS Canteen",
    image: "/assets/team/canteen1.png",
  },
  {
    name: "Rakshit Aggarwal",
    post: "AGS Canteen",
    image: "/assets/team/canteen2.png",
  },
  {
    name: "Bhuwan Bora",
    post: "AGS Marketing",
    image: "/assets/team/marketing1.png",
  },
  {
    name: "Srishti Gupta",
    post: "AGS Marketing",
    image: "/assets/team/marketing2.png",
  },
  {
    name: "Aryan Shekhawat",
    post: "AGS Marketing",
    image: "/assets/team/marketing3.png",
  },
  {
    name: "Aastha Dwivedi",
    post: "AGS Hospitality",
    image: "/assets/team/hospitality1.png",
  },
  {
    name: "Tanisha Gupta",
    post: "AGS Hospitality",
    image: "/assets/team/hospitality2.png",
  },
  {
    name: "Ashika Garg",
    post: "AGS Creativity",
    image: "/assets/team/creativity1.png",
  },
  {
    name: "Navya Goel",
    post: "AGS Creativity",
    image: "/assets/team/creativity2.png",
  },
  {
    name: "Mehak Aggarwal",
    post: "AGS Creativity",
    image: "/assets/team/creativity3.png",
  },
  {
    name: "Vansh Mittal",
    post: "AGS Sponsorship",
    image: "/assets/team/spons1.png",
  },
  {
    name: "Dhruv Walia",
    post: "AGS Sponsorship",
    image: "/assets/team/spons2.png",
  },
  {
    name: "Mahak",
    post: "AGS Classroom",
    image: "/assets/team/class1.png",
  },
  {
    name: "Rohit",
    post: "AGS Classroom",
    image: "/assets/team/class2.png",
  },
  {
    name: "Aayush",
    post: "AGS Badminton Court",
    image: "/assets/team/court.png",
  },
 
];
// src/components/Team.jsx
const TeamMemberCard = ({ member, index, totalMembers }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Calculate staggered delay based on column position
  const columnCount = window.innerWidth >= 1024 ? 6 : window.innerWidth >= 768 ? 4 : 2;
  const row = Math.floor(index / columnCount);
  const col = index % columnCount;
  const staggerDelay = (row * 0.1) + (col * 0.05);

  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [100, 0, 0]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [0, 1, 1]
  );

  const springConfig = { 
    stiffness: 70,
    damping: 15,
    mass: 0.2
  };

  const springY = useSpring(y, springConfig);
  const springOpacity = useSpring(opacity, springConfig);

  return (
    <motion.div
      ref={cardRef}
      style={{
        opacity: springOpacity,
        y: springY
      }}
      initial={{ opacity: 0, y: 50 }}
      whileHover={{ scale: 1.05 }}
      transition={{
        scale: {
          type: "spring",
          stiffness: 300,
          damping: 15
        }
      }}
      className="flex flex-col items-center group"
    >
      <motion.div 
        className="relative w-32 h-32 mb-4 overflow-hidden rounded-full border-2 border-purple-500/30 transition-all duration-300 group-hover:border-purple-500"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </motion.div>
      
      <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-400 text-center">
        {member.name}
      </h3>
      
      <p className="mt-2 text-sm text-gray-400 font-medium text-center">
        {member.post}
      </p>
    </motion.div>
  );
};

const Team = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#1a1a2e] to-[#0E0C15]">
      <section 
        ref={containerRef}
        className="text-white pt-24 pb-16 px-8 lg:px-16" 
        id="team"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-5xl lg:text-7xl md:text-6xl font-bold font-aclonica mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
        >
          Meet the Team
        </motion.h2>

        {windowWidth < 768 ? (
          <Swiper
            spaceBetween={24}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            className="pb-12"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <TeamMemberCard 
                  member={member} 
                  index={index}
                  totalMembers={teamMembers.length}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard 
                key={index} 
                member={member} 
                index={index}
                totalMembers={teamMembers.length}
              />
            ))}
          </div>
        )}
      </section>
      <Countdown />
    </div>
  );
};

export default Team;