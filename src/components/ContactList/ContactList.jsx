import PropTypes from 'prop-types';

export default function ContactList({ filteredContacts, deleteContact }) {
  return (
    <>
      {filteredContacts.length ? (
        <ul>
          {filteredContacts.map(({ name, id, number }) => (
            <li key={id}>
              {name}: {number}
              <button type="button" value={name} onClick={deleteContact}>
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

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  filteredContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
