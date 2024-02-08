import React from 'react'
import { LanguageProvider } from './LanguageContext';
import Navbar from './Navbar.jsx';
import HomePage from "./HomePage.jsx";

function App() {


    return (
        <>
            <LanguageProvider>
                <HomePage/>
                <Navbar/>
            </LanguageProvider>
        </>
    )
}

export default App