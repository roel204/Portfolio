import React from 'react';
import {useLanguage} from "./LanguageContext.jsx";

const HomePage = () => {
    const {language} = useLanguage();

    const texts = {
        en: {
            greet: "Hello I'm",
            extraText: "I am a programming/design student in the CMGT program at Rotterdam University of Applied Sciences.",
        },
        nl: {
            greet: 'Hoi ik ben',
            extraText: 'Ik ben een programmeer/design student op de opleiding CMGT aan Hogeschool Rotterdam.',
        },
    };

    return (
        <div className="ml-[6vw] text-black dark:text-white bg-green-100 dark:bg-[#151515] flex justify-center items-center h-screen">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">{texts[language].greet}</h2>
                <h1 className="gradientText mb-8">Roel Hoogendoorn</h1>
                <p className="text-gray-400 text-lg">{texts[language].extraText}</p>
            </div>
        </div>
    );
}

export default HomePage;
