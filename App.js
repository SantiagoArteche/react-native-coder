import { StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";

import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts.js";

import { Navigator } from "./src/navigation/Navigator.jsx";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) return null;

  return <Navigator />;
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",

    padding: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});
