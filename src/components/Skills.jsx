import React from "react";

const Skills = () => {
  const skillsData = [
    {
      category: "Programming Languages",
      skills: ["C", "C++", "JavaScript"],
    },
    {
      category: "Frontend",
      skills: ["HTML", "Tailwind", "Bootstrap", "Javascript", "React", "DaisyUI"],
    },
    {
      category: "Backend & Database",
      skills: ["Firebase", "MySQL", "MongoDB Atlas", "Node JS", "Express JS"],
    },
    {
      category: "Tools & Others",
      skills: ["GitHub", "VS Code", "Netlify", "Vercel"],
    },
  ];

  return (
    <section id="skills" className="w-11/12 mx-auto py-20">
      <h2 className="text-3xl md:text-4xl font-bold poppins text-indigo-600 mb-12 text-center">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
          >
            <h3 className="font-bold poppins text-indigo-600 text-lg mb-4">
              {item.category}
            </h3>
            <ul className="space-y-2">
              {item.skills.map((skill, i) => (
                <li
                  key={i}
                  className="poppins text-gray-700 text-sm md:text-base flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
