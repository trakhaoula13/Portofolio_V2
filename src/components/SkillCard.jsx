import React from 'react';
import { useApp } from '../context/AppContext';

const SkillCard = ({ skill }) => {
  const { tr } = useApp();
  return <span className="skill-chip me-2 mb-2">{tr(skill)}</span>;
};

export default SkillCard;
