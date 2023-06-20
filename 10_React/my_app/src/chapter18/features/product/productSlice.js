import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";
const initialState = {
  value: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addList: (state, action) => {
      state.value.push({
        id: uuidv4(),
        text: action.payload
      });
    },
    subList: (state, action) => {
      state.value.splice(action.payload, 1)
    }
  }
});

export const { addList, subList } = productSlice.actions;

export default productSlice.reducer;
