import { useLocation } from "react-router-dom";
const ContactDetails = () => {
  const location = useLocation();
  const {contact} = location.state || {};


  return (
    <section>
      <h3>{contact.name}</h3>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
    </section>
  );
};

export default ContactDetails;
