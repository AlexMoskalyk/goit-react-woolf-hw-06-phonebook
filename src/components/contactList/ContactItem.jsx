import React from 'react';
import css from './ContactItem.module.css';
import { deleteContact } from '../../store/ContactsSlice';
import { useDispatch } from 'react-redux';

const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.li}>
      <p>
        {name}:{number}
      </p>
      <button
        type="button"
        className={css.btn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
