// pdf.fr / pdf.en : mettez la version anglaise dans public/en/ puis renseignez le chemin (null = repli sur le FR).
// code : lien GitHub (null = bouton masqué).
// Le contenu des pages de détail (/projects/:id) est dans projectDetails.js, indexé par l'id du projet.
const img = (txt) => `https://placehold.co/400x250/0b1a2b/00b4d8?text=${txt}`;
import robot from '/robot.png';
import cem from '/t.png';
import olr from '/OLR.png';
import pfe from '/conception global.png';
import fd from '/micro.png';
import ofdm from '/chaine_ofdm.jpeg';
import pv from '/systeme.png';
import patch from '/patch circulaire.png';
import cnn from '/cnn_confusion_matrix.png';
import pfa from '/pfa.png';


const projectsData = [{
        id: 1,
        image: robot,
        techs: ['MATLAB', 'Simulink', 'DHM'],
        code: null,
        title: { fr: 'Modélisation Géométrique du Robot ABB IRB 6660', en: 'Geometric Modeling of the ABB IRB 6660 Robot' },
        description: {
            fr: "Repérage DHM d'un manipulateur 6R, calcul des transformations homogènes, analyse de la Jacobienne et des singularités, simulation 3D sous MATLAB.",
            en: 'DHM frame assignment for a 6R manipulator, homogeneous transformations, Jacobian and singularity analysis, 3D simulation in MATLAB.',
        },
        pdf: { fr: '/Rapport_de_Robotique (2).pdf', en: null },
    },
    {
        id: 2,
        image: cem,
        techs: ['LTspice', 'MATLAB', 'Python', 'SPICE'],
        code: null,
        title: { fr: 'Étude EMI sur convertisseur Buck', en: 'EMI Study of a Buck Converter' },
        description: {
            fr: "Modèle SPICE avec éléments parasites, FFT en mode différentiel et commun, cartographie de 30 configurations critiques et interface Python/Tkinter.",
            en: 'SPICE model with parasitic elements, differential and common-mode FFT, mapping of 30 critical configurations and a Python/Tkinter GUI.',
        },
        pdf: { fr: '/Rapport_de_CEM1.pdf', en: null },
    },
    {
        id: 3,
        image: olr,
        techs: ['CST Studio'],
        code: null,
        title: { fr: "Simulation d'un Filtre Passe-Bande Double Bande et Double Mode", en: 'Simulation of a Dual-Band Dual-Mode Band-Pass Filter' },
        description: {
            fr: "Modélisation d'un résonateur OLR avec stub sous CST, analyse S11/S21 et comparaison avec l'article de référence. Résonances à 3,044 et 6,57 GHz.",
            en: 'Modeling of an OLR resonator with a stub in CST, S11/S21 analysis and comparison with the reference paper. Resonances at 3.044 and 6.57 GHz.',
        },
        pdf: { fr: '/Rapport_de_HF__Conception_d_un_filtre_passe_bande_double_bande_et_double_mode_.pdf', en: null },
    },
    {
        id: 4,
        image: pfe,
        techs: ['Python', 'Tkinter', 'IoT'],
        code: null,
        title: { fr: "Automatisation des opérations d'étalonnage par une solution IoT (PFE)", en: 'Calibration Automation with an IoT Solution (Final Year Project)' },
        description: {
            fr: "Architecture d'acquisition et de transmission des données, plateforme Python/Tkinter, centralisation des informations et génération automatique des rapports.",
            en: 'Data acquisition and transmission architecture, Python/Tkinter platform, information centralization and automatic report generation.',
        },
        pdf: { fr: '/Rapport_Chaima_khaoula_version_0.pdf', en: null },
    },
    {
        id: 5,
        image: pfa,
        techs: ['Python', 'Linux embarqué', 'TFTP', 'Pylint', 'GitLab'],
        code: null,
        title: { fr: 'Réécriture des outils du logiciel de test de Sagemcom (PFA)', en: 'Rewriting the Sagemcom Test Software Tools (Internship)' },
        description: {
            fr: "Analyse des scripts Shell, réécriture progressive en Python avec architecture structurée, tests sur équipements électroniques, qualité de code avec Pylint et GitLab.",
            en: 'Analysis of Shell scripts, progressive rewrite in Python with a structured architecture, tests on electronic equipment, code quality with Pylint and GitLab.',
        },
        pdf: { fr: '/Rapport_de_Stage.pdf', en: null },
    },
    {
        id: 6,
        image: cnn,
        techs: ['Python', 'Scikit-learn', 'TensorFlow/Keras'],
        code: null,
        title: { fr: "Classification d'images par Machine Learning et Deep Learning", en: 'Image Classification with Machine Learning and Deep Learning' },
        description: {
            fr: "Dataset de 2527 images de déchets (6 classes). Comparaison de KNN, régression logistique, SVM (61,07 %) et CNN (~64,8 % en validation). Analyse du surapprentissage.",
            en: 'Dataset of 2,527 waste images (6 classes). Comparison of KNN, logistic regression, SVM (61.07%) and CNN (~64.8% validation). Overfitting analysis.',
        },
        pdf: { fr: '/Rapport_de_IA.pdf', en: null },
    },
    {
        id: 7,
        image: ofdm,
        techs: ['MATLAB', 'Simulink', 'OFDM'],
        code: null,
        title: { fr: "Implémentation et Optimisation d'un Système OFDM", en: 'Implementation and Optimization of an OFDM System' },
        description: {
            fr: "Chaîne OFDM complète sous MATLAB/Simulink (QPSK à 1024-QAM, canaux AWGN/Rayleigh/Rician), codes LDPC/Turbo, réduction du PAPR et analyse BER/SNR.",
            en: 'Complete OFDM chain in MATLAB/Simulink (QPSK to 1024-QAM, AWGN/Rayleigh/Rician channels), LDPC/Turbo codes, PAPR reduction and BER/SNR analysis.',
        },
        pdf: { fr: "/Implémentation_et_Optimisation_d_un_Système_OFDM_pour_les_Réseaux_Modernes.pdf", en: null },
    },
    {
        id: 8,
        image: pv,
        techs: ['MATLAB/Simulink', 'MPPT', 'Boost converter'],
        code: null,
        title: { fr: 'Système photovoltaïque avec hacheur Boost et MPPT', en: 'Photovoltaic System with Boost Converter and MPPT' },
        description: {
            fr: "Modèle PV à une diode, caractéristiques I–V et P–V, dimensionnement d'un Boost 250 W / 48 V et MPPT Perturb & Observe sous MATLAB/Simulink.",
            en: 'One-diode PV model, I–V and P–V characteristics, sizing of a 250 W / 48 V Boost converter and Perturb & Observe MPPT in MATLAB/Simulink.',
        },
        pdf: { fr: '/Rapport_Système_photovoltaïque___Hacheur.pdf', en: null },
    },
    {
        id: 9,
        image: fd,
        techs: ['FDTD 3D', 'Schéma de Yee', 'Micro-ruban'],
        code: null,
        title: { fr: "Étude d'une ligne de transmission micro-ruban par FDTD 3D", en: '3D FDTD Study of a Microstrip Transmission Line' },
        description: {
            fr: "Modélisation FDTD 3D (schéma de Yee, conditions absorbantes) d'une ligne micro-ruban. Étude paramétrique de W, L et h pour viser une configuration 50 Ω.",
            en: '3D FDTD modeling (Yee scheme, absorbing boundaries) of a microstrip line. Parametric study of W, L and h targeting a 50 Ω configuration.',
        },
        pdf: { fr: '/Rapport_de_FDTD.pdf', en: null },
    },
    {
        id: 10,
        image: patch,
        techs: ['CST Studio', 'Antennes', 'Microstrip'],
        code: null,
        title: { fr: "Étude Comparative d'Antennes Patch (Rectangulaire vs Circulaire)", en: 'Comparative Study of Patch Antennas (Rectangular vs Circular)' },
        description: {
            fr: 'Conception sous CST de deux antennes patch pour le Wi-Fi 2,4 GHz. Comparaison de S11, bande passante, gain, efficacité et encombrement : le patch circulaire est plus compact.',
            en: 'CST design of two patch antennas for 2.4 GHz Wi-Fi. Comparison of S11, bandwidth, gain, efficiency and size: the circular patch is more compact.',
        },
        pdf: { fr: '/Rapport_Antenne__Étude_Comparative_entre_Patch_Rectangulaire_et_Circulaire.pdf', en: null },
    },
];

export default projectsData;