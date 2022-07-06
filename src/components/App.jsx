import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContacts = (contactName, contactNumber) => {
    const id = nanoid();

    if (
      contacts.some(
        ({ name }) => name.toLowerCase() === contactName.toLowerCase()
      )
    ) {
      window.alert(`${contactName} is already in contacts`);
    } else {
      setContacts(prevContacts => [
        ...prevContacts,
        { id: id, name: contactName, number: contactNumber },
      ]);
    }
  };

  const filteredContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const addToFilter = e => {
    setFilter(e.target.value);
  };

  const deleteContact = e => {
    setContacts(prevContacts => {
      return prevContacts.filter(({ name }) => name !== e.target.value);
    });
  };

  useEffect(() => {
    const contactsFromLastSession = JSON.parse(
      localStorage.getItem('contacts')
    );

    if (
      contactsFromLastSession !== null &&
      contactsFromLastSession.length !== 0
    ) {
      setContacts(contactsFromLastSession);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContacts={addContacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} addToFilter={addToFilter} />
      <ContactList
        filteredContacts={filteredContacts()}
        deleteContact={deleteContact}
      />
    </>
  );
}
