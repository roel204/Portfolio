import React, {useRef, useEffect} from 'react';
import {useLanguage} from './LanguageContext.jsx';

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
            const bufferZoneWidth = 0.2 * screenWidth;

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

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); // Run this effect only once when the component mounts


    const texts = {
        en: {
            pageTitle: "My Projects",
            code: "View Code",
        },
        nl: {
            pageTitle: 'Mijn Projecten',
            code: 'Bekijk Code',
        },
    };

    const projects = [
        {
            title: 'Project 1', githubLink: 'https://github.com/project1',
            desc: {
                en: 'shortDesc of Project 1',
                nl: 'nl',
            },
        },
        {
            title: 'Project 1', githubLink: 'https://github.com/project1',
            desc: {
                en: 'shortDesc of Project 1',
                nl: 'nl',
            },
        },
        {
            title: 'Project 1', githubLink: 'https://github.com/project1',
            desc: {
                en: 'shortDesc of Project 1',
                nl: 'nl',
            },
        },
        {
            title: 'Project 1', githubLink: 'https://github.com/project1',
            desc: {
                en: 'shortDesc of Project 1',
                nl: 'nl',
            },
        },
        {
            title: 'Project 1', githubLink: 'https://github.com/project1',
            desc: {
                en: 'shortDesc of Project 1',
                nl: 'nl',
            },
        },
    ];

    return (
        <div className="ml-24 text-black dark:text-white bg-green-100 dark:bg-[#151515]">
            <h1 className="gradientText">{texts[language].pageTitle}</h1>

            <div className="flex overflow-x-auto scrollbar-hide py-32 border-b border-cgreen" ref={containerRef}>
                {projects.map((project, index) => (
                    <a href="#" key={index} className="w-96 h-[50vh] flex-shrink-0 flex flex-col mx-6 bg-dgreen dark:bg-cgreen rounded-lg p-6 relative z-10 transition scale-95 hover:scale-110">
                        {/* Title */}
                        <h2 className="text-lg font-semibold">{project.title}</h2>

                        {/* GitHub Link */}
                        <a href={project.githubLink} target="_blank" className="absolute top-2 right-2 flex flex-col items-center p-2 rounded-lg hover:bg-cgreen group">
                            <svg className="w-10 h-10 text-gray-700 group-hover:text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
                                <path
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                            </svg>
                            <span className="">{texts[language].code}</span>
                        </a>

                        {/* shortDesc */}
                        <p className="mt-8 text-sm">{project.desc[language]}</p>

                        {/* Dropdown Arrow */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 448 512">
                                <path
                                    d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                            </svg>
                        </div>
                    </a>

                ))}
            </div>

            <div className="px-20 py-10 border-b border-cgreen">
                <h3 className="text-5xl text-cgreen">Title 1</h3>
                <p>Long shortDescs are text versions of the information provided in a detailed or complex image.

                    Most web writers are familiar with short shortDescs for images, often called text alternatives or ALT text. We use them when an image conveys a brief message or acts as a link.

                    However, when we use diagrams, maps or graphs, the ALT text is not usually enough to provide an adequate text alternative. To present a long shortDesc, we might need to use
                    headings, dot points or data tables. While ALT text can be long (there's no technical limit), long text usually needs structure. And ALT text can only be text.</p>
            </div>

            <div className="px-20 py-10 border-b border-cgreen">
                <h3 className="text-5xl text-cgreen">Title 1</h3>
                <p>Long shortDescs are text versions of the information provided in a detailed or complex image.

                    Most web writers are familiar with short shortDescs for images, often called text alternatives or ALT text. We use them when an image conveys a brief message or acts as a link.

                    However, when we use diagrams, maps or graphs, the ALT text is not usually enough to provide an adequate text alternative. To present a long shortDesc, we might need to use
                    headings, dot points or data tables. While ALT text can be long (there's no technical limit), long text usually needs structure. And ALT text can only be text.</p>
            </div>

            <div className="px-20 py-10 border-b border-cgreen">
                <h3 className="text-5xl text-cgreen">Title 1</h3>
                <p>Long shortDescs are text versions of the information provided in a detailed or complex image.

                    Most web writers are familiar with short shortDescs for images, often called text alternatives or ALT text. We use them when an image conveys a brief message or acts as a link.

                    However, when we use diagrams, maps or graphs, the ALT text is not usually enough to provide an adequate text alternative. To present a long shortDesc, we might need to use
                    headings, dot points or data tables. While ALT text can be long (there's no technical limit), long text usually needs structure. And ALT text can only be text.</p>
            </div>

            <div className="px-20 py-10 border-b border-cgreen">
                <h3 className="text-5xl text-cgreen">Title 1</h3>
                <p>Long shortDescs are text versions of the information provided in a detailed or complex image.

                    Most web writers are familiar with short shortDescs for images, often called text alternatives or ALT text. We use them when an image conveys a brief message or acts as a link.

                    However, when we use diagrams, maps or graphs, the ALT text is not usually enough to provide an adequate text alternative. To present a long shortDesc, we might need to use
                    headings, dot points or data tables. While ALT text can be long (there's no technical limit), long text usually needs structure. And ALT text can only be text.</p>
            </div>

        </div>
    );
}

export default ProjectsPage;
