import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import HomePage from "./HomePage.jsx";
import ProjectsPage from "./ProjectsPage.jsx";
import SkillsPage from "./SkillsPage.jsx";
import Navbar from "./Navbar.jsx";
import {LanguageProvider} from "./LanguageContext.jsx";

const router = createBrowserRouter([
    {
        path: "/Portfolio/",
        element: (
            <LanguageProvider>
                <Navbar />
                <App />
            </LanguageProvider>
        ),
        children: [
            {
                path: "/Portfolio/",
                element: <HomePage />,
            },
            {
                path: "/Portfolio/projects",
                element: <ProjectsPage />,
            },
            {
                path: "/Portfolio/skills",
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
