import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Players from './pages/players';
import Matches from './pages/matches';
import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {


  const videoRef = useRef();

  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/players" element={<Players />} />
        <Route path="/matches" element={<Matches />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
