import React, {useEffect} from 'react';
import {useLanguage} from "../context/LanguageContext.jsx";

const HomePage = () => {
    const {language} = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const texts = {
        en: {
            greet: "Hello I'm:",
            extraText: "I'm a Creative Developer student on the CMGT course at Rotterdam University of Applied Sciences.\nI love writing code and making games in Unity!",
        },
        nl: {
            greet: 'Hoi ik ben:',
            extraText: "Ik ben een Creative Developer student op de opleiding CMGT aan Hogeschool Rotterdam.\nIk hou van coderen en games maken in Unity!",
        },
    };

    return (
        <div className="xl:ml-[6vw] flex justify-center items-center min-h-screen">
            <div className="text-center xl:text-left py-20 xl:px-20 rounded-3xl bg-green-50/75 dark:bg-black/75">
                <h2 className="text-2xl xl:text-3xl font-bold mb-4 pl-1">{texts[language].greet}</h2>
                <h1 className="gradientText text-3xl xl:text-8xl pb-10">ROEL HOOGENDOORN</h1>
                <p className="text-gray-400 text-sm xl:text-lg pl-1 text-center whitespace-pre-line">{texts[language].extraText}</p>
            </div>
        </div>
    );
}

export default HomePage;
