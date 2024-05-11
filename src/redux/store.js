import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filtersSlice';
import { contactReducer } from './contactSlice';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
