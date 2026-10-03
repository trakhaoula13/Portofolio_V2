export const education = [
  {
    id: 'master', current: true,
    title: { fr: 'Master Recherche', en: "Master's in Research" },
    field: { fr: "Automatique, Robotique & Traitement de l'information", en: 'Automatic Control, Robotics & Information Processing' },
    period: { fr: '2025 - Présent', en: '2025 - Present' },
    place: 'ENICarthage, Tunisie',
  },
  {
    id: 'licence',
    title: { fr: 'Licence', en: "Bachelor's Degree" },
    field: { fr: 'Électronique, Électrotechnique & Automatique', en: 'Electronics, Electrical Engineering & Automation' },
    period: '2021 - 2024', place: 'ISTIC, Tunisie',
  },
  {
    id: 'bac',
    title: { fr: 'Baccalauréat', en: 'High School Diploma' },
    field: { fr: 'Mathématiques', en: 'Mathematics' },
    period: '2021', place: 'Lycée Cité El Salem, Tunisie',
  },
];

export const experiences = [
  {
    id: 'tis',
    title: 'PFE — TIS Circuits',
    subtitle: { fr: 'Acquisition IoT & métrologie automatisée', en: 'IoT Acquisition & Automated Metrology' },
    period: '2024', place: 'Ben Arous, Tunisie',
    bullets: {
      fr: [
        "Conception d'un système d'acquisition basé sur l'IoT.",
        "Développement d'une plateforme de métrologie Python/Tkinter.",
        "Automatisation de l'étalonnage et de la génération des rapports de mesure.",
        "Utilisation de protocoles de communication et de matériel électronique.",
      ],
      en: [
        'Designed an IoT-based acquisition system.',
        'Developed a Python/Tkinter metrology platform.',
        'Automated calibration and measurement reporting.',
        'Worked with communication protocols and electronic hardware.',
      ],
    },
  },
  {
    id: 'sagemcom',
    title: 'PFA — Sagemcom',
    subtitle: { fr: 'Développement et validation de logiciels de test', en: 'Test Software Development & Validation' },
    period: '2023', place: 'Megrine, Tunisie',
    bullets: {
      fr: [
        'Réécriture des outils de test de Shell vers Python.',
        "Amélioration de l'architecture logicielle et de la maintenabilité.",
        'Validation et tests sur cartes électroniques.',
      ],
      en: [
        'Rewrote testing tools from Shell to Python.',
        'Improved software architecture and maintainability.',
        'Performed validation/testing on electronic boards.',
      ],
    },
  },
];
