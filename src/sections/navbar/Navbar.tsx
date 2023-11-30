import Logo from '../../assets/logo.jpg'
import { navbar_links } from '../../utils/data'
import { IoIosColorPalette } from 'react-icons/io'
import useModalContext from '../../context/modal-context'
import './navbar.css'

const Navbar = () => {
    const {showModalHandler} = useModalContext()

    return(
        <nav>
            <div className='container nav__container'>
                <a href="index.html" className='nav__logo'>
                    <img src={Logo} alt="Logo" />
                </a>

                <ul className='nav__menu'>
                    {
                        navbar_links.map(link => (
                            <li key={link.id}>
                                <a href={link.link}>
                                    {link.title}
                                </a>        
                            </li>
                        ))
                    }
                </ul>

                <button 
                    id='theme__icon'
                    onClick={showModalHandler}
                >
                    <IoIosColorPalette />
                </button>
            </div>
        </nav>
    )
}

export default Navbar