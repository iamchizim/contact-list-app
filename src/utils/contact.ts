import { generateId } from "./generateId";
export class Contact {
  id: string;
  name: string;
  email: string;
  phone: string;

  constructor(name: string, email: string, phone: string) {
    this.id = generateId();
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  getContacts(): Contact[] {
    const contactsJson = localStorage.getItem("contacts");
    return contactsJson ? JSON.parse(contactsJson) : [];
  }

  addContact(newContact: Contact): void {
    const contactArray = this.getContacts();
    contactArray.push(newContact);
    localStorage.setItem("contacts", JSON.stringify(contactArray));
  }

  deleteContact(id: string): void {
    const contactArray = this.getContacts();
    const updatedContactArray = contactArray.filter(
      (contact) => contact.id !== id
    );
    localStorage.setItem("contacts", JSON.stringify(updatedContactArray));
  }
  searchContact(query: string): Contact[]{
    const contactArray = this.getContacts()
    const foundContacts = contactArray.filter((contact) =>(
      contact.name === query
    ))
    return foundContacts
  }
}
