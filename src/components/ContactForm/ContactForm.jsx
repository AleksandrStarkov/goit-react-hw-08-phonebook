import PropTypes from 'prop-types';
import { useState } from 'react';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      default:
        break;
    }
    switch (name) {
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();

    addContact({ name: name, number: number, id: nanoid() });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.card} onSubmit={handleSubmitForm}>
      <label className={s.label}>
        Name
        <input
          className={s.inputFirst}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.inputSecond}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className={s.btnCont} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = { addContact: PropTypes.func.isRequired };

export default ContactForm;
