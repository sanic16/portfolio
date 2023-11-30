import Project from './Project';

type Props = {
    projects: {
        id: number,
        title: string,
        desc: string,
        image: string,
        github: string,
        demo: string,
    }[]
}

const Projects = (props: Props) => {
  return (
    <div className='portfolio__projects' data-aos='fade-in'>
        {
            props.projects.map(project => (
                <Project
                    key={project.id}
                    project={project}
                />
            ))
        }
    </div>
  )
}

export default Projects