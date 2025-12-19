import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* COLUMNA 1: LOGO Y DESCRIPCIÓN */}
        <div className="footer-col">
          <h3 className="footer-logo">SUMAQ</h3>
          <p className="footer-desc">Su refugio de lujo en el corazón del Valle Sagrado.</p>
        </div>

        {/* COLUMNA 2: CONTACTO */}
        <div className="footer-col">
          <h4>Contacto</h4>
          <div className="contact-item">
            <MapPin size={16} /> <span>Calle López Escobar n° 610</span>
          </div>
          <div className="contact-item">
            <Phone size={16} /> <span>+51 (084) 9491</span>
          </div>
          <div className="contact-item">
            <Mail size={16} /> <span>reservas@sumaqhotel.com</span>
          </div>
        </div>

        {/* COLUMNA 3: ENLACES */}
        <div className="footer-col">
          <h4>Enlaces</h4>
          <ul className="footer-links">
            <li><a href="#home">Inicio</a></li>
            <li><a href="#rooms">Habitaciones</a></li>
            <li><a href="#experiences">Experiencias</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 SUMAQ Hotel. Todos los derechos reservados.</p>
        <div className="social-icons">
            <Facebook size={20} />
            <Instagram size={20} />
            <Twitter size={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;