import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

type SampleSlice = {
  hello: string;
};

const initialState: SampleSlice = {
  hello: '',
};
export const sampleSlice = createSlice({
  name: 'sampleSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {},
});

export default sampleSlice.reducer;
