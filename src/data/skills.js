// 4 catégories. Une compétence = chaîne (identique FR/EN) ou { fr, en }.
const skillsData = [{
        id: 'robotics',
        icon: 'bot',
        title: { fr: 'Robotique & Automatique', en: 'Robotics & Automatic Control' },
        skills: [
            { fr: 'Modélisation géométrique', en: 'Geometric modeling' },
            { fr: 'DH / transformations homogènes', en: 'DH / homogeneous transformations' },
            { fr: 'Cinématique', en: 'Kinematics' },
            { fr: 'Jacobienne', en: 'Jacobian' },
            'MATLAB / Simulink',
            { fr: 'Simulation robotique', en: 'Robotics simulation' },
        ],
    },
    {
        id: 'ai',
        icon: 'brain',
        title: { fr: 'IA & Traitement du signal', en: 'AI & Signal Processing' },
        skills: [
            { fr: 'Machine Learning', en: 'Machine Learning' },
            'KNN', 'Logistic Regression', 'SVM',
            { fr: 'Deep Learning', en: 'Deep Learning' },
            'CNN', 'Scikit-learn', 'TensorFlow / Keras', 'FFT', 'OFDM', 'BER / SNR',
        ],
    },
    {
        id: 'embedded',
        icon: 'code',
        title: { fr: 'Programmation & Systèmes embarqués', en: 'Programming & Embedded Systems' },
        skills: [
            'Python', 'C++', 'VHDL', 'Tkinter',
            { fr: 'Microcontrôleurs', en: 'Microcontrollers' },
            { fr: 'Protocoles de communication', en: 'Communication protocols' },
            'IoT', 'Git',
        ],
    },
    {
        id: 'electronics',
        icon: 'zap',
        title: { fr: 'Électronique & Simulation', en: 'Electronics & Simulation' },
        skills: [
            'CST Studio', 'LTspice / SPICE', 'FDTD', 'MATLAB',
            { fr: 'Électronique de puissance', en: 'Power electronics' },
            { fr: 'CEM / EMI', en: 'EMC / EMI' },
            { fr: 'Antennes / RF', en: 'Antennas / RF' },
        ],
    },
];

export default skillsData;