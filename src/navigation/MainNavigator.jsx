import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import TabNavigator from "./TabNavigator";
import { AuthStack } from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetProfileImageQuery,
  useGetUserLocationQuery,
} from "../services/shop-service";
import {
  setImageCamera,
  setProfileImage,
  setUserLocation,
} from "../store/slices/auth/authSlice";
const MainNavigator = () => {
  const { user, localId } = useSelector((state) => state.auth);
  const { data, error, isLoading } = useGetProfileImageQuery(localId);
  const { data: location } = useGetUserLocationQuery(localId);
  console.log(location);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(setProfileImage(data.image));
    }
  }, []);
  useEffect(() => {
    if (location) {
      dispatch(setUserLocation(location));
    }
  }, [data, location]);
  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
