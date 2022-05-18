import { Link } from 'react-router-dom';

const Navigation = props => {

    return (
        <div className="menu">
            <div className="menu-name">Carlos <span className="last-name">Hernandez</span></div>
            <nav>
                <Link to="/portfolio-2022">Home</Link>
                {/* <Link to="/about">About</Link> */}
            </nav>
        </div>
    )
}

export default Navigation;