import React from "react";
import { Contact } from "../utils/contact";
import { Link } from "react-router-dom";

const ContactList = ({ contacts: string[] }) => {
  return (
    <section>
    <div className="contact-card">  
        {contacts.map((contact) => (
        <div key={contact.id}>
          <h3>{contact.name}</h3>
          <Link to={`/ContactDetails${contact.id}`}state={{contact}}>Select</Link>
        </div>
      ))}
      </div>
    
    </section>
  );
};
export default ContactList;
