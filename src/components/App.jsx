import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactsList/ContactsList';
import s from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) || [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify([...contacts]));
  }, [contacts]);

  const handleChange = e => {
    const { value } = e.target;

    setFilter(value);
  };

  const addContact = data => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase(),
      )
    )
      return Notiflix.Notify.failure(`${data.name} is already in contacts.`);

    setContacts([...contacts, data]);
  };

  const filterContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase().trim()),
    );
  };

  const getFilterContact = filterContact();

  const deleteContact = id =>
    setContacts(contacts.filter(contact => contact.id !== id));

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      <ContactList
        filterContact={getFilterContact}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
