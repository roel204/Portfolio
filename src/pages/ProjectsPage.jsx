import React, {useRef, useEffect} from 'react';
import {useLanguage} from '../context/LanguageContext.jsx';
import {HashLink} from 'react-router-hash-link';

const ProjectsPage = () => {
    const {language} = useLanguage();
    const containerRef = useRef(null);

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
            container.scrollTo({left: scrollPosition, behavior: 'instant'});
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
            flexCounter: "Machine Learning application that helps you track your bicep curls using your webcam.",
            spellAI: "This is my first experience with coding AI (ChatLLM). I built a website where the AI will correct your input text. It will mark the changes in red so you can easily see what has changed. There are also some other features like: Voice to text, Multiple models to choose from, a field for instructions like 'make it sound professional', everything is also saved into local storage so you don't lose your text if you reload the page.",
            streamTeam: "Streamteam is a Tailored Learning Environment (TLE) project for the CMGT study at Rotterdam University of Applied Sciences. The project focuses on the existing IP-car, a car controlled via a server with a live feed, which is intended for use in daily activities within care homes. Through this software, the IP-car can connect to a guide who can see a live feed and take control of the car with a controller via the same connection. It is a delivery to VindiQu and FoxConnect. VindiQu already offers livestream daily activities to care homes, and FoxConnect is the developer of the first IP-car, originally intended for private use by people with mobility impairments.",
            pcShowcase: "This is my first school project using the Laravel framework. I used it to make a simple CRUD application where people can post their PC's. Users can also place comments on a Computer and talk about it. I used Bootstrap for the CSS in this website.",
            hungryFish: "First i made Hungry Fish as an Excalibur project for school. But later i recreated it with unity and improved it, adding way more features like upgrades and skins. The Unity game is still in development.",
            hennie: "I made this CLE3 project with other students. We used JavaScript to build a web-app that displays information for elderly people. I also added a favorites system using Localstorage.",
        },
        nl: {
            pageTitle: 'MIJN PROJECTEN',
            flexCounter: "Machine Learning app om bicep curls te tellen met je webcam.",
            spellAI: "Dit is mijn eerste ervaring met het coderen van AI (ChatLLM). Ik heb een website gebouwd waar de AI je invoertekst zal corrigeren. Het zal de wijzigingen in het rood markeren zodat je gemakkelijk kunt zien wat er is veranderd. Er zijn ook enkele andere functies, zoals: Spraak naar tekst, Meerdere modellen om uit te kiezen, een veld voor instructies zoals 'laat het professioneel klinken', alles wordt ook opgeslagen in local storage zodat je je tekst niet kwijtraakt als je de pagina herlaad.",
            streamTeam: "Streamteam is een Tailored Learning Environment (TLE) project voor de studie CMGT, Hogeschool Rotterdam. Het project focust op de bestaande IP-car, een via een server te besturen auto met een livefeed, die moet worden ingezet voor dagbesteding binnen zorghuizen. De IP-car kan via deze software verbinden met een gids, die een live beeld te zien krijgt en controle van de auto kan overnemen met een controller via dezelfde verbinding. Het is een oplevering aan VindiQu en FoxConnect. VindiQu biedt al livestream dagbesteding aan zorghuizen, en FoxConnect is de ontwikkelaar van de eerste IP-car, origineel bedoeld voor particulier gebruik van mensen met een motorische beperking.",
            pcShowcase: "Dit is mijn eerste school project waarbij ik het Laravel-framework gebruik. Ik heb het gebruikt om een eenvoudige CRUD-applicatie te maken waar mensen hun pc's kunnen plaatsen. Gebruikers kunnen ook opmerkingen plaatsen over een computer en erover praten. Ik heb Bootstrap gebruikt voor de CSS op deze website.",
            hungryFish: "Eerst heb ik Hungry Fish gemaakt als een Excalibur-project voor school. Maar later heb ik het opnieuw gemaakt met Unity en verbeterd, waarbij ik veel meer functies heb toegevoegd zoals upgrades en skins. De Unity game is nog in ontwikkeling.",
            hennie: "Ik heb dit CLE3-project gemaakt met andere studenten. We hebben JavaScript gebruikt om een web-app te bouwen die informatie weergeeft voor ouderen. Ik heb ook een favorietensysteem toegevoegd met behulp van LocalStorage.",
        },
    };

    const projectsCards = [
        {
            title: 'Flex Counter',
            tags: 'PRG8.5 Machine-Learning',
            desc: {
                en: "Machine Learning application that helps you track your bicep curls using your webcam.",
                nl: 'Machine Learning app om bicep curls te tellen met je webcam.',
            },
        },
        {
            title: 'SpellAI',
            tags: 'PRG8 AI ChatLLM',
            desc: {
                en: "An AI (ChatLLM) application that will correct the spelling of your text.",
                nl: 'Een AI (ChatLLM) app die de spelling in jouw text verbeterd.',
            },
        },
        {
            title: 'Stream Team',
            tags: 'TLE1 Laravel JS',
            desc: {
                en: "A website to control Fox-Connect's IP-Car.",
                nl: 'Een website om de IP-Car van Fox-Connect te besturen.',
            },
        },
        {
            title: 'PC Showcase',
            tags: 'PRG5 Laravel',
            desc: {
                en: 'A website made with Laravel to show your custom PC builds.',
                nl: 'Een website gemaakt met Laravel om je eigen PC te posten.',
            },
        },
        {
            title: 'Hungry Fish',
            tags: 'Unity',
            desc: {
                en: 'A simple fish game made with Unity.',
                nl: 'Een game over vissen gemaakt met Unity.',
            },
        },
        {
            title: "Hennie's Hulp Pagina",
            tags: 'CLE3 JS',
            desc: {
                en: 'A help page for elderly people.',
                nl: 'Een hulp pagina voor senioren.',
            },
        },
    ];

    return (
        <div className="sm:ml-[6vw]">
            <div className="bg-green-100/75 dark:bg-black/75">
                <h1 id="top" className="gradientText text-4xl sm:text-8xl pt-[6vh]">{texts[language].pageTitle}</h1>
            </div>

            <HashLink to={`/projects#top`} className="z-10 fixed bottom-4 right-4 bg-dgreen dark:bg-cgreen pt-3 pb-2 px-4 rounded-lg">^</HashLink>

            {/*Possibility for 'sticky top-0'*/}
            <div className="flex overflow-x-auto scrollbar-hide py-[4vh] border-b border-cgreen bg-green-100/75 dark:bg-black/75" ref={containerRef}>
                {projectsCards.map((project, index) => (
                    <HashLink to={`/projects#${index}`} key={index}
                              className="w-[75vw] sm:w-[20vw] h-52 flex-shrink-0 flex flex-col mx-6 bg-dgreen dark:bg-cgreen rounded-lg p-6 relative transition scale-95 sm:hover:scale-110">
                        {/* Title */}
                        <h2 className="text-2xl font-semibold">{project.title}</h2>

                        {/* Tags */}
                        <div className="flex mt-2">
                            {project.tags.split(' ').map((tag, tagIndex) => (
                                <div key={tagIndex} className="bg-[#151515] text-white rounded-full px-2 py-1 text-xs mr-2">{tag}</div>
                            ))}
                        </div>

                        {/* shortDesc */}
                        <p className="mt-4 text-sm sm:text-base">{project.desc[language]}</p>

                        {/* Dropdown Arrow */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 448 512">
                                <path
                                    d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                            </svg>
                        </div>
                    </HashLink>

                ))}
            </div>

            <div className="flex flex-col justify-center items-center mt-[5vh] max-w-full min-h-screen">

                <div id="0" className="py-10 my-6 px-5 sm:px-10 sm:w-[60vw] relative rounded-3xl bg-green-50/75 dark:bg-black/75">

                    {/* Project Title */}
                    <h3 className="text-3xl sm:text-5xl font-bold text-cgreen mb-8">Flex Counter</h3>

                    {/* Links */}
                    <div className="flex flex-row absolute top-5 right-5 gap-3">
                        <a href="https://github.com/roel204/FlexCounter" target="_blank" className="flex flex-col items-center p-3 rounded-lg hover:bg-dgreen dark:hover:bg-cgreen group">
                            <svg className="w-10 h-10 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-110" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
                                <path
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                            </svg>
                            <span className="">Code</span>
                        </a>
                        <a href="https://roel204.github.io/FlexCounter/" target="_blank" className="flex flex-col items-center p-3 rounded-lg hover:bg-dgreen dark:hover:bg-cgreen group">
                            <svg className="w-10 h-10 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-110" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                <path
                                    d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/>
                            </svg>
                            <span className="">Website</span>
                        </a>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-lg">{texts[language].spellAI}</p>
                </div>

                <div id="1" className="py-10 my-6 px-5 sm:px-10 sm:w-[60vw] relative rounded-3xl bg-green-50/75 dark:bg-black/75">

                    {/* Project Title */}
                    <h3 className="text-3xl sm:text-5xl font-bold text-cgreen mb-8">SpellAI</h3>

                    {/* Links */}
                    <div className="flex flex-row absolute top-5 right-5 gap-3">
                        <a href="https://github.com/roel204/SpellAI" target="_blank" className="flex flex-col items-center p-3 rounded-lg hover:bg-dgreen dark:hover:bg-cgreen group">
                            <svg className="w-10 h-10 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-110" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
                                <path
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                            </svg>
                            <span className="">Code</span>
                        </a>
                        <a href="https://roel204.github.io/SpellAI/" target="_blank" className="flex flex-col items-center p-3 rounded-lg hover:bg-dgreen dark:hover:bg-cgreen group">
                            <svg className="w-10 h-10 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-110" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                <path
                                    d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/>
                            </svg>
                            <span className="">Website</span>
                        </a>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-lg">{texts[language].spellAI}</p>
                </div>

                <div id="2" className="py-10 my-6 px-5 sm:px-10 sm:w-[60vw] relative rounded-3xl bg-green-50/75 dark:bg-black/75">

                    {/* Project Title */}
                    <h3 className="text-3xl sm:text-5xl font-bold text-cgreen mb-8">Stream Team</h3>

                    {/* Links */}
                    <div className="flex flex-row absolute top-5 right-5 gap-3">
                        <a href="https://github.com/faroeq33/TLE1" target="_blank" className="flex flex-col items-center p-3 rounded-lg hover:bg-dgreen dark:hover:bg-cgreen group">
                            <svg className="w-10 h-10 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-110" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
                                <path
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                            </svg>
                            <span className="">Code</span>
                        </a>
                        <a href="https://cmgt.hr.nl/projecten/streamteam" target="_blank" className="flex flex-col items-center p-3 rounded-lg hover:bg-dgreen dark:hover:bg-cgreen group">
                            <svg className="w-10 h-10 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-110" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                <path
                                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                            </svg>
                            <span className="">Info</span>
                        </a>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-lg">{texts[language].streamTeam}</p>
                </div>

                <div id="3" className="py-10 my-6 px-5 sm:px-10 sm:w-[60vw] relative rounded-3xl bg-green-50/75 dark:bg-black/75">

                    {/* Project Title */}
                    <h3 className="text-3xl sm:text-5xl font-bold text-cgreen mb-8">PC Showcase</h3>

                    {/* Links */}
                    <div className="flex flex-row absolute top-5 right-5 gap-3">
                        <a href="https://github.com/roel204/PCshowcase" target="_blank" className="flex flex-col items-center p-3 rounded-lg hover:bg-dgreen dark:hover:bg-cgreen group">
                            <svg className="w-10 h-10 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-110" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
                                <path
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                            </svg>
                            <span className="">Code</span>
                        </a>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-lg">{texts[language].pcShowcase}</p>
                </div>

                <div id="4" className="py-10 my-6 px-5 sm:px-10 sm:w-[60vw] relative rounded-3xl bg-green-50/75 dark:bg-black/75">

                    {/* Project Title */}
                    <h3 className="text-3xl sm:text-5xl font-bold text-cgreen mb-8">Hungry Fish</h3>

                    {/* Links */}
                    <div className="flex flex-row absolute top-5 right-5 gap-3">
                        {/*<a href="https://github.com/roel204/PCshowcase" target="_blank" className="flex flex-col items-center p-3 rounded-lg hover:bg-dgreen dark:hover:bg-cgreen group">*/}
                        {/*    <svg className="w-10 h-10 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-110" aria-hidden="true"*/}
                        {/*        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512">*/}
                        {/*        <path*/}
                        {/*            d="M420.6 301.9a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m-265.1 0a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m273.7-144.5 47.9-83a10 10 0 1 0 -17.3-10h0l-48.5 84.1a301.3 301.3 0 0 0 -246.6 0L116.2 64.5a10 10 0 1 0 -17.3 10h0l47.9 83C64.5 202.2 8.2 285.6 0 384H576c-8.2-98.5-64.5-181.8-146.9-226.6"/>*/}
                        {/*    </svg>*/}
                        <span className="">Work in Progress</span>
                        {/*</a>*/}
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-lg">{texts[language].hungryFish}</p>
                </div>

                <div id="5" className="py-10 my-6 px-5 sm:px-10 sm:w-[60vw] relative rounded-3xl bg-green-50/75 dark:bg-black/75">

                    {/* Project Title */}
                    <h3 className="text-3xl sm:text-5xl font-bold text-cgreen mb-8">Hennie's Hulp Pagina</h3>

                    {/* Links */}
                    <div className="flex flex-row absolute top-5 right-5 gap-3">
                        <a href="https://github.com/roel204/CLE3" target="_blank" className="flex flex-col items-center p-3 rounded-lg hover:bg-dgreen dark:hover:bg-cgreen group">
                            <svg className="w-10 h-10 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white group-hover:scale-110" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
                                <path
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                            </svg>
                            <span className="">Code</span>
                        </a>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-lg">{texts[language].hennie}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;
