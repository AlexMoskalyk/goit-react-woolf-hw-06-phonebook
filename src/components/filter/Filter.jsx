import React from 'react';
import css from './Filter.module.css';
import { setFilter } from '../../store/ContactsSlice';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  const handleFilter = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <fieldset className={css.filter}>
      <legend className={css.legend}>Quickly find the right contact</legend>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilter}
        />
      </label>
    </fieldset>
  );
};

export default Filter;
