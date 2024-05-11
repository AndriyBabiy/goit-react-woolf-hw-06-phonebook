import Form from 'components/Form/Form';
import { Container } from './App.styled';
import { useEffect } from 'react';
import { ComponentHeading } from 'components/ComponentHeading/ComponentHeading';
import { Contacts } from 'components/Contacts/Contacts';
import {
  ContactsSearch,
  InputLabel,
} from 'components/Contacts/Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, selectFilter } from '../../redux/selectors';
import { setFilterValue } from '../../redux/filtersSlice';
import { addContact, deleteContact } from '../../redux/contactsSlice';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(selectFilter);
  console.log(contacts);
  console.log(filter);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'filter') dispatch(setFilterValue(value));
  };

  const createNewContact = newContact => {
    if (
      contacts.find(
        ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      dispatch(addContact(newContact));
    }
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const handleFilter = () => {
    const contact_list = [...contacts];
    return contact_list.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Container>
      <ComponentHeading size="xlarge" text={'Phonebook'} />
      <Form submit={createNewContact} />
      <ContactsSearch>
        <InputLabel htmlFor="filter">Find contacts by name:</InputLabel>
        <input
          value={filter}
          onChange={handleChange}
          id="filter"
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </ContactsSearch>
      <ComponentHeading size="xlarge" text={'Contacts'} />
      <Contacts filterContacts={handleFilter()} deleteContact={handleDelete} />
    </Container>
  );
};

export default App;
