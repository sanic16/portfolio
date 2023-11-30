import Card from "../../components/Card";

type Props = {
  project: {
    title: string;
    desc: string;
    image: string;
    github: string;
    demo: string;
  };
};

const Project = (props: Props) => {
    return(
        <Card className="portfolio__project">
            <div className="portfolio__project-image">
                <img src={props.project.image} alt="Portfolio Project Image" />
            </div>
            <h4>{props.project.title}</h4>
            <p>{props.project.desc}</p>
            <div className="portfolio__project-cta">
                <a 
                    href={props.project.demo} 
                    className="btn sm" 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Demo
                </a>
                <a 
                    href={props.project.github}
                    className="btn sm primary"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github
                </a>
            </div>
        </Card>
    )
};

export default Project;
