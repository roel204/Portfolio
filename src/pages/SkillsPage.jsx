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
            <div className="py-10 sm:px-10 sm:w-[50vw] bg-green-50/75 rounded-3xl dark:bg-black/75">
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

            <div className="py-10 my-[5vh] sm:px-10 sm:w-[50vw] bg-green-50/75 rounded-3xl dark:bg-black/75">
                <h1 className="gradientText text-5xl sm:text-8xl pb-5">{texts[language].pcTitle}</h1>
                <p className="text-gray-400 text-center px-4 sm:whitespace-pre-line">{texts[language].pcDesc}</p>

                {/*My Computer*/}
                <div className="border-2 border-cgreen rounded-t-2xl p-4 mt-[5vh] text-center bg-black/[.5]">
                    <h3 className="text-2xl font-bold">My first computer</h3>
                </div>
                <div className="flex justify-around border-x-2 border-b-2 border-cgreen rounded-b-2xl p-2">
                    <div className="flex flex-col justify-around">
                        <div className="p-2">
                            <p>This is the first pc i built myself. I took a long time saving up for all the parts and built it together with a friend.</p>
                        </div>
                        <div className="flex">
                            <div className="p-2 pr-5 flex">
                                <div className="pr-2 text-gray-400">
                                    <p>CPU:</p>
                                    <p>GPU:</p>
                                </div>
                                <div>
                                    <p>Ryzen 5 2600X</p>
                                    <p>RX590</p>
                                </div>
                            </div>
                            <div className="p-2 flex">
                                <div className="pr-2 text-gray-400">
                                    <p>RAM:</p>
                                    <p>MOBO:</p>
                                </div>
                                <div>
                                    <p>Team Group Delta 16GB</p>
                                    <p>Asrock B450 Pro4</p>
                                </div>
                            </div>
                            <div className="p-2 flex">
                                <div className="pr-2 text-gray-400">
                                    <p>PSU:</p>
                                    <p>CASE:</p>
                                </div>
                                <div>
                                    <p>CM MWE Gold 650</p>
                                    <p>Antec NX600</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <img src="public/images/logos/mongodb.png" alt="placeholder" className="w-20 h-20 sm:w-[10vw] sm:h-[18vh] object-contain"/>
                    </div>
                </div>

                {/*Jitse Computer*/}
                <div className="border-2 border-cgreen rounded-t-2xl p-4 mt-[5vh] text-center bg-black/[.5]">
                    <h3 className="text-2xl font-bold">Computer i built for my little brother</h3>
                </div>
                <div className="flex justify-around border-x-2 border-b-2 border-cgreen rounded-b-2xl p-2">
                    <div className="flex flex-col justify-around">
                        <div className="p-2">
                            <p>My little brother wanted a computer, so i made a simple integrated graphics build, he later bought a RX6600 for me to install.</p>
                        </div>
                        <div className="flex">
                            <div className="p-2 pr-5 flex">
                                <div className="pr-2 text-gray-400">
                                    <p>CPU:</p>
                                    <p>GPU:</p>
                                </div>
                                <div>
                                    <p>Ryzen 5 3400G</p>
                                    <p>Asrock RX6600</p>
                                </div>
                            </div>
                            <div className="p-2 flex">
                                <div className="pr-2 text-gray-400">
                                    <p>RAM:</p>
                                    <p>MOBO:</p>
                                </div>
                                <div>
                                    <p>Team Group Delta 16GB</p>
                                    <p>Asrock B450M Pro4</p>
                                </div>
                            </div>
                            <div className="p-2 flex">
                                <div className="pr-2 text-gray-400">
                                    <p>PSU:</p>
                                    <p>CASE:</p>
                                </div>
                                <div>
                                    <p>EVGA Gold 450</p>
                                    <p>Aerocool Hive</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <img src="public/images/logos/mongodb.png" alt="placeholder" className="w-20 h-20 sm:w-[10vw] sm:h-[18vh] object-contain"/>
                    </div>
                </div>

                {/*Vincent Computer*/}
                <div className="border-2 border-cgreen rounded-t-2xl p-4 mt-[5vh] text-center bg-black/[.5]">
                    <h3 className="text-2xl font-bold">Computer i built for my other little brother</h3>
                </div>
                <div className="flex justify-around border-x-2 border-b-2 border-cgreen rounded-b-2xl p-2">
                    <div className="flex flex-col justify-around">
                        <div className="p-2">
                            <p>My other little brother also wanted a computer, so he took a loan and i build one for him.</p>
                        </div>
                        <div className="flex">
                            <div className="p-2 pr-5 flex">
                                <div className="pr-2 text-gray-400">
                                    <p>CPU:</p>
                                    <p>GPU:</p>
                                </div>
                                <div>
                                    <p>Ryzen 5 5500</p>
                                    <p>Asrock RX6600</p>
                                </div>
                            </div>
                            <div className="p-2 flex">
                                <div className="pr-2 text-gray-400">
                                    <p>RAM:</p>
                                    <p>MOBO:</p>
                                </div>
                                <div>
                                    <p>Corsair Vengeance 8gb</p>
                                    <p>Asus Prime B550M-K</p>
                                </div>
                            </div>
                            <div className="p-2 flex">
                                <div className="pr-2 text-gray-400">
                                    <p>PSU:</p>
                                    <p>CASE:</p>
                                </div>
                                <div>
                                    <p>Seasonic G12 GM-650</p>
                                    <p>MSI MAG Forge M100R</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <img src="public/images/logos/mongodb.png" alt="placeholder" className="w-20 h-20 sm:w-[10vw] sm:h-[18vh] object-contain"/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SkillsPage;