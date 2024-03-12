import {useState, useEffect} from 'react';
import {useLanguage} from '../context/LanguageContext.jsx';
import {Link} from "react-router-dom";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState('on');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
    const {language, toggleLanguage} = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDarkMode = () => {
        const newMode = darkMode === 'on' ? 'off' : 'on';
        setDarkMode(newMode);
        localStorage.setItem('darkMode', newMode);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Retrieve preferences from localStorage & update dark class
    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode') || 'on';

        setDarkMode(savedDarkMode);

        if (darkMode === 'on') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode]);

    const texts = {
        en: {
            languageButton: 'Dutch',
            projects: 'Projects',
            skills: 'Skills',
        },
        nl: {
            languageButton: 'English',
            projects: 'Projecten',
            skills: 'Skills',
        },
    };

    if (!isMobile) {
        return (
            <aside className="fixed top-0 left-0 z-40 w-[6vw] h-screen text-sm text-gray-900 dark:text-gray-200" aria-label="Sidebar">
                <div className="h-full w-full flex flex-col items-center border-r-2 border-cgreen justify-between px-2 py-4 overflow-y-auto bg-green-50/75 dark:bg-black/75">
                    <Link to="/">
                        <img src="public/images/RHlogo.png" alt="RH Logo" className="w-full rounded object-contain transition duration-75 hover:scale-110"/>
                    </Link>
                    <ul className="space-y-2 pb-4 font-medium w-full border-b border-gray-200 dark:border-gray-700">
                        <li>
                            <Link to="/" className="flex flex-col text-center items-center py-2 rounded-lg hover:bg-dgreen dark:hover:bg-cgreen group">
                                <svg
                                    className="flex-shrink-0 w-[40%] text-gray-500 transition duration-75 group-hover:scale-110 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512">
                                    <path
                                        d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                                </svg>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" className="flex flex-col items-center p-2 rounded-lg hover:bg-dgreen dark:hover:bg-cgreen group">
                                <svg
                                    className="flex-shrink-0 w-[40%] text-gray-500 transition duration-75 group-hover:scale-110 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path
                                        d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                                </svg>
                                <span>{texts[language].projects}</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/skills" className="flex flex-col items-center p-2 rounded-lg hover:bg-dgreen dark:hover:bg-cgreen group">
                                <svg
                                    className="flex-shrink-0 w-[40%] text-gray-500 transition duration-75 group-hover:scale-110 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512">
                                    <path
                                        d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/>
                                </svg>
                                <span>{texts[language].skills}</span>
                            </Link>
                        </li>
                    </ul>

                    <ul className="py-4 space-y-2 w-full">
                        <li>
                            <a href="mailto:roelhoogendoorn01369@gmail.com" target="_blank" className="flex flex-col items-center p-2 rounded-lg hover:bg-dgreen dark:hover:bg-cgreen group"
                               rel="noreferrer noopener">
                                <svg
                                    className="flex-shrink-0 w-[40%] text-gray-500 transition duration-75 group-hover:scale-110 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                    <path
                                        d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                                </svg>
                                <span>Mail</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/roel204" target="_blank" className="flex flex-col items-center p-2 rounded-lg hover:bg-dgreen dark:hover:bg-cgreen group"
                               rel="noreferrer noopener">
                                <svg
                                    className="flex-shrink-0 w-[40%] text-gray-500 transition duration-75 group-hover:scale-110 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
                                    <path
                                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                                </svg>
                                <span>GitHub</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/roel-hoogendoorn/" target="_blank" className="flex flex-col items-center p-2 rounded-lg hover:bg-dgreen dark:hover:bg-cgreen group"
                               rel="noreferrer noopener">
                                <svg
                                    className="flex-shrink-0 w-[40%] text-gray-500 transition duration-75 group-hover:scale-110 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                                    <path
                                        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                                </svg>
                                <span>LinkedIn</span>
                            </a>
                        </li>
                    </ul>

                    <div className="flex flex-col items-center w-full pt-4 space-y-2  border-t border-gray-200 dark:border-gray-700">
                        <button className="flex flex-col w-full items-center p-2 rounded-lg hover:bg-dgreen dark:hover:bg-cgreen group" onClick={toggleDarkMode}>
                            <svg className="flex-shrink-0 w-[40%] text-gray-900 transition duration-75 group-hover:scale-110 dark:text-yellow-400" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 384 512">
                                <path
                                    d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"/>
                            </svg>
                            <span>{darkMode === 'off' ? 'Darkmode' : 'Lightmode'}</span>
                        </button>
                        <button className="flex flex-col w-full items-center p-2 rounded-lg hover:bg-dgreen dark:hover:bg-cgreen group" onClick={toggleLanguage}>
                            <div className={`${language === 'nl' ? 'uk-flag' : 'dutch-flag'} w-[80%] transition group-hover:scale-110`}></div>
                            <span>{texts[language].languageButton}</span>
                        </button>
                    </div>
                </div>

                {/*Feedback Button*/}
                <a href="https://forms.gle/NXLuRV2ut7Gw6gLa7" target="_blank"
                   className="fixed top-4 right-4 bg-dgreen dark:bg-cgreen py-2 px-4 rounded-lg shadow-md z-50 transition hover:scale-125">Feedback?</a>

            </aside>
        );
    } else {
        return (
            <>
                <button
                    onClick={toggleMobileMenu}
                    className="fixed left-0 z-50">
                    {isOpen ? (
                        // X icon for closing the menu
                        <svg
                            className="w-[15vw] text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    ) : (
                        // Hamburger icon for opening the menu
                        <svg className="w-[15vw] text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h10"/>
                        </svg>
                    )}
                </button>
                <aside className={`fixed top-0 z-40 w-[70vw] h-screen text-sm text-gray-900 dark:text-gray-200 transition duration-700 ${isOpen ? 'translate-x-0' : '-translate-x-96'}`}
                       aria-label="Sidebar">
                    <div className="h-full w-full flex flex-col items-center justify-center border-r-2 border-cgreen px-2 py-4 overflow-y-auto bg-green-200 dark:bg-[#252525]">

                        {/*Feedback Button*/}
                        <a href="https://forms.gle/NXLuRV2ut7Gw6gLa7" target="_blank" className="fixed bottom-4 right-4 bg-dgreen dark:bg-cgreen py-2 px-4 rounded-lg shadow-md z-50">Feedback?</a>

                        <Link to="/" onClick={toggleMobileMenu} className="pb-[5vh]">
                            <img src="../../public/images/RHlogo.png" alt="RH Logo" className="w-20 rounded object-contain"/>
                        </Link>
                        <ul className="space-y-4 pb-4 font-medium w-full border-b border-gray-200 dark:border-gray-700">
                            <li>
                                <Link to="/" onClick={toggleMobileMenu} className="flex items-center p-2">
                                    <svg className="flex-shrink-0 w-[10%] mr-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512">
                                        <path
                                            d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                                    </svg>
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects" onClick={toggleMobileMenu} className="flex items-center p-2">
                                    <svg className="flex-shrink-0 w-[10%] mr-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                        <path
                                            d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                                    </svg>
                                    <span>{texts[language].projects}</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/skills" onClick={toggleMobileMenu} className="flex items-center p-2">
                                    <svg className="flex-shrink-0 w-[10%] mr-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512">
                                        <path
                                            d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/>
                                    </svg>
                                    <span>{texts[language].skills}</span>
                                </Link>
                            </li>
                        </ul>

                        <ul className="py-4 space-y-4 w-full font-medium">
                            <li>
                                <a href="mailto:roelhoogendoorn01369@gmail.com" target="_blank" className="flex items-center p-2"
                                   rel="noreferrer noopener">
                                    <svg className="flex-shrink-0 w-[10%] mr-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                        <path
                                            d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                                    </svg>
                                    <span>Mail</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/roel204" target="_blank" className="flex items-center p-2"
                                   rel="noreferrer noopener">
                                    <svg className="flex-shrink-0 w-[10%] mr-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
                                        <path
                                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                                    </svg>
                                    <span>GitHub</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/roel-hoogendoorn/" target="_blank" className="flex items-center p-2" rel="noreferrer noopener">
                                    <svg className="flex-shrink-0 w-[10%] mr-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                                        <path
                                            d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                                    </svg>
                                    <span>LinkedIn</span>
                                </a>
                            </li>
                        </ul>

                        <div className="flex flex-col items-center w-full pt-4 space-y-4 font-medium border-t border-gray-200 dark:border-gray-700">
                            <button className="flex w-full items-center p-2" onClick={toggleDarkMode}>
                                <svg className="flex-shrink-0 w-[9%] mr-5 text-gray-900 dark:text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                     viewBox="0 0 384 512">
                                    <path
                                        d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"/>
                                </svg>
                                <span>{darkMode === 'off' ? 'Darkmode' : 'Lightmode'}</span>
                            </button>
                            <button className="flex w-full items-center p-2" onClick={toggleLanguage}>
                                <div className={`${language === 'nl' ? 'uk-flag' : 'dutch-flag'} mr-5`}></div>
                                <span>{texts[language].languageButton}</span>
                            </button>
                        </div>
                    </div>
                </aside>
            </>
        );
    }
};

export default Navbar;