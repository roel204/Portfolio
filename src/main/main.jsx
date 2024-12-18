import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createHashRouter} from "react-router-dom";
import '../style/index.css'
import App from './App.jsx'
import HomePage from "../pages/HomePage.jsx";
import ProjectsPage from "../pages/ProjectsPage.jsx";
import SkillsPage from "../pages/SkillsPage.jsx";
import Navbar from "../components/Navbar.jsx";
import Background from "../style/Background.jsx";
import {LanguageProvider} from "../context/LanguageContext.jsx";

const router = createHashRouter([
    {
        path: "/",
        element: (
            <LanguageProvider>
                <Navbar />
                <Background />
                <App />
            </LanguageProvider>
        ),
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/projects",
                element: <ProjectsPage />,
            },
            {
                path: "/skills",
                element: <SkillsPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
