import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createHashRouter} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import HomePage from "./HomePage.jsx";
import ProjectsPage from "./ProjectsPage.jsx";
import SkillsPage from "./SkillsPage.jsx";
import Navbar from "./Navbar.jsx";
import Background from "./Background.jsx";
import {LanguageProvider} from "./LanguageContext.jsx";

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
