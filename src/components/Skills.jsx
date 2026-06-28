import Reveal from "./Reveal";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiPostman,
  SiJsonwebtokens,
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "var(--text)" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "var(--text-secondary)" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "JWT", icon: SiJsonwebtokens, color: "var(--text)" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];

const Skills = () => {
  return (
    <section id="skills" className="section-block">
      <div className="page-container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-28" animation="fade-right">
            <p className="section-eyebrow">
              <span className="section-index">{"{04}"}</span>
              <span className="section-eyebrow-sep"> — </span>
              Skills
            </p>
            <h2 className="section-title">What I work with daily</h2>
            <p className="mt-4 text-body">
              Core and supporting tech from my MERN stack — the tools I use in practice, showcase, and production work.
            </p>
          </Reveal>

          <div className="lg:col-span-7 xl:col-span-8">
            <div className="skills-stack-scene">
              {skills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <Reveal
                    key={skill.name}
                    className="skills-stack-card"
                    delay={i * 90}
                    style={{ "--i": i }}
                  >
                    <span className="skills-stack-icon">
                      <Icon size={26} style={{ color: skill.color }} />
                    </span>
                    <span className="skills-stack-name">{skill.name}</span>
                  </Reveal>
                );
              })}
              <div className="skills-stack-spacer" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
