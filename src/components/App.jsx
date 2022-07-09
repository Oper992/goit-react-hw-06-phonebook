import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import {
  addContact,
  addFilter,
  deleteContacts,
  addContactFromLocalStorage,
} from '../redux/contacts';
import style from './App.module.css';

export function App() {
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  const addContacts = (contactName, contactNumber) => {
    const id = nanoid();

    if (
      contacts.some(
        ({ name }) => name.toLowerCase() === contactName.toLowerCase()
      )
    ) {
      window.alert(`${contactName} is already in contacts`);
    } else {
      dispatch(
        addContact({ id: id, name: contactName, number: contactNumber })
      );
    }
  };

  const filteredContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const addToFilter = e => {
    dispatch(addFilter(e.target.value));
    // console.log(filter);
  };

  const deleteContact = e => {
    dispatch(deleteContacts(e.target.value));
  };

  useEffect(() => {
    const contactsFromLastSession = JSON.parse(
      localStorage.getItem('contacts')
    );

    if (
      contactsFromLastSession !== null &&
      contactsFromLastSession.length !== 0
    ) {
      dispatch(addContactFromLocalStorage(contactsFromLastSession));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm addContacts={addContacts} />
      <div className={style.filteredContacts}>
        <h2 className={style.contactsTitle}>Contacts</h2>
        <Filter filter={filter} addToFilter={addToFilter} />
        <ContactList
          filteredContacts={filteredContacts()}
          deleteContact={deleteContact}
        />
      </div>
    </>
  );
}
