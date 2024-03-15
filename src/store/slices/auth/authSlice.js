import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    imageCamera: null,
    localId: "sasntiasnti",
    profileImage: null,
    location: {
      latitude: null,
      longitude: null,
      address: null,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.data.email;
      state.token = action.payload.data.idToken;
    },
    clearUser: (state) => {
      state.user = null;
      state.token = null;
    },
    setImageCamera: (state, action) => {
      console.log(action);
      state.imageCamera = action.payload;
    },
    setProfileImage: (state, action) => {
      state.profileImage = action.payload;
    },
    setUserLocation: (state, { payload }) => {
      state.location = {
        latitude: payload.latitude,
        longitude: payload.longitude,
        address: payload.address,
      };
    },
  },
});

export const {
  setUser,
  clearUser,
  setImageCamera,
  setProfileImage,
  setUserLocation,
} = authSlice.actions;
