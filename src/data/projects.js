// pdf.fr / pdf.en : mettez la version anglaise dans public/en/ puis renseignez le chemin (null = repli sur le FR).
// code : lien GitHub (null = bouton masqué).
// details : si présent, la carte affiche « Voir le détail » et une page individuelle /projects/:id est créée.
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
        details: {
            method: {
                fr: [
                    'Repérage selon la convention de Denavit-Hartenberg modifiée (DHM) et détermination des paramètres cinématiques',
                    'Calcul des transformations homogènes et du modèle géométrique direct',
                    'Implémentation MATLAB et simulation 3D',
                    'Analyse de la Jacobienne et des singularités',
                    'Comparaison DH/MDH et vérification de la transformation globale',
                ],
                en: [
                    'Frame assignment with the modified Denavit-Hartenberg (DHM) convention and kinematic parameter identification',
                    'Computation of homogeneous transformations and the direct geometric model',
                    'MATLAB implementation and 3D simulation',
                    'Jacobian and singularity analysis',
                    'DH/MDH comparison and verification of the global transformation',
                ],
            },
            results: {
                fr: [
                    "Modèle géométrique d'un manipulateur 6R établi",
                    "Position et orientation de l'effecteur calculées",
                    'Configurations simulées en 3D',
                    'Singularités et Jacobienne analysées',
                    'Cohérence analytique/numérique vérifiée',
                ],
                en: [
                    'Geometric model of a 6R manipulator established',
                    'End-effector position and orientation computed',
                    'Configurations simulated in 3D',
                    'Singularities and Jacobian analyzed',
                    'Analytical/numerical consistency verified',
                ],
            },
            limits: {
                fr: [
                    'Étude surtout géométrique ; cinématique inverse, dynamique et commande peu développées',
                    'Pas de validation sur robot réel',
                    'Perspective : cinématique inverse, planification de trajectoires et commande',
                ],
                en: [
                    'Mostly geometric study; inverse kinematics, dynamics and control are little developed',
                    'No validation on a real robot',
                    'Future work: inverse kinematics, trajectory planning and control',
                ],
            },
        },
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
        details: {
            method: {
                fr: [
                    'Modèle SPICE du convertisseur Buck avec éléments parasites',
                    'Étude de la tension d\'entrée Vin, de la fréquence de commutation et du courant de charge',
                    'FFT en mode différentiel et en mode commun',
                    'Cartographie des configurations critiques',
                    'Automatisation avec MATLAB et interface Python/Tkinter',
                ],
                en: [
                    'SPICE model of the Buck converter including parasitic elements',
                    'Study of input voltage Vin, switching frequency and load current',
                    'FFT in differential and common mode',
                    'Mapping of critical configurations',
                    'Automation with MATLAB and a Python/Tkinter GUI',
                ],
            },
            results: {
                fr: [
                    '30 configurations étudiées (sélectionnées parmi 48 possibles)',
                    'Vin identifiée comme paramètre dominant',
                    'Émission d\'environ 144 à 154 dBµV entre 12 et 48 V',
                    'Déplacement des harmoniques avec la fréquence de commutation',
                    'Interface graphique développée pour l\'analyse',
                ],
                en: [
                    '30 configurations studied (selected among 48 possible ones)',
                    'Vin identified as the dominant parameter',
                    'Emission of about 144 to 154 dBµV between 12 and 48 V',
                    'Harmonics shift with the switching frequency',
                    'GUI developed for result analysis',
                ],
            },
            limits: {
                fr: [
                    'Résultats dépendants du modèle SPICE',
                    'Comportement non monotone avec le courant de charge à approfondir',
                    'Perspective : validation sur prototype, intégration de la conception PCB et quantification de l\'erreur simulation/mesure',
                ],
                en: [
                    'Results depend on the SPICE model',
                    'Non-monotonic behavior with load current to be investigated further',
                    'Future work: prototype validation, PCB design integration and quantification of the simulation/measurement error',
                ],
            },
        },
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
        details: {
            method: {
                fr: [
                    "Étude des paramètres S et de l'architecture de référence",
                    "Modélisation d'un résonateur OLR (Open-Loop Resonator) avec stub sous CST Studio",
                    'Simulation électromagnétique et analyse S11/S21',
                    "Comparaison avec l'article scientifique de référence",
                ],
                en: [
                    'Study of S-parameters and of the reference architecture',
                    'Modeling of an OLR (open-loop resonator) with a stub in CST Studio',
                    'Electromagnetic simulation and S11/S21 analysis',
                    'Comparison with the reference scientific paper',
                ],
            },
            results: {
                fr: [
                    'Résonances autour de 3,044 GHz et 6,57 GHz',
                    'S11 ≈ −44,1 dB et −46,4 dB',
                    'Zéros de transmission autour de 4,46, 4,87 et 14,2 GHz',
                    'Largeur de bande à −10 dB d\'environ 1,7 GHz',
                ],
                en: [
                    'Resonances around 3.044 GHz and 6.57 GHz',
                    'S11 ≈ −44.1 dB and −46.4 dB',
                    'Transmission zeros around 4.46, 4.87 and 14.2 GHz',
                    '−10 dB bandwidth of about 1.7 GHz',
                ],
            },
            limits: {
                fr: [
                    'Pas de fabrication ni de mesure expérimentale',
                    "Écarts avec l'article à quantifier davantage",
                    'Perspective : optimisation, fabrication du prototype et comparaison des mesures S11/S21 aux simulations',
                ],
                en: [
                    'No fabrication or experimental measurement',
                    'Differences with the paper to be quantified further',
                    'Future work: optimization, prototype fabrication and comparison of S11/S21 measurements with simulations',
                ],
            },
        },
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
        details: {
            method: {
                fr: [
                    "Analyse du processus d'étalonnage",
                    "Architecture d'acquisition et transmission des données",
                    'Développement Python/Tkinter et communication IoT',
                    'Centralisation des données',
                    "Automatisation des rapports et de l'historique",
                ],
                en: [
                    'Analysis of the calibration process',
                    'Data acquisition and transmission architecture',
                    'Python/Tkinter development and IoT communication',
                    'Data centralization',
                    'Automation of reports and history',
                ],
            },
            results: {
                fr: [
                    "Chaîne d'acquisition et de gestion mise en place",
                    'Réduction de la saisie manuelle',
                    'Centralisation des informations',
                    'Suivi des instruments et génération de rapports',
                ],
                en: [
                    'Acquisition and management chain implemented',
                    'Reduced manual data entry',
                    'Centralized information',
                    'Instrument tracking and report generation',
                ],
            },
            limits: {
                fr: [
                    'Peu d\'indicateurs quantitatifs de gain de temps ou de réduction d\'erreurs',
                    'Solution liée au contexte et aux instruments étudiés ; code source non diffusé (contexte industriel)',
                    'Perspective : mesurer temps gagné, erreurs et répétabilité ; étendre à d\'autres instruments',
                ],
                en: [
                    'Few quantitative indicators of time saved or error reduction',
                    'Solution tied to the studied context and instruments; source code not public (industrial context)',
                    'Future work: measure time saved, errors and repeatability; extend to other instruments',
                ],
            },
        },
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
        details: {
            method: {
                fr: [
                    "Analyse des scripts Shell et de l'environnement Linux embarqué",
                    'Réécriture progressive en Python',
                    'Architecture logicielle structurée',
                    'Tests sur équipements électroniques',
                    'Pylint et GitLab pour la qualité et la gestion du code',
                ],
                en: [
                    'Analysis of the Shell scripts and of the embedded Linux environment',
                    'Progressive rewrite in Python',
                    'Structured software architecture',
                    'Tests on electronic equipment',
                    'Pylint and GitLab for code quality and version management',
                ],
            },
            results: {
                fr: [
                    'Migration des fonctionnalités de test vers Python',
                    'Fonctionnalités réseau, Wi-Fi, LED et système vérifiées',
                    'Qualité du code améliorée',
                    'Développement suivi avec GitLab',
                ],
                en: [
                    'Test features migrated to Python',
                    'Network, Wi-Fi, LED and system features verified',
                    'Improved code quality',
                    'Development tracked with GitLab',
                ],
            },
            limits: {
                fr: [
                    'Comparaison quantitative Shell/Python peu développée ; couverture et automatisation des tests à mieux mesurer',
                    'Projet réalisé en contexte industriel : code source non diffusé',
                    "Perspective : métriques de couverture, temps d'exécution et maintenabilité",
                ],
                en: [
                    'Little quantitative Shell/Python comparison; test coverage and automation to be measured better',
                    'Industrial project: source code not publicly available',
                    'Future work: coverage, execution time and maintainability metrics',
                ],
            },
        },
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
        details: {
            method: {
                fr: [
                    'Dataset de 2527 images, 6 classes, analyse du déséquilibre',
                    'Préparation 128×128×3 et séparation stratifiée',
                    'Comparaison KNN, régression logistique et SVM (Scikit-learn)',
                    'CNN développé avec TensorFlow/Keras',
                    'Analyse du surapprentissage et régularisation',
                ],
                en: [
                    'Dataset of 2,527 images, 6 classes, class imbalance analysis',
                    '128×128×3 preprocessing and stratified split',
                    'Comparison of KNN, logistic regression and SVM (Scikit-learn)',
                    'CNN built with TensorFlow/Keras',
                    'Overfitting analysis and regularization',
                ],
            },
            results: {
                fr: [
                    'KNN : 45,26 % ; régression logistique : 44,27 % ; SVM RBF : 61,07 %',
                    'CNN initial sujet au surapprentissage',
                    'CNN amélioré : validation rapportée autour de 64,8 %',
                    'Matrices de confusion et performances par classe analysées',
                ],
                en: [
                    'KNN: 45.26%; logistic regression: 44.27%; RBF SVM: 61.07%',
                    'Initial CNN prone to overfitting',
                    'Improved CNN: reported validation around 64.8%',
                    'Confusion matrices and per-class performance analyzed',
                ],
            },
            limits: {
                fr: [
                    'Dataset limité et déséquilibré',
                    'Évaluation à renforcer avec un jeu de test indépendant',
                    'Perspective : test indépendant, transfer learning et métriques par classe',
                ],
                en: [
                    'Limited and imbalanced dataset',
                    'Evaluation to be strengthened with an independent test set',
                    'Future work: independent test set, transfer learning and per-class metrics',
                ],
            },
        },
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
        details: {
            method: {
                fr: [
                    'Chaîne OFDM complète sous MATLAB/Simulink',
                    'Modulations de QPSK à 1024-QAM et plusieurs tailles de sous-porteuses',
                    'Canaux AWGN, Rayleigh et Rician',
                    'Codes correcteurs LDPC et Turbo',
                    'Réduction du PAPR et analyse BER/SNR',
                ],
                en: [
                    'Complete OFDM chain in MATLAB/Simulink',
                    'Modulations from QPSK to 1024-QAM and several subcarrier counts',
                    'AWGN, Rayleigh and Rician channels',
                    'LDPC and Turbo error-correcting codes',
                    'PAPR reduction and BER/SNR analysis',
                ],
            },
            results: {
                fr: [
                    'Comparaison des modulations en fonction du SNR',
                    'Étude de l\'influence du préfixe cyclique',
                    'Comparaison de plusieurs techniques de réduction du PAPR',
                    'Analyse des compromis robustesse / efficacité spectrale / PAPR',
                ],
                en: [
                    'Comparison of modulations versus SNR',
                    'Study of the influence of the cyclic prefix',
                    'Comparison of several PAPR reduction techniques',
                    'Analysis of robustness / spectral efficiency / PAPR trade-offs',
                ],
            },
            limits: {
                fr: [
                    'Périmètre très large ; certaines validations quantitatives à approfondir',
                    'Perspective : réduire le périmètre et approfondir quelques phénomènes avec des scénarios réalistes',
                ],
                en: [
                    'Very broad scope; some quantitative validations to be explored further',
                    'Future work: narrow the scope and study a few phenomena in depth with realistic scenarios',
                ],
            },
        },
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
        details: {
            method: {
                fr: [
                    'Modèle photovoltaïque à une diode',
                    'Étude des caractéristiques I–V et P–V',
                    "Influence de l'irradiance et de la température",
                    'Dimensionnement du hacheur Boost pour 250 W / 48 V',
                    'MPPT Perturb & Observe sous MATLAB/Simulink',
                ],
                en: [
                    'One-diode photovoltaic model',
                    'I–V and P–V characteristic study',
                    'Influence of irradiance and temperature',
                    'Boost converter sizing for 250 W / 48 V',
                    'Perturb & Observe MPPT in MATLAB/Simulink',
                ],
            },
            results: {
                fr: [
                    'Puissance maximale étudiée selon la température et l\'irradiance',
                    'Déplacement du point de puissance maximale observé',
                    'Boost étudié pour la tension de sortie visée',
                    'Le MPPT suit les variations du point de fonctionnement',
                ],
                en: [
                    'Maximum power studied versus temperature and irradiance',
                    'Shift of the maximum power point observed',
                    'Boost converter studied for the targeted output voltage',
                    'The MPPT tracks variations of the operating point',
                ],
            },
            limits: {
                fr: [
                    'Étude principalement simulée ; pertes réelles et non-idéalités à approfondir',
                    "Comparaison avec d'autres algorithmes MPPT non développée",
                    'Perspective : comparer P&O à la conductance incrémentale et valider expérimentalement',
                ],
                en: [
                    'Mostly simulated study; real losses and non-idealities to be explored further',
                    'No comparison with other MPPT algorithms',
                    'Future work: compare P&O with incremental conductance and validate experimentally',
                ],
            },
        },
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
        details: {
            method: {
                fr: [
                    'Modélisation FDTD 3D avec discrétisation selon le schéma de Yee',
                    'Conditions aux limites absorbantes',
                    "Propagation d'une impulsion large bande",
                    'Étude paramétrique des dimensions (largeur W, longueur L, épaisseur du substrat h)',
                ],
                en: [
                    '3D FDTD modeling with Yee scheme discretization',
                    'Absorbing boundary conditions',
                    'Wideband pulse propagation',
                    'Parametric study of dimensions (width W, length L, substrate thickness h)',
                ],
            },
            results: {
                fr: [
                    'Signaux incident, réfléchi et transmis obtenus',
                    "Faible réflexion dans la configuration étudiée",
                    'Influence de W, L et h étudiée',
                    "Recherche d'une configuration visant 50 Ω",
                ],
                en: [
                    'Incident, reflected and transmitted signals obtained',
                    'Low reflection in the studied configuration',
                    'Influence of W, L and h studied',
                    'Search for a configuration targeting 50 Ω',
                ],
            },
            limits: {
                fr: [
                    'Sensibilité au maillage et au pas temporel',
                    'Validation expérimentale absente',
                    'Perspective : comparer avec CST ou une méthode fréquentielle, puis valider expérimentalement',
                ],
                en: [
                    'Sensitivity to the mesh and the time step',
                    'No experimental validation',
                    'Future work: compare with CST or a frequency-domain method, then validate experimentally',
                ],
            },
        },
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
        details: {
            method: {
                fr: [
                    'Dimensionnement pour le Wi-Fi 2,4 GHz',
                    'Conception des antennes rectangulaire et circulaire sous CST',
                    'Analyse de S11 et de la bande passante',
                    "Comparaison du gain, de la directivité et de l'efficacité",
                    "Analyse de l'encombrement",
                ],
                en: [
                    'Sizing for 2.4 GHz Wi-Fi',
                    'Design of the rectangular and circular antennas in CST',
                    'S11 and bandwidth analysis',
                    'Comparison of gain, directivity and efficiency',
                    'Size analysis',
                ],
            },
            results: {
                fr: [
                    'Résonances autour de 2,4088 GHz (rectangulaire) et 2,4070 GHz (circulaire)',
                    'Bandes à −10 dB : environ 72,0 et 67,2 MHz',
                    'Gains : environ 3,26 et 2,48 dBi',
                    'Efficacités : environ 51 % et 41 %',
                    'Le patch circulaire est plus compact dans cette étude',
                ],
                en: [
                    'Resonances around 2.4088 GHz (rectangular) and 2.4070 GHz (circular)',
                    '−10 dB bandwidths: about 72.0 and 67.2 MHz',
                    'Gains: about 3.26 and 2.48 dBi',
                    'Efficiencies: about 51% and 41%',
                    'The circular patch is more compact in this study',
                ],
            },
            limits: {
                fr: [
                    'Résultats uniquement simulés, sans validation par prototypes',
                    "Sensibilité au substrat, à l'alimentation et au maillage",
                    "Perspective : optimiser l'alimentation, réduire les pertes et comparer simulation/mesure",
                ],
                en: [
                    'Simulation-only results, no prototype validation',
                    'Sensitivity to substrate, feed and mesh',
                    'Future work: optimize the feed, reduce losses and compare simulation/measurement',
                ],
            },
        },
    },
];

export default projectsData;