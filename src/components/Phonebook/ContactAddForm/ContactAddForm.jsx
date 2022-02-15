import { Component } from 'react';
import PropTypes from 'prop-types';


import s from './styles.module.css';

class ContactAddForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.onReset();
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onReset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <form onSubmit={handleSubmit}>
        <div className={s.contact}>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor="number">Number</label>
          <input
            onChange={handleChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export default ContactAddForm;

ContactAddForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}