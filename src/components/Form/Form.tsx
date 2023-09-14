import React from 'react';
import emailjs from '@emailjs/browser';
import { Container } from './styles';

export const ContactForm = () => {


  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ktcuaoa',
        'template_86g30y2',
        'form',
        'lG-IY0qMT-QWXTTAt',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <Container>
      <form onSubmit={sendEmail}>
        <h2>Completa el formulario para enviarme un correo.</h2>
        <label>Nombre</label>
        <input type='text' name='user_name' />
        <label>Email</label>
        <input type='email' name='user_email' />
        <label>Mensaje</label>
        <textarea name='message' />
        <button type='submit' value='Enviar'>
          Enviar
        </button>
      </form>
    </Container>
  );
};
