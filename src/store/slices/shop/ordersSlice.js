import { createSlice } from "@reduxjs/toolkit";

export const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
  },
  reducers: {
    getOrders: (state, action) => {
      console.log(action);
      state.orders = action.payload;
    },
  },
});

export const { getOrders } = ordersSlice.actions;
