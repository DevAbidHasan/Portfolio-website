import React, { useEffect, useState, useRef } from "react";

import img from "../../public/PXL_20240130_070044507.jpg";
import { MdFileDownload } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoPhoneLandscape } from "react-icons/io5";
import { MdOutlinePhoneMissed } from "react-icons/md";
import { FiHeadphones } from "react-icons/fi";
import { MdReportGmailerrorred } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import { RiHome2Line } from "react-icons/ri";
import { IoCameraOutline } from "react-icons/io5";
import { TiLockClosed } from "react-icons/ti";


const Hero = () => {
  const [time, setTime] = useState(new Date());
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const tiltRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);

  // Update time
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const formattedDate = time.toLocaleDateString([], {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const threshold = 15; // rotation strength
  const speed = 0.1; // smoothing factor

  const handleMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    tiltRef.current = { x: y * -threshold, y: x * threshold };

    if (!animationRef.current) animateTilt();
  };

  const animateTilt = () => {
    setTilt((prev) => {
      const dx = tiltRef.current.x - prev.x;
      const dy = tiltRef.current.y - prev.y;

      if (Math.abs(dx) < 0.01 && Math.abs(dy) < 0.01) {
        animationRef.current = null;
        return tiltRef.current;
      }

      animationRef.current = requestAnimationFrame(animateTilt);

      return {
        x: prev.x + dx * speed,
        y: prev.y + dy * speed,
      };
    });
  };

  const handleLeave = () => {
    tiltRef.current = { x: 0, y: 0 };
    if (!animationRef.current) animateTilt();
  };

  return (
    <section className="min-h-screen w-full mx-auto flex items-center justify-center pt-32 pb-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 w-full">
        {/* LEFT SIDE - PHONE MOCKUP */}
        <div className="flex justify-center w-full lg:w-1/2">
          <div
            className="relative w-[260px] h-[480px] rounded-[40px] bg-zinc-950 p-2 shadow-2xl perspective-[1400px]"
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{
              transform: `perspective(1400px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.02)`,
              transformStyle: "preserve-3d",
              transition: "transform 0.05s linear",
            }}
          >
            {/* Screen */}
            <div className="w-full h-full border-4 border-zinc-950 bg-gradient-to-br from-purple-300 via-indigo-50 to-orange-200 rounded-[30px] overflow-hidden flex flex-col items-center justify-center text-center p-6 relative shadow-lg">
              {/* Top Status Area */}
              <div className="absolute top-5 left-6 right-6 flex justify-between text-xs items-center font-medium text-zinc-800">
                <span>
                  <MdReportGmailerrorred size={12} className="text-red-500" />
                </span>
                <span>
                  <MdOutlinePhoneMissed size={12} />
                </span>
                <span>
                  <IoPhoneLandscape className="text-green-400 " size={12} />
                </span>
                <span>
                  <GiNetworkBars size={12} />
                </span>
                <span>
                  <FiHeadphones size={12} />
                </span>
                <span>{formattedTime}</span>
                <span className="raleway">Dhaka</span>
              </div>

              {/* Profile Image */}
              <img
                src={img}
                alt="profile"
                className="w-35 h-35 border border-green-700 rounded-full object-cover mb-4 shadow-lg"
              />

              {/* Name */}
              <h3 className="text-md orbitron font-semibold text-zinc-900">
                Abid Hasan Plabon
              </h3>

              {/* Role */}
              <p className="text-sm raleway text-zinc-700 mt-1">
                MERN Stack Software Developer
              </p>

              {/* Date */}
              <div className="mt-2 text-xs raleway text-zinc-600">{formattedDate}</div>

              {/* Available for Work Badge */}
              <div className="mt-4 flex raleway items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-ping inline-block"></span>
                <span className="text-xs font-medium text-green-600">
                  Available for Remote Jobs
                </span>
              </div>

              <div className="flex items-center mt-5 gap-2">
                <FaPhoneVolume size={22} />
                <span> +8801305-208332</span>
              </div>
              <div className="flex items-center justify-between gap-16 absolute bottom-2.5">
                <TiLockClosed />
                <RiHome2Line />
                <IoCameraOutline />
              </div>
            </div>

            {/* Camera Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-zinc-950 rounded-full"></div>
          </div>
        </div>

        {/* RIGHT SIDE - INTRO */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          
          <h1 className="text-3xl orbitron md:text-4xl lg:text-5xl font-bold leading-tight text-zinc-900">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500">
              Abid Hasan <br/>Plabon
            </span>
          </h1>

          <h2 className="text-xl raleway md:text-2xl mt-4 text-zinc-600">
            Full Stack MERN Developer
          </h2>

          <p className="mt-6 raleway text-zinc-500 max-w-lg mx-auto lg:mx-0">
            I build things for the web combining UI magic and logics together
          </p>

          {/* Buttons */}
          <div className="mt-8 raleway flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="mailto:abidhasanplabon80@gmail.com" target="_blank"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 text-white font-medium hover:scale-105 transition shadow-zinc-500 duration-300 shadow-lg"
            >
              Contact Me
            </a>

            <a
              href="../../public/Resume_MERN_Plabon.pdf"
              download="Resume of Mern Stack Developer Plabon"
              className="px-6 py-3 rounded-full border border-zinc-400 flex items-center justify-center gap-2 text-zinc-700 font-medium hover:bg-zinc-100 shadow-2xl shadow-blue-200 transition duration-300"
            >
              Resume <MdFileDownload className="animate-pulse" size={25} />
            </a>
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default Hero;
