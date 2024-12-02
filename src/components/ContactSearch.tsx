import React from "react";
import { useState } from "react";
import { Contact } from "../utils/contact";

interface ContactSearchProps {
  searchContact: (query: string) => Contact[];
}
const ContactSearch: React.FC<ContactSearchProps> = ({ searchContact }) => {
  const [query, setQuery] = useState("");
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (query.trim()) {
      searchContact(query);
      setQuery("");
    }
      };
      const searchResults = searchContact(query)
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
      </form>
      <button type="submit">Search</button>

      <div>
        {searchResults}
      </div>
    </section>
  );
};
export default ContactSearch;
