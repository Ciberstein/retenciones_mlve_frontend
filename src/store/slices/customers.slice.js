import { createSlice } from '@reduxjs/toolkit';
import { setLoad } from './loader.slice';
import axios_instance from '../../utils/apiConfig';

const customerSlice = createSlice({
  name: 'customers',
  initialState: {},
  reducers: {
    setCustomers: (state, action) => action.payload,
  },
});

export const { setCustomers } = customerSlice.actions;

export default customerSlice.reducer;

export const customersThunk =
  (page = 1, limit = "") => async (dispatch) => {
    dispatch(setLoad(false));
    const url = `/customers?page=${page}&limit=${limit}`;
    await axios_instance
      .get(url, { withCredentials: true })
      .then((res) => dispatch(setCustomers(res.data)))
      .catch((err) => console.error(err))
      .finally(() => dispatch(setLoad(true)));
  };