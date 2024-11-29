import { generateId } from "./generateId";
class Contact {
  id: string;
  name: string;
  email: string;
  phone: string;

  constructor(id: string, name: string, email: string, phone: string) {
    this.id = generateId();
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  getContacts(): Contact[] {
    const contactsJson = localStorage.getItem('contacts')
    return contactsJson? JSON.parse(contactsJson) : []
  }

  addContact(newContact : Contact):void{
    const contactArray = this.getContacts()
  contactArray.push(newContact)
  }
}
