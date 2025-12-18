import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#8B5A2B', color: 'white', padding: '60px 20px' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
        
        {/* Columna 1 */}
        <div style={{ maxWidth: '300px' }}>
          <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>SUMAQ</h3>
          <p style={{ fontSize: '14px', opacity: 0.8 }}>Su refugio de lujo en el corazón del Valle Sagrado.</p>
        </div>

        {/* Columna 2 */}
        <div>
          <h4 style={{ marginBottom: '20px' }}>Contacto</h4>
          <p style={{ marginBottom: '10px', fontSize: '14px' }}>📍 Calle López Escobar n° 610</p>
          <p style={{ marginBottom: '10px', fontSize: '14px' }}>📞 +51 (084) 9491</p>
          <p style={{ marginBottom: '10px', fontSize: '14px' }}>✉️ reservas@sumaqhotel.com</p>
        </div>

        {/* Columna 3 */}
        <div>
          <h4 style={{ marginBottom: '20px' }}>Enlaces</h4>
          <ul style={{ listStyle: 'none', fontSize: '14px', opacity: 0.8 }}>
            <li style={{ marginBottom: '8px' }}>Inicio</li>
            <li style={{ marginBottom: '8px' }}>Habitaciones</li>
            <li style={{ marginBottom: '8px' }}>Amenidades</li>
            <li style={{ marginBottom: '8px' }}>Contacto</li>
          </ul>
        </div>
      </div>

      <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.2)', marginTop: '40px', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: '12px' }}>© 2025 SUMAQ Hotel. Todos los derechos reservados.</p>
        <div style={{ display: 'flex', gap: '15px' }}>
            <Facebook size={20} />
            <Instagram size={20} />
            <Twitter size={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;