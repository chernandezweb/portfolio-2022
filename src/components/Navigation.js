import { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from "../useAppState";

const Navigation = props => {

    const { state, actions } = useAppContext();
    const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

    const closeMenu = () => {
        setDisplayMobileMenu(false)
    };

    const changeLangHandler = (e) => {
        e.preventDefault();
        if (state.lang === "fr") {
            actions.changeLang('en')
        } else {
            actions.changeLang('fr')
        }
    };

    return (
        <div className="menu">
            <div className="desktop-menu">
                <div className="menu-name">Carlos <span className="last-name">Hernandez</span></div>

                <nav>
                    <Link to="/portfolio-developer" className={state.pageName === "Home" ? 'menu-page-active' : ''}>Home</Link>
                    <Link to="/portfolio-developer/portfolio" className={state.pageName === "Portfolio" ? 'menu-page-active' : ''}>Portfolio</Link>
                    <button className="lang-selector" onClick={changeLangHandler}>{state.lang === "fr" ? "EN" : "FR"}</button>
                </nav>
            </div>

            <div className="mobile-menu">
                <div className="menu-name">Carlos <span className="last-name">Hernandez</span></div>


                <FontAwesomeIcon
                    onClick={() => setDisplayMobileMenu(prev => !prev)}
                    icon={faBars}
                    className="burger-icon" />

                <nav className={'mobile-nav ' + (displayMobileMenu ? 'mobile-nav-visible' : 'mobile-nav-hidden')} >
                    <Link to="/portfolio-developer" onClick={closeMenu}>Home</Link>
                    <Link to="/portfolio-developer/portfolio" onClick={closeMenu}>Portfolio</Link>
                    <button
                        className="lang-selector"
                        onClick={(e) => {
                            changeLangHandler(e);
                            closeMenu()
                        }}>
                        {state.lang === "fr" ? "EN" : "FR"}
                    </button>
                </nav>
            </div>

        </div>
    )
}

export default Navigation;