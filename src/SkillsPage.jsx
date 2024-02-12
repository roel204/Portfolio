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
        <div className="sm:ml-[6vw] h-screen">
            <h1 className="gradientText text-5xl sm:text-9xl pb-5">{texts[language].pageTitle}</h1>

            <div className="flex mt-24 justify-center">
                {/* First Column */}
                <div className="flex flex-col items-center border-r border-gray-600 px-6">
                    <div className="my-2 group">
                        <img src="public/Logos/git.png" alt="Git Logo" className="w-[5vw] h-[9vh] object-contain transition duration-75 group-hover:scale-125 group-hover:-translate-y-2"/>
                        <p className="text-center opacity-0 transition group-hover:opacity-100 ">GIT</p>
                    </div>
                    <div className="my-2 group">
                        <img src="public/Logos/photoshop.png" alt="Photoshop Logo" className="w-[5vw] h-[9vh] object-contain transition duration-75 group-hover:scale-125 group-hover:-translate-y-2"/>
                        <p className="text-center opacity-0 transition group-hover:opacity-100">Photoshop</p>
                    </div>
                    <div className="my-2 group">
                        <img src="public/Logos/miro.png" alt="Miro Logo" className="w-[5vw] h-[9vh] object-contain transition duration-75 group-hover:scale-125 group-hover:-translate-y-2"/>
                        <p className="text-center opacity-0 transition group-hover:opacity-100">Miro</p>
                    </div>
                    <div className="my-2 group">
                        <img src="public/Logos/unity.png" alt="Unity Logo" className="w-[5vw] h-[9vh] object-contain transition duration-75 group-hover:scale-125 group-hover:-translate-y-2"/>
                        <p className="text-center opacity-0 transition group-hover:opacity-100">Unity</p>
                    </div>
                </div>

                {/* Second Column */}
                <div className="flex flex-col items-center border-r border-gray-600 px-6">
                    <div className="my-2 group">
                        <img src="public/Logos/html.png" alt="Html Logo" className="w-[5vw] h-[9vh] object-contain transition duration-75 group-hover:scale-125 group-hover:-translate-y-2"/>
                        <p className="text-center opacity-0 transition group-hover:opacity-100">HTML</p>
                    </div>
                </div>

                {/* Third Column */}
                <div className="flex flex-col items-center border-r border-gray-600 px-6">
                    <div className="my-2 group">
                        <img src="public/Logos/css.png" alt="Css Logo" className="w-[5vw] h-[9vh] object-contain transition duration-75 group-hover:scale-125 group-hover:-translate-y-2"/>
                        <p className="text-center opacity-0 transition group-hover:opacity-100">CSS</p>
                    </div>
                    <div className="my-2 group">
                        <img src="public/Logos/bootstrap.png" alt="Bootstrap Logo" className="w-[5vw] h-[9vh] object-contain transition duration-75 group-hover:scale-125 group-hover:-translate-y-2"/>
                        <p className="text-center opacity-0 transition group-hover:opacity-100">Bootstrap</p>
                    </div>
                    <div className="my-2 group">
                        <img src="public/Logos/tailwind.png" alt="Tailwind Logo" className="w-[5vw] h-[9vh] object-contain transition duration-75 group-hover:scale-125 group-hover:-translate-y-2"/>
                        <p className="text-center opacity-0 transition group-hover:opacity-100">Tailwind</p>
                    </div>
                </div>

                {/* Fourth Column */}
                <div className="flex flex-col items-center border-r border-gray-600 px-6">
                    <div className="my-2 group">
                        <img src="public/Logos/js.png" alt="Js Logo" className="w-[5vw] h-[9vh] object-contain transition duration-75 group-hover:scale-125 group-hover:-translate-y-2"/>
                        <p className="text-center opacity-0 transition group-hover:opacity-100">JavaScript</p>
                    </div>
                    <div className="my-2 group">
                        <img src="public/Logos/nodejs.png" alt="NodeJs Logo" className="w-[5vw] h-[9vh] object-contain transition duration-75 group-hover:scale-125 group-hover:-translate-y-2"/>
                        <p className="text-center opacity-0 transition group-hover:opacity-100">Node.js</p>
                    </div>
                    <div className="my-2 group">
                        <img src="public/Logos/vite.png" alt="Vite Logo" className="w-[5vw] h-[9vh] object-contain transition duration-75 group-hover:scale-125 group-hover:-translate-y-2"/>
                        <p className="text-center opacity-0 transition group-hover:opacity-100">Vite</p>
                    </div>
                    <div className="my-2 group">
                        <img src="public/Logos/react.png" alt="React Logo" className="w-[5vw] h-[9vh] object-contain transition duration-75 group-hover:scale-125 group-hover:-translate-y-2"/>
                        <p className="text-center opacity-0 transition group-hover:opacity-100">React</p>
                    </div>
                </div>

                {/* Fifth Column */}
                <div className="flex flex-col items-center border-r border-gray-600 px-6">
                    <div className="my-2 group">
                        <img src="public/Logos/php.png" alt="Php Logo" className="w-[5vw] h-[9vh] object-contain transition duration-75 group-hover:scale-125 group-hover:-translate-y-2"/>
                        <p className="text-center opacity-0 transition group-hover:opacity-100">PHP</p>
                    </div>
                    <div className="my-2 group">
                        <img src="public/Logos/laravel.png" alt="Laravel Logo" className="w-[5vw] h-[9vh] object-contain transition duration-75 group-hover:scale-125 group-hover:-translate-y-2"/>
                        <p className="text-center opacity-0 transition group-hover:opacity-100">Laravel</p>
                    </div>
                </div>

                {/* Sixth Column */}
                <div className="flex flex-col items-center px-6">
                    <div className="my-2 group">
                        <img src="public/Logos/mysql.png" alt="MySql Logo" className="w-[5vw] h-[9vh] object-contain transition duration-75 group-hover:scale-125 group-hover:-translate-y-2"/>
                        <p className="text-center opacity-0 transition group-hover:opacity-100">MySQL</p>
                    </div>
                    <div className="my-2 group">
                        <img src="public/Logos/mongodb.png" alt="MondoDB Logo" className="w-[5vw] h-[9vh] object-contain transition duration-75 group-hover:scale-125 group-hover:-translate-y-2"/>
                        <p className="text-center opacity-0 transition group-hover:opacity-100">MongoDB</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsPage;