import "../styles/Projects.scss";
import Project from "./Project";
import imgFakeInsta from "../images/fakeinsta.png";

export default function Projects(): JSX.Element {
  return (
    <section className="Projects">
      <h1>Projects</h1>
      <div className="projectList">
        <Project
          title="Fake-Instagram"
          imgSrc={imgFakeInsta}
          technologiesUsed={[
            {
              url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              alt: "react",
            },
            {
              url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
              alt: "tailwind",
            },
            {
              url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
              alt: "firebase",
            },
          ]}
        />
      </div>
    </section>
  );
}
