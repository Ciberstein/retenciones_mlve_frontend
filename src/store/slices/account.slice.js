import { createSlice } from '@reduxjs/toolkit';
import { setLoad } from './loader.slice';
import axios_instance from '../../utils/apiConfig';

const accountSlice = createSlice({
  name: 'account',
  initialState: {},
  reducers: {
    setAccount: (state, action) => action.payload,
  },
});

export const { setAccount } = accountSlice.actions;

export default accountSlice.reducer;

export const accountThunk =
  (page = 1, limit = "") => async (dispatch) => {
    dispatch(setLoad(false));
    const url = `/users?page=${page}&limit=${limit}`;
    await axios_instance
      .get(url, { withCredentials: true })
      .then((res) => dispatch(setAccount(res.data)))
      .catch((err) => console.error(err))
      .finally(() => dispatch(setLoad(true)));
  };