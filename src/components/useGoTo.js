import { useLocation, useNavigate } from 'react-router-dom';

// Défile vers une section. Depuis une page projet : retour à l'accueil, directement à la section (sans animation).
export default function useGoTo() {
    const navigate = useNavigate();
    const location = useLocation();

    return (id) => {
        if (location.pathname === '/') {
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/', { state: { scrollTo: id } });
        }
    };
}