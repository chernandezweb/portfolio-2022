import { useEffect } from 'react';
import { motion } from "framer-motion";
import avatarProfile from '../../media/avatar-profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useAppContext } from "../../useAppState";
import { useTranslation } from "react-i18next";

const Home = props => {

    const { t } = useTranslation();
    const { state, actions } = useAppContext();

    useEffect(() => {
        actions.setPageName('Home');
    }, [])

    return (
        <motion.div
            className="home-page"
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
                    <p>{t('home-page-full-stack-dev')}</p>
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
                    <p className="about-me-title">{t('home-page-about-me-label-1')} <span>{t('home-page-about-me-label-2')}</span></p>
                    <p className="about-me-text">{t('home-page-about-me-text')}</p>
                    <button className="resume-btn">{t('home-page-download-resume')}</button>
                </div>
                <div className="infos-side">
                    <div>
                        <span>Age</span>
                        <span>24</span>
                    </div>
                    <div>
                        <span>Languages</span>
                        <span>French, English and Spanish</span>
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
                        <span>Email</span>
                        <span>chernandezweb@gmail.com</span>
                    </div>
                </div>
            </div>
        </motion.div >

    )
}

export default Home;