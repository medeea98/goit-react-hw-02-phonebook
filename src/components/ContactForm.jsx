import React, { Component } from 'react';
import styles from './ContactForm.module.css'
class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    if (name.trim() !== '') {
      this.props.addContact(name, number);
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.container} onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          placeholder="Name"
          required
        />
        <label>Phone Number</label>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChange}
          placeholder="Phone Number"
          required
        />
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export default ContactForm;
