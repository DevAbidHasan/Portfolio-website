import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "NexaMart",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    description:
      "A full-stack e-commerce platform with authentication, payment integration, and real-time order tracking.",
    live: "https://example.com",
    clientRepo: "https://github.com/username/nexamart-client",
    serverRepo: "https://github.com/username/nexamart-server",
    stack: ["React", "Node.js", "MongoDB", "Stripe", "Firebase"],
    type: "Full Stack",
  },
  {
    id: 2,
    title: "TaskOrbit",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    description:
      "A collaborative task management application with role-based access and real-time updates.",
    live: "https://example.com",
    clientRepo: "https://github.com/username/taskorbit-client",
    serverRepo: "https://github.com/username/taskorbit-server",
    stack: ["Next.js", "Express", "PostgreSQL", "Socket.io"],
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
  return (
    <section
      id="projects"
      className="py-16 w-[90%] mx-auto dark:bg-gray-900"
    >
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-3xl orbitron md:text-4xl font-bold text-gray-800 dark:text-white">
          Featured Projects
        </h2>
        <p className="mt-4 raleway text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          A selection of projects showcasing my expertise in full-stack development,
          UI engineering, and scalable backend architecture.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={`${project.image}?auto=format&fit=crop&w=800&q=80`}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500" />

              {/* Project Type Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-4 py-1 text-xs font-semibold tracking-wide rounded-full 
                bg-gradient-to-r from-indigo-500 to-purple-600 
                text-white shadow-lg backdrop-blur-md">
                  {project.type}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.description}
              </p>

              {/* Stack Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
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
              <div className="flex items-center justify-center gap-10 pt-4 mt-auto">
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

            {/* Subtle futuristic glow on hover */}
            <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-indigo-500/40 transition duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
