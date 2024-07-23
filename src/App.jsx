import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import StudyAbroad from './components/StudyAbroad';
import Courses from './components/Courses';
import About from './components/About';
import Contact from './components/Contact';
import { Footer } from './components/Footer';

function Home() {
  return (
    <div className='App'  >
      {/* <div className="page-header header-filter" >
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
      </div> */}
      <Courses />
      {/* <NavBar /> */}
      {/* <br></br> */}
      <Routes>
        <Route path="/study-abroad" element={<StudyAbroad />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer style={{ position: 'fixed', bottom: '0' }} />
    </div >

  );
}

export default Home;
