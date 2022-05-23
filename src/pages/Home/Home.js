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
                <div className="about-me-side">
                    <p className="about-me-title">About <span>me</span></p>
                    <p className="about-me-text">Hello, I'm Carlos Hernandez. I am a Full-Stack web developer from the south-shore of Montreal (Qc, Canada). </p>
                    <button className="resume-btn">DOWNLOAD RESUME</button>
                </div>
                <div className="infos-side">
                    <div>
                        <span>Age</span>
                        <span>24</span>
                    </div>
                    <div>
                        <span>Residence</span>
                        <span>Canada</span>
                    </div>

                    <div>
                        <span>Address</span>
                        <span>Montreal, Canada</span>
                    </div>

                    <div>
                        <span>email</span>
                        <span>chernandezweb@gmail.com</span>
                    </div>
                </div>
            </div>
        </motion.div >

    )
}

export default Home;