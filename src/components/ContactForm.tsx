import React from "react";
import { useState } from "react";
import { Contact } from "../utils/contact";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newContact = new Contact(name, email, phone);
    Contact.addContact(newContact);
    setName("");
    setEmail("");
    setPhone("");
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
      <button type="submit">Add Contact</button>{" "}
    </form>
  );
};
export default ContactForm;
