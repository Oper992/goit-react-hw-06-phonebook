import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'phonebook',
  initialState: { contacts: [], filter: '' },
  reducers: {
    addContact: (state, action) => {
      return {
        contacts: [...state.contacts, action.payload],
        filter: state.filter,
      };
    },
    addFilter: (state, action) => {
      return { contacts: state.contacts, filter: action.payload };
    },

    deleteContacts: (state, action) => {
      return {
        contacts: state.contacts.filter(({ name }) => name !== action.payload),
        filter: state.filter,
      };
    },
    addContactFromLocalStorage: (state, action) => {
      return {
        contacts: [...state.contacts, ...action.payload],
        filter: state.filter,
      };
    },
  },
});

// const contacts = createReducer(
//   { contacts: [], filter: '' },
//   {
//     [addContact]: (state, action) => {
//       return {
//         contacts: [...state.contacts, action.payload],
//         filter: state.filter,
//       };
//     },
//     [addFilter]: (state, action) => {
//       return { contacts: state.contacts, filter: action.payload };
//     },
//     [deleteContacts]: (state, action) => {
//       return {
//         contacts: state.contacts.filter(({ name }) => name !== action.payload),
//         filter: state.filter,
//       };
//     },
//   }
// );

export const {
  addContact,
  addFilter,
  deleteContacts,
  addContactFromLocalStorage,
} = slice.actions;
export const contacts = slice.reducer;
