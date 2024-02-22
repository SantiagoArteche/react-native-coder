import { StyleSheet, View, FlatList, Text, Pressable } from "react-native";
import allProducts from "../../data/products.json";
import Constants from "expo-constants";
import { ProductItem } from "../../components/ProductItem/ProductItem";
import { useState, useEffect } from "react";
import { Search } from "../../components/Search/Search";
import { StatusBar } from "expo-status-bar";

export const ItemListCategories = ({ navigation, route }) => {
  const [products, setProducts] = useState([]);
  const [prodSearch, setProdSearch] = useState("");
  const { category } = route.params;
  useEffect(() => {
    const filterProducts = allProducts.filter(
      (prod) => prod.category === category
    );
    category ? setProducts(filterProducts) : setProducts(allProducts);

    const searchProduct = filterProducts.filter((prod) =>
      prod.title.toUpperCase().includes(prodSearch.toUpperCase())
    );

    prodSearch != "" && setProducts(searchProduct);
  }, [prodSearch]);

  return (
    <View style={styles.container}>
      <Search setProdSearch={setProdSearch} />
      <FlatList
        data={products}
        style={{ flexGrow: 0 }}
        renderItem={({ item }) => (
          <ProductItem navigation={navigation} product={item} />
        )}
        keyExtractor={(products) => products.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
});
