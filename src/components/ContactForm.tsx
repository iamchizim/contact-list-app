// src/components/ContactForm.tsx
import React, { useState } from 'react';
import { Contact } from '../utils/contact';

interface ContactFormProps {
  refreshContacts: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ refreshContacts }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newContact = new Contact(name, email, phone);

    Contact.addContact(newContact);

    refreshContacts(); 

    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;

