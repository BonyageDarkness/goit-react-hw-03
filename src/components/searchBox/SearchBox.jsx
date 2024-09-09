// src/components/SearchBox/SearchBox.jsx
import styles from './SearchBox.module.css';
import PropTypes from 'prop-types';

const SearchBox = ({ value, onChange }) => (
    <div className={styles.searchBox}>
        <label>
            Find contacts by name
            <input type="text" value={value} onChange={onChange} />
        </label>
    </div>
);

SearchBox.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SearchBox;
