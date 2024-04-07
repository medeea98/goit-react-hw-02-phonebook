import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  addContact = (name, number) => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid,
      name,
      number
    };
    this.setState({ contacts: [...contacts, newContact] });
  };

  handleFilterChange = (filter) => {
    this.setState({ filter });
  };

  handleDelete = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
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

