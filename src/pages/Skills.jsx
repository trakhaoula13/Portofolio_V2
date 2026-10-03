import React from 'react';
import { Bot, Brain, Code, Zap } from 'lucide-react';
import Reveal from '../components/Reveal';
import { useApp } from '../context/AppContext';
import skillsData from '../data/skills';
import SkillCard from '../components/SkillCard';

const ICONS = { bot: Bot, brain: Brain, code: Code, zap: Zap };

const Skills = () => {
  const { t, tr } = useApp();
  return (
    <div className="container py-5">
      <Reveal><h2 className="border-start border-4 border-info ps-3 mb-4">{t.skills.title}</h2></Reveal>
      <div className="row g-4">
        {skillsData.map((group, gi) => {
          const Icon = ICONS[group.icon] || Code;
          return (
          <div key={group.id} className="col-md-6">
            <Reveal delay={gi * 100} className="skill-group h-100">
              <div className="skill-group-header mb-3">
                <span className="skill-icon"><Icon size={22} /></span>
                <h5 className="mb-0 d-inline-block">{tr(group.title)}</h5>
              </div>
              <div className="d-flex flex-wrap">
                {group.skills.map((s, i) => <SkillCard key={i} skill={s} />)}
              </div>
            </Reveal>
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;