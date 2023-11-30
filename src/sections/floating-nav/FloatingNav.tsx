import { floating_nav } from "../../utils/data";
import Nav from "./Nav";
import './floating-nav.css'

const FloatingNav = () => {
    return(
        <ul id="floating__nav" className="floating__nav">
            <div className="scrollspy">
                {
                    floating_nav.map(item => <Nav key={item.id} item={item} className="" />)
                }
            </div>
        </ul>
    )
}

export default FloatingNav