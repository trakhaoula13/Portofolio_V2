import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Reveal from '../components/Reveal';
import { education, experiences } from '../data/experience';

const Experience = () => {
  const { t, tr } = useApp();
  return (
    <div className="container py-5">
      <Reveal><h2 className="border-start border-4 border-info ps-3 mb-4">{t.experience.title}</h2></Reveal>
      <div className="row g-4">
        <div className="col-lg-6">
          <Reveal className="d-flex align-items-center gap-2 mb-3">
            <GraduationCap size={28} className="text-info" />
            <h4 className="mb-0">{t.experience.education}</h4>
          </Reveal>
          <div className="timeline">
            {education.map((e, i) => (
              <Reveal key={e.id} direction="left" delay={i * 130} className="timeline-item">
                <div className={`timeline-badge ${e.current ? 'bg-info pulse-dot' : 'bg-secondary'}`}></div>
                <div className="timeline-content">
                  <h6 className="fw-bold mb-1">{tr(e.title)}</h6>
                  <p className="text-muted small mb-1">{tr(e.field)}</p>
                  <span className="date-badge">{tr(e.period)}</span>
                  <p className="text-muted small mt-1 mb-0">{e.place}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="col-lg-6">
          <Reveal className="d-flex align-items-center gap-2 mb-3">
            <Briefcase size={28} className="text-info" />
            <h4 className="mb-0">{t.experience.work}</h4>
          </Reveal>
          <div className="timeline">
            {experiences.map((x, i) => (
              <Reveal key={x.id} direction="right" delay={i * 130} className="timeline-item">
                <div className="timeline-badge bg-secondary"></div>
                <div className="timeline-content">
                  <h6 className="fw-bold mb-1">{x.title}</h6>
                  <p className="fw-semibold small mb-2">{tr(x.subtitle)}</p>
                  <ul className="text-muted small ps-3 mb-2">
                    {tr(x.bullets).map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                  <span className="date-badge">{x.period}</span>
                  <span className="text-muted small ms-2">{x.place}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;