import { useState } from "react";
import { Home } from "./src/screens/Home/Home";
import { SafeAreaView, View, StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";
import { ItemListCategories } from "./src/screens/ItemListCategories/ItemListCategories";
import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts.js";
import { Header } from "./src/components/Header/Header.jsx";
import { ItemListDetail } from "./src/screens/ItemListDetail/ItemListDetail.jsx";

export default function App() {
  const [categorySelected, setCategorySelected] = useState("");
  const [productDetailId, setProductDetailId] = useState(0);

  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      {productDetailId ? (
        <ItemListDetail productDetailId={productDetailId} />
      ) : categorySelected ? (
        <View style={{ width: "100%" }}>
          <Header />
          <ItemListCategories
            selectCategory={setCategorySelected}
            category={categorySelected}
            setProductDetailId={setProductDetailId}
          />
        </View>
      ) : (
        <View style={{ width: "100%" }}>
          <Header />
          <Home selectCategory={setCategorySelected} />
        </View>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",

    padding: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});
