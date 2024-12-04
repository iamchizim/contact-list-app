import { useState, useEffect } from "react";
import { Contact } from "../utils/contact";
import ContactList from "./ContactList";
import ContactSearch from "./ContactSearch";
import ContactForm from "./ContactForm";

const ContactApp = () => {
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
      <h1>CONTACT LIST APP</h1>{" "}
      <div className="container">
        <div className="column">
          <ContactSearch /> <ContactForm
            refreshContacts={refreshContacts}
          />
        </div>
        <div className="column">
          <ContactList contacts={contacts} deleteContact={deleteContact} />{" "}
        </div>
      </div>
    </div>
  );
};

export default ContactApp;
