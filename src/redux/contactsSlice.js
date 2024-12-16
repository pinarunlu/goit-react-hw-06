import { createSlice } from '@reduxjs/toolkit';

// Başlangıç durumu
const initialState = {
  items: [],
};

// Slice oluşturma
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload); // Yeni iletişim ekleme
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload); // İletişimi silme
    },
  },
});

// Seçiciler
export const selectContacts = (state) => state.contacts.items;

// Eylemler
export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;

