import { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navigation = props => {

    const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

    return (
        <div className="menu">
            <div className="desktop-menu">
                <div className="menu-name">Carlos <span className="last-name">Hernandez</span></div>

                <nav>
                    <Link to="/portfolio-developer">Home</Link>
                    <Link to="/portfolio-developer/portfolio">Portfolio</Link>
                </nav>
            </div>

            <div className="mobile-menu">
                <div className="menu-name">Carlos <span className="last-name">Hernandez</span></div>


                <FontAwesomeIcon
                    onClick={() => setDisplayMobileMenu(prev => !prev)}
                    icon={faBars}
                    className="burger-icon" />

                <nav className={'mobile-nav ' + (displayMobileMenu ? 'mobile-nav-visible' : 'mobile-nav-hidden')} >
                    <Link to="/portfolio-developer">Home</Link>
                    <Link to="/portfolio-developer/portfolio">Portfolio</Link>
                </nav>
            </div>

        </div>
    )
}

export default Navigation;