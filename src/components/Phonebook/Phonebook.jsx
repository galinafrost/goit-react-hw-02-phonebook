import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import ContactAddForm from './ContactAddForm';
import ContactList from './ContactList';
import Filter from './Filter';

import s from './styles.module.css';

class Phonebook extends Component {
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
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const resultName = contacts.find(contact => contact.name === name);
    const resultNumber = contacts.find(item => item.number === number);

    if (resultName) {
      alert(`${name} is already in contact`);
      return;
    }

    if (resultNumber) {
      alert(`${number} is already in contact`);
      return;
    }

    this.setState(prevState => {
      const { contacts } = prevState;
      const newContacts = {
        name,
        number,
        id: nanoid(),
      };
      return {
        contacts: [...contacts, newContacts],
      };
    });
  };

  getFilteredContact() {
    const { filter, contacts } = this.state;

    if (!filter) {
      return contacts;
    }
    const filterStr = filter.toLowerCase();
    const result = contacts.filter(contact => {
      const name = contact.name.toLowerCase();
      return name.includes(filterStr);
    });
    return result;
  }

  removeContact = contactId => {
    this.setState(prevState => {
      const { contacts } = prevState;
      const newContact = contacts.filter(contact => contact.id !== contactId);
      return {
        contacts: newContact,
      };
    });
  };

  render() {
    const { handleChange, removeContact } = this;
    const { filter } = this.state;
    const filtrContact = this.getFilteredContact();

    return (
      <div className={s.contact}>
        <h1>Phonebook</h1>
        <div>
          <ContactAddForm onSubmit={this.addContact} />
        </div>
        <h2>Contact</h2>
        <Filter filter={filter} handleChange={handleChange} />
        <ContactList removeContact={removeContact} contacts={filtrContact} />
      </div>
    );
  }
}

export default Phonebook;
