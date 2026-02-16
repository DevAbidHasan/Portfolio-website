import React from "react";

const About = () => {
  return (
    <section className="relative lg:pt-32 md:py-24 py-16 bg-white dark:bg-gray-900 overflow-hidden">

      {/* Background Text */}
      <h1 className="absolute top-2 left-1/2 -translate-x-1/2 
      text-[80px] sm:text-[120px] lg:text-[160px] 
      font-extrabold text-gray-200 dark:text-gray-800 
      opacity-40 select-none pointer-events-none">
        ABOUT
      </h1>

      <div className="relative w-[90%] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-white mb-6">
              About Me
            </h2>

            <p className="text-gray-600 dark:text-gray-300 text-justify text-base md:text-lg leading-relaxed">
              I am a 3rd-year, 2nd-semester CSE student at Jahangirnagar University, Savar, Dhaka.
              My focus is on building scalable, maintainable, and user-friendly digital products.
              I work with React, Next.js, Node.js, Nest.js, and PostgreSQL.
            </p>
          </div>

          {/* Right Side - Premium Minimal Card */}
          <div className="relative">

            <div className="
              bg-blue-100/30 border border-zinc-200 dark:bg-gray-800
               dark:border-gray-700
              rounded-3xl
              p-12
              shadow-sm
              hover:shadow-xl
              transition-all duration-500
            ">

              <div className="grid grid-cols-2 gap-y-12 gap-x-6 text-center">

                {/* Stat 1 */}
                <div>
                  <h3 className="text-4xl font-semibold 
                  bg-gradient-to-r from-pink-600 via-orange-300 to-yellow-300 
                  dark:from-white dark:to-gray-400 
                  bg-clip-text text-transparent">
                    1+
                  </h3>
                  <p className="mt-3 text-gray-500 dark:text-gray-400 text-xs tracking-[0.2em] uppercase">
                    Years Experience
                  </p>
                </div>

                {/* Stat 2 */}
                <div>
                  <h3 className="text-4xl font-semibold animate-bounce 
                  bg-gradient-to-r from-blue-700 via-purple-500 to-pink-700 
                  dark:from-white dark:to-gray-400 
                  bg-clip-text text-transparent">
                    12+
                  </h3>
                  <p className="mt-3 text-gray-500 dark:text-gray-400 text-xs tracking-[0.2em] uppercase">
                    Technologies Mastered
                  </p>
                </div>

                {/* Stat 3 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Full Stack 
                  </h3>
                  <p className="mt-3 text-gray-500 dark:text-gray-400 text-xs tracking-[0.2em] uppercase">
                    Development 
                  </p>
                </div>

                {/* Stat 4 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Clean Code
                  </h3>
                  <p className="mt-3 text-gray-500 dark:text-gray-400 text-xs tracking-[0.2em] uppercase">
                    Focused
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
