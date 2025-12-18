import React from 'react';
import { Wifi, Coffee, Mountain, Map } from 'lucide-react';
import imgCusco from '../assets/Cusco.jpg';
import imgUrubamba from '../assets/Urubamba.jpg';

const Experiences = () => {
  const iconStyle = { width: '40px', height: '40px', color: '#8B5A2B', marginBottom: '15px' };
  
  return (
    <section className="container" style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
      
      {/* TÍTULOS CENTRADOS */}
      <h2 className="section-title">Experiencias</h2>
      
      {/* Aquí aplicamos la clase del CSS que tiene text-align: center */}
      <p className="section-subtitle">
        Todo lo que necesitas para una estadía inolvidable en el Valle Sagrado
      </p>

      {/* ICONOS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', textAlign: 'center', marginBottom: '80px' }}>
        <div>
          <Wifi style={iconStyle} />
          <h4 style={{ marginBottom: '10px' }}>Wi-Fi Gratuito</h4>
          <p style={{ fontSize: '14px', color: '#666' }}>Conexión de alta velocidad</p>
        </div>
        <div>
          <Coffee style={iconStyle} />
          <h4 style={{ marginBottom: '10px' }}>Desayuno Andino</h4>
          <p style={{ fontSize: '14px', color: '#666' }}>Ingredientes locales frescos</p>
        </div>
        <div>
          <Mountain style={iconStyle} />
          <h4 style={{ marginBottom: '10px' }}>Vistas Privilegiadas</h4>
          <p style={{ fontSize: '14px', color: '#666' }}>Frente a las montañas</p>
        </div>
        <div>
          <Map style={iconStyle} />
          <h4 style={{ marginBottom: '10px' }}>Tours Privados</h4>
          <p style={{ fontSize: '14px', color: '#666' }}>Coordinación directa</p>
        </div>
      </div>

      {/* TOURS */}
      <h3 className="section-title" style={{ fontSize: '2rem', marginTop: '60px' }}>Explora el Valle</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
        
        {/* CARD CUSCO */}
        <div style={{ position: 'relative', height: '350px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
            <img src={imgCusco} alt="Cusco Tours" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '30px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', color: 'white' }}>
                <h3 style={{fontSize: '1.5rem'}}>Ciudad del Cusco</h3>
                <p style={{opacity: 0.9, marginTop: '5px'}}>Descubre la magia de la capital imperial.</p>
            </div>
        </div>

        {/* CARD URUBAMBA */}
        <div style={{ position: 'relative', height: '350px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
            <img src={imgUrubamba} alt="Urubamba Experience" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '30px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', color: 'white' }}>
                <h3 style={{fontSize: '1.5rem'}}>Naturaleza en Urubamba</h3>
                <p style={{opacity: 0.9, marginTop: '5px'}}>Caminatas y conexión con el río Vilcanota.</p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Experiences;