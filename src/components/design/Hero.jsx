import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";

export const Gradient = () => {
  return (
    <>
      <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
      <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
    </>
  );
};

const baseRingSizes = [90, 70, 50, 30];
const ballCount = 20;

const Rings = () => {
  const smallScreen = window.innerWidth < 768;
  const ringSizes = smallScreen ? [160, 140, 120, 100, 80, 60] : baseRingSizes;

  return (
    <>
      {ringSizes.map((size, index) => (
        <div
          key={index}
          className="absolute top-1/2 left-1/2 aspect-square border border-white/40 opacity-40 rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{ width: `${size}vw` }}
        />
      ))}
    </>
  );
};

export const BackgroundCircles = ({ parallaxRef }) => {
  const [ballPositions, setBallPositions] = useState([]);

  useEffect(() => {
    const smallScreen = window.innerWidth < 768;
    const ringSizes = smallScreen
      ? [1160, 140, 120, 100, 80, 60]
      : baseRingSizes;

    let initialPositions = Array.from({ length: ballCount }, () => {
      const ringIndex = Math.floor(Math.random() * ringSizes.length);
      const radius = (ringSizes[ringIndex] / 2) * (window.innerWidth / 100);
      return {
        ringIndex,
        angle: Math.random() * 2 * Math.PI,
        radius,
        size: Math.random() > 0.5 ? "w-4 h-4" : "w-3 h-3",
        color:
          Math.random() > 0.66
            ? "from-[#DD734F] to-[#1A1A32]"
            : Math.random() > 0.33
            ? "from-[#B9AEDF] to-[#1A1A32]"
            : "from-[#88E5BE] to-[#1A1A32]",
      };
    });

    setBallPositions(initialPositions);
  }, []);

  useEffect(() => {
    const updatePositions = () => {
      setBallPositions((prevPositions) =>
        prevPositions.map((ball) => {
          const newAngle = ball.angle + 0.002;
          return {
            ...ball,
            angle: newAngle,
            x:
              50 +
              (ball.radius * Math.cos(newAngle)) / (window.innerWidth / 100),
            y:
              50 +
              (ball.radius * Math.sin(newAngle)) / (window.innerHeight / 100),
          };
        })
      );
      requestAnimationFrame(updatePositions);
    };
    requestAnimationFrame(updatePositions);
  }, []);

  return (
    <div className="absolute inset-0">
      <Rings />
      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        {ballPositions.map((ball, index) => (
          <div
            key={index}
            className="absolute"
            style={{ left: `${ball.x}vw`, top: `${ball.y}vh` }}
          >
            <div
              className={`${ball.size} bg-gradient-to-b ${ball.color} rounded-full`}
            />
          </div>
        ))}
      </MouseParallax>
    </div>
  );
};
