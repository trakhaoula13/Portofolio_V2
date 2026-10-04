import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, FileText, Code, Target, Settings, TrendingUp, Compass } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Reveal from '../components/Reveal';
import projectsData from '../data/projects';
import projectDetails from '../data/projectDetails';
import { getReportPath, hasReportIn } from '../utils/files';
import useGoTo from '../components/useGoTo';
import NotFound from './NotFound';

// Carte de section : même structure pour les 4 sections (numéro + icône + titre)
const Section = ({ number, icon: Icon, title, delay = 0, highlight = false, children }) => (
  <Reveal delay={delay} className={`skill-group detail-card ${highlight ? 'result-highlight' : ''}`}>
    <div className="detail-head">
      <span className="detail-num">{number}</span>
      <h5>{title}</h5>
      <Icon size={20} className="detail-icon" />
    </div>
    {children}
  </Reveal>
);

const Bullets = ({ items }) => (
  <ul className="detail-list">
    {items.map((x, i) => <li key={i}>{x}</li>)}
  </ul>
);

const ProjectDetail = () => {
  const { id } = useParams();
  const { t, tr, lang } = useApp();
  const goTo = useGoTo();
  const proj = projectsData.find((p) => String(p.id) === id);
  const d = proj ? projectDetails[proj.id] : null;

  // Mémorise la section de retour : le bouton retour comme le retour du navigateur ramènent à « Projets »
  useEffect(() => {
    try { sessionStorage.setItem('returnTo', 'projects'); } catch { /* ignore */ }
  }, []);

  if (!proj || !d) return <NotFound />;

  return (
    <div className="container py-5 page-enter">
      <button type="button" className="back-link mb-4" onClick={() => goTo('projects')}>
        <ArrowLeft size={18} />{t.detail.back}
      </button>

      <div className="row g-4 align-items-center mb-4">
        <div className="col-lg-5"><img src={proj.image} alt={tr(proj.title)} className="img-fluid rounded-4 w-100" /></div>
        <div className="col-lg-7">
          <h1 className="h2 mb-3">{tr(proj.title)}</h1>
          <p className="text-muted">{tr(proj.description)}</p>
          <h6 className="mt-4">{t.detail.tech}</h6>
          <div className="d-flex flex-wrap gap-2 mb-4">
            {proj.techs.map((x) => <span key={x} className="skill-chip">{x}</span>)}
          </div>
          <div className="d-flex flex-wrap gap-2">
            <a href={getReportPath(proj, lang)} target="_blank" rel="noopener noreferrer" className="btn btn-info d-inline-flex align-items-center gap-2">
              <FileText size={18} />{t.detail.report}{lang === 'en' && !hasReportIn(proj, 'en') ? t.detail.frOnly : ''}
            </a>
            {proj.code && (
              <a href={proj.code} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary d-inline-flex align-items-center gap-2">
                <Code size={18} />{t.detail.code}
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-12">
          <Section number={1} icon={Target} title={t.detail.objectiveTitle}>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="detail-label">{t.detail.objective}</div>
                <p className="mb-0 text-muted">{tr(d.objective)}</p>
              </div>
              <div className="col-md-6">
                <div className="detail-label">{t.detail.question}</div>
                <p className="mb-0 text-muted">{tr(d.question)}</p>
              </div>
            </div>
          </Section>
        </div>
        <div className="col-lg-6">
          <Section number={2} icon={Settings} title={t.detail.method} delay={80}>
            <Bullets items={tr(d.method)} />
          </Section>
        </div>
        <div className="col-lg-6">
          <Section number={3} icon={TrendingUp} title={t.detail.results} delay={160} highlight>
            <Bullets items={tr(d.results)} />
          </Section>
        </div>
        <div className="col-12">
          <Section number={4} icon={Compass} title={t.detail.limits} delay={80}>
            <Bullets items={tr(d.limits)} />
          </Section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;