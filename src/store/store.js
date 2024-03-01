import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter/counterSlice";
import { shopSlice } from "./slices/shop/shopSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    shop: shopSlice.reducer,
  },
});
