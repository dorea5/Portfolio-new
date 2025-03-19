"use client";
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [confirmationMessage, setConfirmationMessage] = useState('');

  emailjs.init('793Cf0MiIgiiaoPr_');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Formulaire soumis: ", formData);
    console.log("form.current: ", form.current);

    if (form.current) {
      try {
        console.log("Envoi du formulaire à EmailJS...");
        const result = await emailjs.sendForm(
          'service_vbzak7b',
          'template_kfrs48k',
          form.current
        );
        console.log('Email envoyé avec succès:', result.text);
        setConfirmationMessage('Votre message a été envoyé avec succès!');
        setTimeout(() => setConfirmationMessage(''), 3000);
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
        alert('Une erreur est survenue lors de l\'envoi du message.');
      }
    } else {
      console.error('Le formulaire n\'est pas correctement référencé.');
      alert('Une erreur est survenue lors de l\'envoi du message.');
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto text-center max-w-xl">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#9370DB] to-[#E0B0FF] text-transparent bg-clip-text">Contactez-moi </h2> <span className="emailemoji text-4xl"></span>
        {confirmationMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Succès !</strong>
            <span className="block sm:inline">{confirmationMessage}</span>
          </div>
        )}
        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              rows={4}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition duration-300"
            >
              Envoyer le message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;