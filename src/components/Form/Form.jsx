import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { addContact } from '../../redux/contactsSlice';
import {
  FormContainer,
  FormElement,
  FormLabel,
  FormSubmitButton,
} from './Form.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = ({ target: { name, value } }) => {
    setContact(prev => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    createNewContact({ name: contact.name, number: contact.number });
    setContact(INITIAL_STATE);
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

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormElement>
        <FormLabel htmlFor="name">Name:</FormLabel>
        <input
          value={contact.name}
          onChange={handleChange}
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormElement>
      <FormElement>
        <FormLabel htmlFor="number">Number:</FormLabel>
        <input
          value={contact.number}
          onChange={handleChange}
          id="number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormElement>
      <FormSubmitButton type="submit">Add contact</FormSubmitButton>
    </FormContainer>
  );
};

export default Form;
