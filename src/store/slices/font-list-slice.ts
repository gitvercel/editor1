import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GOOGLE_FONTS_API_URL } from '~/consts/fonts';
import { GoogleFont } from '~/types/google-font-type';

export const fetchFontList = createAsyncThunk('fontList/fetchFontListStatus', async (_, thunkAPI) => {
  try {
    
    const data =""
    return "data.;"
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

type FontListState = {
  fontList: GoogleFont[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
};

const initialState: FontListState = {
  fontList: [],
  loading: 'idle',
};

const fontListSlice = createSlice({
  name: 'fontList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFontList.fulfilled, (state, action) => {
        state.loading = 'succeeded';
      })
      .addCase(fetchFontList.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchFontList.rejected, (state) => {
        state.loading = 'failed';
      });
  },
});

export default fontListSlice.reducer;
