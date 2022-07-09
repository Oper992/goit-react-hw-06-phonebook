import PropTypes from 'prop-types';
import style from './Filter.module.css';

export default function Filter({ filter, addToFilter }) {
  return (
    <>
      <p className={style.filter}>Find contacts by name</p>
      <input type="filter" value={filter} onChange={addToFilter} />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  addToFilter: PropTypes.func.isRequired,
};
