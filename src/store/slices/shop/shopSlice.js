import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    allProducts: [],
    categorySelected: "",
    productIdSelected: null,
    productsFilteredByCategory: [],
  },
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    setCategorySelected: (state, action) => {
      const categorySelected = (state.categorySelected = action.payload);

      state.categorySelected = categorySelected;
    },
    setProductId: (state, action) => {
      state.productIdSelected = action.payload;
    },
  },
});

export const { setCategorySelected, setProductId, setAllProducts } =
  shopSlice.actions;
