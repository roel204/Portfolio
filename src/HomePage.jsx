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
        <div className="sm:ml-[6vw] flex justify-center items-center h-screen">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">{texts[language].greet}</h2>
                <h1 className="gradientText text-5xl sm:text-9xl pb-10">Roel Hoogendoorn</h1>
                <p className="text-gray-400 text-sm sm:text-lg">{texts[language].extraText}</p>
            </div>
        </div>
    );
}

export default HomePage;
