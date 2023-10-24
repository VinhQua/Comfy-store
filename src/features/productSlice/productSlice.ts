import { createSlice } from "@reduxjs/toolkit";

const filterState = {
  search: "",
  category: "all",
  categories: ["Tables", "Chairs", "Kids", "Sofas", "Beds", "all"],
  company: "all",
  companies: ["Modenza", "Luxora", "Artifex", "Comfora", "Homestead", "all"],
  price: 100000,
  freeShipping: true,
  order: "a-z",
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
