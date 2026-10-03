import React, { useEffect, useLayoutEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Interests from './pages/Interests';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

// Ordre des sections = ordre de la navbar
const HomePage = () => {
  const { state } = useLocation();
  // Retour depuis une page projet (bouton retour, lien navbar ou retour navigateur) : on arrive directement sur la bonne section
  useLayoutEffect(() => {
    let target = state?.scrollTo;
    try { target = target || sessionStorage.getItem('returnTo'); sessionStorage.removeItem('returnTo'); } catch { /* ignore */ }
    if (target) document.getElementById(target)?.scrollIntoView({ behavior: 'instant' });
  }, []);
  return (
    <>
    <section id="home"><Home /></section>
    <section id="about"><About /></section>
    <section id="experience"><Experience /></section>
    <section id="interests"><Interests /></section>
    <section id="skills"><Skills /></section>
    <section id="projects"><Projects /></section>
    <section id="contact"><Contact /></section>
  </>
  );
};

const ScrollToTopOnDetail = () => {
  const { pathname } = useLocation();
  useEffect(() => { if (pathname !== '/') window.scrollTo(0, 0); }, [pathname]);
  return null;
};

function App() {
  return (
    <HashRouter>
      <link rel="icon" href="/logo.ico" />
      <ScrollToTopOnDetail />
      <div className="scroll-progress" />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;