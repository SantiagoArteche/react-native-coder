import { StyleSheet, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { CartStack } from "./CartStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ShopStack } from "./ShopStack";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import OrderStack from "./OrderStack";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <>
                  <Entypo
                    name="shop"
                    size={33}
                    color={focused ? "white" : "black"}
                  />
                  <Text style={{ color: focused ? "white" : "black" }}>
                    Shop
                  </Text>
                </>
              );
            },
          }}
          name="ShopStack"
          component={ShopStack}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <>
                  <Entypo
                    name="shopping-cart"
                    size={33}
                    color={focused ? "white" : "black"}
                  />
                  <Text style={{ color: focused ? "white" : "black" }}>
                    Cart
                  </Text>
                </>
              );
            },
          }}
          name="CartStack"
          component={CartStack}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <>
                  <MaterialIcons
                    name="format-list-numbered-rtl"
                    size={33}
                    color={focused ? "white" : "black"}
                  />
                  <Text style={{ color: focused ? "white" : "black" }}>
                    Orders
                  </Text>
                </>
              );
            },
          }}
          name="OrderStack"
          component={OrderStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "purple",
    color: "black",
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 20,
    height: 65,
  },
});
