import { useEffect } from 'react'
import HeaderImage from '../../assets/header.jpg'
import { header_links } from '../../utils/data'
import './header.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            offset: 50
        })
        
    }, [])
    return(
        <header id='header'>
            <div className='container header__container'>
                <div className='header__profile' data-aos='fade-in'>
                    <img src={HeaderImage} alt="Header Portrait" />
                </div>
                <h3 data-aos="fade-up">
                    Julio Sanic
                </h3>
                <p data-aos='fade-up'>
                    You are a click away from building your dream website or web app. Send me the details of your project for a modern,
                    mobile responsive, highly performant website today! 
                </p>
                <div className='header__cta' data-aos='fade-up'>
                    <a href="#contact" className='btn primary'>Let's Talk</a>
                    <a href="#portfolio" className='btn light'>My Work</a>
                </div>
                <div className='header__socials'>
                    {
                        header_links.map(item => (
                            <a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>
                                {<item.icon />}
                            </a>
                        ))
                    }
                </div>
            </div>
        </header>
    )
}

export default Header