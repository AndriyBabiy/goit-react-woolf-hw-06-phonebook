import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const INITIAL_STATE = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(info) {
        return {
          payload: {
            id: v4(),
            name: info.name,
            number: info.number,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        console.log('action.payload => ', action.payload);
        console.log('state => ', state);
        const index = state.findIndex(elem => (elem.id = action.payload));
        state.splice(index, 1);
      },
    },
    filterContacts(state, action) {
      const contact_list = [...state];
      return contact_list.filter(({ name }) =>
        name.toLowerCase().includes(action.payload.filter.toLowerCase())
      );
    },
  },
});

export const { addContact, deleteContact, filterContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
