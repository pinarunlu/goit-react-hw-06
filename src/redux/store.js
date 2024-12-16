import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage

// Persist konfigürasyonu
const persistConfig = {
  key: 'root',
  storage,
};

// Persisted reducer'ı oluşturuyoruz
const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

// Store oluşturuyoruz
const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
  devTools: process.env.NODE_ENV !== 'production', // DevTools yalnızca geliştirme modunda aktif olur
  // `serializableCheck`'i devre dışı bırakıyoruz
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], // Persist ile ilgili action'ları göz ardı ediyoruz
        ignoredPaths: ['register'], // Eğer register gibi bir yol varsa, onu da göz ardı et
      },
    }),
});

// Persistor'ı oluşturuyoruz
const persistor = persistStore(store);

export { store, persistor };
