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
            extraText: "I'm studying Creative Media and Game Technologies (CMGT) at Rotterdam University of Applied Sciences.\nI'm passionate about creative development and building games in Unity.",
        },
        nl: {
            greet: 'Hoi ik ben:',
            extraText: "Ik studeer Creative Media and Game Technologies (CMGT) aan de Hogeschool Rotterdam.\nIk heb een passie voor creative development en het maken van games in Unity.",
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
