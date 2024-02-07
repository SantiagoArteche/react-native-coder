import { useState } from "react";
import { Home } from "./src/screens/Home/Home";
import { View } from "react-native";
import { ItemListCategories } from "./src/screens/ItemListCategories/ItemListCategories";
import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts.js";
import { Header } from "./src/components/Header/Header.jsx";

export default function App() {
  const [categorySelected, setCategorySelected] = useState("");

  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) return null;

  return categorySelected ? (
    <View style={{ width: "100%" }}>
      <Header />
      <ItemListCategories category={categorySelected} />
    </View>
  ) : (
    <View style={{ width: "100%" }}>
      <Header />
      <Home selectCategory={setCategorySelected} />
    </View>
  );
}
