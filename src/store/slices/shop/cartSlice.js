import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    user: "userLogged",
    updatedAt: new Date().toLocaleString(),
    total: null,
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const productRepeated = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (productRepeated) {
        const itemsUpdated = state.items.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity += action.payload.quantity;
            return item;
          }
          return item;
        });
        const total = itemsUpdated.reduce(
          (acc, currentItem) =>
            (acc += currentItem.price * currentItem.quantity),
          0
        );
        state = {
          ...state,
          items: itemsUpdated,
          total,
          updatedAt: new Date().toLocaleString(),
        };
      } else {
        state.items.push(action.payload);
        const total = state.items.reduce(
          (acc, currentItem) =>
            (acc += currentItem.price * currentItem.quantity),
          0
        );
        state = {
          ...state,
          total,
          updatedAt: new Date().toLocaleString(),
        };
      }
    },
    removeItem: (state, action) => {
      // Encuentra el índice del producto que deseas eliminar
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
      // Actualiza el total del carrito
      state.total = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
