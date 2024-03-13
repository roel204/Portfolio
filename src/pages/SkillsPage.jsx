import React from 'react';
import {useLanguage} from "../context/LanguageContext.jsx";

const SkillsPage = () => {
    const {language} = useLanguage();

    const texts = {
        en: {
            codeTitle: "CODE SKILLS",
            codeDesc: "I have learned multiple programming languages, frameworks and other programs.\nI have learned most of these from my study, but some are also self-taught because it's interesting to me.",
            pcTitle: "PC BUILDING",
            pcDesc: "I have built multiple PC's..."
        },
        nl: {
            codeTitle: 'CODE SKILLS',
            codeDesc: "Ik heb meerdere programmeertalen, frameworks en andere programma's geleerd.\nDe meeste heb ik tijdens mijn studie geleerd, maar sommige heb ik zelf geleerd omdat ik het interessant vind.",
            pcTitle: "PC BOUWEN",
            pcDesc: "Ik heb meerdere PC's in elkaar gezet..."
        },
    };

    return (
        <div className="sm:ml-[6vw] mt-[5vh] flex flex-col justify-center items-center max-w-full min-h-screen">
            <div className="py-10 sm:px-10 bg-green-50/75 rounded-3xl dark:bg-black/75">
                <h1 className="gradientText text-5xl sm:text-8xl pb-5">{texts[language].codeTitle}</h1>
                <p className="text-gray-400 text-center px-4 sm:whitespace-pre-line">{texts[language].codeDesc}</p>

                <div className="flex mt-[5vh] justify-center text-xs sm:text-base">
                    {/* First Column */}
                    <div className="flex flex-col items-center border-r border-gray-600 px-1 sm:px-6">
                        <div className="my-2 group flex flex-col items-center">
                            <img src="public/images/logos/git.png" alt="Git Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100 ">GIT</p>
                        </div>
                        <div className="my-2 group flex flex-col items-center">
                            <img src="public/images/logos/photoshop.png" alt="Photoshop Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">Photoshop</p>
                        </div>
                        <div className="my-2 group flex flex-col items-center">
                            <img src="public/images/logos/miro.png" alt="Miro Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">Miro</p>
                        </div>
                        <div className="my-2 group flex flex-col items-center">
                            <img src="public/images/logos/unity.png" alt="Unity Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">Unity</p>
                        </div>
                    </div>

                    {/* Second Column */}
                    <div className="flex flex-col items-center border-r border-gray-600 px-1 sm:px-6">
                        <div className="my-2 group flex flex-col items-center">
                            <img src="public/images/logos/html.png" alt="Html Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">HTML</p>
                        </div>
                    </div>

                    {/* Third Column */}
                    <div className="flex flex-col items-center border-r border-gray-600 px-1 sm:px-6">
                        <div className="my-2 group flex flex-col items-center">
                            <img src="public/images/logos/css.png" alt="Css Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">CSS</p>
                        </div>
                        <div className="my-2 group flex flex-col items-center">
                            <img src="public/images/logos/bootstrap.png" alt="Bootstrap Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">Bootstrap</p>
                        </div>
                        <div className="my-2 group flex flex-col items-center">
                            <img src="public/images/logos/tailwind.png" alt="Tailwind Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">Tailwind</p>
                        </div>
                    </div>

                    {/* Fourth Column */}
                    <div className="flex flex-col items-center border-r border-gray-600 px-1 sm:px-6">
                        <div className="my-2 group flex flex-col items-center">
                            <img src="public/images/logos/js.png" alt="Js Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">JavaScript</p>
                        </div>
                        <div className="my-2 group flex flex-col items-center">
                            <img src="public/images/logos/nodejs.png" alt="NodeJs Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">Node.js</p>
                        </div>
                        <div className="my-2 group flex flex-col items-center">
                            <img src="public/images/logos/vite.png" alt="Vite Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">Vite</p>
                        </div>
                        <div className="my-2 group flex flex-col items-center">
                            <img src="public/images/logos/react.png" alt="React Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">React</p>
                        </div>
                        <div className="my-2 group flex flex-col items-center">
                            <img src="public/images/logos/express.png" alt="Express Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">Express</p>
                        </div>
                    </div>

                    {/* Fifth Column */}
                    <div className="flex flex-col items-center border-r border-gray-600 px-1 sm:px-6">
                        <div className="my-2 group flex flex-col items-center">
                            <img src="public/images/logos/php.png" alt="Php Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">PHP</p>
                        </div>
                        <div className="my-2 group flex flex-col items-center">
                            <img src="public/images/logos/laravel.png" alt="Laravel Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">Laravel</p>
                        </div>
                    </div>

                    {/* Sixth Column */}
                    <div className="flex flex-col items-center px-1 sm:px-6">
                        <div className="my-2 group flex flex-col items-center">
                            <img src="public/images/logos/mysql.png" alt="MySql Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">MySQL</p>
                        </div>
                        <div className="my-2 group flex flex-col items-center">
                            <img src="public/images/logos/mongodb.png" alt="MondoDB Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">MongoDB</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-10 mt-[5vh] sm:px-10 bg-green-50/75 rounded-3xl dark:bg-black/75">
                <h1 className="gradientText text-5xl sm:text-8xl pb-5">{texts[language].pcTitle}</h1>
                <p className="text-gray-400 text-center px-4 sm:whitespace-pre-line">{texts[language].pcDesc}</p>
            </div>
        </div>
    );
}

export default SkillsPage;