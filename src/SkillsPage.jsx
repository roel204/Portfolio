import React from 'react';
import {useLanguage} from "./LanguageContext.jsx";

const SkillsPage = () => {
    const {language} = useLanguage();

    const texts = {
        en: {
            greet: "Hello I'm",
        },
        nl: {
            greet: 'Hoi ik ben',
        },
    };

    return (
        <div className="bg-green-100 dark:bg-[#151515] flex justify-center items-center h-screen">
            <h1 className="gradientText">Skills</h1>
        </div>
    );
}

export default SkillsPage;