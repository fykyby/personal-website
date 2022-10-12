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
        <Project />
      </div>
    </section>
  );
}
