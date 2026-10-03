import React, { useEffect, useState } from 'react';

// Compteur animé : "10+" -> 0 ... 10 puis "+"
const CountUp = ({ value, duration = 1400, delay = 500 }) => {
  const m = String(value).match(/^(\d+)(.*)$/);
  const target = m ? parseInt(m[1], 10) : 0;
  const suffix = m ? m[2] : '';
  const [n, setN] = useState(0);

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) { setN(target); return; }
    let raf;
    const timer = setTimeout(() => {
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / duration, 1);
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, delay);
    return () => { clearTimeout(timer); cancelAnimationFrame(raf); };
  }, [target, duration, delay]);

  return <>{m ? `${n}${suffix}` : value}</>;
};

export default CountUp;
