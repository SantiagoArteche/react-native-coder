import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts.js";
import TabNavigator from "./src/navigation/TabNavigator.jsx";
import { Provider } from "react-redux";
import { store } from "./src/store/store.js";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  );
}
