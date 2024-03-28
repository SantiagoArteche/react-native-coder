import { createSlice } from "@reduxjs/toolkit";

export const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
  },
  reducers: {
    getOrders: (state, action) => {
      state.orders = action.payload;
    },
    setOrders: (state, action) => {
      state.orders = [...state.orders, action.payload];
    },
  },
});

export const { getOrders, setOrders } = ordersSlice.actions;
