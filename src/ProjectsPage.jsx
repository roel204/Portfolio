import {useRef, useEffect} from 'react';
import {useLanguage} from './LanguageContext.jsx';
import { HashLink } from 'react-router-hash-link';
import {HashRouter} from "react-router-dom";

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
            pageTitle: "My Projects",
            code: "View Code",
            streamTeam: "Streamteam is a Tailored Learning Environment (TLE) project for the CMGT study at Rotterdam University of Applied Sciences. The project focuses on the existing IP-car, a car controlled via a server with a live feed, which is intended for use in daily activities within care homes. Through this software, the IP-car can connect to a guide who can see a live feed and take control of the car with a controller via the same connection. It is a delivery to VindiQu and FoxConnect. VindiQu already offers livestream daily activities to care homes, and FoxConnect is the developer of the first IP-car, originally intended for private use by people with mobility impairments.",
            reactTasks: "This is my first school project using the React framework. I really liked how easy and custom it is, so i'm also using it for this Portfolio website. Tasks React is a CRUD application that uses my API i made with Express and MongoDB. You can easily look through all your tasks with pagination, and you're also able to star your favorite tasks to the top of the list.",
            pcShowcase: "This is my first school project using the Laravel framework. I used it to make a simple CRUD application where people can post their PC's. Users can also place comments on a Computer and talk about it. I used Bootstrap for the CSS in this website.",
            hungryFish: "First i made Hungry Fish as an Excalibur project for school. But later i recreated it with unity and improved it, adding way more features like upgrades and skins. The Unity game is still in development.",
            hennie: "I made this CLE3 project with other students. We used JavaScript to build a web-app that displays information for elderly people. I also added a favorites system using Localstorage.",
            parrotFarm: "I made a reservation system for the company Parrot Farm using PHP and MySQL. This was my first project where I used a database.",
            rockPS: "For my very first project in my CMGT study, I created a physical device with the MicroBit controller together with other students. We made arcade cabinets and created a version of the game 'Rock Paper Scissors' with a pirate theme to it.",
        },
        nl: {
            pageTitle: 'Mijn Projecten',
            code: 'Bekijk Code',
            streamTeam: "Streamteam is een Tailored Learning Environment (TLE) project voor de studie CMGT, Hogeschool Rotterdam. Het project focust op de bestaande IP-car, een via een server te besturen auto met een livefeed, die moet worden ingezet voor dagbesteding binnen zorghuizen. De IP-car kan via deze software verbinden met een gids, die een live beeld te zien krijgt en controle van de auto kan overnemen met een controller via dezelfde verbinding. Het is een oplevering aan VindiQu en FoxConnect. VindiQu biedt al livestream dagbesteding aan zorghuizen, en FoxConnect is de ontwikkelaar van de eerste IP-car, origineel bedoeld voor particulier gebruik van mensen met een motorische beperking.",
            reactTasks: "Dit is mijn eerste school project waarbij ik het React-framework gebruik. Ik vond het makkelijk en gebruiksvriendelijk, dus ik gebruik het ook voor deze portfolio-website. Tasks React is een CRUD-applicatie die mijn API gebruikt, deze heb ik gemaakt met Express en MongoDB. Je kunt gemakkelijk door al je taken bladeren met paginering, en je kunt ook je favoriete taken bovenaan de lijst markeren.",
            pcShowcase: "Dit is mijn eerste school project waarbij ik het Laravel-framework gebruik. Ik heb het gebruikt om een eenvoudige CRUD-applicatie te maken waar mensen hun pc's kunnen plaatsen. Gebruikers kunnen ook opmerkingen plaatsen over een computer en erover praten. Ik heb Bootstrap gebruikt voor de CSS op deze website.",
            hungryFish: "Eerst heb ik Hungry Fish gemaakt als een Excalibur-project voor school. Maar later heb ik het opnieuw gemaakt met Unity en verbeterd, waarbij ik veel meer functies heb toegevoegd zoals upgrades en skins. De Unity game is nog in ontwikkeling.",
            hennie: "Ik heb dit CLE3-project gemaakt met andere studenten. We hebben JavaScript gebruikt om een web-app te bouwen die informatie weergeeft voor ouderen. Ik heb ook een favorietensysteem toegevoegd met behulp van LocalStorage.",
            parrotFarm: "Ik heb voor het bedrijf Parrot Farm een reserveringsysteem gemaakt met behulp van PHP en MySQL. Dit was mijn eerste project waar ik een database heb gebruikt.",
            rockPS: "Voor mijn allereerste project op mijn CMGT studie heb ik samen met andere studenten een fysiek apparaat moeten maken met de MicroBit controller. Wij hebben arcade kastjes gemaakt en hierin een versie van de game 'Steen Papier Schaar' gemaakt in een piraten thema.",
        },
    };

    const projectsCards = [
        {
            title: 'Stream Team', githubLink: 'https://github.com/faroeq33/TLE1',
            tags: 'TLE1 Laravel JS',
            desc: {
                en: "A website to control Fox-Connect's IP-Car. Made together with other students.",
                nl: 'Een website om de IP-Car van Fox-Connect te besturen. In samenwerking met andere studenten.',
            },
        },
        {
            title: 'React Tasks', githubLink: 'https://github.com/roel204/TasksReact',
            tags: 'PRG6 React MongoDB',
            desc: {
                en: 'A Task List app made with React. Gets and stores data to my own MongoDB API',
                nl: 'Een Taken Lijst app gemaakt met React. Krijgt en slaat slaat data op in mijn eigen MongoDB API.',
            },
        },
        {
            title: 'PC Showcase', githubLink: 'https://github.com/roel204/PCshowcase',
            tags: 'PRG5 Laravel',
            desc: {
                en: 'A website made with Laravel to show your custom PC builds.',
                nl: 'Een website gemaakt met Laravel om je eiegn PC te posten.',
            },
        },
        {
            title: 'Hungry Fish', githubLink: 'https://github.com/roel204/hungryfish',
            tags: 'PRG4 Excalibur Unity',
            desc: {
                en: 'A simple fish game made with ExcaliburJS, then remade and improved with Unity.',
                nl: 'Een game over vissen gemaakt met ExcaliburJS, deze heb ik daarna opnieuw gemaakt in Unity en verbeterd.',
            },
        },
        {
            title: "Hennie's Hulp Pagina", githubLink: 'https://github.com/roel204/CLE3',
            tags: 'CLE3 JS',
            desc: {
                en: 'A help page for elderly people. Made together with other students.',
                nl: 'Een hulp pagina voor senioren. In samenwerking met andere studenten.',
            },
        },
        {
            title: "Parrotfarm Reserveringssysteem", githubLink: 'https://github.com/roel204/Reseveeringssyteem',
            tags: 'CLE2 PHP MySQL',
            desc: {
                en: 'A Reservation System made for the company Parrot Farm.',
                nl: 'Een Reserveringssysteem gemaakt voor het bedrijk Parrot Farm.',
            },
        },
        {
            title: "Rock Paper Scurvy",
            tags: 'CLE1 Microbit Electronics',
            desc: {
                en: 'A rock paper scissors like game. Built together with other students.',
                nl: 'Een soort steen papier schaar game. Samen gemaakt met andere studenten.',
            },
        },
    ];

    return (
        <div className="sm:ml-[6vw]">
            <h1 id="top" className="gradientText text-5xl sm:text-9xl pb-5">{texts[language].pageTitle}</h1>

            <HashLink to={`/projects#top`} className="fixed bottom-4 right-4 bg-dgreen dark:bg-cgreen pt-3 pb-2 px-4 rounded-lg">^</HashLink>

            <div className="flex overflow-x-auto scrollbar-hide py-24 border-b border-cgreen" ref={containerRef}>
                {projectsCards.map((project, index) => (
                    <HashLink to={`/projects#${index}`} key={index} className="w-[75vw] sm:w-[20vw] h-[40vh] flex-shrink-0 flex flex-col mx-6 bg-dgreen dark:bg-cgreen rounded-lg p-6 relative transition scale-95 sm:hover:scale-110">
                        {/* Title */}
                        <h2 className="text-2xl font-semibold">{project.title}</h2>

                        {/* Tags */}
                        <div className="flex mt-2">
                            {project.tags.split(' ').map((tag, tagIndex) => (
                                <div key={tagIndex} className="bg-[#151515] text-white rounded-full px-2 py-1 text-xs mr-2">{tag}</div>
                            ))}
                        </div>

                        {/* shortDesc */}
                        <p className="mt-4 text-xl">{project.desc[language]}</p>

                        {/* GitHub Link */}
                        {project.githubLink && (
                            <a href={project.githubLink} target="_blank" className="absolute bottom-2 right-2 flex flex-col items-center p-2 group">
                                <svg className="w-10 h-10 text-[#151515] group-hover:text-white" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
                                    <path
                                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                                </svg>
                                <span className="">{texts[language].code}</span>
                            </a>
                        )}

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

            <div id="0" className="px-5 sm:px-20 py-10 border-b border-cgreen">
                <h3 className="text-3xl sm:text-5xl text-cgreen mb-4">Stream Team</h3>
                <p className="text-sm sm:text-lg">{texts[language].streamTeam}</p>
            </div>

            <div id="1" className="px-5 sm:px-20 py-10 border-b border-cgreen">
                <h3 className="text-3xl sm:text-5xl text-cgreen mb-4">React Tasks</h3>
                <p className="text-sm sm:text-lg">{texts[language].reactTasks}</p>
            </div>

            <div id="2" className="px-5 sm:px-20 py-10 border-b border-cgreen">
                <h3 className="text-3xl sm:text-5xl text-cgreen mb-4">PC Showcase</h3>
                <p className="text-sm sm:text-lg">{texts[language].pcShowcase}</p>
            </div>

            <div id="3" className="px-5 sm:px-20 py-10 border-b border-cgreen">
                <h3 className="text-3xl sm:text-5xl text-cgreen mb-4">Hungry Fish</h3>
                <p className="text-sm sm:text-lg">{texts[language].hungryFish}</p>
            </div>

            <div id="4" className="px-5 sm:px-20 py-10 border-b border-cgreen">
                <h3 className="text-3xl sm:text-5xl text-cgreen mb-4">Hennie's Hulp Pagina</h3>
                <p className="text-sm sm:text-lg">{texts[language].hennie}</p>
            </div>

            <div id="5" className="px-5 sm:px-20 py-10 border-b border-cgreen">
                <h3 className="text-3xl sm:text-5xl text-cgreen mb-4">Parrotfarm Reserveringssysteem</h3>
                <p className="text-sm sm:text-lg">{texts[language].parrotFarm}</p>
            </div>

            <div id="6" className="px-5 sm:px-20 py-10 border-b border-cgreen">
                <h3 className="text-3xl sm:text-5xl text-cgreen mb-4">Rock Paper Scurvy</h3>
                <p className="text-sm sm:text-lg">{texts[language].rockPS}</p>
            </div>

        </div>
    );
}

export default ProjectsPage;
