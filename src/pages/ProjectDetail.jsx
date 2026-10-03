import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, FileText, Code } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Reveal from '../components/Reveal';
import projectsData from '../data/projects';
import { getReportPath, hasReportIn } from '../utils/files';
import useGoTo from '../components/useGoTo';
import NotFound from './NotFound';

const Block = ({ title, items, delay }) => (
  <div className="col-md-6 col-lg-4">
    <Reveal delay={delay} className="skill-group h-100">
      <h5 className="mb-3">{title}</h5>
      <ul className="text-muted ps-3 mb-0">
        {items.map((x, i) => <li key={i} className="mb-2">{x}</li>)}
      </ul>
    </Reveal>
  </div>
);

const ProjectDetail = () => {
  const { id } = useParams();
  const { t, tr, lang } = useApp();
  const goTo = useGoTo();
  const proj = projectsData.find((p) => String(p.id) === id);

  // Mémorise la section de retour : le bouton retour comme le retour du navigateur ramènent à « Projets »
  useEffect(() => {
    try { sessionStorage.setItem('returnTo', 'projects'); } catch { /* ignore */ }
  }, []);

  if (!proj || !proj.details) return <NotFound />;
  const d = proj.details;

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
        <Block title={t.detail.method} items={tr(d.method)} delay={0} />
        <Block title={t.detail.results} items={tr(d.results)} delay={120} />
        <Block title={t.detail.limits} items={tr(d.limits)} delay={240} />
      </div>
    </div>
  );
};

export default ProjectDetail;