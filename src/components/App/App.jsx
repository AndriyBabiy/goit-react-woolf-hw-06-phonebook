import Form from 'components/Form/Form';
import { Container } from './App.styled';
import { useEffect } from 'react';
import { ComponentHeading } from 'components/ComponentHeading/ComponentHeading';
import { Contacts } from 'components/Contacts/Contacts';
import { ContactsSearch } from 'components/Contacts/Contacts.styled';
import { useSelector } from 'react-redux';
import { FilterInput } from 'components/FilterInput/FilterInput';
import { getContacts } from '../../redux/selectors';

const App = () => {
  const contacts = useSelector(getContacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <ComponentHeading size="xlarge" text={'Phonebook'} />
      <Form />
      <ContactsSearch>
        <FilterInput />
      </ContactsSearch>
      <ComponentHeading size="xlarge" text={'Contacts'} />
      <Contacts />
    </Container>
  );
};

export default App;
