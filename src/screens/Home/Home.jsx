import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useEffect } from "react";
import { setAllProducts } from "../../store/slices/shop/shopSlice";
import { Categories } from "../../components/Categories/Categories";

import { useGetProductsQuery } from "../../services/shop-service";
import { useDispatch } from "react-redux";

export const Home = ({ navigation }) => {
  const { data } = useGetProductsQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAllProducts(data));
  }, [data]);

  return (
    <View style={styles.container}>
      <Categories navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    cursor: "pointer",
    paddingTop: 20,
  },
});
