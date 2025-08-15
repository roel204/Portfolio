import React, { useEffect, useState } from 'react';
import { useLanguage } from "../context/LanguageContext.jsx";

const SkillsPage = () => {
    const { language } = useLanguage();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1240);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1240);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const texts = {
        en: {
            codeTitle: "CODE SKILLS",
            codeDesc: "I have learned multiple programming languages, frameworks and other programs.\nI have learned most of these from my study, but some are also self-taught because it's interesting to me.",
            pcTitle: "PC BUILDING",
            pcDesc: "I have built multiple computers and love searching for the perfect parts that will fit the build.",
            roelTitle: "My Computer",
            roelDesc: "I watched a lot of tutorials and searched for all the best parts to buy before I built my computer, eventually I made it together with a friend. I also 3D-printed custom cable management to make it look perfect! In 2024 I upgraded my pc.",
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
            roelDesc: "Ik heb veel tutorials gekeken en gezocht naar de beste onderdelen om te kopen en uiteindelijk samen met een vriend mijn computer gebouwd. Ook heb ik de cable management mooi gemaakt door custom houders te 3D-printen. In 2024 heb ik mijn PC geupgrade.",
            jitseTitle: "De PC voor mijn broertje Jitse",
            jitseDesc: "Mijn broertje wilde een computer, dus heb ik een eenvoudige build met geïntegreerde graphics gemaakt. Later kocht hij een RX6600 voor mij om te installeren.",
            vincentTitle: "De PC voor mijn broertje Vincent",
            vincentDesc: "Mijn andere broertje wilde ook een computer, dus ik heb samen met hem de onderdelen uitgekozen en daarna gebouwd."

        },
    };

    return (
        <div className="xl:ml-[6vw] mt-[5vh] flex flex-col justify-center items-center max-w-full min-h-screen">
            <div className="py-10 xl:px-10 xl:w-[60vw] rounded-3xl bg-green-50/75 dark:bg-black/75">
                <h1 className="gradientText text-5xl xl:text-8xl pb-5">{texts[language].codeTitle}</h1>
                <p className="text-gray-400 text-center px-4 xl:whitespace-pre-line">{texts[language].codeDesc}</p>

                {isMobile ? (
                    // Content for mobile
                    <div className="flex flex-row gap-4 mt-[5vh] justify-center text-[0.6rem]">
                        {/* Column 1 */}
                        <div className="flex flex-col items-center">
                            <div className="skillSingle">
                                <img src={"images/logos/html.png"} alt="Html Logo"
                                    className="w-14 h-14 object-contain" />
                                <p className="text-center">HTML</p>
                            </div>
                            <div className="skillTop">
                                <img src={"images/logos/css.png"} alt="Css Logo"
                                    className="w-14 h-14 object-contain" />
                                <p className="text-center">CSS</p>
                            </div>
                            <div className="skillCenter">
                                <img src={"images/logos/bootstrap.png"} alt="Bootstrap Logo"
                                    className="w-14 h-14 object-contain" />
                                <p className="text-center">Bootstrap</p>
                            </div>
                            <div className="skillBottom">
                                <img src={"images/logos/tailwind.png"} alt="Tailwind Logo"
                                    className="w-14 h-14 object-contain" />
                                <p className="text-center">Tailwind</p>
                            </div>
                            <div className="skillTop">
                                <img src={"images/logos/openAi.png"} alt="Open AI Logo"
                                    className="w-14 h-14 object-contain" />
                                <p className="text-center">Open AI</p>
                            </div>
                            <div className="skillCenter">
                                <img src={"images/logos/langchain.png"} alt="Langchain Logo"
                                    className="w-14 h-14 object-contain" />
                                <p className="text-center">Lang Chain</p>
                            </div>
                            <div className="skillCenter">
                                <img src={"images/logos/mediapipe.png"} alt="Mediapipe Logo"
                                    className="w-14 h-14 object-contain" />
                                <p className="text-center">Mediapipe</p>
                            </div>
                            <div className="skillBottom">
                                <img src={"images/logos/ml5.png"} alt="ML5 Logo"
                                    className="w-14 h-14 object-contain" />
                                <p className="text-center">ML5</p>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col items-center">
                            <div className="skillTop">
                                <img src={"images/logos/js.png"} alt="Js Logo"
                                    className="w-14 h-14 object-contain" />
                                <p className="text-center">JavaScript</p>
                            </div>
                            <div className="skillCenter">
                                <img src={"images/logos/nodejs.png"} alt="NodeJs Logo"
                                    className="w-14 h-14 object-contain" />
                                <p className="text-center">Node.js</p>
                            </div>
                            <div className="skillCenter">
                                <img src={"images/logos/vite.png"} alt="Vite Logo"
                                    className="w-14 h-14 object-contain" />
                                <p className="text-center">Vite</p>
                            </div>
                            <div className="skillCenter">
                                <img src={"images/logos/react.png"} alt="React Logo"
                                    className="w-14 h-14 object-contain" />
                                <p className="text-center">React</p>
                            </div>
                            <div className="skillBottom">
                                <img src={"images/logos/express.png"} alt="Express Logo"
                                    className="w-14 h-14 object-contain" />
                                <p className="text-center">Express</p>
                            </div>
                            <div className="skillTop">
                                <img src={"images/logos/csharp.png"} alt="C sharp Logo"
                                    className="w-14 h-14 object-contain" />
                                <p className="text-center">C#</p>
                            </div>
                            <div className="skillBottom">
                                <img src={"images/logos/unity.png"} alt="Unity Logo"
                                    className="w-14 h-14 object-contain" />
                                <p className="text-center">Unity</p>
                            </div>
                        </div>

                        {/* Column 3 */}
                        <div className="flex flex-col items-center">
                            <div className="skillSingle">
                                <img src={"images/logos/git.png"} alt="Git Logo"
                                    className="w-14 h-14 object-contain" />
                                <p className="text-center ">GIT</p>
                            </div>
                            <div className="skillSingle">
                                <img src={"images/logos/photoshop.png"} alt="Photoshop Logo"
                                    className="w-14 h-14 object-contain" />
                                <p className="text-center">Photoshop</p>
                            </div>
                            <div className="skillSingle">
                                <img src={"images/logos/miro.png"} alt="Miro Logo"
                                    className="w-14 h-14 object-contain" />
                                <p className="text-center">Miro</p>
                            </div>
                            <div className="skillSingle">
                                <img src={"images/logos/trello.png"} alt="Trello Logo"
                                    className="w-14 h-14 object-contain" />
                                <p className="text-center">Trello</p>
                            </div>
                            <div className="skillTop">
                                <img src={"images/logos/php.png"} alt="Php Logo"
                                    className="w-14 h-14 object-contain" />
                                <p className="text-center">PHP</p>
                            </div>
                            <div className="skillBottom">
                                <img src={"images/logos/laravel.png"} alt="Laravel Logo"
                                    className="w-14 h-14 object-contain" />
                                <p className="text-center">Laravel</p>
                            </div>
                            <div className="skillTop">
                                <img src={"images/logos/mysql.png"} alt="MySql Logo"
                                    className="w-14 h-14 object-contain" />
                                <p className="text-center">MySQL</p>
                            </div>
                            <div className="skillBottom">
                                <img src={"images/logos/mongodb.png"} alt="MondoDB Logo"
                                    className="w-14 h-14 object-contain" />
                                <p className="text-center">MongoDB</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    // Content for PC
                    <div className="flex flex-row gap-1 xl:gap-8 mt-[5vh] justify-center text-[0.6rem] xl:text-base">
                        {/* Column 1 */}
                        <div className="flex flex-col items-center">
                            <div className="skillSingle group">
                                <img src={"images/logos/git.png"} alt="Git Logo"
                                    className="skillDesktopImage" />
                                <p className="skillDesktopText ">GIT</p>
                            </div>
                            <div className="skillSingle group">
                                <img src={"images/logos/photoshop.png"} alt="Photoshop Logo"
                                    className="skillDesktopImage" />
                                <p className="skillDesktopText">Photoshop</p>
                            </div>
                            <div className="skillSingle group">
                                <img src={"images/logos/miro.png"} alt="Miro Logo"
                                    className="skillDesktopImage" />
                                <p className="skillDesktopText">Miro</p>
                            </div>
                            <div className="skillSingle group">
                                <img src={"images/logos/trello.png"} alt="Trello Logo"
                                    className="skillDesktopImage" />
                                <p className="skillDesktopText">Trello</p>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col items-center">
                            <div className="skillSingle group">
                                <img src={"images/logos/html.png"} alt="Html Logo"
                                    className="skillDesktopImage" />
                                <p className="skillDesktopText">HTML</p>
                            </div>
                            <div className="skillTop group">
                                <img src={"images/logos/css.png"} alt="Css Logo"
                                    className="skillDesktopImage" />
                                <p className="skillDesktopText">CSS</p>
                            </div>
                            <div className="skillCenter group">
                                <img src={"images/logos/bootstrap.png"} alt="Bootstrap Logo"
                                    className="skillDesktopImage" />
                                <p className="skillDesktopText">Bootstrap</p>
                            </div>
                            <div className="skillBottom group">
                                <img src={"images/logos/tailwind.png"} alt="Tailwind Logo"
                                    className="skillDesktopImage" />
                                <p className="skillDesktopText">Tailwind</p>
                            </div>
                        </div>

                        {/* Column 3 */}
                        <div className="flex flex-col items-center">
                            <div className="skillTop group">
                                <img src={"images/logos/js.png"} alt="Js Logo"
                                    className="skillDesktopImage" />
                                <p className="skillDesktopText">JavaScript</p>
                            </div>
                            <div className="skillCenter group">
                                <img src={"images/logos/nodejs.png"} alt="NodeJs Logo"
                                    className="skillDesktopImage" />
                                <p className="skillDesktopText">Node.js</p>
                            </div>
                            <div className="skillCenter group">
                                <img src={"images/logos/vite.png"} alt="Vite Logo"
                                    className="skillDesktopImage" />
                                <p className="skillDesktopText">Vite</p>
                            </div>
                            <div className="skillCenter group">
                                <img src={"images/logos/react.png"} alt="React Logo"
                                    className="skillDesktopImage" />
                                <p className="skillDesktopText">React</p>
                            </div>
                            <div className="skillBottom group">
                                <img src={"images/logos/express.png"} alt="Express Logo"
                                    className="skillDesktopImage" />
                                <p className="skillDesktopText">Express</p>
                            </div>
                        </div>

                        {/* Column 4 */}
                        <div className="flex flex-col items-center">
                            <div className="skillTop group">
                                <img src={"images/logos/php.png"} alt="Php Logo"
                                    className="skillDesktopImage" />
                                <p className="skillDesktopText">PHP</p>
                            </div>
                            <div className="skillBottom group">
                                <img src={"images/logos/laravel.png"} alt="Laravel Logo"
                                    className="skillDesktopImage" />
                                <p className="skillDesktopText">Laravel</p>
                            </div>
                            <div className="skillTop group">
                                <img src={"images/logos/mysql.png"} alt="MySql Logo"
                                    className="skillDesktopImage" />
                                <p className="skillDesktopText">MySQL</p>
                            </div>
                            <div className="skillBottom group">
                                <img src={"images/logos/mongodb.png"} alt="MondoDB Logo"
                                    className="skillDesktopImage" />
                                <p className="skillDesktopText">MongoDB</p>
                            </div>
                        </div>

                        {/* Column 5 */}
                        <div className="flex flex-col items-center">
                            <div className="skillTop group">
                                <img src={"images/logos/openAi.png"} alt="Open AI Logo"
                                    className="skillDesktopImage" />
                                <p className="skillDesktopText">Open AI</p>
                            </div>
                            <div className="skillCenter group">
                                <img src={"images/logos/langchain.png"} alt="Langchain Logo"
                                    className="skillDesktopImage" />
                                <p className="skillDesktopText">Lang Chain</p>
                            </div>
                            <div className="skillCenter group">
                                <img src={"images/logos/mediapipe.png"} alt="Mediapipe Logo"
                                    className="skillDesktopImage" />
                                <p className="skillDesktopText">Mediapipe</p>
                            </div>
                            <div className="skillBottom group">
                                <img src={"images/logos/ml5.png"} alt="ML5 Logo"
                                    className="skillDesktopImage" />
                                <p className="skillDesktopText">ML5</p>
                            </div>
                        </div>

                        {/* Column 6 */}
                        <div className="flex flex-col items-center">
                            <div className="skillTop group">
                                <img src={"images/logos/csharp.png"} alt="C sharp Logo"
                                    className="skillDesktopImage" />
                                <p className="skillDesktopText">C#</p>
                            </div>
                            <div className="skillBottom group">
                                <img src={"images/logos/unity.png"} alt="Unity Logo"
                                    className="skillDesktopImage" />
                                <p className="skillDesktopText">Unity</p>
                            </div>
                        </div>
                    </div>
                )}
                <div className="border-2 border-cgreen rounded-t-2xl p-4 mt-[5vh] text-center bg-white/50 dark:bg-black/50">
                    <h3 className="text-2xl font-bold">{texts[language].roelTitle}</h3>
                </div>
                <div className="flex justify-between border-x-2 border-b-2 border-cgreen rounded-b-2xl p-2">
                    <div className="borr-2 flex flex-col justify-around w-[60%]">
                        <div className="p-2">
                            <p>{texts[language].roelDesc}</p>
                        </div>
                        <div className="p-2 text-sm xl:columns-2">
                            <p><span className="text-gray-400">CPU:</span> Ryzen 5 5600X</p>
                            <p><span className="text-gray-400">GPU:</span> ASUS RTX 4060 (Thanks Megekko :D)</p>
                            <p><span className="text-gray-400">RAM:</span> Team Group Delta 16GB</p>
                            <p><span className="text-gray-400">MOBO:</span> Gigabyte B550 Gaming X V2</p>
                            <p><span className="text-gray-400">PSU:</span> CoolerM MWE Gold 650</p>
                            <p><span className="text-gray-400">CASE:</span> Antec NX600</p>
                        </div>
                    </div>
                    <div className="flex w-[40%]">
                        <img src={"images/roelPCsm.png"} alt="Roel's PC" className="xl:max-w-[10vw] xl:mr-5 ml-auto object-contain transition xl:hover:scale-125" />
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
                        <div className="p-2 text-sm xl:columns-2">
                            <p><span className="text-gray-400">CPU:</span> Ryzen 5 3400G</p>
                            <p><span className="text-gray-400">GPU:</span> Asrock RX6600</p>
                            <p><span className="text-gray-400">RAM:</span> Team Group Delta 16GB</p>
                            <p><span className="text-gray-400">MOBO:</span> Asrock B450M Pro4</p>
                            <p><span className="text-gray-400">PSU:</span> EVGA Gold 450 GM</p>
                            <p><span className="text-gray-400">CASE:</span> Aerocool Hive</p>
                        </div>
                    </div>
                    <div className="flex w-[40%]">
                        <img src={"images/jitsePCsm.png"} alt="Jitse's PC" className="xl:max-w-[10vw] xl:mr-5 ml-auto object-contain transition xl:hover:scale-125" />
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
                        <div className="p-2 text-sm xl:columns-2">
                            <p><span className="text-gray-400">CPU:</span> Ryzen 5 5500</p>
                            <p><span className="text-gray-400">GPU:</span> Asrock RX6600</p>
                            <p><span className="text-gray-400">RAM:</span> Corsair Vengeance 8GB</p>
                            <p><span className="text-gray-400">MOBO:</span> Asus Prime B550M-K</p>
                            <p><span className="text-gray-400">PSU:</span> Seasonic G12 GM-650</p>
                            <p><span className="text-gray-400">CASE:</span> MSI MAG Forge M100R</p>
                        </div>
                    </div>
                    <div className="flex w-[40%]">
                        <img src={"images/vincentPCsm.png"} alt="Vincent's PC" className="xl:max-w-[10vw] xl:mr-5 ml-auto object-contain transition xl:hover:scale-125" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SkillsPage;