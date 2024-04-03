import { useEffect, useState } from "react";

import initialContacts from "../../contacts.json";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { nanoid } from "nanoid";

function App() {
    const [contactsData, setContactsData] = useState(() => JSON.parse(localStorage.getItem("contacts")) ?? initialContacts);
    const [contactsFilter, setContactsFilter] = useState("");

    useEffect(() => localStorage.setItem("contacts", JSON.stringify(contactsData)));

    const filteredContacts = contactsData.filter((contact) => contact.name.toLowerCase().includes(contactsFilter.toLowerCase()));

    const addNewContact = (contact) => {
        const newContact = {
            ...contact,
            id: nanoid(),
        };

        setContactsData((prevState) => [...prevState, newContact]);
    };

    const deleteContact = (contactId) => {
        setContactsData((prevState) => prevState.filter((contact) => contact.id !== contactId));
    };

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm addNewContact={addNewContact} />
            <SearchBox onFilter={setContactsFilter} value={contactsFilter} />
            <ContactList contactsData={filteredContacts} deleteContact={deleteContact} />
        </div>
    );
}

export default App;
