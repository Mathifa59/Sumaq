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
    // Usamos clases CSS dinámicas
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '24px', fontWeight: 'bold', color: 'white' }}>
        SUMAQ
      </div>
      
      <ul className="nav-links">
        <li style={{ cursor: 'pointer', color: 'white' }}>HOME</li>
        <li style={{ cursor: 'pointer', color: 'white' }}>ROOMS</li>
        <li style={{ cursor: 'pointer', color: 'white' }}>EXPERIENCES</li>
        <li style={{ cursor: 'pointer', color: 'white' }}>CONTACT</li>
      </ul>
    </nav>
  );
};

export default Navbar;