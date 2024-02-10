import React, { useRef, useEffect } from 'react';
import { useLanguage } from './LanguageContext.jsx';

const ProjectsPage = () => {
    const { language } = useLanguage();
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
            container.scrollTo({ left: scrollPosition, behavior: 'instant' });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); // Run this effect only once when the component mounts


    const texts = {
        en: {
            pageTitle: "My Projects",
        },
        nl: {
            pageTitle: 'Mijn Projecten',
        },
    };

    const projects = [
        { id: 1, title: 'Project 1', description: 'Description of Project 1', githubLink: 'https://github.com/project1' },
        { id: 2, title: 'Project 2', description: 'Description of Project 2', githubLink: 'https://github.com/project2' },
        { id: 3, title: 'Project 3', description: 'Description of Project 3', githubLink: 'https://github.com/project3' },
        { id: 4, title: 'Project 4', description: 'Description of Project 4', githubLink: 'https://github.com/project4' },
        { id: 5, title: 'Project 5', description: 'Description of Project 5', githubLink: 'https://github.com/project5' },
    ];

    return (
        <div className="bg-green-100 dark:bg-[#151515] h-screen">
            <h1 className="gradientText">{texts[language].pageTitle}</h1>

            <div className="flex overflow-x-auto scrollbar-hide mt-32 ml-24" ref={containerRef}>
                {projects.map((project) => (
                    <div key={project.id} className="w-96 h-96 flex-shrink-0 flex flex-col items-center justify-center mx-4 bg-cgreen rounded-lg p-4">
                        <h2 className="text-lg font-semibold text-white">{project.title}</h2>
                        <p className="text-sm text-gray-200">{project.description}</p>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-500 hover:underline">GitHub</a>
                    </div>
                ))}
            </div>

            {/* Add large area for text and image for each project */}
        </div>
    );
}

export default ProjectsPage;
