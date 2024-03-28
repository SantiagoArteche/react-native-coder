import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "../components/Header/Header";
import Login from "../screens/Login/Login";
import Signup from "../screens/Signup/Signup";

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ header: () => <Header title="Welcome" /> }}
    >
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
