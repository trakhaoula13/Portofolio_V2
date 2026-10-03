import React from 'react';
import { useApp } from '../context/AppContext';
import Reveal from '../components/Reveal';

const About = () => {
  const { t } = useApp();
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <Reveal><h2 className="border-start border-4 border-info ps-3 mb-4">{t.about.title}</h2></Reveal>
          {t.about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={120 * (i + 1)}>
              <p className="lead text-muted about-text">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;