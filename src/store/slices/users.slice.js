import { createSlice } from '@reduxjs/toolkit';
import { setLoad } from './loader.slice';
import axios_instance from '../../utils/apiConfig';

const userSlice = createSlice({
  name: 'users',
  initialState: {},
  reducers: {
    setUsers: (state, action) => action.payload,
  },
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;

export const usersThunk =
  (page = 1, limit = "") => async (dispatch) => {
    dispatch(setLoad(false));
    const url = `/users?page=${page}&limit=${limit}`;
    await axios_instance
      .get(url, { withCredentials: true })
      .then((res) => dispatch(setUsers(res.data)))
      .catch((err) => console.error(err))
      .finally(() => dispatch(setLoad(true)));
  };