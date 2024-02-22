import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { navigatorRoutes } from "./navigatorRoutes";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "../components/Header/Header";
export const Navigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          header: () => {
            return (
              <Header
                title={
                  route.name === "Home"
                    ? "Categories"
                    : route.name === "ItemListCategories"
                    ? route.params.category
                    : "Detail"
                }
              />
            );
          },
        })}
      >
        {navigatorRoutes.map(({ name, component }) => (
          <Stack.Screen key={name} name={name} component={component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
