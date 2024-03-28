import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    imageCamera: null,
    localId: null,
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
      state.localId = action.payload.data.localId;
    },
    clearUser: (state) => {
      state.user = null;
      state.token = null;
    },
    setImageCamera: (state, action) => {
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
    logout: (state) => {
      state.imageCamera = null;
      state.user = null;
      state.token = null;
      state.imageCamera = null;
      state.localId = null;
      state.profileImage = null;
      state.location = {
        latitude: null,
        longitude: null,
        address: null,
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
  logout,
} = authSlice.actions;
