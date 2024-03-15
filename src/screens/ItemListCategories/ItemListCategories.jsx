import { StyleSheet, View, FlatList, Text } from "react-native";
import { ProductItem } from "../../components/ProductItem/ProductItem";
import { useState, useEffect } from "react";
import { Search } from "../../components/Search/Search";
import { useSelector } from "react-redux";
import {
  useGetProductsByCategoryQuery,
  useGetProductsQuery,
} from "../../services/shop-service";

export const ItemListCategories = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [prodSearch, setProdSearch] = useState("");

  const { categorySelected: category } = useSelector((state) => state.shop);

  const {
    data: productsFilteredByCategory,
    isLoading,
    error,
  } = useGetProductsByCategoryQuery(category);

  useEffect(() => {
    if (productsFilteredByCategory) {
      const filterProds = Object.values(productsFilteredByCategory).filter(
        (prod) => prod.title.toUpperCase().includes(prodSearch.toUpperCase())
      );

      setProducts(filterProds);
    }
  }, [prodSearch, productsFilteredByCategory]);

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
