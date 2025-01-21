import { configureStore } from '@reduxjs/toolkit';
import loader from './slices/loader.slice';

const store = configureStore({
  reducer: {
    loader
  },
});

export default store;
