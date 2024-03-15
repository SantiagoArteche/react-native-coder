import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MyProfile from "../screens/MyProfile/MyProfile";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "../components/Header/Header";
import ImageSelector from "../screens/ImageSelector/ImageSelector";

const Stack = createNativeStackNavigator();
const MyProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="My Profile"
      screenOptions={{ header: () => <Header title="My Profile" /> }}
    >
      <Stack.Screen name="My Profile" component={MyProfile} />
      <Stack.Screen name="Image Selector" component={ImageSelector} />
    </Stack.Navigator>
  );
};

export default MyProfileStack;

const styles = StyleSheet.create({});
