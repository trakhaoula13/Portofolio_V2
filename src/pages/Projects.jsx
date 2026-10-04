import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Reveal from '../components/Reveal';
import projectsData from '../data/projects';
import { getReportPath, hasReportIn } from '../utils/files';

const colors = ['#00b4d8', '#2ecc71', '#9b59b6', '#f39c12'];
const PER_PAGE = 8;

// La page courante est mémorisée : au retour d'une page projet, on retrouve la même page
const readPage = () => {
  try { return parseInt(sessionStorage.getItem('projectsPage') || '1', 10) || 1; } catch { return 1; }
};

const Projects = () => {
  const { t, tr, lang } = useApp();
  const totalPages = Math.ceil(projectsData.length / PER_PAGE);
  const [page, setPage] = useState(readPage);
  const current = Math.min(Math.max(page, 1), totalPages);
  const visible = projectsData.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  const goToPage = (n) => {
    setPage(n);
    try { sessionStorage.setItem('projectsPage', String(n)); } catch { /* ignore */ }
    const section = document.getElementById('projects');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container py-5">
      <Reveal className="text-center mb-5">
        <h2 className="display-5 fw-bold">{t.projects.title}</h2>
        <p className="text-muted">{t.projects.subtitle}</p>
        <div className="title-bar"></div>
      </Reveal>

      <div className="row g-4">
        {visible.map((proj, index) => {
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
                      <Link to={`/projects/${proj.id}`} className="btn-rapport btn-outline" style={{ color, borderColor: color }}>
                          {t.projects.details}<ArrowRight size={14} className="arrow-move" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>

      {totalPages > 1 && (
        <nav className="pagination-custom" aria-label="Pagination">
          <button type="button" className="page-btn" disabled={current === 1} onClick={() => goToPage(current - 1)} aria-label={t.projects.prev}>
            <ChevronLeft size={18} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              className={`page-btn ${n === current ? 'active' : ''}`}
              onClick={() => goToPage(n)}
              aria-current={n === current ? 'page' : undefined}
            >
              {n}
            </button>
          ))}
          <button type="button" className="page-btn" disabled={current === totalPages} onClick={() => goToPage(current + 1)} aria-label={t.projects.next}>
            <ChevronRight size={18} />
          </button>
        </nav>
      )}
    </div>
  );
};

export default Projects;