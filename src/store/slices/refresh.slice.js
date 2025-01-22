import { createSlice } from '@reduxjs/toolkit';
import { setLoad } from './loader.slice';
import axios_instance from '../../utils/apiConfig';

const refreshSlice = createSlice({
  name: 'refresh',
  initialState: {},
  reducers: {
    setRefresh: (state, action) => action.payload,
  },
});

export const { setRefresh } = refreshSlice.actions;

export default refreshSlice.reducer;

export const refreshThunk =
  () => async (dispatch) => {
    dispatch(setLoad(false));
    const url = `/auth/refresh`;
    await axios_instance
      .post(url, {}, { withCredentials: true })
      .then((res) => dispatch(setRefresh(res.data.access_token)))
      .catch((err) => console.error(err))
      .finally(() => dispatch(setLoad(true)));
  };