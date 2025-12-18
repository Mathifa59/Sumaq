import React from 'react';
// Importamos la imagen de fondo
import heroBg from '../assets/Hotel Sumaq.jpg'; 

const Hero = () => {
  return (
    // Usamos la clase del CSS y pasamos la imagen como estilo en línea (porque es dinámica)
    <div className="hero-container" style={{ backgroundImage: `url("${heroBg}")` }}>
      
      {/* Contenedor del contenido (Texto + Widget) */}
      <div className="hero-content">
        <h1 className="hero-title">Su Refugio de Lujo</h1>
        <h2 className="hero-subtitle">en el Valle Sagrado</h2>
        
        <p style={{ letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '20px' }}>
          Urubamba, Cusco, Peru
        </p>

        {/* Widget de Reserva */}
        <div className="booking-widget">
          
          <div className="input-group">
            <label>Check In</label>
            <input type="date" className="date-input" />
          </div>

          <div className="input-group">
            <label>Check Out</label>
            <input type="date" className="date-input" />
          </div>

          <button className="btn-primary">RESERVAR AHORA</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;