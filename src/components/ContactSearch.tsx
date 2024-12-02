import React, { useState } from "react";
import { Contact } from "../utils/contact";

interface ContactSearchProps {
  searchContact: (query: string) => Contact[];
}

const ContactSearch: React.FC<ContactSearchProps> = ({ searchContact }) => {
  const [query, setQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Contact[]>([]);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (query.trim()) {
      const results = searchContact(query);
      setSearchResults(results);
      setQuery("");
    }
  };

  return (
    <section>
      <form onSubmit={handleSearch}>
        <h4>Search Bar</h4>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Type in contact's name..."
        />
        <button type="submit">Search</button>
      </form>

      <div>
        {searchResults.length > 0 ? (
          searchResults.map(contact => (
            <div key={contact.id}>
              <h3>{contact.name}</h3>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </section>
  );
};

export default ContactSearch;
