import React from 'react';
import { Download, ArrowDown } from 'lucide-react';
import CountUp from '../components/CountUp';
import { useApp } from '../context/AppContext';
import { getCvPath } from '../utils/files';
import profile from '/image.jpeg';

const Home = () => {
  const { t, lang } = useApp();
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="hero-section">
      <div className="container">
        <div className="row align-items-center hero-row">
          <div className="col-lg-7 order-2 order-lg-1 text-center text-lg-start hero-stagger">
            <h1 className="hero-title">Khaoula Trabelsi</h1>
            <h2 className="hero-subtitle">{t.home.subtitle}</h2>
            <p className="hero-text">{t.home.tagline}</p>
            <div className="mt-4 d-flex gap-3 flex-wrap justify-content-center justify-content-lg-start">
              {/* Un seul bouton : le CV téléchargé dépend de la langue active */}
              <a href={getCvPath(lang)} download className="btn btn-light fw-semibold px-4">
                <Download size={18} className="me-2" />{t.home.cv}
              </a>
              <button onClick={() => scrollTo('contact')} className="btn btn-outline-light px-4">
                {t.home.contact}
              </button>
            </div>
            <div className="hero-stats d-flex gap-4 mt-5 flex-wrap justify-content-center justify-content-lg-start">
              {t.home.stats.map((s, i) => (
                <div key={i}>
                  <div className="stat-value"><CountUp value={s.value} delay={700 + i * 150} /></div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2 text-center">
            <div className="profile-frame mx-auto">
              <img src={profile} alt="Khaoula Trabelsi" className="profile-img" />
            </div>
          </div>
        </div>
      </div>
      <button className="scroll-cue" onClick={() => scrollTo('about')} aria-label={t.home.more}>
        <ArrowDown size={20} />
      </button>
    </div>
  );
};

export default Home;