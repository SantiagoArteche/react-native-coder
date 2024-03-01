import { StyleSheet, View, FlatList, Text, Pressable } from "react-native";
import allProducts from "../../data/products.json";
import { ProductItem } from "../../components/ProductItem/ProductItem";
import { useState, useEffect } from "react";
import { Search } from "../../components/Search/Search";
import { useSelector } from "react-redux";

export const ItemListCategories = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [prodSearch, setProdSearch] = useState("");
  const {
    categorySelected: category,
    productsFilteredByCategory,
    allProducts,
  } = useSelector((state) => state.shop);

  useEffect(() => {
    category
      ? setProducts(productsFilteredByCategory)
      : setProducts(allProducts);

    const searchProduct = productsFilteredByCategory.filter((prod) =>
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
