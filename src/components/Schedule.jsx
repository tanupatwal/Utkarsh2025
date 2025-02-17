import { HeartIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";

const events = [
  {
    id: 1,
    day: 1,
    name: "Inauguration Ceremony",
    time: "8 AM",
    location: "Main Stage",
    image: "/assets/schedule/opening.png",
  },
  {
    id: 2,
    day: 1,
    name: "Squid Game",
    time: "9 AM - 12 PM",
    location: "Badminton Court",
    image: "/assets/schedule/squidgame.jpg",
  },
  {
    id: 3,
    day: 1,
    name: "NSS League",
    time: "9 AM - 12 PM",
    location: "Room: 2202",
    image: "/assets/schedule/quiz.png",
  },
  {
    id: 4,
    day: 1,
    name: "Escape Room",
    time: "9 AM - 1 PM",
    location: "Room: 2101-2102",
    image: "/assets/schedule/escape.jpg",
  },
  {
    id: 5,
    day: 1,
    name: "War of Verses",
    time: "10 AM - 12 PM",
    location: "Room: 2216",
    image: "/assets/schedule/warof.jpg",
  },
  {
    id: 6,
    day: 1,
    name: "Crime Scene",
    time: "10 AM - 1 PM",
    location: "Room: 3205",
    image: "/assets/schedule/crime.jpg",
  },
  {
    id: 7,
    day: 1,
    name: "Vibhavari",
    time: "1 PM - 3 PM",
    location: "Room: 4106",
    image: "/assets/schedule/indianmusic.jpg",
  },
  {
    id: 8,
    day: 1,
    name: "Nach Baliye",
    time: "2 PM - 3:40 PM",
    location: "Main Stage",
    image: "/assets/schedule/nachbaliye.png",
  },
  {
    id: 9,
    day: 1,
    name: "Fashionista",
    time: "3:30 PM - 7 PM",
    location: "Main Stage",
    image: "/assets/schedule/fashion.jpg",
  },
  {
    id: 10,
    day: 1,
    name: "Nukkad Natak",
    time: "9 AM - 5 PM",
    location: "Flag Ground",
    image: "/assets/schedule/natak.jpg",
  },
  {
    id: 11,
    day: 2,
    name: "Meme War",
    time: "9 AM - 2 PM",
    location: "Room: 5001",
    image: "/assets/schedule/meme.jpg",
  },
  {
    id: 12,
    day: 2,
    name: "False Perception",
    time: "9 AM - 12 PM",
    location: "Room: 2004",
    image: "/assets/schedule/false.jpg",
  },
  {
    id: 13,
    day: 2,
    name: "Treasure Hunt",
    time: "9 AM - 12 PM",
    location: "Room: 2405",
    image: "/assets/schedule/hunt.jpg",
  },
  {
    id: 14,
    day: 2,
    name: "The Sherlock Quest",
    time: "10 AM - 12 PM",
    location: "Room: 5204",
    image: "/assets/schedule/Quest.jpg",
  },
  {
    id: 15,
    day: 2,
    name: "Techopia",
    time: "12:30 PM - 2 PM",
    location: "Room: 2113",
    image: "/assets/schedule/techo.jpg",
  },
  {
    id: 16,
    day: 2,
    name: "Blind Date",
    time: "1 PM - 4 PM",
    location: "Badminton Court",
    image: "/assets/schedule/blindate.jpg",
  },
  {
    id: 17,
    day: 2,
    name: "Yugantar - Monoact",
    time: "1 PM - 4 PM",
    location: "Auditorium",
    image: "/assets/schedule/monoact.jpg",
  },
  {
    id: 18,
    day: 2,
    name: "Outlast Arena",
    time: "1 PM - 5 PM",
    location: "4-5th Block",
    image: "/assets/schedule/arena.jpg",
  },
  {
    id: 19,
    day: 2,
    name: "Mr. and Ms. Utkarsh",
    time: "3 PM - 5 PM",
    location: "Main Stage",
    image: "/assets/schedule/mrandms.jpg",
  },
  {
    id: 20,
    day: 3,
    name: "Star Night",
    time: "6:30 PM",
    location: "Main Stage",
    image: "/assets/schedule/sidk.jpg",
  },
  {
    id: 21,
    day: 3,
    name: "Collage Making",
    time: "10 AM - 12 PM",
    location: "Amphitheater",
    image: "/assets/schedule/collage.jpg",
  },
  {
    id: 22,
    day: 3,
    name: "Utkarsh Idol",
    time: "11 AM - 2 PM",
    location: "Amphitheater",
    image: "/assets/schedule/idol.png",
  },
  {
    id: 23,
    day: 3,
    name: "Battle of Bands",
    time: "2 PM",
    location: "Main Stage",
    image: "/assets/schedule/bob.jpg",
  },
  {
    id: 24,
    day: 3,
    name: "Face Painting",
    time: "2 PM 4 PM",
    location: "Room: 5001",
    image: "/assets/schedule/facepaint.jpg",
  },
  {
    id: 25,
    day: 3,
    name: "Nukkad Natak",
    time: "3 PM - 4 PM",
    location: "Badminton Court",
    image: "/assets/schedule/natak.jpg",
  },
];

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState(1);
  const [likedEvents, setLikedEvents] = useState({});

  const toggleLike = (id) => {
    setLikedEvents((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredEvents = events.filter((event) => event.day === selectedDay);

  return (
    <div
      className="flex flex-col items-center min-h-screen px-8 lg:py-8 text-white w-full"
      id="schedule"
    >
      <motion.h1
        className="text-center text-4xl lg:text-6xl md:text-5xl font-bold font-aclonica mb-6 lg:mt-5"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        viewport={{ once: false }}
      >
        Schedule
      </motion.h1>

      <div className="mb-6">
        <select
          onChange={(e) => setSelectedDay(Number(e.target.value))}
          className="px-4 py-3 mt-7 mb-7 text-lg font-medium bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none"
        >
          <option value="1">Day 1</option>
          <option value="2">Day 2</option>
          <option value="3">Day 3</option>
        </select>
      </div>

      {filteredEvents.length > 0 ? (
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              className="relative bg-gray-800 rounded-lg p-6 border-4 border-transparent flex flex-col"
              style={{
                borderImage:
                  "linear-gradient(to right, blue, magenta, red, purple) 1",
                height: "450px",
              }}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h2 className="text-xl font-semibold mb-2">{event.name}</h2>

              <button
                onClick={() => toggleLike(event.id)}
                className="absolute top-4 right-4"
              >
                <HeartIcon
                  className={`w-8 h-8 ${
                    likedEvents[event.id]
                      ? "text-red-500 fill-current"
                      : "text-white"
                  }`}
                />
              </button>

              <div className="flex-grow">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              <div className="flex justify-between items-center mt-4 text-sm text-gray-300">
                <span className="text-left">⏰ {event.time}</span>
                <span className="text-right">📍 {event.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-lg text-gray-300">
          No events scheduled for this day.
        </p>
      )}

      {filteredEvents.length > 0 && (
        <div className="block sm:hidden w-full max-w-sm">
          <Swiper spaceBetween={15} slidesPerView={1}>
            {filteredEvents.map((event) => (
              <SwiperSlide key={event.id}>
                <motion.div
                  className="relative bg-gray-800 rounded-lg p-6 border-4 border-transparent flex flex-col"
                  style={{ height: "450px", minHeight: "450px" }}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <h2 className="text-xl font-semibold">{event.name}</h2>

                  <button
                    onClick={() => toggleLike(event.id)}
                    className="absolute top-4 right-4"
                  >
                    <HeartIcon
                      className={`w-8 h-8 ${
                        likedEvents[event.id]
                          ? "text-red-500 fill-current"
                          : "text-white"
                      }`}
                    />
                  </button>

                  <div className="flex-grow">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-80 object-cover rounded-md mt-5"
                    />
                  </div>

                  <div className="flex justify-between items-center mt-4 text-sm text-gray-300">
                    <span className="text-left">⏰ {event.time}</span>
                    <span className="text-right">📍 {event.location}</span>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Schedule;
