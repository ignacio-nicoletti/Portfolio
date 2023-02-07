import React from 'react';
import { Container } from './styles';
import WhatsApp from '../../assets/WhatsApp.svg.png';
import { ContactForm} from '../Form/Form';




export function Contact() {
  return (
    <Container id='contacto'>
      <header>
        <h2>Ponte en contacto conmigo</h2>
        <p>Puedes enviarme un correo o escribirme a mi número telefónico.</p>
      </header>
      <div className='contacts'>
        <div>
          <img src={WhatsApp} alt='mensaje' />
          <a href='https://api.whatsapp.com/send?phone=%2B5492213195893&text='>
            (+54) 2213 19-5893
          </a>
        </div>
      </div>
      <ContactForm/>
    </Container>
  );
}
