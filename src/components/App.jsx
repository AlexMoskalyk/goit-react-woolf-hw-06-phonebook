import Section from './section/Section';
import Form from './form/Form';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';

const App = () => {
  return (
    <>
      <Section>
        <Form />
      </Section>
      <Section>
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};

export default App;
