import { motion } from "framer-motion";
import Zoom from 'react-reveal/Zoom';


const Portfolio = props => {

    return (
        <motion.div
            className="portfolio-page"
            initial={{
                opacity: 0,
                scale: 0,
                rotate: 180,
            }}
            animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
            }}
            exit={{
                scale: 0,
                rotate: 0,
            }}>

            <div className="top-section">
                Portfolio
            </div>

            <div className="bottom-section">
                <Zoom>
                    <div className="project-cnt">
                        <img className="project-image" src="https://i.imgur.com/RZAgcwq.png" alt="Léger Opinion (LÉO)" />
                        <div className="project-description-cnt">
                            <div className="project-title">Léger Opinion (LÉO)</div>
                            <div className="project-desc">Léger Opinion contains a "marketing side" website and a connected application where users can access Leger surveys and be compensated for it. This web platform was developped with the php templating framework Twig and using html, Bootstrap, scss/css a</div>
                            <div className="project-tech">Technology used : Ionic, Angular, Twig, Html, SCSS, Javascript, Jquery</div>
                        </div>
                    </div>
                </Zoom>
            </div>

        </motion.div>
    )
}


export default Portfolio