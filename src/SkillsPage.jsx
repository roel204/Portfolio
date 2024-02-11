import React from 'react';
import {useLanguage} from "./LanguageContext.jsx";

const SkillsPage = () => {
    const {language} = useLanguage();

    const texts = {
        en: {
            pageTitle: "My Skills",
        },
        nl: {
            pageTitle: 'Mijn Skills',
        },
    };

    return (
        <div className="ml-24 text-black dark:text-white bg-green-100 dark:bg-[#151515] h-screen">
            <h1 className="gradientText">{texts[language].pageTitle}</h1>

            <div className="flex mt-32 justify-center">
                {/* First Column */}
                <div className="flex flex-col items-center border-r border-gray-600 p-4">
                    <img src="public/Logos/git.png" alt="Git Logo" className="my-2 w-20 h-20 object-contain"/>
                    <img src="public/Logos/photoshop.png" alt="Photoshop Logo" className="my-2 w-20 h-20 object-contain"/>
                    <img src="public/Logos/miro.png" alt="Miro Logo" className="my-2 w-20 h-20 object-contain"/>
                    <img src="public/Logos/unity.png" alt="Unity Logo" className="my-2 w-20 h-20 object-contain"/>
                </div>

                {/* Second Column */}
                <div className="flex flex-col items-center border-r border-gray-600 p-4">
                    <img src="public/Logos/html.png" alt="Html Logo" className="my-2 w-20 h-20 object-contain"/>
                </div>

                {/* Third Column */}
                <div className="flex flex-col items-center border-r border-gray-600 p-4">
                    <img src="public/Logos/css.png" alt="Css Logo" className="my-2 w-20 h-20 object-contain"/>
                    <img src="public/Logos/bootstrap.png" alt="Bootstrap Logo" className="my-2 w-20 h-20 object-contain"/>
                    <img src="public/Logos/tailwind.png" alt="Tailwind Logo" className="my-2 w-20 h-20 object-contain"/>
                </div>

                {/* Fourth Column */}
                <div className="flex flex-col items-center border-r border-gray-600 p-4">
                    <img src="public/Logos/js.png" alt="Js Logo" className="my-2 w-20 h-20 object-contain"/>
                    <img src="public/Logos/nodejs.png" alt="NodeJs Logo" className="my-2 w-20 h-20 object-contain"/>
                    <img src="public/Logos/vite.png" alt="Vite Logo" className="my-2 w-20 h-20 object-contain"/>
                    <img src="public/Logos/react.png" alt="React Logo" className="my-2 w-20 h-20 object-contain"/>
                </div>

                {/* Fifth Column */}
                <div className="flex flex-col items-center border-r border-gray-600 p-4">
                    <img src="public/Logos/php.png" alt="Php Logo" className="my-2 w-20 h-20 object-contain"/>
                    <img src="public/Logos/laravel.png" alt="Laravel Logo" className="my-2 w-20 h-20 object-contain"/>
                </div>

                {/* Sixth Column */}
                <div className="flex flex-col items-center p-4">
                    <img src="public/Logos/mysql.png" alt="MySql Logo" className="my-2 w-20 h-20 object-contain"/>
                    <img src="public/Logos/mongodb.png" alt="MondoDB Logo" className="my-2 w-20 h-20 object-contain"/>
                </div>
            </div>
        </div>
    );
}

export default SkillsPage;