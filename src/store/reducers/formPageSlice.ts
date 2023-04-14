import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Card } from '../../types';

interface FormPageState {
  cards: Array<Card>;
}

const initialState: FormPageState = {
  cards: [],
};

export const formPageSlice = createSlice({
  name: 'formPage',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<Card>) => {
      state.cards.push(action.payload);
    },
  },
});

export default formPageSlice.reducer;
