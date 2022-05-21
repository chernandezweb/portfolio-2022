import { motion } from "framer-motion";
import avatarProfile from '../../media/avatar-profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Home = props => {

    return (
        <motion.div
            className="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="top-section">
                <div className="avatar-side">
                    <img src={avatarProfile} alt="avatar" />
                </div>
                <div className="name-side">
                    <h1>Carlos Hernandez</h1>
                    <p>Full-Stack Developer</p>
                    <div className="links">
                        <a href="https://github.com/chernandezweb" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>

                        <a href="https://www.linkedin.com/in/carlos-hernandez-7a0177133/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </div>
                </div>

            </div>
            <div className="bottom-section">
                Portfolio en construction ...
            </div>
        </motion.div >

    )
}

export default Home;