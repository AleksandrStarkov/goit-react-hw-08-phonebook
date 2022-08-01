import PropTypes from 'prop-types';
import s from './ContactsList.module.css';

export default function ContactsList({ filterContact, deleteContact }) {
  return (
    <ul className={s.list}>
      {filterContact.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <p className={s.name}>
            {name}: {number}
          </p>
          <button type="button" onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
  filterContact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  deleteContact: PropTypes.func.isRequired,
};
