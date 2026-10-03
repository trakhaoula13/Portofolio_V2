import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const NotFound = () => {
  const { t } = useApp();
  return (
    <div className="container text-center py-5" style={{ marginTop: '10vh' }}>
      <h1 className="display-1 fw-bold text-info">404</h1>
      <h2 className="mb-3">{t.notFound.title}</h2>
      <p className="text-muted">{t.notFound.text}</p>
      <Link to="/" className="btn btn-info mt-3">{t.notFound.back}</Link>
    </div>
  );
};

export default NotFound;
