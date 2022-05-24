import React, { useState, useContext, useMemo } from 'react';
import i18n from "i18next";
import Cookies from 'js-cookie'

/**
 * custom React hook to manage state
 */

const AppContext = React.createContext({});

// let baseName = '/';

// if(window.location.hostname === "localhost"){
//     baseName = ''
// }

const initialState = {
    pageName: "",
    lang: Cookies.get('lang') ? Cookies.get('lang') : 'fr',
};



const useAppState = () => {

    // Manage the state using React.useState()
    const [state, setState] = useState(initialState);

    // Build our actions. We'll use useMemo() as an optimization,
    // so this will only ever be called once.
    const actions = useMemo(() => getActions(setState), [setState]);

    return { state, actions }
};

// Define your actions as functions that call setState().
// It's a bit like Redux's dispatch(), but as individual
// functions.
const getActions = setState => ({
    setPageName: (name) => {
        setState(state => ({ ...state, pageName: name }));
    },
    changeLang: (lang) => {
        setState(state => ({ ...state, lang: lang }));
        i18n.changeLanguage(lang);
        Cookies.set('lang', lang, { expires: 90 });
    }
});


// Sub-components can use this function. It will pick up the
// `state` and `actions` given by useAppState() hig
// her in the
// component tree.
const useAppContext = () => {
    return useContext(AppContext)
};

export { AppContext, useAppState, useAppContext }