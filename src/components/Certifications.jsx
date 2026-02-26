import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";
import img1 from "../../public/PHero_Certificate_page-0001.jpg";
import img2 from "../../public/Profile _ freeCodeCamp.org_page-0001.jpg";
import { Link } from "react-router";
import toast from "react-hot-toast";

const Certifications = () => {

  const showPhVerification = () => {
    toast.error("Verification link was not provided from mentors !!!");
  };

  return (
    <section
      id="certifications"
      className="py-24 w-[90%] mb-10 mx-auto dark:bg-gray-900"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl orbitron md:text-4xl font-bold text-gray-700 dark:text-white">
           My Certifications
        </h2>
        <p className="mt-4 raleway text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-sm md:text-base">
          Professional certifications and courses that strengthened my technical expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

        {/* ================= CARD 1 ================= */}
        <div className="bg-white border-gray-200 border dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 flex flex-col overflow-hidden">

          {/* Image Frame */}
          <div className="bg-blue-50/60 dark:bg-gray-700 p-6 flex justify-center items-center">
            <div className="w-full max-w-[400px] h-[260px] border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
              <img
                src={img1}
                alt="Complete Web Development Course"
                className="max-h-full hover:scale-110 transition-transform duration-300 max-w-full object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col gap-3 flex-grow">
            <Link
              to="https://web.programming-hero.com/course-details"
              target="_blank"
              className="text-lg orbitron font-semibold text-gray-900 dark:text-white hover:text-blue-500 transition"
            >
              Complete Web Development (Level-1)
            </Link>

            <p className="text-sm raleway text-gray-500 dark:text-gray-400">
              Programming Hero
            </p>

            <p className="text-xs raleway text-gray-400 dark:text-gray-500">
              Jan 2025 — Sept 2025
            </p>

            <div className="flex gap-3 mt-auto pt-4">
              <a
                href={img1}
                download="Programming Hero Certification - Plabon"
                className="flex-1 raleway inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg bg-gradient-to-r from-blue-600 to-pink-500 text-white hover:scale-105 transition"
              >
                <AiOutlineDownload /> Download
              </a>

              <button
                onClick={showPhVerification}
                className="flex-1 raleway inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <BsCheckCircle /> Verify
              </button>
            </div>
          </div>
        </div>

        {/* ================= CARD 2 ================= */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 flex flex-col overflow-hidden">

          <div className="bg-blue-50/60 dark:bg-gray-700 p-6 flex justify-center items-center">
            <div className="w-full max-w-[400px] h-[260px] border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
              <img
                src={img2}
                alt="Responsive Web Design"
                className="max-h-full hover:scale-110 transition-transform duration-300 max-w-full object-contain"
              />
            </div>
          </div>

          <div className="p-6 flex flex-col gap-3 flex-grow">
            <Link
              to="https://www.freecodecamp.org/learn/2022/responsive-web-design/"
              target="_blank"
              className="text-lg orbitron font-semibold text-gray-900 dark:text-white hover:text-blue-500 transition"
            >
              Responsive Web Design
            </Link>

            <p className="text-sm raleway text-gray-500 dark:text-gray-400">
              freeCodeCamp
            </p>

            <p className="text-xs raleway text-gray-400 dark:text-gray-500">
              July 2025 — Aug 2025
            </p>

            <div className="flex gap-3 mt-auto pt-4">
              <a
                href={img2}
                download="Freecodecamp Certification - Plabon"
                className="flex-1 raleway inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg bg-gradient-to-r from-blue-600 to-pink-500 text-white hover:scale-105 transition"
              >
                <AiOutlineDownload /> Download
              </a>

              <Link
                to="https://www.freecodecamp.org/certification/abidhasanplabon/responsive-web-design"
                target="_blank"
                className="flex-1 raleway inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <BsCheckCircle /> Verify
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
