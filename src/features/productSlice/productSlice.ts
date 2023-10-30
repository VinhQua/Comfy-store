import { customFetch } from "@/utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const getAllProducts = createAsyncThunk(
  "product/AllProducts",
  async (_: any, thunkAPI: any) => {
    const { search, category, company, price, freeShipping, order } =
      thunkAPI.getState().product;
    let url = `/products?category=${category}&company=${company}&price=${price}&shipping=${freeShipping}&order=${order}`;
    if (search) {
      url = url + `&search=${search}`;
    }
    try {
      const { data } = await customFetch.get(url);
      return data;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getSingleProduct = createAsyncThunk(
  "product/SingleProduct",
  async (id: string, thunkAPI: any) => {
    try {
      const { data } = await customFetch.get(`/products/${id}`);
      return data.data;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

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
const singleProductState = {
  product: null,
  productColor: "",
  singleProductAmount: 1,
};
const initialState = {
  ...filterState,
  ...singleProductState,
  products: [],
  isLoading: true,
  page: 1,
  total: 0,
  pageCount: 0,
  pageSize: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    handleFilters: (state, { payload }) => {
      const { name, value }: { name: string; value: string } = payload;
      return { ...state, [name]: value };
    },
    setProductColor: (state, { payload }) => {
      state.productColor = payload;
    },
    setSingleProductAmount: (state, { payload }) => {
      state.singleProductAmount = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllProducts.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.products = payload.data;
      state.categories = payload.meta.categories;
      state.companies = payload.meta.companies;
      state.page = payload.meta.pagination.page;
      state.pageSize = payload.meta.pagination.pageSize;
      state.pageCount = payload.meta.pagination.pageCount;
      state.total = payload.meta.pagination.total;
    });
    builder.addCase(
      getAllProducts.rejected,
      (state, { payload }: { payload: any }) => {
        state.isLoading = false;
        toast.error(payload);
      }
    );
    builder.addCase(getSingleProduct.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(getSingleProduct.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.product = payload;
      state.productColor = payload.attributes.colors[0];
    });
    builder.addCase(
      getSingleProduct.rejected,
      (state, { payload }: { payload: any }) => {
        state.isLoading = false;
        toast.error(payload);
      }
    );
  },
});
export const { handleFilters, setProductColor, setSingleProductAmount } =
  productSlice.actions;
export default productSlice.reducer;
