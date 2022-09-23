import "../styles/Project.scss";

interface Props {
  title: string;
  imgSrc: string;
  liveLink: string;
  repoLink: string;
  technologiesUsed: Array<any>;
}

export default function Project({
  title,
  imgSrc,
  liveLink,
  repoLink,
  technologiesUsed,
}: Props): JSX.Element {
  return (
    <article className="Project">
      <div className="img">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="info">
        <h2 className="title">{title}</h2>
        <div className="moreInfo">
          <div className="technologiesUsed">
            {technologiesUsed.map((item, index) => {
              return <img src={item.url} alt={item.alt} key={index} />;
            })}
          </div>
          <div className="links">
            <a href={liveLink} target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#181616"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
            <a href={repoLink} target="_blank" rel="noreferrer">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
