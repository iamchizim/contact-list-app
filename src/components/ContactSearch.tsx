import React, { useState } from "react";
import { Contact } from "../utils/contact"; // Ensure the path is correct

const ContactSearch: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Contact[]>([]);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    setHasSearched(true);
    if (query.trim()) {
      const results = Contact.searchContact(query);
      setSearchResults(results);
    }
  };

  return (
    <section className="contact-search">
      <form id="search-form" onSubmit={handleSearch}>
        <h3>SEARCH BAR</h3>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Type in contact's name..."
        />
        <button type="submit">Search</button>
      </form>

      <div className="search-results">
        {hasSearched && searchResults.length === 0 && (
          <p>Contact was not found</p>
        )}
        {searchResults.length > 0 && (
          searchResults.map((contact) => (
            <div key={contact.id} className="details-contact-card">
              <h3>{contact.name}</h3>
              <p>{contact.phone}</p>
              <p>{contact.email}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ContactSearch;
