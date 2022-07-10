import style from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from '..//../redux/contacts';

export default function ContactList() {
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();

  const filteredContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = e => {
    dispatch(deleteContacts(e.target.value));
  };

  return (
    <>
      {filteredContacts().length ? (
        <ul>
          {filteredContacts().map(({ name, id, number }) => (
            <li key={id}>
              {name}: {number}
              <button
                type="button"
                value={name}
                onClick={deleteContact}
                className={style.buttonDelete}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>So far no contacts</p>
      )}
    </>
  );
}
