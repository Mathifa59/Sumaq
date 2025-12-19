import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '24px', fontWeight: 'bold', color: 'white' }}>
        Apu Garden Lodge
      </div>
      
      {/* Enlaces funcionales con anclas (#) */}
      <div className="nav-links">
        <a href="#home">HOME</a>
        <a href="#about">NOSOTROS</a>
        <a href="#experiences">EXPERIENCIAS</a>
        <a href="#contact">CONTACTO</a>
      </div>
    </nav>
  );
};

export default Navbar;