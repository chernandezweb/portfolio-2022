import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Cookies from 'js-cookie'

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: {
            "home-page-full-stack-dev": "Full-Stack Developer",
            "home-page-about-me-label-1": "About",
            "home-page-about-me-label-2": "me",
            "home-page-about-me-text": "Hello, I'm Carlos Hernandez. I am a Full-Stack web developer from the south-shore of Montreal (Qc, Canada).",
            "home-page-download-resume": "DOWNLOAD RESUME",
        }
    },
    fr: {
        translation: {
            "home-page-full-stack-dev": "Développeur Full-Stack",
            "home-page-about-me-label-1": "À propos de",
            "home-page-about-me-label-2": "moi",
            "home-page-about-me-text": "Hello, I'm Carlos Hernandez. I am a Full-Stack web developer from the south-shore of Montreal (Qc, Canada).",
            "home-page-download-resume": "TÉLÉCHARGER MON CV",
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: Cookies.get('lang') ? Cookies.get('lang') : 'fr',
        fallbackLng: Cookies.get('lang') ? Cookies.get('lang') : 'fr', // use en if detected lng is not available

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;