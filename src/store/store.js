import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter/counterSlice";
import { shopSlice } from "./slices/shop/shopSlice";
import { shopApi } from "../services/shop-service";
import { setupListeners } from "@reduxjs/toolkit/query";
import { cartSlice } from "./slices/shop/cartSlice";
import { ordersSlice } from "./slices/shop/ordersSlice";
import { authApi } from "../services/auth-service";
import { authSlice } from "./slices/auth/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    shop: shopSlice.reducer,
    cart: cartSlice.reducer,
    orders: ordersSlice.reducer,
    auth: authSlice.reducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(shopApi.middleware)
      .concat(authApi.middleware);
  },
});

setupListeners(store.dispatch);
