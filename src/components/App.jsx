import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import style from './App.module.css';

export function App() {
  return (
    <>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm />
      <div className={style.filteredContacts}>
        <h2 className={style.contactsTitle}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
}
