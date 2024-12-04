import { useState, useEffect } from "react";
import { Contact } from "../utils/contact"; 
import ContactList from "./ContactList";
import ContactSearch from "./ContactSearch";
import ContactForm from "./ContactForm";



const ContactApp: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    setContacts(Contact.getContacts());
  }, []);

  const refreshContacts = () => {
    setContacts(Contact.getContacts());
  };

  const deleteContact = (id: string) => {
    Contact.deleteContact(id);
    refreshContacts(); 
  };

 

  return (
    <div className="App">
      <h1>CONTACT LIST APP</h1>
      <ContactSearch searchContact={Contact.searchContact} />
      <ContactForm refreshContacts={refreshContacts} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
};

export default ContactApp;

