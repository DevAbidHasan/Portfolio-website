import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";
import img1 from "../../public/PHero_Certificate_page-0001.jpg"
import img2 from "../../public/Profile _ freeCodeCamp.org_page-0001.jpg"
import { Link } from "react-router";
import toast from "react-hot-toast";

const Certifications = () => {

    const showPhVerification = ()=>{
        toast.error("Verification link was not provided from mentors !!!")
    }

  return (
    <section id="certifications" className="py-20 dark:bg-gray-900">
      <div className="w-[90%] mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-white">
          Certifications
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-sm md:text-base">
          Professional certifications and online courses I've completed to sharpen my skills.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Certification 1 */}
        <div className="bg-white border-t border-gray-200 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
          <div className="overflow-hidden p-6  rounded-t-2xl">
            <img
              src={img1}
              alt="Complete Web Development Course"
              className="w-full h-45 border border-gray-300 p-2 rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <div className="p-5 flex flex-col gap-3">
            <Link to="https://web.programming-hero.com/course-details" target="_blank" className="text-lg font-semibold text-gray-900 hover:text-blue-500 dark:text-white line-clamp-2">
              Complete Web Development Course (Level-1) by Programming Hero
            </Link>
            <h2 className="text-sm text-gray-500 dark:text-gray-400">Programming Hero</h2>
            <p className="text-xs text-gray-400 dark:text-gray-500">January 2025 - September 2025</p>
            <div className="flex gap-2 mt-3">
              <a
                href="../../public/PHero_Certificate_page-0001.jpg" download="Programming Hero Certification - Plabon"
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-pink-500 text-white text-xs font-medium rounded-lg hover:scale-105 transition"
              >
                <AiOutlineDownload /> Download
              </a>
              <a
                onClick={showPhVerification}
                className="flex-1 inline-flex hover:cursor-pointer items-center justify-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <BsCheckCircle /> Verify
              </a>
            </div>
          </div>
        </div>

        {/* Certification 2 */}
        <div className="bg-white border-t border-gray-200 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
          <div className="overflow-hidden p-6 rounded-t-2xl">
            <img
              src={img2}
              alt="Responsive Web Design"
              className="w-full h-45 border border-gray-300 p-2 rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <div className="p-5 flex flex-col gap-3">
            <Link to="https://www.freecodecamp.org/learn/2022/responsive-web-design/" target="_blank" className="text-lg hover:text-blue-500 font-semibold text-gray-900 dark:text-white line-clamp-2">
              Responsive Web Design Certification
            </Link>
            <h2 className="text-sm  text-gray-500 dark:text-gray-400">Freecodecamp.org</h2>
            <p className="text-xs text-gray-400 dark:text-gray-500">July 2025 - August 2025</p>
            <div className="flex gap-2 mt-3">
              <a
                href="../../public/Profile _ freeCodeCamp.org_page-0001.jpg" download="Freecodecamp Certification - Plabon"
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-pink-500 text-white text-xs font-medium rounded-lg hover:scale-105 transition"
              >
                <AiOutlineDownload /> Download
              </a>
              <Link to="https://www.freecodecamp.org/certification/abidhasanplabon/responsive-web-design"
                target="_blank"
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
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
