import React from "react";

const About = () => {
  return (
    <section className="lg:py-32 md:py-24 py-15 bg-white dark:bg-gray-900">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full gap-12 lg:gap-16 lg:w-[90%] mx-auto">

        {/* LEFT SIDE - Optional Minimal Icon */}
        <div className="flex justify-center lg:justify-start w-full lg:w-1/3">
          <div className="w-40 h-40 rounded-2xl bg-gray-100 flex items-center justify-center shadow-md">
            <span className="text-3xl">💻</span>
          </div>
        </div>

        {/* RIGHT SIDE - About Text */}
        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-4">
            I am a 3rd-year, 2nd-semester CSE student at Jahangirnagar University, Savar, Dhaka. I have over 1 year of experience building web applications using the MERN stack.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-6">
            I am proficient in <strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, <strong>Nest.js</strong>, <strong>PostgreSQL</strong>, and other modern web technologies. I enjoy designing scalable, maintainable, and user-friendly applications.
          </p>

          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-full
            bg-gray-800 text-white font-medium
            hover:scale-105 transition duration-300 shadow-md"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;
