import { base_url } from "../firebase/database";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
  reducerPath: "shop-api",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products.json",
    }),
    getCategories: builder.query({
      query: () => "categories.json",
    }),
    getProductsByCategory: builder.query({
      query: (category) =>
        `products.json?orderBy="category"&equalTo="${category}"`,
    }),
    postOrder: builder.mutation({
      query: ({ ...order }) => ({
        url: "orders.json",
        method: "POST",
        body: order,
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
    getOrders: builder.query({
      query: () => "orders.json",
    }),
    getProfileImage: builder.query({
      query: (localId) => `profileImages/${localId}.json`,
    }),
    postProfileImage: builder.mutation({
      query: ({ localId, image }) => ({
        url: `profileImages/${localId}.json`,
        method: "PUT",
        body: {
          image: image,
        },
      }),
    }),
    postUserLocation: builder.mutation({
      query: ({ localId, location }) => ({
        url: `locations/${localId}.json`,
        method: "PUT",
        body: {
          latitude: location.latitude,
          longitude: location.longitude,
          address: location.address,
        },
      }),
    }),
    getUserLocation: builder.query({
      query: (localId) => `locations/${localId}.json`,
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  usePostOrderMutation,
  useGetOrdersQuery,
  useGetProfileImageQuery,
  usePostProfileImageMutation,
  usePostUserLocationMutation,
  useGetUserLocationQuery,
} = shopApi;
