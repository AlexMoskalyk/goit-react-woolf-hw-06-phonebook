import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contactsArr: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      return {
        ...state,
        contactsArr: [payload, ...state.contactsArr],
      };
    },
    deleteContact: (state, { payload }) => {
      return {
        ...state,
        contactsArr: state.contactsArr.filter(
          contact => contact.id !== payload
        ),
      };
    },
    setFilter: (state, { payload }) => {
      return {
        ...state,
        filter: payload,
      };
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
