import React from 'react';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';
import { contactsArrSelector, filterSelector } from 'store/Selector';

const ContactList = () => {
  const filter = useSelector(filterSelector);
  const contactsArr = useSelector(contactsArrSelector);

  const filteredContacts = contactsArr.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
