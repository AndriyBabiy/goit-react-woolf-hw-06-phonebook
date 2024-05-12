import { useDispatch } from 'react-redux';
import {
  ContactDetails,
  ContactText,
  DeleteButton,
} from './ContactItem.styled';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactItem = ({ elem: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactDetails>
      <ContactText>
        ☎︎ {name}: {number}
      </ContactText>
      <DeleteButton onClick={handleDelete}>Delete contact</DeleteButton>
    </ContactDetails>
  );
};
