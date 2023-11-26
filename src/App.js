import '../src/Styles/main.css'
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Contacts from "./Pages/Contacts";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import React from 'react';
import Home from "./Pages/Home";


function App() {
    return (
        <div className='App'>
            <Router>
                <NavBar/>
                <Routes>
                    <Route path='/Home' element={<Home/>}></Route>
                    <Route path='/Contacts' element={<Contacts/>}></Route>
                    <Route path='*' element={<Home/>}></Route>
                </Routes>
                <Footer/>
            </Router>
        </div>
    )
}

export default App;
