import React from 'react';
import {useLanguage} from "../context/LanguageContext.jsx";

const HomePage = () => {
    const {language} = useLanguage();

    const texts = {
        en: {
            greet: "Hello I'm:",
            extraText: "I'm a Creative Developer student on the CMGT course at Rotterdam University of Applied Sciences.",
        },
        nl: {
            greet: 'Hoi ik ben:',
            extraText: "Ik ben een Creative Developer student op de opleiding CMGT aan Hogeschool Rotterdam.",
        },
    };

    return (
        <div className="sm:ml-[6vw] flex justify-center items-center min-h-screen">
            <div className="text-center sm:text-left py-20 sm:px-20 rounded-3xl bg-green-50/75 dark:bg-black/75">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 pl-1">{texts[language].greet}</h2>
                <h1 className="gradientText text-3xl sm:text-8xl pb-10">ROEL HOOGENDOORN</h1>
                <p className="text-gray-400 text-sm sm:text-lg pl-1 text-center">{texts[language].extraText}</p>
            </div>
        </div>
    );
}

export default HomePage;
