import { useEffect, useRef } from "react";
import { SiGithub, SiGmail, SiCodeforces } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";

const SOCIAL = [
  { href: "https://github.com/DevAbidHasan", icon: SiGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/abid-hasan-plabon-a4aa222a1/", icon: BsLinkedin, label: "LinkedIn" },
  { href: "https://codeforces.com/profile/abidhasanplabon80", icon: SiCodeforces, label: "Codeforces" },
  { href: "mailto:abidhasanplabon80@gmail.com", icon: SiGmail, label: "Email" },
];

const TILT_MAX = 10;
const REST_Z = 3;
const HOVER_SCALE = 1.015;
const LERP = 0.068;

const REST = { rotateX: 0, rotateY: 0, rotateZ: REST_Z, scale: 1 };

const HeroProfileCard = ({ image, alt }) => {
  const cardRef = useRef(null);
  const tiltEnabledRef = useRef(false);
  const hoveringRef = useRef(false);
  const targetRef = useRef({ ...REST });
  const currentRef = useRef({ ...REST });
  const frameRef = useRef(null);

  const applyTransform = () => {
    const el = cardRef.current;
    if (!el) return;

    const current = currentRef.current;
    const target = targetRef.current;

    current.rotateX += (target.rotateX - current.rotateX) * LERP;
    current.rotateY += (target.rotateY - current.rotateY) * LERP;
    current.rotateZ += (target.rotateZ - current.rotateZ) * LERP;
    current.scale += (target.scale - current.scale) * LERP;

    el.style.transform = `rotateX(${current.rotateX.toFixed(3)}deg) rotateY(${current.rotateY.toFixed(3)}deg) rotateZ(${current.rotateZ.toFixed(3)}deg) scale(${current.scale.toFixed(4)})`;
  };

  const tick = () => {
    applyTransform();

    const current = currentRef.current;
    const target = targetRef.current;
    const settled =
      !hoveringRef.current &&
      Math.abs(current.rotateX - target.rotateX) < 0.02 &&
      Math.abs(current.rotateY - target.rotateY) < 0.02 &&
      Math.abs(current.rotateZ - target.rotateZ) < 0.02 &&
      Math.abs(current.scale - target.scale) < 0.001;

    if (settled) {
      frameRef.current = null;
      return;
    }

    frameRef.current = requestAnimationFrame(tick);
  };

  const startLoop = () => {
    if (frameRef.current === null) {
      frameRef.current = requestAnimationFrame(tick);
    }
  };

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      tiltEnabledRef.current = fine.matches && !reduced.matches;
    };
    apply();
    fine.addEventListener("change", apply);
    reduced.addEventListener("change", apply);

    applyTransform();

    return () => {
      fine.removeEventListener("change", apply);
      reduced.removeEventListener("change", apply);
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMove = (e) => {
    if (!tiltEnabledRef.current || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * TILT_MAX;
    const rotateX = ((rect.height / 2 - y) / (rect.height / 2)) * TILT_MAX;

    hoveringRef.current = true;
    targetRef.current = { rotateX, rotateY, rotateZ: 0, scale: HOVER_SCALE };
    startLoop();
  };

  const handleLeave = () => {
    hoveringRef.current = false;
    targetRef.current = { ...REST };
    startLoop();
  };

  return (
    <div className="hero-tilt-scene w-full max-w-[280px] sm:max-w-[300px]">
      <div
        ref={cardRef}
        className="hero-tilt-inner"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <div className="hero-profile-card">
          <div className="hero-photo-frame">
            <img
              src={image}
              alt={alt}
              className="hero-photo"
              width={720}
              height={900}
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="hero-profile-caption">
            <p className="font-display font-medium text-sm" style={{ color: "var(--text)" }}>
              Abid Hasan Plabon
            </p>
            <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
              Full Stack Developer
            </p>
            <div className="flex items-center gap-2 mt-3">
              {SOCIAL.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hero-social-link"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProfileCard;
