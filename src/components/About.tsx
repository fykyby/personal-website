import { useEffect, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "../styles/About.scss";

const scrollToElement = require("scroll-to-element");

export default function About(): JSX.Element {
  const [text, setText] = useState("");
  const textStr = "Frontend Developer";

  useEffect(() => {
    writeName(textStr, 0);
  }, []);

  function writeName(name: string, index: number) {
    if (index === 0) {
      setText("");
    }
    setText((prev) => prev + name[index]);
    if (index + 1 !== name.length) {
      setTimeout(() => {
        writeName(name, index + 1);
      }, 120);
    }
  }

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
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
        <h1>Filip Bodnar</h1>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
        <h2>{`~$ ${text}`}</h2>
      </AnimationOnScroll>
    </section>
  );
}
