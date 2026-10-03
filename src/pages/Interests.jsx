import React from 'react';
import { useApp } from '../context/AppContext';
import Reveal from '../components/Reveal';
import interestsData from '../data/interests';

const Interests = () => {
  const { t, tr } = useApp();
  return (
    <div className="container py-5">
      <Reveal><h2 className="border-start border-4 border-info ps-3 mb-4">{t.interests.title}</h2></Reveal>
      <div className="d-flex flex-wrap gap-3">
        {interestsData.map((i, idx) => (
          <Reveal key={i.en} direction="zoom" delay={idx * 70} className="d-inline-block">
            <span className="interest-chip">{tr(i)}</span>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Interests;