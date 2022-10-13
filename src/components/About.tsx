import "../styles/About.scss";
const scrollToElement = require("scroll-to-element");

export default function About(): JSX.Element {
  function scrollToSection(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetSelector: string
  ) {
    e.preventDefault();
    scrollToElement(targetSelector, {
      ease: "out-sine",
      duration: 600,
    });
  }

  return (
    <section className="About">
      <nav>
        <a href="https://github.com/fykyby" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="/"
          onClick={(e) => {
            scrollToSection(e, ".Contact");
          }}
        >
          Contact
        </a>
      </nav>
      <h1>Filip Bodnar</h1>
      <h2>Frontend Developer</h2>
    </section>
  );
}
