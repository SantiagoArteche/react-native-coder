import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import TabNavigator from "./TabNavigator";
import { AuthStack } from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetProfileImageQuery,
  useGetUserLocationQuery,
  useGetOrdersQuery,
} from "../services/shop-service";

import {
  setImageCamera,
  setProfileImage,
  setUserLocation,
} from "../store/slices/auth/authSlice";
import { getOrders } from "../store/slices/shop/ordersSlice";
import { fetchSession } from "../db";

const MainNavigator = () => {
  const { user, localId } = useSelector((state) => state.auth);
  const { data } = useGetProfileImageQuery(localId);
  const { data: location } = useGetUserLocationQuery(localId);

  const dispatch = useDispatch();

  const { data: orders } = useGetOrdersQuery();
  const ordersObj = orders || {};
  const ordersArray = Object.keys(ordersObj).map((key) => ({
    id: key,
    ...ordersObj[key],
  }));

  useEffect(() => {
    dispatch(getOrders(ordersArray));
  }, [orders]);

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

  useEffect(() => {
    (async () => {
      try {
        await fetchSession({ localId });
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [localId]);

  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
