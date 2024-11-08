import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './Components/Header/HEader'
import Home from './Pages/Home/Home';
import ContactUs from './Pages/ContactUs/ContactUs';
import Page404 from './Pages/Page404/Page404';
import AboutUs from './Pages/AboutUs/AboutUs';
import Committee from './Pages/Committee/Committee';
import Achievements from './Pages/Achievements/Achievements';
import Tester from './Pages/Tester/Tester';
import Events from './Pages/Events/Events';
import Footer from './Components/Footer/Footer';

export default function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />

          <Route path="/events" element={<Events />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/tester" element={<Tester />} />

          <Route path="*" element={<Page404 />} />
        </Routes>
      <Footer/>
    </div>
  )
}
