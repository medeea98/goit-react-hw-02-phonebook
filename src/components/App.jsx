/* import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  constructor() {
    super();

    this.state = {
      contacts: this.getLocalStorageContacts(),
      filter: '',
    }
  }

  getLocalStorageContacts = () => {
    const localStorageContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    const localStorageContactsArray = [];

    localStorageContacts.forEach((contact) => {
      localStorageContactsArray.push(contact);
    });

    return localStorageContactsArray;
  }

  addContact = (name, number) => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number
    };

    const localStorageContacts = this.getLocalStorageContacts();
    localStorageContacts.push(newContact);

    localStorage.setItem('contacts', JSON.stringify(localStorageContacts));

    this.setState({ contacts: [...contacts, newContact] });
  };

  handleFilterChange = (filter) => {
    this.setState({ filter });
  };

  handleDelete = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));

    const localStorageContacts = this.getLocalStorageContacts();

    localStorageContacts.forEach((contact, index) => {
      if (contact.id === id) {
        localStorageContacts.splice(index, 1);
      }
    });

    localStorage.setItem('contacts', JSON.stringify(localStorageContacts));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} onDelete={this.handleDelete} />
      </div>
    );
  }
}

 */

import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localStorageContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(localStorageContacts);
  }, []);

  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number
    };

    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  const handleDelete = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </div>
  );
};


