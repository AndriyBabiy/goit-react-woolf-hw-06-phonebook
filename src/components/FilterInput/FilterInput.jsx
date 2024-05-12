import { InputLabel } from 'components/Contacts/Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { setFilterValue } from '../../redux/filtersSlice';

export const FilterInput = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'filter') dispatch(setFilterValue(value));
  };

  return (
    <>
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
    </>
  );
};
