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
                    <p>Markup that will be revealed on scroll</p>
                </Zoom>
            </div>

        </motion.div>
    )
}


export default Portfolio