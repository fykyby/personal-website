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
          img={imgYtMusic}
          repoLink={"https://github.com/fykyby/music-player-for-youtube"}
          demoLink={"https://fykyby.github.io/music-player-for-youtube/"}
          techIcons={[
            "devicon-react-original colored",
            "devicon-typescript-plain colored",
          ]}
        />
        <Project
          title="Fake-Instagram"
          img={imgFakeInsta}
          repoLink={"https://github.com/fykyby/fake-instagram"}
          demoLink={"https://fykyby.github.io/fake-instagram/"}
          techIcons={[
            "devicon-react-original colored",
            "devicon-tailwindcss-plain colored",
            "devicon-firebase-plain colored",
          ]}
        />
        <Project
          title="Battleship"
          img={imgBattleship}
          repoLink={"https://github.com/fykyby/battleship"}
          demoLink={"https://fykyby.github.io/battleship/"}
          techIcons={[
            "devicon-javascript-plain colored",
            "devicon-css3-plain colored",
          ]}
        />
        <Project
          title="Snake"
          img={imgSnake}
          repoLink={"https://github.com/fykyby/snake"}
          demoLink={"https://fykyby.github.io/snake/"}
          techIcons={[
            "devicon-javascript-plain colored",
            "devicon-css3-plain colored",
          ]}
        />
      </div>
    </section>
  );
}
