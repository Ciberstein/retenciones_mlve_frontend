import { configureStore } from '@reduxjs/toolkit';
import loader from './slices/loader.slice';
import users from './slices/users.slice';
import customers from './slices/customers.slice';
import refresh from './slices/refresh.slice';
import account from './slices/account.slice';

const store = configureStore({
  reducer: {
    loader,
    users,
    customers,
    refresh,
    account,
  },
});

export default store;
