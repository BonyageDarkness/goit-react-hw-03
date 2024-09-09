import { FaUserAlt, FaPhoneAlt } from 'react-icons/fa';
import styles from './Contact.module.css';
import PropTypes from 'prop-types';

const Contact = ({ id, name, number, onDelete }) => (
    <li className={styles.contact}>
        <div className={styles['contact-info']}>
            <FaUserAlt className={styles['contact-icon']} />
            <p>{name}</p>
        </div>
        <div className={styles['contact-info']}>
            <FaPhoneAlt className={styles['contact-icon']} />
            <p className={styles['contact-number']}>{number}</p> {}
        </div>
        <button type="button" onClick={() => onDelete(id)}>
            Delete
        </button>
    </li>
);

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Contact;
