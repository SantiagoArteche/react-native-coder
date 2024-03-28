import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Cart } from "../screens/Cart/Cart";
import { Header } from "../components/Header/Header";

const Stack = createNativeStackNavigator();

export const CartStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{ header: () => <Header title="Cart" /> }}
    >
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};
