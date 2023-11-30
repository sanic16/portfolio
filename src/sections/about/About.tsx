import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import { HiDownload } from 'react-icons/hi'
import { about_data } from '../../utils/data'
import Card from '../../components/Card'
import './about.css'


const About = () => {
    return(
        <section id='about' data-aos='fade-in'>
            <div className='container about__container'>
                <div className="about__left">
                    <div className="about__portrait">
                        <img src={AboutImage} alt="About Image" />
                    </div>
                </div>
                <div className="about__right">
                    <h2>About Me</h2>
                    <div className="about__cards">
                        {
                            about_data.map(item => (
                                <Card key={item.id} className='about__card'>
                                    <span className='about__card-icon'>{<item.icon />}</span>
                                    <h5>{item.title}</h5>
                                    <small>{item.desc}</small>
                                </Card>
                            ))
                        }
                    </div>
                    <p>
                        Building projects is my passion. I am a Full Stack Web Developer with industry experience building websites and web applications. I specialize in JavaScript and have professional experience working with React, Node, Express, and MongoDB. I also have experience working with Python, Django, and PostgreSQL. 
                    </p>
                    <p>
                        Hi, my name is Julio Sanic from Guatemala. I am a Full Stack Web Developer with industry experience building websites and web applications. I specialize in JavaScript and have professional experience working with React, Node, Express, and MongoDB. I also have experience working with Python, Django, and PostgreSQL. 
                    </p>
                    <a href={CV} download className='btn primary'>Download CV <HiDownload /></a>
                </div>
            </div>
        </section>
    )
}

export default About