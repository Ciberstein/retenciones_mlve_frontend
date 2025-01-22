import { configureStore } from '@reduxjs/toolkit';
import loader from './slices/loader.slice';
import account from './slices/account.slice';
import refresh from './slices/refresh.slice';

const store = configureStore({
  reducer: {
    loader,
    account,
    refresh
  },
});

export default store;
