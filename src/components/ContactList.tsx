import React from "react";
import { Contact } from "../utils/contact";

const ContactList = ({ contacts: string[] }) => {
  return (
    <section>
    <div className="contact-card">  
        {contacts.map((contact) => (
        <div key={contact.id}>
          <h3>{contact.name}</h3>
          
        </div>
      ))}
      </div>
    
    </section>
  );
};
export default ContactList;
