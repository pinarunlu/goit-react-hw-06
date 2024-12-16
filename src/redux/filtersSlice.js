import { createSlice } from '@reduxjs/toolkit';

// Başlangıç durumu
const initialState = {
  name: '',
};

// Slice oluşturma
const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload; // Filtreyi değiştirme
    },
  },
});

// Seçiciler
export const selectNameFilter = (state) => state.filters.name;

// Eylemler
export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
