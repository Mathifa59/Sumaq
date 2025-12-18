import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
          setStatus('¡Mensaje enviado con éxito!');
          form.current.reset();
      }, (error) => {
          console.error(error);
          setStatus('Hubo un error. Intenta más tarde.');
      });
  };

  const styles = {
    container: { maxWidth: '500px', margin: '2rem auto', padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' },
    title: { color: '#8B5A2B', textAlign: 'center', marginBottom: '1rem' },
    input: { width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' },
    button: { width: '100%', padding: '10px', backgroundColor: '#8B5A2B', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Escríbenos</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Nombre:</label>
        <input type="text" name="name" required style={styles.input} />

        <label>Email:</label>
        <input type="email" name="email" required style={styles.input} />

        <label>Mensaje:</label>
        <textarea name="message" required rows="4" style={styles.input} />

        <button type="submit" style={styles.button}>Enviar</button>
      </form>
      <p style={{textAlign:'center', marginTop:'10px'}}>{status}</p>
    </div>
  );
};

export default ContactForm;