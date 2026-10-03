// Fonctions internes de téléchargement : un seul bouton, le fichier dépend de la langue.
export const CV_FILES = { fr: '/cv-fr.pdf', en: '/cv-en.pdf' };

export const getCvPath = (lang) => CV_FILES[lang] || CV_FILES.fr;

// Rapport d'un projet : version dans la langue choisie, sinon version française.
export const getReportPath = (project, lang) => project.pdf[lang] || project.pdf.fr;
export const hasReportIn = (project, lang) => Boolean(project.pdf[lang]);
