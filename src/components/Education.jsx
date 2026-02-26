import React from "react";
import { IoSchoolSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Education = () => {
  return (
    <section className="bg-white pt-20 px-4">
      <div className="w-[90%] mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl orbitron lg:text-5xl md:text-4xl font-semibold tracking-tight mb-4">
            Academic Journey
          </h2>
          <p className="text-neutral-500 raleway text-sm md:text-base">
            A timeline of my academic growth and technical foundation
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-[1.5px] bg-gray-300 md:-translate-x-1/2"></div>

          {/* ===== Item 1 ===== */}
          <div className="relative  mb-20 md:w-1/2 md:pr-14 md:text-right">
            
            {/* Dot */}
            <div className="absolute left-4 animate-pulse md:left-auto md:right-[-8px] top-3 w-3 h-3 bg-zinc-800 rounded-full ring-4 ring-blue-100"></div>

            <div className="bg-gray-50 h-[220px] md:h-[250px] p-8 hover:scale-105 duration-200 hover:border-gray-400 transition-transform rounded-3xl border border-gray-300 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
              
              <span className="inline-block raleway text-xs tracking-wider text-neutral-400 mb-3">
                2023 — 2027 ( Running )
              </span>

              <h3 className="text-lg orbitron font-semibold">
                B.Sc in Computer Science & Engineering
              </h3>

              <p className="text-sm raleway flex items-center justify-start md:justify-end gap-6 text-neutral-600 mt-2">
                <IoSchoolSharp size={20}/>Jahangirnagar University
                
              </p>
              <p className="text-sm raleway flex raleway items-center justify-start md:justify-end gap-6 text-neutral-600 mt-2">
                <FaLocationDot size={18}/>Savar, Dhaka - 1342
                
              </p>
            </div>
          </div>

          {/* ===== Item 2 ===== */}
          <div className="relative mb-20 md:w-1/2 md:ml-auto md:pl-14">
            
            {/* Dot */}
            <div className="absolute animate-pulse left-4 md:left-[-8px] top-3 w-3 h-3 bg-zinc-800 rounded-full ring-4 ring-blue-100"></div>

            <div className="bg-gray-50 h-[220px] md:h-[250px] hover:scale-105 duration-200 hover:border-gray-400 transition-transform p-8 rounded-3xl border border-gray-300 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
              
              <span className="inline-block raleway text-xs tracking-wider text-neutral-400 mb-3">
                2019 — 2021
              </span>
              <h3 className="text-lg orbitron font-semibold">
                HSC in Science
              </h3>
              <p className="text-sm flex raleway items-center justify-start gap-6 text-neutral-600 mt-2">
                <IoSchoolSharp size={20}/>Shahid Syed Nazrul Islam College
                
              </p>
              <p className="text-sm raleway flex items-center justify-start gap-6 text-neutral-600 mt-2">
                <FaLocationDot size={18}/>Mymensingh
                
              </p>

              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
