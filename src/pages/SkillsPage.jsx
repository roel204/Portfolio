import React from 'react';
import {useLanguage} from "../context/LanguageContext.jsx";

const SkillsPage = () => {
    const {language} = useLanguage();

    const texts = {
        en: {
            codeTitle: "CODE SKILLS",
            codeDesc: "I have learned multiple programming languages, frameworks and other programs.\nI have learned most of these from my study, but some are also self-taught because it's interesting to me.",
            pcTitle: "PC BUILDING",
            pcDesc: "I have built multiple computers and love searching for the perfect parts that will fit the build.",
            roelTitle: "My Computer",
            roelDesc: "I watched a lot of tutorials and searched for all the best parts to buy before I built my computer, eventually I made it together with a friend. I also 3D-printed custom cable management to make it look perfect!",
            jitseTitle: "My little brother Jitse's PC",
            jitseDesc: "My little brother wanted a computer, so I made a simple integrated graphics build. He later bought an RX6600 for me to install.",
            vincentTitle: "My little brother Vincent's PC",
            vincentDesc: "My other little brother also wanted a computer, so we picked the parts together and I built it for him."
        },
        nl: {
            codeTitle: 'CODE SKILLS',
            codeDesc: "Ik heb meerdere programmeertalen, frameworks en andere programma's geleerd.\nDe meeste heb ik tijdens mijn studie geleerd, maar sommige heb ik zelf geleerd omdat ik het interessant vind.",
            pcTitle: "PC BOUWEN",
            pcDesc: "Ik heb meerdere computers gebouwd en vind het leuk om op zoek te gaan naar de perfecte onderdelen die bij de computer passen.",
            roelTitle: "Mijn Computer",
            roelDesc: "Ik heb veel tutorials gekeken en gezocht naar de beste onderdelen om te kopen en uiteindelijk samen met een vriend mijn computer gebouwd. Ook heb ik de cable management mooi gemaakt door custom houders te 3D-printen.",
            jitseTitle: "De PC voor mijn broertje Jitse",
            jitseDesc: "Mijn broertje wilde een computer, dus heb ik een eenvoudige build met geïntegreerde graphics gemaakt. Later kocht hij een RX6600 voor mij om te installeren.",
            vincentTitle: "De PC voor mijn broertje Vincent",
            vincentDesc: "Mijn andere broertje wilde ook een computer, dus ik heb samen met hem de onderdelen uitgekozen en daarna gebouwd."

        },
    };

    return (
        <div className="sm:ml-[6vw] mt-[5vh] flex flex-col justify-center items-center max-w-full min-h-screen">
            <div className="py-10 sm:px-10 sm:w-[60vw] bg-green-50/75 rounded-3xl dark:bg-black/75">
                <h1 className="gradientText text-5xl sm:text-8xl pb-5">{texts[language].codeTitle}</h1>
                <p className="text-gray-400 text-center px-4 sm:whitespace-pre-line">{texts[language].codeDesc}</p>

                <div className="flex mt-[5vh] justify-center text-xs sm:text-base">
                    {/* Column 1 */}
                    <div className="flex flex-col items-center border-r border-gray-600 px-1 sm:px-6">
                        <div className="my-2 group flex flex-col items-center">
                            <img src={"images/logos/git.png"} alt="Git Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100 ">GIT</p>
                        </div>
                        <div className="my-2 group flex flex-col items-center">
                            <img src={"images/logos/photoshop.png"} alt="Photoshop Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">Photoshop</p>
                        </div>
                        <div className="my-2 group flex flex-col items-center">
                            <img src={"images/logos/miro.png"} alt="Miro Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">Miro</p>
                        </div>
                        <div className="my-2 group flex flex-col items-center">
                            <img src={"images/logos/unity.png"} alt="Unity Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">Unity</p>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col items-center border-r border-gray-600 px-1 sm:px-6">
                        <div className="my-2 group flex flex-col items-center">
                            <img src={"images/logos/html.png"} alt="Html Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">HTML</p>
                        </div>
                        <div className="my-2 group flex flex-col items-center">
                            <img src={"images/logos/css.png"} alt="Css Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">CSS</p>
                        </div>
                        <div className="my-2 group flex flex-col items-center">
                            <img src={"images/logos/bootstrap.png"} alt="Bootstrap Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">Bootstrap</p>
                        </div>
                        <div className="my-2 group flex flex-col items-center">
                            <img src={"images/logos/tailwind.png"} alt="Tailwind Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">Tailwind</p>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col items-center border-r border-gray-600 px-1 sm:px-6">
                        <div className="my-2 group flex flex-col items-center">
                            <img src={"images/logos/js.png"} alt="Js Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">JavaScript</p>
                        </div>
                        <div className="my-2 group flex flex-col items-center">
                            <img src={"images/logos/nodejs.png"} alt="NodeJs Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">Node.js</p>
                        </div>
                        <div className="my-2 group flex flex-col items-center">
                            <img src={"images/logos/vite.png"} alt="Vite Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">Vite</p>
                        </div>
                        <div className="my-2 group flex flex-col items-center">
                            <img src={"images/logos/react.png"} alt="React Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">React</p>
                        </div>
                        <div className="my-2 group flex flex-col items-center">
                            <img src={"images/logos/express.png"} alt="Express Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">Express</p>
                        </div>
                    </div>

                    {/* Column 4 */}
                    <div className="flex flex-col items-center border-r border-gray-600 px-1 sm:px-6">
                        <div className="my-2 group flex flex-col items-center">
                            <img src={"images/logos/php.png"} alt="Php Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">PHP</p>
                        </div>
                        <div className="my-2 group flex flex-col items-center">
                            <img src={"images/logos/laravel.png"} alt="Laravel Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">Laravel</p>
                        </div>
                    </div>

                    {/* Column 5 */}
                    <div className="flex flex-col items-center px-1 sm:px-6">
                        <div className="my-2 group flex flex-col items-center">
                            <img src={"images/logos/mysql.png"} alt="MySql Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">MySQL</p>
                        </div>
                        <div className="my-2 group flex flex-col items-center">
                            <img src={"images/logos/mongodb.png"} alt="MondoDB Logo"
                                 className="w-10 h-10 sm:w-[5vw] sm:h-[9vh] object-contain transition duration-75 sm:group-hover:scale-125 sm:group-hover:-translate-y-2"/>
                            <p className="text-center sm:opacity-0 transition group-hover:opacity-100">MongoDB</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-10 my-[5vh] sm:px-10 sm:w-[60vw] rounded-3xl bg-green-50/75 dark:bg-black/75">
                <h1 className="gradientText text-5xl sm:text-8xl pb-5">{texts[language].pcTitle}</h1>
                <p className="text-gray-400 text-center px-4 sm:whitespace-pre-line">{texts[language].pcDesc}</p>

                {/*Roel Computer*/}
                <div className="border-2 border-cgreen rounded-t-2xl p-4 mt-[5vh] text-center bg-white/50 dark:bg-black/50">
                    <h3 className="text-2xl font-bold">{texts[language].roelTitle}</h3>
                </div>
                <div className="flex justify-between border-x-2 border-b-2 border-cgreen rounded-b-2xl p-2">
                    <div className="borr-2 flex flex-col justify-around w-[60%]">
                        <div className="p-2">
                            <p>{texts[language].roelDesc}</p>
                        </div>
                        <div className="p-2 text-sm sm:columns-2">
                            <p><span className="text-gray-400">CPU:</span> Ryzen 5 2600X</p>
                            <p><span className="text-gray-400">GPU:</span> Gigabyte RX590</p>
                            <p><span className="text-gray-400">RAM:</span> Team Group Delta 16GB</p>
                            <p><span className="text-gray-400">MOBO:</span> Asrock B450 Pro4</p>
                            <p><span className="text-gray-400">PSU:</span> CoolerM MWE Gold 650</p>
                            <p><span className="text-gray-400">CASE:</span> Antec NX600</p>
                        </div>
                    </div>
                    <div className="flex w-[40%]">
                        <img src={"images/roelPCsm.png"} alt="Roel's PC" className="sm:max-w-[10vw] sm:mr-5 ml-auto object-contain transition sm:hover:scale-125"/>
                    </div>
                </div>

                {/*Jitse Computer*/}
                <div className="border-2 border-cgreen rounded-t-2xl p-4 mt-[5vh] text-center bg-white/50 dark:bg-black/50">
                    <h3 className="text-2xl font-bold">{texts[language].jitseTitle}</h3>
                </div>
                <div className="flex justify-between border-x-2 border-b-2 border-cgreen rounded-b-2xl p-2">
                    <div className="flex flex-col justify-around w-[60%]">
                        <div className="p-2">
                            <p>{texts[language].jitseDesc}</p>
                        </div>
                        <div className="p-2 text-sm sm:columns-2">
                            <p><span className="text-gray-400">CPU:</span> Ryzen 5 3400G</p>
                            <p><span className="text-gray-400">GPU:</span> Asrock RX6600</p>
                            <p><span className="text-gray-400">RAM:</span> Team Group Delta 16GB</p>
                            <p><span className="text-gray-400">MOBO:</span> Asrock B450M Pro4</p>
                            <p><span className="text-gray-400">PSU:</span> EVGA Gold 450 GM</p>
                            <p><span className="text-gray-400">CASE:</span> Aerocool Hive</p>
                        </div>
                    </div>
                    <div className="flex w-[40%]">
                        <img src={"images/jitsePCsm.png"} alt="Jitse's PC" className="sm:max-w-[10vw] sm:mr-5 ml-auto object-contain transition sm:hover:scale-125"/>
                    </div>
                </div>

                {/*Vincent Computer*/}
                <div className="border-2 border-cgreen rounded-t-2xl p-4 mt-[5vh] text-center bg-white/50 dark:bg-black/50">
                    <h3 className="text-2xl font-bold">{texts[language].vincentTitle}</h3>
                </div>
                <div className="flex justify-between border-x-2 border-b-2 border-cgreen rounded-b-2xl p-2">
                    <div className="flex flex-col justify-around w-[60%]">
                        <div className="p-2">
                            <p>{texts[language].vincentDesc}</p>
                        </div>
                        <div className="p-2 text-sm sm:columns-2">
                                <p><span className="text-gray-400">CPU:</span> Ryzen 5 5500</p>
                                <p><span className="text-gray-400">GPU:</span> Asrock RX6600</p>
                                <p><span className="text-gray-400">RAM:</span> Corsair Vengeance 8GB</p>
                                <p><span className="text-gray-400">MOBO:</span> Asus Prime B550M-K</p>
                                <p><span className="text-gray-400">PSU:</span> Seasonic G12 GM-650</p>
                                <p><span className="text-gray-400">CASE:</span> MSI MAG Forge M100R</p>
                        </div>
                    </div>
                    <div className="flex w-[40%]">
                        <img src={"images/vincentPCsm.png"} alt="Vincent's PC" className="sm:max-w-[10vw] sm:mr-5 ml-auto object-contain transition sm:hover:scale-125"/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SkillsPage;