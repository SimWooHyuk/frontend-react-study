import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";
const initialState = {
  value: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addList: (state, {payload: productName}) => {
      state.value.push({
        id: uuidv4(),
        text: productName
      });
    },
    subList: (state, action) => {
      state.value.splice(action.payload, 1)
    }
  }
});

export const { addList, subList } = productSlice.actions;

export const selectproductList = (state) => state.product.value; // 이렇게해두면 useSelector(selectproductList) 이렇게 쉽게 할수있음 // 선택자 함수 // 리팩터링
export default productSlice.reducer;
