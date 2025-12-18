import React, { useEffect } from 'react'; // Importa useEffect
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de la animación
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experiences from './components/Experiences';
import ContactForm from './components/ContactForm'; // Tu formulario que ya funciona
import Footer from './components/Footer';
import './App.css'; // Importamos los estilos globales

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     // Que solo pase una vez al bajar
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      
      {/* AHORA AÑADES EL EFECTO A LAS SECCIONES */}
      
      {/* Ejemplo: About con efecto de aparecer hacia arriba */}
      <div data-aos="fade-up"> 
        <About />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <Experiences />
      </div>
      
      <div data-aos="fade-in">
        <section className="container" style={{ padding: '80px 20px' }}>
          <h2 className="section-title">Contáctanos</h2>
          <ContactForm />
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;