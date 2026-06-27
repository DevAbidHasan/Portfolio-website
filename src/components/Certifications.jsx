import { AiOutlineDownload } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import img1 from "../../public/PHero_Certificate_page-0001.jpg";
import img2 from "../../public/Freecodecamp Certification - Plabon.jpg";
import toast from "react-hot-toast";
import Reveal from "./Reveal";

const certifications = [
  {
    image: img1,
    title: "Complete Web Development",
    issuer: "Programming Hero",
    level: "Level 1",
    period: "Jan — Sept 2025",
    link: "https://web.programming-hero.com/course-details",
    downloadName: "Programming Hero Certification - Plabon",
    verify: () => toast.error("Verification link was not provided."),
  },
  {
    image: img2,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    period: "July — Aug 2025",
    link: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
    downloadName: "Freecodecamp Certification - Plabon",
    verifyLink: "https://www.freecodecamp.org/certification/abidhasanplabon/responsive-web-design",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-block surface-muted certifications-section">
      <div className="page-container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-28" animation="fade-right">
            <p className="section-eyebrow">
              <span className="section-index">{"{06}"}</span>
              <span className="section-eyebrow-sep"> — </span>
              Credentials
            </p>
            <h2 className="section-title">Certifications</h2>
            <p className="mt-4 text-body">
              Structured programs that strengthened my fundamentals — from responsive layout to
              full-stack web development.
            </p>
          </Reveal>

          <div className="cert-list lg:col-span-8">
            {certifications.map((cert, i) => (
              <Reveal
                as="article"
                key={cert.title}
                className="cert-card"
                animation="fade-left"
                delay={i * 140}
              >
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-preview"
                  aria-label={`View ${cert.title} course`}
                >
                  <img src={cert.image} alt="" loading="lazy" />
                </a>

                <div className="cert-body">
                  <div className="cert-head">
                    <time className="cert-period">{cert.period}</time>
                    <span className="cert-issuer">{cert.issuer}</span>
                  </div>

                  <h3 className="cert-title">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-title-link"
                    >
                      {cert.title}
                      <FiArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  </h3>

                  {cert.level && <p className="cert-level">{cert.level}</p>}

                  <div className="cert-actions">
                    <a
                      href={cert.image}
                      download={cert.downloadName}
                      className="cert-action cert-action--primary"
                    >
                      <AiOutlineDownload size={14} aria-hidden="true" />
                      Download
                    </a>
                    {cert.verifyLink ? (
                      <a
                        href={cert.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-action"
                      >
                        <BsCheckCircle size={14} aria-hidden="true" />
                        Verify
                      </a>
                    ) : (
                      <button type="button" onClick={cert.verify} className="cert-action">
                        <BsCheckCircle size={14} aria-hidden="true" />
                        Verify
                      </button>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
