import { AnimationOnScroll } from "react-animation-on-scroll";
import "../styles/Project.scss";

interface Props {
  img: string;
  title: string;
  repoLink: string;
  demoLink: string;
  techIcons: Array<string>;
  noDemo?: boolean;
}

export default function Project(props: Props): JSX.Element {
  function getTechName(className: string): string {
    let newName = className;
    newName = newName.slice(8, -1);
    newName = newName.substring(0, newName.indexOf("-"));
    return newName;
  }

  return (
    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
      <article className="Project">
        <img src={props.img} alt="project screenshot" loading="lazy" />
        <div className="info">
          <h3 className="title">{props.title}</h3>
          <div className="bottomWrapper">
            <div className="left">
              {props.techIcons.map((item, index) => {
                return (
                  <div className="iconGroup" key={index}>
                    <i className={item}></i>
                    <span>{getTechName(item)}</span>
                  </div>
                );
              })}
            </div>
            <div className="right">
              <a href={props.repoLink} target="_blank" rel="noreferrer">
                <i className="devicon-github-original"></i>
              </a>
              {props.noDemo ? null : (
                <a href={props.demoLink} target="_blank" rel="noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    </AnimationOnScroll>
  );
}
