import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactsList/ContactsList';
import s from './App.module.css';
import { getContacts } from 'redux/contacts/contacts-operation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const contacts = useSelector(state => state.contacts.items.length);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  });
  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts in Phonebook:{contacts}</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
