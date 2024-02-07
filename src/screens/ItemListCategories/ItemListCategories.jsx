import { StyleSheet, Text, View, FlatList } from "react-native";
import allProducts from "../../data/products.json";
import Constants from "expo-constants";
import { ProductItem } from "../../components/ProductItem/ProductItem";
import { useState, useEffect } from "react";
import { Search } from "../../components/Search/Search";
import { StatusBar } from "expo-status-bar";

export const ItemListCategories = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [prodSearch, setProdSearch] = useState("");

  useEffect(() => {
    const filterProducts = allProducts.filter(
      (prod) => prod.category === category
    );
    category ? setProducts(filterProducts) : setProducts(allProducts);

    const searchProduct = filterProducts.filter((prod) =>
      prod.title.toUpperCase().includes(prodSearch.toUpperCase())
    );

    prodSearch != "" && setProducts(searchProduct);
  }, [category, prodSearch]);

  return (
    <View style={styles.container}>
      <Search setProdSearch={setProdSearch} />
      <FlatList
        data={products}
        style={{ flexGrow: 0 }}
        renderItem={({ item }) => <ProductItem product={item} />}
        keyExtractor={(products) => products.id}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: Constants.statusBarHeight,
  },
});
