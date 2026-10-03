import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { useApp } from '../context/AppContext';
import useGoTo from './useGoTo';

const LINKS = ['home', 'about', 'experience', 'interests', 'skills', 'projects', 'contact'];

function Footer() {
  const { t } = useApp();
  const goTo = useGoTo();

  return (
    <footer className="footer text-white">
      <div className="container">
        <div className="row gy-4 py-3">
          <div className="col-md-4">
            <h5 className="footer-name">Khaoula Trabelsi</h5>
            <p className="footer-tag">{t.home.tagline}</p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/khaoula-trabelsi-354ab5282/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <h6 className="footer-title">{t.footer.nav}</h6>
            <ul className="footer-links">
              {LINKS.map((id) => (
                <li key={id}>
                  <button type="button" onClick={() => goTo(id)}>{t.nav[id]}</button>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-4">
            <h6 className="footer-title">{t.footer.contact}</h6>
            <ul className="footer-contact">
              <li><Mail size={18} /><a href="mailto:Khaoula.trabelsi@enicar.ucar.tn">Khaoula.trabelsi@enicar.ucar.tn</a></li>
              <li><Phone size={18} /><a href="tel:+21656925548">+216 56 925 548</a></li>
              <li><MapPin size={18} /><span>Tunis, Tunisie</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Khaoula Trabelsi. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;