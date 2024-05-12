import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactsContainer } from './Contacts.styled';
import { useSelector } from 'react-redux';
import { getContacts, selectFilter } from '../../redux/selectors';

export const Contacts = ({ filterContacts, deleteContact }) => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(selectFilter);

  const handleFilter = () => {
    const contact_list = [...contacts];
    return contact_list.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <ContactsContainer>
        {handleFilter().map(elem => (
          <ContactItem key={elem.id} elem={elem} />
        ))}
      </ContactsContainer>
    </>
  );
};
