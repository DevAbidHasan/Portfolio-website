import { REVEAL_DURATION } from "../utils/scrollReveal";

const Reveal = ({
  children,
  as: Tag = "div",
  animation = "fade-up",
  delay = 0,
  duration = REVEAL_DURATION,
  className = "",
  ...rest
}) => (
  <Tag
    className={className}
    data-aos={animation}
    data-aos-duration={duration}
    {...(delay > 0 ? { "data-aos-delay": delay } : {})}
    {...rest}
  >
    {children}
  </Tag>
);

export default Reveal;
