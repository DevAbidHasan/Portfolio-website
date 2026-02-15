import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Dailypress Online Portal",
      description: "An online newspaper platform allows registered users to submit, read and update articles.",
      tech: ["React", "Tailwind", "Firebase", "MongoDB"],
      demo: "https://dailypress-bf298.web.app/",
      github: "https://github.com/DevAbidHasan/B11-A12-Dailypress-client",
    },
    {
      name: "Booknest Library management",
      description: "Allows users to get book infos and can borrow and return books through this",
      tech: [ "TailWind", "JavaScript", "Firebase", "MongoDB", "DaisyUI"],
      demo: "https://book-nest-75887.web.app/",
      github: "https://github.com/DevAbidHasan/B11-A11-Booknest-server",
    },
    {
      name: "Plantpal plant care platform",
      description: "Allows user to add plant, update and delete plant",
      tech: ["React", "Node.js", "MongoDB", "Firebase", "Express JS", "Tailwind"],
      demo: "https://plantpal-plant-care-tracking.web.app/",
      github: "https://github.com/DevAbidHasan/B11-A10-Plantpal-client",
    },
    {
      name: "OS Simulator",
      description: "Projects that simulates some operating systems algorithms flow with graphs",
      tech: ["React", "Tailwind", "MySQL"],
      demo: "https://shimmering-swan-099634.netlify.app/",
      github: "https://github.com/DevAbidHasan/OS-Algorithms-Simulator",
    },
  ];

  return (
    <section id="projects" className="w-11/12 mx-auto py-20">
      <h2 className="text-3xl md:text-4xl font-bold poppins text-indigo-600 mb-12 text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <h3 className="text-indigo-600 font-bold poppins text-lg md:text-xl">
                {project.name}
              </h3>
              <p className="poppins text-gray-700 text-sm md:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="text-xs md:text-sm bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 flex gap-4">
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 font-semibold poppins hover:underline text-sm md:text-base"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 font-semibold poppins hover:underline text-sm md:text-base"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
