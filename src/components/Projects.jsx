import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Dailypress Article Portal",
    image: "https://i.postimg.cc/Gm3Lvm23/Good-Morning-(Facebook-Post).png",
    description:
      "A full-stack e-commerce platform with authentication, payment integration, and real-time order tracking.",
    live: "https://dailypress-bf298.web.app/",
    clientRepo: "https://github.com/DevAbidHasan/B11-A12-Dailypress-client",
    serverRepo: "https://github.com/DevAbidHasan/B11-A12-Dailypress-server",
    stack: [
      "Tailwind",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
    ],
    type: "Full Stack",
  },
  {
    id: 2,
    title: "Booknest Library Management",
    image: "https://i.ibb.co.com/vCD0RpN1/image.png",
    description:
      "A collaborative task management application with role-based access and real-time updates.",
    live: "https://book-nest-75887.web.app/",
    clientRepo: "https://github.com/DevAbidHasan/B11-A11-Booknest-client",
    serverRepo: "https://github.com/DevAbidHasan/B11-A11-Booknest-server",
    stack: [
      "Tailwind",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
    ],
    type: "Full Stack",
  },
  {
    id: 3,
    title: "FitSphere",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    description:
      "A fitness tracking web app with personalized dashboards and analytics visualization.",
    live: "https://example.com",
    clientRepo: "https://github.com/username/fitsphere-client",
    serverRepo: "https://github.com/username/fitsphere-server",
    stack: ["React", "Tailwind", "Chart.js", "JWT Auth"],
    type: "Front End",
  },
];

const Projects = () => {
  const viewDetails = () => {
    toast.success("card is openning");
  };

  return (
    <section id="projects" className="py-16 w-[90%] mx-auto dark:bg-gray-900">
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-3xl orbitron md:text-4xl font-bold text-gray-800 dark:text-white">
          Featured Projects
        </h2>
        <p className="mt-4 raleway text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          A selection of projects showcasing my expertise in full-stack
          development, UI engineering, and scalable backend architecture.
        </p>
      </div>
      <Toaster />

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
          >
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={`${project.image}?auto=format&fit=crop&w=800&q=80`}
                alt={project.title}
                className="w-full border-b border-gray-300 bg-white/30 h-full orbitron object-cover transition duration-500 ease-out group-hover:scale-105 "
              />

              {/* Dark Overlay */}

              {/* Project Type Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span
                  className="px-4 py-1 text-xs font-semibold tracking-wide rounded-full 
                bg-gradient-to-r from-indigo-500 to-purple-600 
                text-white orbitron shadow-lg backdrop-blur-md"
                >
                  {project.type}
                </span>
              </div>

              {/* View Details Button */}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-xl orbitron font-semibold text-gray-700 dark:text-white">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 raleway dark:text-gray-400 leading-relaxed">
                {project.description}
              </p>

              {/* Stack Chips */}
              <div className="flex raleway flex-wrap gap-2 pt-2">
                {project.stack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex raleway items-center justify-center gap-10 pt-4 mt-auto">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-500 transition"
                >
                  <FiExternalLink /> Live
                </a>

                <a
                  href={project.clientRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                >
                  <FiGithub /> Client
                </a>

                <a
                  href={project.serverRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                >
                  <FiGithub /> Server
                </a>
              </div>
            </div>

            {/* Subtle Futuristic Border Glow */}
            <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-indigo-500/40 transition duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
