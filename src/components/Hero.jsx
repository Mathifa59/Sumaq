import React from 'react';
// 1. IMPORTA TU VIDEO DESDE ASSETS
import heroVideo from '../assets/video-hero.mp4'; 

const Hero = () => {
  return (
    // 2. QUITAMOS el backgroundImage del estilo en línea
    <div className="hero-container">
      
      {/* 3. AÑADIMOS LA ETIQUETA VIDEO */}
      <video 
        className="hero-video"
        autoPlay    // Que se reproduzca solo
        loop        // Que se repita en bucle
        muted       // En silencio (necesario para autoplay en navegadores)
        playsInline // Para que funcione bien en iPhone/móvil
      >
        <source src={heroVideo} type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      {/* Capa oscura para leer el texto (igual que antes) */}
      <div className="hero-overlay"></div>

      {/* El resto del contenido sigue igual... */}
      <div className="hero-content">
        <h1 className="hero-title">Su Refugio de Lujo</h1>
        {/* ... */}
      </div>
    </div>
  );
};

export default Hero;