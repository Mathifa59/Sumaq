import React from 'react';
import imgSala from '../assets/Sala Hotel.jpg';
import imgJardin from '../assets/Jardin Hotel.jpg';
import imgTerraza from '../assets/Terraza Hotel.jpg';
import imgEntrada from '../assets/Entrada Hotel.jpg';

const About = () => {
  return (
    <section className="about-section">
      
      {/* Columna Izquierda: Texto */}
      <div className="about-text">
        <h2 className="section-title" style={{ textAlign: 'left' }}>Sobre Nosotros</h2>
        
        <p style={{ lineHeight: '1.8', marginBottom: '20px', color: '#666', fontSize: '1.05rem' }}>
          SUMAQ Hotel es un santuario de lujo perfectamente integrado al entorno natural del Valle Sagrado de Urubamba. 
          Diseñado para quienes buscan paz, nuestra arquitectura respeta la estética andina combinándola con el confort moderno.
        </p>
        
        <p style={{ lineHeight: '1.8', marginBottom: '30px', color: '#666', fontSize: '1.05rem' }}>
          Con modernas instalaciones, arquitectura vanguardista y un compromiso inquebrantable con la experiencia del huésped, 
          SUMAQ es mucho más que un hospedaje: es tu santuario personal.
        </p>
        
        <button className="btn-primary">Conoce nuestra historia</button>
      </div>

      {/* Columna Derecha: Grilla de Imágenes */}
      <div className="about-grid">
        {/* Imagen 1: Normal */}
        <img src={imgSala} alt="Sala de estar" />
        
        {/* Imagen 2: Bajada 30px para efecto escalonado */}
        <img 
          src={imgTerraza} 
          alt="Terraza" 
          style={{ marginTop: '30px' }} 
        />
        
        {/* Imagen 3: Normal */}
        <img src={imgJardin} alt="Jardines" />
        
        {/* Imagen 4: Subida 30px para cuadrar con la de arriba */}
        <img 
          src={imgEntrada} 
          alt="Entrada" 
          style={{ marginTop: '-30px' }} 
        />
      </div>

    </section>
  );
};

export default About;