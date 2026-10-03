import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Reveal from '../components/Reveal';
import projectsData from '../data/projects';
import { getReportPath, hasReportIn } from '../utils/files';

const colors = ['#00b4d8', '#2ecc71', '#9b59b6', '#f39c12'];

const Projects = () => {
  const { t, tr, lang } = useApp();
  return (
    <div className="container py-5">
      <Reveal className="text-center mb-5">
        <h2 className="display-5 fw-bold">{t.projects.title}</h2>
        <p className="text-muted">{t.projects.subtitle}</p>
        <div className="title-bar"></div>
      </Reveal>

      <div className="row g-4">
        {projectsData.map((proj, index) => {
          const color = colors[index % colors.length];
          return (
            <div key={proj.id} className="col-md-6 col-lg-3">
              <Reveal delay={(index % 4) * 100} className="h-100">
                <div className="project-card-masonry" style={{ borderTop: `4px solid ${color}` }}>
                  <div className="project-card-image"><img src={proj.image} alt={tr(proj.title)} /></div>
                  <div className="project-card-body">
                    <h5>{tr(proj.title)}</h5>
                    <p>{tr(proj.description)}</p>
                    <div className="project-card-techs">
                      {proj.techs.map((tech) => (
                        <span key={tech} style={{ background: color + '20', color }}>{tech}</span>
                      ))}
                    </div>
                    <div className="project-card-actions">
                      <a href={getReportPath(proj, lang)} target="_blank" rel="noopener noreferrer" className="btn-rapport" style={{ background: color }}>
                        <FileText size={14} />{t.projects.report}{lang === 'en' && !hasReportIn(proj, 'en') ? t.projects.frOnly : ''}
                      </a>
                      {proj.details && (
                        <Link to={`/projects/${proj.id}`} className="btn-rapport btn-outline" style={{ color, borderColor: color }}>
                          {t.projects.details}<ArrowRight size={14} className="arrow-move" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;