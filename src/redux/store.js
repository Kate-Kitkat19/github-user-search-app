import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { searchReducer } from './searchSlice';
import { themeReducer } from './themeSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
const persistConfig = {
  key: 'root',
  storage,
};

export const store = configureStore({
  reducer: {
    search: persistReducer(persistConfig, searchReducer),
    theme: persistReducer(persistConfig, themeReducer),
  },
  middleware,
});

export const persistor = persistStore(store);
