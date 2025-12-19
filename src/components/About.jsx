import React from 'react';
import imgSala from '../assets/Sala Hotel.jpg';
import imgJardin from '../assets/Jardin Hotel.jpg';
import imgTerraza from '../assets/Terraza Hotel.jpg';
import imgEntrada from '../assets/Entrada Hotel.jpg';

const About = () => {
  return (
    <section className="about-section">
      
      {/* COLUMNA TEXTO: Sin 'textAlign: left', ahora lo controlaremos con CSS */}
      <div className="about-text">
        <h2 className="section-title">Sobre Nosotros</h2>
        
        <p>
          SUMAQ Hotel es un santuario de lujo perfectamente integrado al entorno natural del Valle Sagrado de Urubamba. 
          Diseñado para quienes buscan paz, nuestra arquitectura respeta la estética andina combinándola con el confort moderno.
        </p>
        
        <p>
          Con modernas instalaciones, arquitectura vanguardista y un compromiso inquebrantable con la experiencia del huésped, 
          SUMAQ es mucho más que un hospedaje: es tu santuario personal.
        </p>
        
        <button className="btn-primary">Conoce nuestra historia</button>
      </div>

      {/* COLUMNA IMÁGENES */}
      <div className="about-grid">
        <img src={imgSala} alt="Sala de estar" />
        <img src={imgTerraza} alt="Terraza" />
        <img src={imgJardin} alt="Jardines" />
        <img src={imgEntrada} alt="Entrada" />
      </div>

    </section>
  );
};

export default About;