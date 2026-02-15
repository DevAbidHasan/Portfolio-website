import React, { useEffect, useState } from "react";

import img from "../../public/plabon.png";
import { MdFileDownload } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoPhoneLandscape } from "react-icons/io5";
import { MdOutlinePhoneMissed } from "react-icons/md";
import { FiHeadphones } from "react-icons/fi";
import { MdReportGmailerrorred } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";

const Hero = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

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

  return (
    <section
      className="min-h-screen  flex items-center justify-center 
    pt-32 pb-20"
    >
      <div
        className="flex flex-col lg:flex-row items-center 
      justify-between gap-16 w-full"
      >
        {/* LEFT SIDE - PHONE MOCKUP */}

        <div className="flex justify-center w-full lg:w-1/2">
          <div
            className="relative w-[260px] h-[480px] 
  bg-zinc-900
  rounded-[40px] p-3 shadow-2xl"
          >
            {/* Screen */}
            <div
              className="w-full h-full bg-gradient-to-br from-purple-300 via-indigo-50 to-orange-200
      rounded-[30px] overflow-hidden flex flex-col 
      items-center justify-center text-center p-6 relative"
            >
              {/* Top Status Area */}
              <div
                className="absolute top-5 left-6 right-6 flex 
      justify-between text-xs items-center font-medium text-zinc-800"
              >
                <span><MdReportGmailerrorred size={12} className="text-red-500"/></span>
                <span><MdOutlinePhoneMissed size={12}/></span>
                <span><IoPhoneLandscape className="text-green-400 " size={12}/></span>
                <span><GiNetworkBars size={12}/></span>
                <span><FiHeadphones  size={12}/></span>
                <span>{formattedTime}</span>
                <span>Dhaka, BD</span>
              </div>

              {/* Profile Image */}
              <img
                src={img}
                alt="profile"
                className="w-35 h-35 rounded-full object-cover mb-4 shadow-lg"
              />

              {/* Name */}
              <h3 className="text-lg font-semibold text-zinc-900">
                Abid Hasan Plabon
              </h3>

              {/* Role */}
              <p className="text-sm text-zinc-700 mt-1">
                MERN Stack Software Developer
              </p>

              {/* Date */}
              <div className="mt-2 text-xs text-zinc-600">{formattedDate}</div>

              {/* Available for Work Badge */}
              <div className="mt-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-ping inline-block"></span>
                <span className="text-xs font-medium text-green-700">
                  Available for Remote Jobs
                </span>
              </div>
              <div className="flex items-center mt-5 gap-2">
                <FaPhoneVolume size={22}/> 
                <span> +8801305-208332</span>
              </div>
            </div>

            {/* Camera Notch */}
            <div
              className="absolute top-2 left-1/2 -translate-x-1/2
    w-24 h-5 bg-black rounded-full"
            ></div>
          </div>
        </div>

        {/* RIGHT SIDE - INTRO */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl 
          font-bold leading-tight text-zinc-900"
          >
            <span
              className="text-transparent bg-clip-text 
            bg-gradient-to-r from-blue-600 to-pink-500"
            >
              Abid Hasan Plabon
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl mt-4 text-zinc-600">
            Full Stack MERN Developer
          </h2>

          <p className="mt-6 text-zinc-500 max-w-lg mx-auto lg:mx-0">
            I design and develop scalable web applications using MongoDB,
            Express, React, and Node.js. Passionate about clean code,
            performance, and modern UI.
          </p>

          {/* Buttons */}
          <div
            className="mt-8 flex flex-col sm:flex-row 
          gap-4 justify-center lg:justify-start"
          >
            <a
              href="#contact"
              className="px-6 py-3 rounded-full
              bg-gradient-to-r from-blue-600 to-pink-500
              text-white font-medium
              hover:scale-105 transition shadow-zinc-500 duration-300 shadow-lg"
            >
              Contact Me 
            </a>

            <a
              href="../../public/Resume-full-stack-Plabon.pdf" download="Resume of Mern Stack Developer Plabon"
              className="px-6 py-3 rounded-full
              border border-zinc-400 flex items-center justify-center gap-2
              text-zinc-700 font-medium
              hover:bg-zinc-100 shadow-2xl shadow-blue-200 transition duration-300"
            >
              Resume < MdFileDownload  size={25}/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
