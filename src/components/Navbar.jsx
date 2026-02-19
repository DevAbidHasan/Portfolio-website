import React, { useState } from 'react';
import logo from "../../public/logo-1.png";
import { SiGithub, SiCodeforces, SiGmail } from "react-icons/si";
import { FaFacebook } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const menuItem = (name, link) => (
    <a
      href={link}
      onClick={() => {
        setActive(name);
        setIsOpen(false);
      }}
      className={`text-sm transition-all duration-200 ${
        active === name
          ? "text-blue-700 font-semibold"
          : "text-zinc-800 hover:text-blue-400"
      }`}
    >
      {name}
    </a>
  );

  return (
    <div className='fixed orbitron top-5 left-0 w-full z-50 flex justify-center'>
      {/* Desktop Navbar */}
      <div className='lg:w-[60%] md:w-[80%] w-[95%] 
        px-6 py-3 lg:py-2 rounded-full 
        bg-white/20 backdrop-blur-md border border-zinc-300 
        shadow-sm flex items-center justify-between'>

        {/* Desktop Menu */}
        <div className='hidden md:flex text-sm text-zinc-900 items-center md:gap-5 lg:gap-6'>
          {menuItem("Home", "#")}
          {menuItem("Skills", "#skills")}
          {menuItem("Projects", "#projects")}
          {menuItem("Certifications", "#certifications")}
        </div>

        {/* Logo */}
        <div>
          <a href='#'>
            <img src={logo} className='w-[35px]' alt="Logo" />
          </a>
        </div>

        {/* Social Icons */}
        <div className='hidden md:flex items-center md:gap-4 lg:gap-6'>
          {/* GitHub */}
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

          {/* Facebook */}
          <div className="relative group">
            <a href="https://www.facebook.com/plabon48" target='_blank'>
              <FaFacebook className='text-blue-600 hover:text-blue-700' size={22}/>
            </a>
            <span className="absolute -top-9 left-1/2 -translate-x-1/2
              bg-blue-600 text-white text-xs px-2 py-1 rounded-md
              opacity-0 group-hover:opacity-100
              transition-all duration-300 whitespace-nowrap">
              Facebook
            </span>
          </div>

          {/* Codeforces */}
          <div className="relative group">
            <a href="https://codeforces.com/profile/abidhasanplabon80" target='_blank'>
              <SiCodeforces className='text-orange-400 hover:text-orange-500' size={22}/>
            </a>
            <span className="absolute -top-9 left-1/2 -translate-x-1/2
              bg-orange-400 text-white text-xs px-2 py-1 rounded-md
              opacity-0 group-hover:opacity-100
              transition-all duration-300 whitespace-nowrap">
              Codeforces
            </span>
          </div>

          {/* Gmail */}
          <div className="relative group">
            <a href='mailto:abidhasanplabon80@gmail.com'>
              <SiGmail size={22} className='text-red-500 hover:text-red-600'/>
            </a>
            <span className="absolute -top-9 left-1/2 -translate-x-1/2
              bg-green-500 text-white text-xs px-2 py-1 rounded-md
              opacity-0 group-hover:opacity-100
              transition-all duration-300 whitespace-nowrap">
              Gmail
            </span>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(true)}>
            <HiOutlineMenu className='hover:text-blue-500 hover:cursor-pointer' size={26}/>
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Side Drawer */}
      <div className={`fixed top-0 right-0 h-full w-[75%] 
        bg-white/80 shadow-lg transform transition-transform duration-300 
        md:hidden z-50
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}>

        {/* Close Button */}
        <div className="flex justify-end p-5">
          <HiOutlineX className='hover:text-red-600 hover:cursor-pointer' size={28} onClick={() => setIsOpen(false)} />
        </div>

        {/* Mobile Menu Items */}
        <div className="flex flex-col items-start gap-6 px-8 mt-10">
          {menuItem("Home", "#")}
          {menuItem("Skills", "#skills")}
          {menuItem("Projects", "#projects")}
          {menuItem("Certifications", "#certifications")}
        </div>

        {/* Mobile Social Icons */}
        <div className="flex gap-6 px-8 mt-12">
          <a href="https://github.com/DevAbidHasan" target='_blank'>
            <SiGithub size={22} className="text-zinc-700 hover:text-zinc-900"/>
          </a>
          <a href="https://www.linkedin.com/in/abid-hasan-plabon-a4aa222a1/" target='_blank'>
            <BsLinkedin size={22} className="text-blue-400 hover:text-blue-500"/>
          </a>
          <a href="https://www.facebook.com/plabon48" target='_blank'>
            <FaFacebook size={22} className="text-blue-600 hover:text-blue-700"/>
          </a>
          <a href="https://codeforces.com/profile/abidhasanplabon80" target='_blank'>
            <SiCodeforces size={22} className="text-orange-400 hover:text-orange-500"/>
          </a>
          <a href='mailto:abidhasanplabon80@gmail.com'>
            <SiGmail size={22} className='text-red-500 hover:text-red-600'/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
