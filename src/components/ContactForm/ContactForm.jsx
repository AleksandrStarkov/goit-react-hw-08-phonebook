import { useState } from 'react';
import s from './ContactForm.module.css';
import { addContact } from '../../redux/contacts/contacts-operation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Notiflix from 'notiflix';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify([...contacts]));
  }, [contacts]);

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

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    )
      return Notiflix.Notify.failure(`${name} is already in contacts.`);

    dispatch(addContact({ name: name, number: number }));

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

export default ContactForm;
