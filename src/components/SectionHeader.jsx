const SectionHeader = ({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) => (
  <div
    className={`section-header ${align === "center" ? "is-center" : ""} ${className}`}
    data-aos="fade-up"
    data-aos-duration="1100"
  >
    {(index || eyebrow) && (
      <p className="section-eyebrow">
        {index && <span className="section-index">{`{${index}}`}</span>}
        {index && eyebrow && <span className="section-eyebrow-sep"> — </span>}
        {eyebrow}
      </p>
    )}
    <h2 className="section-title">{title}</h2>
    {description && <p className="section-desc">{description}</p>}
  </div>
);

export default SectionHeader;
