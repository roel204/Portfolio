import React, { useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { HashLink } from 'react-router-hash-link';

const ProjectsPage = () => {
    const { language } = useLanguage();
    const containerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const container = containerRef.current;
            if (!container) return;

            const mouseX = event.clientX;
            const screenWidth = window.innerWidth;
            const containerWidth = container.offsetWidth;
            const maxScroll = container.scrollWidth - containerWidth;

            // Define buffer zone width as 20% of the screen width
            const bufferZoneWidth = 0.25 * screenWidth;

            // Calculate the scroll position based on the mouse position relative to the buffer zone
            let scrollPosition;
            if (mouseX < bufferZoneWidth) {
                // Mouse is in the left buffer zone
                scrollPosition = 0;
            } else if (mouseX > screenWidth - bufferZoneWidth) {
                // Mouse is in the right buffer zone
                scrollPosition = maxScroll;
            } else {
                // Mouse is in the content area, calculate scroll position based on percentage
                const mousePercentage = ((mouseX - bufferZoneWidth) / (screenWidth - 2 * bufferZoneWidth)) * 100;
                scrollPosition = (mousePercentage / 100) * maxScroll;
            }

            // Scroll the container
            container.scrollTo({ left: scrollPosition, behavior: 'instant' });
        };

        // Check if it's not a mobile device
        if (!window.matchMedia('(pointer: coarse)').matches) {
            window.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); // Run this effect only once when the component mounts


    const texts = {
        en: {
            pageTitle: "MY PROJECTS",
            flexCounter: "Flex Counter is a website/app that uses Machine Learning to count the number of bicep curls during a workout session. By using Mediapipe for arm position tracking, users receive real-time feedback. Counting the curls is done by a trained ML5 Neural Network, with the option for KNN and Logic. This web application is developed using React and Tailwind CSS, providing a responsive user experience. I learned a lot about React and Tailwind during the development of this website.",
            spellAI: "With SpellAI, I took my first steps in developing an AI application, aimed at correcting written text. This web application offers a simple interface where users can input their text to be improved. In addition to the basic functionality, SpellAI offers extra options such as speech-to-text to facilitate the writing of new text, a choice of multiple models, and the ability to give specific instructions. All entered text is stored locally to prevent loss if the browser is closed.",
            streamTeam: "Streamteam is a Tailored Learning Environment (TLE) project for the CMGT study at Rotterdam University of Applied Sciences. The project focuses on the existing IP-car, a car controlled via a server with a live feed, which is intended for use in daily activities within care homes. Through this software, the IP-car can connect to a guide who can see a live feed and take control of the car with a controller via the same connection. It is a delivery to VindiQu and FoxConnect. VindiQu already offers livestream daily activities to care homes, and FoxConnect is the developer of the first IP-car, originally intended for private use by people with mobility impairments.",
            pcShowcase: "The PcShowcase project is my first experience with frameworks. For this school project, I used Laravel to create a simple CRUD application where users can post their computers. The platform also offers the ability to post comments. I used Bootstrap for the styling of the website, resulting in a sleek and user-friendly design.",
        },
        nl: {
            pageTitle: 'MIJN PROJECTEN',
            flexCounter: "Flex Counter is een website/app die gebruikmaakt van Machine Learning om het aantal bicep curls te tellen tijdens een trainingssessie. Door gebruik te maken van Mediapipe voor armpositie tracking, krijgt de gebruiker real-time feedback. Het tellen van de curls wordt mogelijk gemaakt door een getraind ML5 Neural Network, met de optie voor KNN en Logic. Deze webapplicatie is ontwikkeld met React en Tailwind CSS, waardoor een responsive gebruikerservaring wordt geboden. Ik heb tijdens het maken van deze website veel geleerd over React en Tailwind.",
            spellAI: "Met SpellAI heb ik mijn eerste stappen gezet in het ontwikkelen van een AI-applicatie, gericht op het corrigeren van geschreven tekst. Deze webapplicatie biedt een simpele interface waar gebruikers hun tekst kunnen invoeren om verbeterd te worden. Naast de basisfunctionaliteit biedt spellAI extra opties, zoals spraak-naar-tekst om het schrijven van nieuwe tekst makkelijk te maken, keuze uit meerdere modellen, en de mogelijkheid om specifieke instructies te geven. Alle ingevoerde tekst wordt lokaal opgeslagen zodat er niks verloren gaat als de browser gesloten wordt.",
            streamTeam: "Streamteam is een TLE (Tailored Learning Environment) project voor de studie CMGT, Hogeschool Rotterdam. Het project focust op de bestaande IP-car, een via een server te besturen auto met een livefeed, die moet worden ingezet voor dagbesteding binnen zorghuizen. De IP-car kan via deze software verbinden met een gids, die een live beeld te zien krijgt en controle van de auto kan overnemen met een controller via dezelfde verbinding. Het is een oplevering aan VindiQu en FoxConnect. VindiQu biedt al livestream dagbesteding aan zorghuizen, en FoxConnect is de ontwikkelaar van de eerste IP-car, origineel bedoeld voor particulier gebruik van mensen met een motorische beperking.",
            pcShowcase: "Het PcShowcase project is mijn eerste ervaring met het gebruik van frameworks. Voor dit schoolproject heb ik Laravel gebruikt om een eenvoudige CRUD-applicatie te maken, waar gebruikers hun computers kunnen posten. Het platform biedt ook de mogelijkheid om comments te plaatsen. Ik heb Bootstrap gebruikt voor de styling van de website, waardoor een strak en gebruiksvriendelijk ontwerp ontstaat.",
        },
    };

    const projectsCards = [
        {
            title: 'Zero-G Guns',
            tags: 'Unity, VR, Released Game',
            desc: {
                en: 'My biggest game yet! It offers a new way of moving in VR.',
                nl: 'Mijn grootste game tot nu toe! Het biedt een nieuwe manier van bewegen in VR.',
            },
        },
        {
            title: 'Hungry Fish',
            tags: 'Unity, Personal Project',
            desc: {
                en: 'A simple fish game made with Unity.',
                nl: 'Een game over vissen gemaakt met Unity.',
            },
        },
        {
            title: 'Reef Keep',
            tags: 'Unity, Teamwork, CMGT Project',
            desc: {
                en: "A game where you can manage your own Aquatic Ecosystem.",
                nl: 'Aquatiesche Ecosysteem simulator game',
            },
        },
        {
            title: 'Flex Counter',
            tags: 'Machine Learning, CMGT Project, React',
            desc: {
                en: "Machine Learning application that counts your bicep curls using your webcam.",
                nl: 'Machine Learning app om bicep curls te tellen met je webcam.',
            },
        },
        {
            title: 'SpellAI',
            tags: 'AI, ChatLLM, CMGT Project',
            desc: {
                en: "An AI (ChatLLM) application that will correct the spelling of your text.",
                nl: 'Een AI (ChatLLM) app die de spelling in jouw text verbeterd.',
            },
        },
        {
            title: 'Stream Team',
            tags: 'Laravel, Teamwork, CMGT Project',
            desc: {
                en: "A website to control Fox-Connect's IP-Car.",
                nl: 'Een website om de IP-Car van Fox-Connect te besturen.',
            },
        },
        {
            title: 'PC Showcase',
            tags: 'Laravel, CMGT Project',
            desc: {
                en: 'A website made with Laravel to show your custom PC builds.',
                nl: 'Een website gemaakt met Laravel om je eigen PC te posten.',
            },
        },
    ];

    return (
        <div className="xl:ml-[6vw]">
            <div className="bg-green-100/75 dark:bg-black/75">
                <h1 id="top" className="gradientText text-4xl xl:text-8xl pt-[6vh]">{texts[language].pageTitle}</h1>
            </div>

            <HashLink to={`/projects#top`} className="z-10 fixed bottom-4 right-4 bg-dgreen dark:bg-cgreen pt-3 pb-2 px-4 rounded-lg transition xl:hover:scale-125">^</HashLink>

            {/*Possibility for 'sticky top-0'*/}
            <div
                className="flex overflow-x-auto scrollbar-hide py-[4vh] border-b border-cgreen bg-green-100/75 dark:bg-black/75"
                ref={containerRef}>
                {projectsCards.map((project, index) => (
                    <HashLink to={`/projects#${index}`} key={index}
                        className="w-[75vw] xl:w-[20vw] h-52 flex-shrink-0 flex flex-col mx-6 bg-dgreen dark:bg-cgreen rounded-lg p-6 relative transition scale-95 xl:hover:scale-110">
                        {/* Title */}
                        <h2 className="text-2xl font-semibold">{project.title}</h2>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-x-2 gap-y-1 mt-2">
                            {project.tags.split(', ').map((tag, tagIndex) => (
                                <div key={tagIndex} className="bg-[#151515] text-white rounded-full px-2 py-1 text-xs">{tag}</div>
                            ))}
                        </div>

                        {/* shortDesc */}
                        <p className="mt-3 text-sm xl:text-base">{project.desc[language]}</p>

                        {/* Dropdown Arrow */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512">
                                <path
                                    d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                            </svg>
                        </div>
                    </HashLink>

                ))}
            </div>

            <div className="flex flex-col justify-center items-center mt-[5vh] max-w-full min-h-screen">
                {/* Full Projects */}

                <div id="0" className="pt-10 pb-32 xl:pb-10 my-6 px-5 xl:px-10 xl:w-[60vw] relative rounded-3xl bg-green-50/75 dark:bg-black/75">

                    {/* Project Title */}
                    <h3 className="text-3xl xl:text-5xl font-bold text-cgreen mb-10">Zero-G Guns</h3>

                    {/* Links */}
                    <div className="flex flex-row absolute bottom-5 xl:bottom-auto xl:top-5 xl:right-5">
                        <a href="https://store.steampowered.com/app/3798450/ZeroG_Guns/" target="_blank"
                            className="flex flex-col items-center p-3 rounded-lg hover:bg-dgreen dark:hover:bg-cgreen group"
                            rel="noreferrer">
                            <svg
                                className="w-12 h-12 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-110 pr-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 570 570">
                                <path
                                    d="M568 320C568 457 456.8 568 319.6 568C205.8 568 110 491.7 80.6 387.6L175.8 426.9C182.2 459 210.7 483.3 244.7 483.3C283.9 483.3 316.6 450.9 314.9 409.8L399.4 349.6C451.5 350.9 495.2 308.7 495.2 256.1C495.2 204.5 453.2 162.6 401.5 162.6C349.8 162.6 307.8 204.6 307.8 256.1L307.8 257.3L248.6 343C233.1 342.1 217.9 346.4 205.1 355.1L72 300.1C82.2 172.4 189.1 72 319.6 72C456.8 72 568 183 568 320zM227.7 448.3L197.2 435.7C202.8 447.3 212.5 456.5 224.4 461.5C251.3 472.7 282.2 459.9 293.4 433.1C298.8 420.1 298.9 405.8 293.5 392.8C288.1 379.8 278 369.6 265 364.2C252.1 358.8 238.3 359 226.1 363.6L257.6 376.6C277.4 384.8 286.8 407.5 278.5 427.3C270.2 447.2 247.5 456.5 227.7 448.3zM401.5 193.8C435.9 193.8 463.8 221.7 463.8 256.1C463.8 290.5 435.9 318.4 401.5 318.4C367.1 318.4 339.2 290.5 339.2 256.1C339.2 221.7 367.1 193.8 401.5 193.8zM401.6 302.8C427.4 302.8 448.4 281.8 448.4 256C448.4 230.2 427.4 209.2 401.6 209.2C375.8 209.2 354.8 230.2 354.8 256C354.8 281.8 375.8 302.8 401.6 302.8z" />
                            </svg>
                            <span className="">Steam</span>
                        </a>
                    </div>

                    {/* Description */}
                    {language === 'nl' ? (
                        <p className="text-sm xl:text-lg">
                            Zero-G Guns begon als een idee dat ik een tijdje geleden had. Ik wilde een VR-game maken zonder de saaie joystick/teleport movement die de meeste andere VR games gebruiken.
                            Ik kwam op het idee om beweging op basis van Physics in een Zero-Gravity omgeving te gebruiken, en daar wapen recoil aan toe te voegen.
                            Ik had al eerder geprobeerd deze game te maken, maar op dat moment had ik nog niet genoeg kennis van Unity.
                            <br /><br />
                            Toen begon PLE (Personal Learning Environment), waar ik in mijn eentje een volledig MVP-project moest maken.
                            Ik besloot deze game als mijn project te maken, omdat ik meer wilde leren over Unity en 3D game development.
                            Ik begon met een prototype via Unity's XR Interaction Toolkit, waardoor ik de VR omgeving snel kon implementeren en het met een paar vrienden kon testen.
                            Dit prototype zag er totaal anders uit dan de uiteindelijke game, maar het was een geweldige start en het liet mij het potentieel van de game zien.
                            <br /><br />
                            Het prototype liet me ook zien dat ik niet kon vertrouwen op de XR Interaction Toolkit voor de beweging, omdat die niet op physics gebaseerd was. Dus met wat hulp van YouTube tutorials
                            heb ik mijn eigen bewegingssysteem gemaakt die Unity's physics gebruikt. Hierdoor kon ik eenvoudig wapen recoil en andere soorten beweging toevoegen.
                            <br /><br />
                            Tijdens de ontwikkeling van de game bleef ik playtesten met vrienden en onbekenden. Playtesten hielp me de game te verbeteren en liet zien wat belangrijk was voor de spelers.
                            Het hielp ook problemen te identificeren die ik zelf niet kon zien omdat ik de developer was. Ik heb een Discord-server gemaakt waar mensen feedback kunnen geven,
                            ik gebruik die ook om updates aan te kondigen.
                            <br /><br />
                            De game is nu beschikbaar op Steam, en ik ben van plan eraan te blijven werken wanneer ik de tijd heb. De game op Steam zetten kostte veel moeite,
                            maar het heeft me veel geleerd over het proces van het uitbrengen en marketen van een game. Dat is zeker nuttig voor toekomstige games die ik ga maken.
                        </p>
                    ) : (
                        <p className="text-sm xl:text-lg">
                            Zero-G guns started as an idea I had a while ago. I wanted to make a VR game without the boring joystick/teleport controls most other VR games use.
                            I came up with the idea to use physics based movement in Zero-Gravity, and add gun recoil movement to that.
                            I tried making this game earlier but I didn't have much knowledge about Unity at that time.
                            <br /><br />
                            Then came PLE (Personal Learning Environment) where I needed to make an entire MVP project on my own.
                            I decided to make this game as my project, because I wanted to learn more about Unity and 3D game development.
                            I started by making a quick prototype using Unity's XR Interaction Toolkit, which allowed me to quickly implement the VR controls and test it with a few friends.
                            This prototype looked so different from the final game, but it was a great start and it showed me the potential of the game.
                            <br /><br />
                            The prototype also showed me I couldn't rely on the XR Interaction Toolkit for the movement, because it wasn't physics based. So with some help from YouTube tutorials
                            I made my own movement system that uses Unity's physics system. This allowed me to easily add gun recoil and other types of movement.
                            <br /><br />
                            While developing the game I kept playtesting it with friends and strangers. Playtesting helped me improve the game and showed what was important for the players.
                            It also helped identifying probelms that I couldn't see myself becasue I made the game. I created a Discord server where people can give feedback, I also use it to to announce updates.
                            <br /><br />
                            The game is now available on Steam, and I plan to keep working on it when I have the time. Putting the game on Steam took a lot of effort,
                            but it thought me a lot about the process of publishing a game and marketing it. Which is definetely useful for any future games I will make.
                        </p>
                    )}
                </div>

                <div id="1" className="pt-10 pb-32 xl:pb-10 my-6 px-5 xl:px-10 xl:w-[60vw] relative rounded-3xl bg-green-50/75 dark:bg-black/75">

                    {/* Project Title */}
                    <h3 className="text-3xl xl:text-5xl font-bold text-cgreen mb-10">Hungry Fishies</h3>

                    {/* Links */}
                    <div className="flex flex-row absolute bottom-5 xl:bottom-auto xl:top-5 xl:right-5">
                        <a href="https://github.com/roel204/HungryFishies" target="_blank"
                            className="flex flex-col items-center p-3 rounded-lg hover:bg-dgreen dark:hover:bg-cgreen group"
                            rel="noreferrer">
                            <svg
                                className="w-10 h-10 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-110"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
                                <path
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                            </svg>
                            <span className="">Code</span>
                        </a>
                        <a href="https://roel204.itch.io/hungry-fishies" target="_blank"
                            className="flex flex-col items-center p-3 rounded-lg hover:bg-dgreen dark:hover:bg-cgreen group"
                            rel="noreferrer">
                            <svg
                                className="w-10 h-10 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-110"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 576 512">
                                <path
                                    d="M420.6 301.9a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m-265.1 0a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m273.7-144.5 47.9-83a10 10 0 1 0 -17.3-10h0l-48.5 84.1a301.3 301.3 0 0 0 -246.6 0L116.2 64.5a10 10 0 1 0 -17.3 10h0l47.9 83C64.5 202.2 8.2 285.6 0 384H576c-8.2-98.5-64.5-181.8-146.9-226.6" />
                            </svg>
                            <span className="">Download</span>
                        </a>
                    </div>

                    {/* Description */}
                    {language === 'nl' ? (
                        <p className="text-sm xl:text-lg">
                            Hungry Fish begon als een schoolproject in Excalibur.
                            Tijdens de zomervakantie in 2023 besloot ik om deze game opnieuw te bouwen in Unity, waarbij ik mijn vaardigheden in game-ontwikkeling verder ontwikkelde.
                            Later heb ik de game verbeterd door upgrades, skins en andere game mechanics toe te voegen.
                            In de zomervakantie van 2024 heb ik de game nog meer geupdate door sprites en code van Reef Keep toe te voegen en een deel van de code opnieuw te schrijven.
                            Dit is eigenlijk mijn 'test game' die ik gebruik om nieuwe dingen te leren en mijn code te verbeteren.
                        </p>
                    ) : (
                        <p className="text-sm xl:text-lg">
                            Hungry Fish began as a school project in Excalibur.
                            During the 2023 summer break, I decided to rebuild this game in Unity, further improving my skills in game development.
                            I later improved the game by adding upgrades, skins, and other game mechanics.
                            During the 2024 summer break i further improved the game by adding new sprites and improving the code by using the things i learnt from making Reef Keep.
                            This is basically my 'test game' that I use to learn new things and improve my code.
                        </p>
                    )}
                </div>

                <div id="2" className="pt-10 pb-32 xl:pb-10 my-6 px-5 xl:px-10 xl:w-[60vw] relative rounded-3xl bg-green-50/75 dark:bg-black/75">

                    {/* Project Title */}
                    <h3 className="text-3xl xl:text-5xl font-bold text-cgreen mb-10">Reef Keep</h3>

                    {/* Links */}
                    <div className="flex flex-row absolute bottom-5 xl:bottom-auto xl:top-5 xl:right-5">
                        <a href="https://github.com/Matsdd/FishGame" target="_blank"
                            className="flex flex-col items-center p-3 rounded-lg hover:bg-dgreen dark:hover:bg-cgreen group"
                            rel="noreferrer">
                            <svg
                                className="w-10 h-10 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-110"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
                                <path
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                            </svg>
                            <span className="">Code</span>
                        </a>
                        <a href="https://roel204.itch.io/reef-keep" target="_blank"
                            className="flex flex-col items-center p-3 rounded-lg hover:bg-dgreen dark:hover:bg-cgreen group"
                            rel="noreferrer">
                            <svg
                                className="w-10 h-10 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-110"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                <path
                                    d="M71.9 34.8C50.2 47.7 7.4 96.8 7 109.7v21.3c0 27.1 25.3 50.8 48.3 50.8 27.6 0 50.5-22.9 50.5-50 0 27.1 22.2 50 49.8 50s49-22.9 49-50c0 27.1 23.6 50 51.2 50h.5c27.6 0 51.2-22.9 51.2-50 0 27.1 21.5 50 49 50s49.8-22.9 49.8-50c0 27.1 23 50 50.5 50 23 0 48.3-23.8 48.3-50.8v-21.3c-.4-12.9-43.2-62.1-64.9-75C372.6 32.4 325.8 32 256 32S91.1 33.1 71.9 34.8zm132.3 134.4c-22 38.4-77.9 38.7-99.9 .3-13.2 23.1-43.2 32.1-56 27.7-3.9 40.2-13.7 237.1 17.7 269.2 80 18.7 302.1 18.1 379.8 0 31.7-32.3 21.3-232 17.8-269.2-12.9 4.4-42.9-4.6-56-27.7-22 38.5-77.9 38.1-99.9-.2-7.1 12.5-23.1 28.9-51.8 28.9a57.5 57.5 0 0 1 -51.8-28.9zm-41.6 53.8c16.5 0 31.1 0 49.2 19.8a436.9 436.9 0 0 1 88.2 0C318.2 223 332.9 223 349.3 223c52.3 0 65.2 77.5 83.9 144.5 17.3 62.2-5.5 63.7-34 63.7-42.2-1.6-65.5-32.2-65.5-62.8-39.3 6.4-101.9 8.8-155.6 0 0 30.6-23.3 61.2-65.5 62.8-28.4-.1-51.2-1.6-33.9-63.7 18.7-67 31.6-144.5 83.9-144.5zM256 270.8s-44.4 40.8-52.4 55.2l29-1.2v25.3c0 1.6 21.3 .2 23.3 .2 11.7 .5 23.3 1 23.3-.2v-25.3l29 1.2c-8-14.5-52.4-55.2-52.4-55.2z" />
                            </svg>
                            <span className="">Download</span>
                        </a>
                    </div>

                    {/* Description */}
                    {language === 'nl' ? (
                        <p className="text-sm xl:text-lg">
                            Reef Keep is een TLE (Tailored Learning Environment) project waarin ik samen met mijn team
                            een game heb ontwikkeld in Unity. Onze opdracht vanuit school was om Machine
                            Learning
                            toe te passen en bij te dragen aan een van de SDG’s (Sustainable Development Goals). Wij
                            kozen voor het doel ‘Life Below Water’, met een focus op het sub-doel: ‘Protect and
                            Restore Ecosystems’.<br></br><br></br>

                            <strong>Mijn Rol in het Project</strong><br></br>
                            In dit project vervulde ik de rol van ‘Ondernemende Technoloog’. Dit hield in dat ik mij
                            bezighield met 'Ondernemende' taken waaronder:
                            <ul className="list-disc list-inside ml-2">
                                <li>Team Leiderschap</li>
                                <li>Code Backlog</li>
                                <li>Kansen in de markt</li>
                                <li>Value propositions</li>
                                <li>Jobs to be done</li>
                                <li>Business models</li>
                            </ul>
                            Daarnaast las ik het boek ‘How to F*ck up your Startup’ van Kim Hvidkjaer om mijn kennis te
                            verdiepen.<br></br><br></br>

                            <strong>Ontwikkelingsproces</strong><br></br>
                            We begonnen met een brainstormsessie over game design. Nadat we kozen voor een ecosysteem
                            simulator, verzamelde we ideeën op een Miro-bord. Deze bespraken we
                            vervolgens om te beoordelen welke ideeën geschikt waren voor de game. Ik werkte deze ideeën
                            uit in een Gameplay Design Document en vertaalde ze naar User Stories.
                            Samen met het team bepaalden we wie welke taken zou uitvoeren en stelde ik een
                            MoSCoW-prioritering op voor de User Stories.<br></br><br></br>

                            <strong>Technische Bijdragen</strong><br></br>
                            Tot nu toe heb ik de meeste functies van de game geprogrammeerd, dit zijn er een paar:
                            <ul className="list-disc list-inside ml-2">
                                <li>Het plaatsen en bewegen van onderwaterobjecten, die opgeslagen worden in JSON.</li>
                                <li>Een GameManager die de in-game currency en warning messages beheert.</li>
                                <li>De Visitor center & Recycling station code.</li>
                                <li>Code voor de shop.</li>
                                <li>En nog veel meer!</li>
                            </ul><br></br>

                            <strong>Teamwerk en Ondersteuning</strong><br></br>
                            Ik hielp mijn teamleden regelmatig met codeproblemen en andere uitdagingen. Ook reviewde ik
                            veel van de User Stories wanneer een teamgenoot klaar was. Ik bekeek hun branch,
                            testte de feature en gaf gerichte feedback.<br></br><br></br>

                            <strong>Toekomst</strong><br></br>
                            Het project is klaar en we hebben een goed cijfer gekregen, als ik tijd heb wil ik doorwerken aan de
                            game zodat ik meer features kan toevoegen en het ook op de Playstore kan plaatsen.
                        </p>
                    ) : (
                        <p className="text-sm xl:text-lg">
                            Reef Keep is a TLE (Tailored Learning Environment) project where I, along with my team,
                            developed a game in Unity. Our school assignment was to apply Machine Learning and
                            contribute to one of the SDGs (Sustainable Development Goals). We chose the goal 'Life Below
                            Water,' focusing on the sub-goal 'Protect and Restore
                            Ecosystems.'<br></br><br></br>

                            <strong>My Role in the Project</strong><br></br>
                            In this project, I served as the ‘Ondernemende Technoloog.’ This meant that I was involved
                            in 'Entrepreneurial' tasks including:
                            <ul className="list-disc list-inside ml-2">
                                <li>Team Leadership</li>
                                <li>Code Backlog</li>
                                <li>Market opportunities</li>
                                <li>Value propositions</li>
                                <li>Jobs to be done</li>
                                <li>Business models</li>
                            </ul>
                            Additionally, I read the book ‘How to F*ck up your Startup’ by Kim Hvidkjaer to deepen my
                            knowledge.<br></br><br></br>

                            <strong>Development Process</strong><br></br>
                            We started with a brainstorming session on game design. After choosing to build an ecosystem
                            simulator, everyone gathered ideas on a Miro board. We then discussed these ideas to
                            evaluate which were suitable for the game. I elaborated these ideas in a Gameplay Design
                            Document and translated them into User Stories. Together with the team, we decided
                            who would work on which tasks and I created a MoSCoW prioritization for the User
                            Stories.<br></br><br></br>

                            <strong>Technical Contributions</strong><br></br>
                            So far, I have programmed most of the game’s features, including:
                            <ul className="list-disc list-inside ml-2">
                                <li>Placing and moving underwater objects, stored in JSON.</li>
                                <li>A GameManager that manages the in-game currency and warning messages.</li>
                                <li>The Visitor Center & Recycling Station buildings.</li>
                                <li>Code for the Shop.</li>
                            </ul><br></br>

                            <strong>Teamwork and Support</strong><br></br>
                            I regularly helped my team members with code issues and other challenges. I also reviewed
                            many of the User Stories when a team member finished. I checked their Branch,
                            tested the feature and provided constructive feedback.<br></br><br></br>

                            <strong>Future</strong><br></br>
                            The game is finished and we got a good grade! If i have time i would like to further improve the game. I want
                            to add even more features and make it available on the Playstore.
                        </p>
                    )}
                </div>

                <div id="3" className="pt-10 pb-32 xl:pb-10 my-6 px-5 xl:px-10 xl:w-[60vw] relative rounded-3xl bg-green-50/75 dark:bg-black/75">

                    {/* Project Title */}
                    <h3 className="text-3xl xl:text-5xl font-bold text-cgreen mb-10">Flex Counter</h3>

                    {/* Links */}
                    <div className="flex flex-row absolute bottom-5 xl:bottom-auto xl:top-5 xl:right-5">
                        <a href="https://github.com/roel204/FlexCounter" target="_blank"
                            className="flex flex-col items-center p-3 rounded-lg hover:bg-dgreen dark:hover:bg-cgreen group"
                            rel="noreferrer">
                            <svg
                                className="w-10 h-10 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-110"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
                                <path
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                            </svg>
                            <span className="">Code</span>
                        </a>
                        <a href="https://roel204.github.io/FlexCounter/" target="_blank"
                            className="flex flex-col items-center p-3 rounded-lg hover:bg-dgreen dark:hover:bg-cgreen group"
                            rel="noreferrer">
                            <svg
                                className="w-10 h-10 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-110"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                <path
                                    d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
                            </svg>
                            <span className="">Website</span>
                        </a>
                    </div>

                    {/* Description */}
                    <p className="text-sm xl:text-lg">{texts[language].flexCounter}</p>
                </div>

                <div id="4" className="pt-10 pb-32 xl:pb-10 my-6 px-5 xl:px-10 xl:w-[60vw] relative rounded-3xl bg-green-50/75 dark:bg-black/75">

                    {/* Project Title */}
                    <h3 className="text-3xl xl:text-5xl font-bold text-cgreen mb-10">SpellAI</h3>

                    {/* Links */}
                    <div className="flex flex-row absolute bottom-5 xl:bottom-auto xl:top-5 xl:right-5">
                        <a href="https://github.com/roel204/SpellAI" target="_blank"
                            className="flex flex-col items-center p-3 rounded-lg hover:bg-dgreen dark:hover:bg-cgreen group"
                            rel="noreferrer">
                            <svg
                                className="w-10 h-10 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-110"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
                                <path
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                            </svg>
                            <span className="">Code</span>
                        </a>
                        <a href="https://roel204.github.io/SpellAI/" target="_blank"
                            className="flex flex-col items-center p-3 rounded-lg hover:bg-dgreen dark:hover:bg-cgreen group"
                            rel="noreferrer">
                            <svg
                                className="w-10 h-10 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-110"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                <path
                                    d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
                            </svg>
                            <span className="">Website</span>
                        </a>
                    </div>

                    {/* Description */}
                    <p className="text-sm xl:text-lg">{texts[language].spellAI}</p>
                </div>

                <div id="5" className="pt-10 pb-32 xl:pb-10 my-6 px-5 xl:px-10 xl:w-[60vw] relative rounded-3xl bg-green-50/75 dark:bg-black/75">

                    {/* Project Title */}
                    <h3 className="text-3xl xl:text-5xl font-bold text-cgreen mb-10">Stream Team</h3>

                    {/* Links */}
                    <div className="flex flex-row absolute bottom-5 xl:bottom-auto xl:top-5 xl:right-5">
                        <a href="https://github.com/faroeq33/TLE1" target="_blank"
                            className="flex flex-col items-center p-3 rounded-lg hover:bg-dgreen dark:hover:bg-cgreen group"
                            rel="noreferrer">
                            <svg
                                className="w-10 h-10 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-110"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
                                <path
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                            </svg>
                            <span className="">Code</span>
                        </a>
                        <a href="https://cmgt.hr.nl/projecten/streamteam" target="_blank"
                            className="flex flex-col items-center p-3 rounded-lg hover:bg-dgreen dark:hover:bg-cgreen group"
                            rel="noreferrer">
                            <svg
                                className="w-10 h-10 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-110"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                <path
                                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                            </svg>
                            <span className="">Info</span>
                        </a>
                    </div>

                    {/* Description */}
                    <p className="text-sm xl:text-lg">{texts[language].streamTeam}</p>
                </div>

                <div id="6" className="pt-10 pb-32 xl:pb-10 my-6 px-5 xl:px-10 xl:w-[60vw] relative rounded-3xl bg-green-50/75 dark:bg-black/75">

                    {/* Project Title */}
                    <h3 className="text-3xl xl:text-5xl font-bold text-cgreen mb-10">PC Showcase</h3>

                    {/* Links */}
                    <div className="flex flex-row absolute bottom-5 xl:bottom-auto xl:top-5 xl:right-5">
                        <a href="https://github.com/roel204/PCshowcase" target="_blank"
                            className="flex flex-col items-center p-3 rounded-lg hover:bg-dgreen dark:hover:bg-cgreen group"
                            rel="noreferrer">
                            <svg
                                className="w-10 h-10 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-110"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
                                <path
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                            </svg>
                            <span className="">Code</span>
                        </a>
                    </div>

                    {/* Description */}
                    <p className="text-sm xl:text-lg">{texts[language].pcShowcase}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;
