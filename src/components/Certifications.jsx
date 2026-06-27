import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import img1 from "../../public/PHero_Certificate_page-0001.jpg";
import img2 from "../../public/Freecodecamp Certification - Plabon.jpg";
import toast from "react-hot-toast";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const certifications = [
  {
    image: img1,
    title: "Complete Web Development",
    subtitle: "Level 1 · Programming Hero",
    period: "Jan — Sept 2025",
    link: "https://web.programming-hero.com/course-details",
    downloadName: "Programming Hero Certification - Plabon",
    verify: () => toast.error("Verification link was not provided."),
  },
  {
    image: img2,
    title: "Responsive Web Design",
    subtitle: "freeCodeCamp",
    period: "July — Aug 2025",
    link: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
    downloadName: "Freecodecamp Certification - Plabon",
    verifyLink: "https://www.freecodecamp.org/certification/abidhasanplabon/responsive-web-design",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-block surface-muted">
      <div className="page-container">
        <SectionHeader
          index="06"
          eyebrow="Credentials"
          title="Certifications"
          description="Structured programs that strengthened my fundamentals and best practices."
          align="center"
          className="is-center"
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} className="project-card" animation="fade-up" delay={i * 160}>
              <div className="p-4" style={{ background: "var(--bg-subtle)" }}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden flex items-center justify-center surface-card">
                  <img src={cert.image} alt={cert.title} className="max-h-full max-w-full object-contain p-3" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="heading-sm flex items-center gap-2 hover:text-accent transition-colors"
                  style={{ color: "var(--text)" }}
                >
                  {cert.title}
                  <FiExternalLink size={14} style={{ color: "var(--text-muted)" }} />
                </a>
                <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>{cert.subtitle}</p>
                <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{cert.period}</p>
                <div className="grid grid-cols-2 gap-3 mt-auto pt-5">
                  <a href={cert.image} download={cert.downloadName} className="btn-primary !py-2.5 !text-xs justify-center">
                    <AiOutlineDownload size={14} /> Download
                  </a>
                  {cert.verifyLink ? (
                    <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer" className="btn-secondary !py-2.5 !text-xs justify-center">
                      <BsCheckCircle size={14} /> Verify
                    </a>
                  ) : (
                    <button type="button" onClick={cert.verify} className="btn-secondary !py-2.5 !text-xs justify-center">
                      <BsCheckCircle size={14} /> Verify
                    </button>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
