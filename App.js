import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts.js";

import { Provider } from "react-redux";
import { store } from "./src/store/store.js";
import MainNavigator from "./src/navigation/MainNavigator.jsx";
import { init } from "./src/db/index.js";

init()
  .then(() => console.log("BDD inicializada"))
  .catch((error) => console.log(error));

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
