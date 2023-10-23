import { createSlice } from "@reduxjs/toolkit";

const filterState = {
  search: "",
};

const initialState = {
  ...filterState,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {},
});

export default productSlice.reducer;
