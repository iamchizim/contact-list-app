import React from "react";
import { Contact } from "../utils/contact";
import { Link } from "react-router-dom";

interface ContactListProps {
  contacts: Contact[];
  deleteContact: (id: string) => void;
}
const ContactList: React.FC<ContactListProps> = ({
  contacts,
  deleteContact,
}) => {
  return (
    <section>
      <div className="contact-card">
        {contacts.map((contact) => (
          <div key={contact.id}>
            <h3>{contact.name}</h3>{" "}
            <Link to={`/ContactDetails/${contact.id}`} state={{ contact }}>
              Select
            </Link>
            <button onClick={() => deleteContact(contact.id)}>Delete</button>{" "}
          </div>
        ))}
      </div>
    </section>
  );
};
export default ContactList;

