import React from "react";
import { Order } from "../screens/Order/Order";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "../components/Header/Header";


const OrderStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ header: () => <Header title="Orders" /> }}
      initialRouteName="Orders"
    >
      <Stack.Screen name="Orders" component={Order} />
    </Stack.Navigator>
  );
};

export default OrderStack;
