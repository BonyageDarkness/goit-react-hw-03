// src/components/ContactList/ContactList.jsx

import Contact from '../contact/Contact';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={styles.contactList}>
        {contacts.map(({ id, name, number }) => (
            <Contact
                key={id}
                id={id}
                name={name}
                number={number}
                onDelete={onDeleteContact}
            />
        ))}
    </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
