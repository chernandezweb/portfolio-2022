import { motion } from "framer-motion";


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
                    <img src="https://gravatar.com/avatar/33fedee00d9531778cf2aefa53c0fab4?s=400&d=robohash&r=x" alt="avatar" />
                </div>
                <div className="name-side">
                    <h1>Carlos Hernandez</h1>
                    <p>Full-Stack Developer</p>
                </div>

            </div>
            <div className="bottom-section">
                Portfolio en construction ...
            </div>
        </motion.div >

    )
}

export default Home;