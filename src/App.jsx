import React from 'react';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import {LanguageProvider} from './LanguageContext';
import Navbar from './Navbar.jsx';
import HomePage from './HomePage.jsx';
import ProjectsPage from './ProjectsPage.jsx';
import SkillsPage from './SkillsPage.jsx';

function App() {
    return (
        <Router>
            <LanguageProvider>
                <Navbar/>
                <Routes>
                    <Route path="/Portfolio" element={<HomePage/>}/>
                    <Route path="/Portfolio/projects" element={<ProjectsPage/>}/>
                    <Route path="/Portfolio/skills" element={<SkillsPage/>}/>
                </Routes>
            </LanguageProvider>
        </Router>
    );
}

export default App;
