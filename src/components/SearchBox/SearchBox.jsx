import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value)); // Filtreyi değiştirme eylemi
  };

  return (
    <div className={styles.searchBox}>
      <label>Find contacts by name</label>
      <input className={styles.searchInput} type="text" onChange={handleChange} />
    </div>
  );
};

export default SearchBox;

