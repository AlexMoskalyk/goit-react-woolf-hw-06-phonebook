import Section from './section/Section';
import Form from './form/Form';
import ContactList from './contactList/ContactList';
import { eachWordWithCapitalLetter } from '../utils';
import { nanoid } from 'nanoid';
import Filter from './filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../store/ContactsSlice';
import { contactsArrSelector, filterSelector } from 'store/Selector';

const App = () => {
  const contactsArr = useSelector(contactsArrSelector);
  const filter = useSelector(filterSelector);

  const dispatch = useDispatch();

  const createConatct = item => {
    if (
      contactsArr.some(
        contact => contact.name.toLowerCase() === item.name.toLowerCase()
      )
    ) {
      alert(`${item.name} is already exist!`);
      return;
    }

    const optimiseItemData = {
      name: eachWordWithCapitalLetter(item.name),
      number: item.number,
      id: nanoid(),
    };

    dispatch(addContact(optimiseItemData));
  };

  const filteredContacts = contactsArr.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Section>
        <Form createConatct={createConatct} />
      </Section>
      <Section>
        <Filter />
        <ContactList contacts={filteredContacts} />
      </Section>
    </>
  );
};

export default App;
