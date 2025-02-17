import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
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
    name: "Madhav Maheshwari",
    post: "TCC President",
    image: "/assets/team/madhav.jpg",
  },
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
    name: "Dhanraj Sardana",
    post: "AGS Auditorium",
    image: "/assets/team/audi1.jpg",
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
    name: "Rohit Bisht",
    post: "AGS Classroom",
    image: "/assets/team/class2.png",
  },
  {
    name: "Aayush",
    post: "AGS Badminton Court",
    image: "/assets/team/court.png",
  },
  {
    name: "Pranava Hegde",
    post: "General Secretary",
    image: "/assets/team/gs1.jpg",
  },
  {
    name: "Tanishq Kashla",
    post: "General Secretary",
    image: "/assets/team/gs2.jpg",
  },
  {
    name: "Revanta Biswas",
    post: "General Secretary",
    image: "/assets/team/gs3.jpg",
  },
];

const Team = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <section className="text-white pt-1 pb-8 px-5" id="team">
        <motion.h2
          className="text-center text-4xl lg:text-6xl md:text-5xl font-bold font-aclonica mb-16 lg:mt-7"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          viewport={{ once: false }}
        >
          Meet the Team
        </motion.h2>

        {windowWidth < 768 ? (
          <Swiper spaceBetween={15} slidesPerView={1}>
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <TeamMemberCard member={member} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
        )}
      </section>
      <Countdown />
    </div>
  );
};

const TeamMemberCard = ({ member, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, delay: index * 0.1 },
      });
    } else {
      controls.start({ opacity: 0, x: -100 });
    }
  }, [isInView, controls, index]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      className="flex flex-col items-center"
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-32 h-32 rounded-full border-2 border-gray-500"
      />
      <motion.p
        className="mt-3 text-lg font-semibold text-yellow-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {member.name.split("").map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.p>
      <motion.p
        className="mt-1 text-sm text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {member.post}
      </motion.p>
    </motion.div>
  );
};

export default Team;
