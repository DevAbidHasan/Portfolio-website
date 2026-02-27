import React, { useState } from "react";
import { 
  SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiReactrouter,
  SiNodedotjs, SiExpress, SiNestjs, SiJsonwebtokens, SiPostman, SiFirebase,
  SiMongodb, SiPostgresql, SiGit, SiNpm, SiInsomnia, 
  SiReactquery
} from "react-icons/si";

const skillCategories = {
  Frontend: [
    { name: "HTML", icon: <SiHtml5 size={28} color="#E34F26" /> },
    { name: "CSS", icon: <SiCss3 size={28} color="#1572B6" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={28} color="#38B2AC" /> },
    { name: "Bootstrap", icon: <SiBootstrap size={28} color="#7952B3" /> },
    { name: "Shadcn UI", icon: <SiReactquery size={28} color="#6366F1" /> },
    { name: "JavaScript", icon: <SiJavascript size={28} color="#F7DF1E" /> },
    { name: "TypeScript", icon: <SiTypescript size={28} color="#3178C6" /> },
    { name: "React", icon: <SiReact size={28} color="#61DAFB" /> },
    { name: "Next.js", icon: <SiNextdotjs size={28} /> },
    { name: "React Router", icon: <SiReactrouter size={28} color="#CA4245" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <SiNodedotjs size={28} color="#339933" /> },
    { name: "Express", icon: <SiExpress size={28} /> },
    { name: "Nest.js", icon: <SiNestjs size={28} color="#E0234E" /> },
    { name: "REST API", icon: <SiPostman size={28} color="#FF6C37" /> },
    { name: "JWT", icon: <SiJsonwebtokens size={28} color="#000000" /> },
  ],
  Database: [
    { name: "MongoDB", icon: <SiMongodb size={28} color="#47A248" /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={28} color="#336791" /> },
    { name: "Firebase", icon: <SiFirebase size={28} color="#FFCA28" /> },
  ],
  Tools: [
    { name: "Git", icon: <SiGit size={28} color="#F05032" /> },
    { name: "npm", icon: <SiNpm size={28} color="#CB3837" /> },
    { name: "Postman", icon: <SiPostman size={28} color="#FF6C37" /> },
    { name: "Insomnia", icon: <SiInsomnia size={28} color="#4000BF" /> },
  ]
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section id="skills" className="py-22 bg-white dark:bg-gray-900">
      <div className="w-[90%] mx-auto text-center">

        {/* Title */}
        <h2 data-aos = "fade-down" className="text-3xl lg:text-5xl orbitron md:text-4xl font-bold text-gray-700 mb-6 dark:text-white ">
          Skills & Tools
        </h2>
        <p data-aos = "fade-down" className="text-gray-600 raleway dark:text-gray-300 mb-12">
  Technologies and tools I use to build modern and scalable web applications.
</p>

        {/* Responsive Tabs */}
        <div  className="flex  p-2 bg-gray-100 rounded-lg flex-wrap md:justify-center sm:justify-start gap-3 mb-12">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2 orbitron rounded-lg font-medium text-sm transition-all duration-300
                ${activeTab === category
                  ? "bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-900 shadow-md"
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div data-aos="fade-up" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
          {skillCategories[activeTab].map((skill, index) => (
            <div
              key={index}
              className="flex hover:bg-gray-50 flex-col items-center justify-center p-4 rounded-xl border border-gray-100 bg-gray-100 hover:scale-110 transition-transform duration-300"
            >
              <div className="mb-2">{skill.icon}</div>
              <span className="text-gray-600 raleway dark:text-gray-300 text-sm font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
