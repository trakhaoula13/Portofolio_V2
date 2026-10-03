import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Menu,
  Languages,
  Home,
  User,
  Briefcase,
  Heart,
  Wrench,
  FolderOpen,
  Mail,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import useGoTo from './useGoTo';

const IDS = ['home', 'about', 'experience', 'interests', 'skills', 'projects', 'contact'];

const ICONS = {
  home: Home,
  about: User,
  experience: Briefcase,
  interests: Heart,
  skills: Wrench,
  projects: FolderOpen,
  contact: Mail,
};

const Navbar = () => {
  const { t, toggleLang } = useApp();
  const goTo = useGoTo();
  const { pathname } = useLocation();
  const [active, setActive] = useState('home');

  useEffect(() => {
    if (pathname !== '/') return;
    const sections = IDS.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  const handleClick = (id) => {
    goTo(id);
    const collapse = document.getElementById('mainNav');
    if (collapse?.classList.contains('show')) collapse.classList.remove('show');
  };

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{ backgroundColor: '#0b1a2b' }}
      data-bs-theme="dark"
    >
      <div className="container">
        <button
          type="button"
          onClick={() => handleClick('home')}
          className="navbar-brand text-white fw-bold btn btn-link text-decoration-none p-0"
        >
          {t.brand}
          <span className="text-info"> Khaoula Trabelsi</span>
        </button>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-label="Menu"
        >
          <Menu color="white" size={28} />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {IDS.map((id) => {
              const Icon = ICONS[id];
              const isActive = pathname === '/' && active === id;
              return (
                <li className="nav-item" key={id}>
                  <button
                    type="button"
                    onClick={() => handleClick(id)}
                    className={`nav-link text-white btn btn-link d-flex align-items-center gap-2 ${
                      isActive ? 'active-link' : ''
                    }`}
                    style={{ fontSize: '0.92rem' }}
                  >
                    <Icon size={16} />
                    {t.nav[id]}
                  </button>
                </li>
              );
            })}

            <li className="nav-item d-flex gap-2 ms-lg-3 mt-2 mt-lg-0">
              <button
                type="button"
                className="ctrl-btn"
                onClick={toggleLang}
                title={t.langTitle}
                aria-label={t.langTitle}
              >
                <Languages size={16} className="me-1" />
                {t.langBtn}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;