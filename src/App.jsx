import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experiences from './components/Experiences';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  
  // 1. INICIALIZAR ANIMACIONES
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Para que solo anime una vez al bajar
    });
  }, []);

  return (
    <div>
      <Navbar />
      
      {/* 2. ASIGNAMOS IDs PARA LA NAVEGACIÓN */}
      <section id="home">
        <Hero />
      </section>

      <section id="about" data-aos="fade-up">
        <About />
      </section>
      
      <section id="experiences" data-aos="fade-up">
        <Experiences />
      </section>
      
      <section id="contact" className="container" style={{ padding: '80px 20px' }} data-aos="fade-in">
        <h2 className="section-title">Contáctanos</h2>
        <p className="section-subtitle">Estamos listos para atenderte</p>
        <ContactForm />
      </section>

      <Footer />
    </div>
  );
}

export default App;