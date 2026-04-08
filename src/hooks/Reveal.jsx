import useReveal from "./useReveal";

const directions = {
  left: "translate-x-[-40px]",
  right: "translate-x-[40px]",
  up: "translate-y-[-40px]",
  down: "translate-y-[40px]",
  none: "",
};

const Reveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  className = "",
}) => {
  const { ref, visible } = useReveal();

  const hidden = `${directions[direction]} opacity-0`;
  const show = "translate-x-0 translate-y-0 opacity-100";

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
      className={`
        transition-all ease-out will-change-transform
        ${visible ? show : hidden}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Reveal;
