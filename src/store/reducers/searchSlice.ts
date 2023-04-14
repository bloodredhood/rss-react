import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SearchState {
  inputValue: string;
}

const initialState: SearchState = {
  inputValue: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
  },
});

export default searchSlice.reducer;
