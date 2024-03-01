import { navigatorRoutes } from "./navigatorRoutes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "../components/Header/Header";
import { useSelector } from "react-redux";

export const ShopStack = () => {
  const Stack = createNativeStackNavigator();
  const { categorySelected } = useSelector((state) => state.shop);
  return (
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
                  ? categorySelected
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
  );
};
