import Projects from "./Projects"
import './portfolio.css'
import { projects } from "../../utils/data"
import { useState } from "react"
import ProjectsCategories from "./ProjectsCategories"

type Project = {
  id: number,
  title: string,
  desc: string,
  image: string,
  github: string,
  demo: string,
}

const Portfolio = () => {

  const [projectsData, setProjectsData] = useState<Project[]>(projects)

  const categories = projects.map(item => item.category)
  const uniqueCategories = ['all', ...new Set(categories)]

  const filterProjectsHandler = (category: string) => {
    if(category === 'all'){
      setProjectsData(projects)
      return
    }

    const filterProjects = projects.filter(project => project.category === category)
    setProjectsData(filterProjects)
  }

  return (
    <section id="portfolio">
        <h2>Recent Projects</h2>
        <p>
            Check out some of the projects I recently worked on for my clients. Use the buttons
            to toggle the different categories.
        </p>
        <div className="container portfolio__container">
            <ProjectsCategories categories={uniqueCategories} onFilterProjects={filterProjectsHandler} />
            <Projects projects={projectsData} />
        </div>
    </section>
  )
}

export default Portfolio