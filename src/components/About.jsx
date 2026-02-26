import React, { useState } from "react";

const About = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const threshold = 15; // controls tilt strength

  const handleMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    setTilt({
      x: y * -threshold,
      y: x * threshold,
    });
  };

  return (
    <section className="relative lg:pt-32 md:py-24 py-16 bg-white dark:bg-gray-900 overflow-hidden">

      {/* Background Text */}
      <h1
        className="absolute top-2 left-1/2 -translate-x-1/2 
        text-[80px] orbitron sm:text-[120px] lg:text-[160px] 
        font-extrabold text-gray-200 dark:text-gray-800 
        opacity-40 select-none pointer-events-none"
      >
        ABOUT
      </h1>

      <div className="relative w-[90%] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>
            <h2 className="text-3xl text-center lg:text-start orbitron md:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-white mb-6">
              About Me
            </h2>

            <p className="text-gray-600 raleway dark:text-gray-300 text-justify text-base md:text-lg leading-relaxed">
              I am a 3rd-year, 2nd-semester CSE student at <span className="font-semibold text-gray-600">Jahangirnagar University</span>, Savar, Dhaka.
              My focus is on building scalable, maintainable, and user-friendly digital products.
              I work with <span className="font-semibold text-gray-600">React</span>, <span className="font-semibold text-gray-600">Next.js</span>, <span className="font-semibold text-gray-600">Node.js</span>, <span className="font-semibold text-gray-600">Nest.js</span>, and <span className="font-semibold text-gray-600">PostgreSQL</span>.
            </p>
          </div>

          {/* Right Side - Premium Animated Card */}
          <div className="relative">

            <div
              onMouseMove={handleMove}
              onMouseLeave={() => setTilt({ x: 0, y: 0 })}
              style={{
                transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
              className="
                bg-blue-200/30 border-1 border-blue-100 dark:bg-gray-800
                dark:border-gray-700
                rounded-3xl
                p-12
                hover:border-blue-300
                shadow-sm
                
                hover:shadow-blue-50
                hover:shadow-2xl
                transition-transform duration-200 ease-out
                will-change-transform
              "
            >

              <div className="grid grid-cols-2 gap-y-12 gap-x-6 text-center">

                {/* Stat 1 */}
                <div>
                  <h3 className="text-4xl font-semibold 
                  bg-gradient-to-r from-pink-600 via-orange-300 to-yellow-300 
                  dark:from-white orbitron dark:to-gray-400 
                  bg-clip-text text-transparent">
                    1+
                  </h3>
                  <p className="mt-3 raleway text-gray-500 dark:text-gray-400 text-xs tracking-[0.2em] uppercase">
                    Years Experience
                  </p>
                </div>

                {/* Stat 2 */}
                <div>
                  <h3 className="text-4xl font-semibold animate-bounce 
                  bg-gradient-to-r from-blue-700 via-purple-500 to-pink-700 
                  dark:from-white dark:to-gray-400 
                  bg-clip-text orbitron text-transparent">
                    12+
                  </h3>
                  <p className="mt-3 raleway text-gray-500 dark:text-gray-400 text-xs tracking-[0.2em] uppercase">
                    Technologies Mastered
                  </p>
                </div>

                {/* Stat 3 */}
                <div className="">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Full Stack
                  </h3>
                  <p className="mt-3 raleway text-gray-500 dark:text-gray-400 text-xs tracking-[0.2em] uppercase">
                    Development
                  </p>
                </div>

                {/* Stat 4 */}
                <div className="">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Clean Code
                  </h3>
                  <p className="mt-3 raleway text-gray-500 dark:text-gray-400 text-xs tracking-[0.2em] uppercase">
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
