import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Zoom from 'react-reveal/Zoom';
import { useAppContext } from "../../useAppState";

const Portfolio = props => {

    const { state, actions } = useAppContext();

    useEffect(() => {
        actions.setPageName('Portfolio');
    }, [])

    const projects = [
        {
            title: "Icité (lms)",
            image: require('../../media/lms-icite.jpg'),
            desc: "icite lms \n\nDemo Account (Connexion externe)-----\nemail: test@icite.ca\npassword: demo123",
            url: "https://icite.ca/",
            tech: "React, NodeJs"
        },
        {
            title: "Icité (admin)",
            image: require('../../media/admin-icite.jpg'),
            desc: "icite admin",
            tech: "React, NodeJs"
        },
        {
            title: "Icité (cms)",
            image: require('../../media/cms-icite.jpg'),
            desc: "icite cms",
            tech: "NodeJs"
        },
        {
            title: "Other web tools for underwriters at Intact",
            image: require('../../media/outils-web-intact.jpg'),
            desc: "Other web tools for underwriters at Intact",
            tech: "React, NodeJs"
        },
        {
            title: "Léger Opinion (LÉO)",
            image: require('../../media/legeropinion.jpg'),
            desc: "Léger Opinion contains a \"marketing side\" website and a connected application where users can access Leger surveys and be compensated for it. This web platform was developped with the php templating framework Twig and using html, Bootstrap, scss/css, angular and Ionic",
            tech: "Ionic, Angular, Twig, Html, SCSS, Javascript, Jquery"
        },
        {
            title: "Indice du bonheur Léger",
            image: require('../../media/ibl.jpg'),
            desc: "Indice de bonheur Léger is a web platform where users can answer to 3 differents surveys to know their happiness index, their mood index or their happiness at work. This web platform was developped with the php templating framework Twig and using html,",
            tech: "Twig, Html, SCSS, Javascript, Jquery"
        },
        {
            title: "Interactive game Zone des lions (Zoo Granby)",
            image: require('../../media/zoo-granby-lions.jpg'),
            desc: "This project is an interactive game made using Unity and displayed in the Lions zone at the Zoo Granby",
            tech: "Unity"
        },
        {
            title: "Une Autre Histoire (personnages)",
            image: require('../../media/une-autre-histoire.jpg'),
            desc: "Une autre histoire (personnages) is a web platform developped to show all characters of the TV Show (Une autre histoire) in a creative way. Each character float in the page in a way they all fit randomlly well in it and they all follow the movement of",
            tech: "Twig, Html, SCSS, Javascript, Jquery"
        },
        {
            title: "Ici Explora",
            image: require('../../media/explora.jpg'),
            desc: "The (Ici Explora) project consisted to develop the redesign of the old website of the TV channel Ici Explora from Radio Canada. This web platform was developped with the php templating framework Twig and using html, Bootstrap, scss/css and javascript/jq",
            tech: "Twig, Html, SCSS, Javascript, Jquery"
        },
        {
            title: "Ici Artv",
            image: require('../../media/artv.jpg'),
            desc: "The (Ici Artv) project was mostly a project in coordination with the Ici Explora project where it consisted to develop the redesign of the old website of the TV channel Ici Artv from Radio Canada. This web platform was developped with the php templating",
            tech: "Twig, Html, SCSS, Javascript, Jquery"
        },
        {
            title: "Clash (Vrak TV)",
            image: require('../../media/clash.jpg'),
            desc: "The (Clash) project was to develop the front end side for the new TV show at Vrak TV called Clash. It presented different informations about the show, including videos, characters and episodes. This web platform was developped with the php templating f",
            tech: "Twig, Html, SCSS, Javascript, Jquery"
        },
        {
            title: "On joue au docteur",
            image: require('../../media/on-joue-au-docteur.jpg'),
            desc: "The (On joue au docteur) project was to develop the front end side for the new TV show at CanalVie called On joue au docteur.",
            tech: "Twig, Html, SCSS, Javascript, Jquery"
        },
        {
            title: "Max et Livia",
            image: require('../../media/max-et-livia.jpg'),
            desc: "The (On joue au docteur) project was to develop the front end side for the new TV show at CanalVie called On joue au docteur.",
            tech: "Twig, Html, SCSS, Javascript, Jquery"
        },
        {
            title: "Fous des bateaux",
            image: require('../../media/fous-des-bateaux.jpg'),
            desc: "The (On joue au docteur) project was to develop the front end side for the new TV show at CanalVie called On joue au docteur.",
            tech: "Twig, Html, SCSS, Javascript, Jquery"
        },
        {
            title: "My Crypto Base",
            image: require('../../media/my-crypto-base.jpg'),
            desc: "My crypto base is a small side project in connection with my interest cryptocurrencies. In this platform you can see some informations about the top listed cryptocurrencies at the moment such as the price, the volatility, the market cap, etc. This projec",
            tech: "React, Html, SCSS, Javascript, Rxjs, ES6"
        },
        {
            title: "La Patisserie",
            image: require('../../media/la-patisserie.jpg'),
            desc: "La Patisserie was a small website made for Orly Cuisine to present a brand of their porducts for their B2B clients.",
            tech: "React, Html, SCSS, Javascript, Rxjs, ES6"
        },
        {
            title: "Le Cuistot",
            image: require('../../media/le-cuistot.jpg'),
            desc: "Le Cuitot was a small website made for Orly Cuisine to present a brand of their porducts for their B2B clients.",
            tech: "React, Html, SCSS, Javascript, Rxjs, ES6"
        },
    ]

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
                {
                    projects.map(project => {
                        return (
                            <Zoom>
                                <div className="project-cnt">
                                    <div className="project-image-cnt" >
                                        <img className="project-image" src={project.image} alt={project.title} />
                                    </div>

                                    <div className="project-description-cnt">
                                        <div className="project-title">{project.title}</div>
                                        <div className="project-desc">{project.desc}</div>
                                        {
                                            project.url ?
                                                (
                                                    <div className="project-url"><a href={project.url} target="_blank" rel="noreferrer">{project.url}</a></div>
                                                ) : null
                                        }
                                        <div className="project-tech">{project.tech}</div>
                                    </div>
                                </div>
                            </Zoom>
                        )
                    })
                }

            </div>

        </motion.div>
    )
}


export default Portfolio