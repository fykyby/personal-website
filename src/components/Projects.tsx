import "../styles/Projects.scss";
import Project from "./Project";
import imgFakeInsta from "../images/fakeinsta.png";
import imgYtMusic from "../images/ytmusicplayer.png";
import imgBattleship from "../images/battleship.png";
import imgSnake from "../images/snake.png";

export default function Projects(): JSX.Element {
  return (
    <section className="Projects">
      <h1>Projects</h1>
      <div className="projectList">
        <Project
          title="Music Player for YouTube"
          imgSrc={imgYtMusic}
          liveLink="https://fykyby.github.io/music-player-for-youtube/"
          repoLink="https://github.com/fykyby/music-player-for-youtube"
          technologiesUsed={[
            {
              url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              alt: "react",
            },
            {
              url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
              alt: "typescript",
            },
          ]}
        />
        <Project
          title="Fake-Instagram"
          imgSrc={imgFakeInsta}
          liveLink="https://fykyby.github.io/fake-instagram/"
          repoLink="https://github.com/fykyby/fake-instagram"
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
        <Project
          title="Battleship"
          imgSrc={imgBattleship}
          liveLink="https://fykyby.github.io/battleship/"
          repoLink="https://github.com/fykyby/battleship"
          technologiesUsed={[
            {
              url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
              alt: "javascript",
            },
            {
              url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
              alt: "css",
            },
          ]}
        />
        <Project
          title="Snake"
          imgSrc={imgSnake}
          liveLink="https://fykyby.github.io/snake/"
          repoLink="https://github.com/fykyby/snake"
          technologiesUsed={[
            {
              url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
              alt: "javascript",
            },
            {
              url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
              alt: "css",
            },
          ]}
        />
      </div>
    </section>
  );
}
