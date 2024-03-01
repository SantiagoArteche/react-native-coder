import { createSlice } from "@reduxjs/toolkit";
import categories from "../../../data/categories.json";
import products from "../../../data/products.json";
export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    allCategories: categories,
    allProducts: products,
    categorySelected: "",
    productIdSelected: null,
    productsFilteredByCategory: [],
  },
  reducers: {
    setCategorySelected: (state, action) => {
      const categorySelected = (state.categorySelected = action.payload);
      const productsFiltered = state.allProducts.filter(
        (product) => product.category === categorySelected
      );
      state.categorySelected = categorySelected;
      state.productsFilteredByCategory = productsFiltered;
    },
    setProductId: (state, action) => {
      state.productIdSelected = action.payload;
    },
  },
});

export const { setCategorySelected, setProductId } = shopSlice.actions;
