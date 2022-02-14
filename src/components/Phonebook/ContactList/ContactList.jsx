import PropTypes from 'prop-types';

import s from './styles.module.css'

const ContactList = ({ contacts, removeContact }) => {
    const elements = contacts.map(contact => (
        <li key={contact.id}>
          {`${contact.name}: ${contact.number}`} <button onClick={()=>removeContact(contact.id)}>Delete</button>
        </li>
      ));

    return (
      <div className={s.list}>
        <ul>
            {elements}
        </ul>
        </div>
    )
}

export default ContactList;

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  removeContact: PropTypes.func.isRequired,
};