import { footer_links, footer_socials } from "../../utils/data";
import "./footer.css";

const Footer = () => {
    return(
        <footer>
            <div className="container footer__container">
                <ul className="nav__menu">
                    {
                        footer_links.map(link => (
                            <li
                                key={link.id}
                            >
                                <a href={link.link}>
                                    {link.title}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <div className="footer__socials">
                    {
                        footer_socials.map(social => (
                            <a
                                key={social.id}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {<social.icon />}
                            </a>
                        ))
                    }
                </div>
                <div className="footer__copyright">
                    <small>2023 Julio Sanic &copy; Todos los derechos reservados.</small>
                </div>
            </div>
        </footer>
    )
}

export default Footer