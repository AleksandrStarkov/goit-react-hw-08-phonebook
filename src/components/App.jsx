import React, { Component } from 'react';
import Notiflix from 'notiflix';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactsList/ContactsList';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addContact = evt => {
    if (this.findContact(evt)) {
      return Notiflix.Notify.failure(`${evt.name} is already in contacts.`);
    }

    this.setState(prev => ({ contacts: [...prev.contacts, evt] }));
  };

  findContact = evt => {
    const { contacts } = this.state;
    return contacts.find(
      contact => contact.name.toLowerCase() === evt.name.toLowerCase(),
    );
  };

  filterContact = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim()),
    );
  };

  deleteContact = id =>
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));

  render() {
    const { filter } = this.state;
    const filterContact = this.filterContact();

    return (
      <div className={s.container}>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={this.handleChange} />
        <ContactList
          filterContact={filterContact}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
