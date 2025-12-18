import React from 'react';
// IMPORTANTE: Asegúrate de que el nombre del archivo en la carpeta assets 
// sea EXACTAMENTE igual (minúsculas/mayúsculas) al que escribes aquí.
import heroVideo from '../assets/video-hero.mp4'; 

const Hero = () => {
  return (
    <div className="hero-container">
      
      {/* VIDEO DE FONDO */}
      <video 
        className="hero-video"
        autoPlay 
        loop 
        muted={true} // Forzamos el mute para que el navegador permita el autoplay
        playsInline  // Crucial para móviles
      >
        <source src={heroVideo} type="video/mp4" />
        {/* Mensaje de respaldo por si falla el formato */}
        Tu navegador no soporta el video.
      </video>

      {/* Capa oscura (Overlay) */}
      <div className="hero-overlay"></div>

      {/* Contenido (Texto + Formulario) */}
      <div className="hero-content">
        <h1 className="hero-title">Su Refugio de Lujo</h1>
        <h2 className="hero-subtitle">en el Valle Sagrado</h2>
        
        <p style={{ letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '20px' }}>
          Urubamba, Cusco, Peru
        </p>

        {/* Widget de Reserva (LO HABÍAS BORRADO EN TU EJEMPLO ANTERIOR) */}
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