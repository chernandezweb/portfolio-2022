import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Zoom from 'react-reveal/Zoom';
import { useAppContext } from "../../useAppState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Portfolio = props => {

    const { state, actions } = useAppContext();

    const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
    const [currentQImage, setCurrentQImage] = useState('');

    useEffect(() => {
        actions.setPageName('Portfolio');
    }, [])

    const projects = [
        {
            title: "Icité (lms)",
            image: require('../../media/lms-icite.jpg'),
            desc_fr: "Icité est une plateforme de formation en ligne utilisée par le réseau de courtage d'Intact Assurance ainsi que les employé et souscripteur. Étant le seul développeur lors du lancement de cette idée au sein de l'équipe Formation et Développement j'ai développé cette plateforme 'from scratch' pour survenir aux différents besoin de formation dont les autres plateforme internes ne répondaient pas.  \n\nDemo Account (Connexion externe)-----\nemail: test@icite.ca\npassword: demo123",
            desc_en: "Icité is an online training platform used by the Intact Insurance brokerage network as well as employees and underwriters. Being the only developer when launching this idea within the Training and Development team, I developed this platform 'from scratch' to meet the different training needs that other internal platforms did not meet. \n\nDemo Account (External Connection)-----\nemail: test@icite.ca\npassword: demo123",
            url: "https://icite.ca/",
            tech: "React, NodeJs, GraphQl"
        },
        {
            title: "Icité (admin)",
            image: require('../../media/admin-icite.jpg'),
            desc_fr: "Cette plateforme est le côté d'administration d'Icité contenant toute la gestion des enregistrements de participants, les gestionnaires, les cohortes, les accès, les rapports, l'API et plus.",
            desc_en: "This platform is the administration side of Icité containing all the management of participant registrations, managers, cohorts, access, reports, API and more.",
            tech: "React, NodeJs, GraphQl"
        },
        {
            title: "Icité (cms)",
            image: require('../../media/cms-icite.jpg'),
            desc_fr: "Ceci est le gestionnaire de contenu développé et personnalisé pour les différents types de contenu de formation.",
            desc_en: "This is the content manager developed and customized for different types of training content.",
            tech: "NodeJs, Directus (Headless CMS)"
        },
        {
            title: "Other web tools for underwriters at Intact",
            image: require('../../media/outils-web-intact.jpg'),
            desc_fr: "Ceci contient différents outils en format web développé pour aider les souscripteurs sur certaines tâches spécifiques",
            desc_en: "This contains various tools in web format developed to help underwriters with specific tasks",
            url: "https://experiencedeveloppement.net/outils/",
            tech: "React, NodeJs"
        },
        {
            title: "Léger Opinion (LÉO)",
            image: require('../../media/legeropinion.jpg'),
            desc_fr: "Léger Opinion est un projet contenant un site web \"marketing\" ainsi qu'une application connectée où les utilisateurs peuvent accéder à des sondages offerts par Léger et recevoir une compensation.",
            desc_en: "Léger Opinion contains a \"marketing side\" website and a connected application where users can access Leger surveys and be compensated for it",
            url: "https://www.legeropinion.com/",
            tech: "Ionic, Angular, Twig, Html, SCSS, Javascript, Jquery"
        },
        {
            title: "Indice du bonheur Léger",
            image: require('../../media/ibl.jpg'),
            desc_fr: "Indice de bonheur Léger est une plateforme web dans laquelle les utilisateurs peuvent répondre à 3 différents types de sondages pour connaître leur indice de bonheur, leur indice de l'humeur ou leur indice de bonheur au travail.",
            desc_en: "Indice de bonheur Léger is a web platform where users can answer to 3 differents surveys to know their happiness index, their mood index or their happiness at work.",
            url: "https://indicedebonheur.com/",
            tech: "Twig, Html, SCSS, Javascript, Jquery"
        },
        {
            title: "La tournée zone jeunesse (LÜ)",
            image: require('../../media/zone-jeunnesse.jpg'),
            video: 'https://ici.radio-canada.ca/tourneezonejeunesse/medias/videos/RC_TourneeZoneJeunesse_2020-generic.mp4',
            desc_fr: "Ce projet consistait à  aider au développement de quelques jeux projetés dans des gymnases d'école et avec lesquels les enfants peuvent intéragir en lançant des ballons sur le mur.",
            desc_en: "This project consisted to help in developing some games projected in school gymnasiums and with which children can interact by throwing balls to the wall.",
            tech: "Unity"
        },
        {
            title: "Interactive game Zone des lions (Zoo Granby)",
            image: require('../../media/zoo-granby-lions.jpg'),
            desc_fr: "Ce projet consistait à développer une plateforme intéractive avec Unity pour afficher du contenu à propos de la zone des lions au Zoo Granby.",
            desc_en: "This project is an interactive game made using Unity and displayed in the Lions zone at the Zoo Granby",
            tech: "Unity"
        },
        {
            title: "Une Autre Histoire (personnages)",
            image: require('../../media/une-autre-histoire.jpg'),
            desc_fr: "Une autre histoire (personnage) est une plateforme web développée pour montrer les personnages de la série télé diffusée sur Radio Canada (Une autre histoire) d'une manière créative.",
            desc_en: "Une autre histoire (personnages) is a web platform developped to show all characters of the TV Show (Une autre histoire) in a creative way.",
            url: "https://ici.radio-canada.ca/uneautrehistoirepersonnages/",
            tech: "Twig, Html, SCSS, Javascript, Jquery"
        },
        {
            title: "Ici Explora",
            image: require('../../media/explora.jpg'),
            desc_fr: "Le projet (Ici Explora) consistait au développement du redesign de l'ancienne version du site web de la chaîne de télé Ici Explora de Radio Canada.",
            desc_en: "The (Ici Explora) project consisted to develop the redesign of the old website of the TV channel Ici Explora from Radio Canada.",
            url: "https://ici.exploratv.ca/",
            tech: "Twig, Html, SCSS, Javascript, Jquery"
        },
        {
            title: "Ici Artv",
            image: require('../../media/artv.jpg'),
            desc_fr: "Le projet (Ici Artv) était pratiquement en coordination avec le projet Ici Explora dans lequel nous devions développer le redesign de l'ancienne version du site web de la chaîne de télé Ici Artv de Radio Canada.",
            desc_en: "The (Ici Artv) project was mostly a project in coordination with the Ici Explora project where it consisted to develop the redesign of the old website of the TV channel Ici Artv from Radio Canada.",
            url: "https://ici.artv.ca/",
            tech: "Twig, Html, SCSS, Javascript, Jquery"
        },
        {
            title: "Clash (Vrak TV)",
            image: require('../../media/clash.jpg'),
            desc_fr: "Le projet (Clash) était de développer le côté front-end du site web pour une nouvelle série télé de Vrak TV nommée Clash. Le site web présente différentes informations à propos de la série incluant des vidéos, les personnages ainsi que des épisodes.",
            desc_en: "The (Clash) project was to develop the front end side for the new TV show at Vrak TV called Clash. It presented different informations about the show, including videos, characters and episodes.",
            tech: "Twig, Html, SCSS, Javascript, Jquery"
        },
        {
            title: "On joue au docteur",
            image: require('../../media/on-joue-au-docteur.jpg'),
            desc_fr: "Le projet (On joue au docteur) consistait à développer le côté front-end du site web pour la nouvelle série télé de Canalvie nommée On joue au docteur.",
            desc_en: "The (On joue au docteur) project was to develop the front end side for the new TV show at CanalVie called On joue au docteur.",
            tech: "Twig, Html, SCSS, Javascript, Jquery"
        },
        {
            title: "Max et Livia",
            image: require('../../media/max-et-livia.jpg'),
            desc_fr: "Le projet (Max et Livia) était de développer le côté front-end du site web pour la série télé Max et Livia.",
            desc_en: "The project (Max et Livia) was to develop the front-end side of the website for the TV series Max et Livia.",
            tech: "Twig, Html, SCSS, Javascript, Jquery"
        },
        {
            title: "Fous des bateaux",
            image: require('../../media/fous-des-bateaux.jpg'),
            desc_fr: "Le projet (Fous des bateaux) était de développer le côté front-end du site web pour la série télé Fous des bateaux.",
            desc_en: "The project (Fous des bateaux) was to develop the front-end side of the website for the TV series Fous des bateaux.",
            tech: "Twig, Html, SCSS, Javascript, Jquery"
        },
        {
            title: "My Crypto Base",
            image: require('../../media/my-crypto-base.jpg'),
            desc_fr: "My crypto base est un petit projet personnel en lien avec mon intérêt avec les cryptodevises. Dans cette plateforme vous pouvez voir quelques informations à propos des devises listés dans le top 100 en ce moment, tel que le prix, la volatilité, la valeur du marché et plus.",
            desc_en: "My crypto base is a small side project in connection with my interest cryptocurrencies. In this platform you can see some informations about the top listed cryptocurrencies at the moment such as the price, the volatility, the market cap, etc.",
            tech: "React, Html, SCSS, Javascript, Rxjs, ES6"
        },
        {
            title: "La Patisserie",
            image: require('../../media/la-patisserie.jpg'),
            desc_fr: "La Patisserie est un petit site web développé pour Orly Cuisine dans le but de présenter une marque de leurs produit pour leur clients B2B.",
            desc_en: "La Patisserie was a small website made for Orly Cuisine to present a brand of their porducts for their B2B clients.",
            url: "http://la-patisserie.ca/",
            tech: "React, Html, SCSS, Javascript, Rxjs, ES6"
        },
        {
            title: "Le Cuistot",
            image: require('../../media/le-cuistot.jpg'),
            desc_fr: "Le Cuistot est un petit site web développé pour Orly Cuisine dans le but de présenter une marque de leurs produit pour leur clients B2B.",
            desc_en: "Le Cuitot was a small website made for Orly Cuisine to present a brand of their porducts for their B2B clients.",
            url: "http://cuistot.ca/",
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
                                        <img
                                            className="project-image"
                                            src={project.image}
                                            alt={project.title}
                                        />
                                        <div
                                            className={'zoom-image-btn'}
                                            onClick={() => {
                                                setCurrentQImage(project.image)
                                                setTimeout(() => {
                                                    setIsLightBoxOpen(true);
                                                }, 500)
                                            }}>
                                            <FontAwesomeIcon icon={faPlusCircle} />
                                        </div>
                                    </div>

                                    <div className="project-description-cnt">
                                        <div className="project-title">{project.title}</div>
                                        <div className="project-desc">{state.lang === 'fr' ? project.desc_fr : project.desc_en}</div>
                                        {
                                            project.url ?
                                                (
                                                    <div className="project-url"><a href={project.url} target="_blank" rel="noreferrer">{project.url}</a></div>
                                                ) : null
                                        }

                                        {
                                            project.video ?
                                                (
                                                    <video width="320" height="240" controls>
                                                        <source src={project.video} type="video/mp4" />
                                                    </video>
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
            {isLightBoxOpen && currentQImage && (
                <Lightbox
                    mainSrc={currentQImage}
                    onCloseRequest={() => setIsLightBoxOpen(false)}
                />
            )}

        </motion.div>
    )
}


export default Portfolio