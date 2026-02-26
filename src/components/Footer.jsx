import React from "react";
import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <hr data-aos="fade-down" className="text-gray-200 mt-15 w-[90%] mx-auto" />
      <div data-aos="fade-up">
        <div className="flex items-center gap-5  justify-center mt-10">
          <div className="relative group">
              <a href="https://github.com/DevAbidHasan" target='_blank'>
                <SiGithub className='text-zinc-700 hover:text-zinc-900' size={22}/>
              </a>
              <span className="absolute -top-9 left-1/2 -translate-x-1/2
                bg-indigo-800 text-white text-xs px-2 py-1 rounded-md
                opacity-0 group-hover:opacity-100
                transition-all duration-300 whitespace-nowrap">
                GitHub
              </span>
            </div>
          
            {/* LinkedIn */}
            <div className="relative group">
              <a href="https://www.linkedin.com/in/abid-hasan-plabon-a4aa222a1/" target='_blank'>
                <BsLinkedin className='text-blue-400 hover:text-blue-500' size={22}/>
              </a>
              <span className="absolute -top-9 left-1/2 -translate-x-1/2
                bg-cyan-600 text-white text-xs px-2 py-1 rounded-md
                opacity-0 group-hover:opacity-100
                transition-all duration-300 whitespace-nowrap">
                LinkedIn
              </span>
            </div>
        </div>
      </div>
      <h2 className="text-gray-500 raleway text-sm my-8 text-center">
        &copy; <span className="tracking-[0.1em]">2026 Abid Hasan Plabon. All rights reserved.</span>
      </h2>
    </div>
  );
};

export default Footer;
