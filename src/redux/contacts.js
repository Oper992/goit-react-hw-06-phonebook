import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'phonebook',
  initialState: { contacts: [], filter: '' },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    addFilter(state, action) {
      state.filter = action.payload;
    },

    deleteContacts(state, action) {
      state.contacts = state.contacts.filter(
        ({ name }) => name !== action.payload
      );
    },
  },
});

export const { addContact, addFilter, deleteContacts } = slice.actions;

export const contacts = slice.reducer;
