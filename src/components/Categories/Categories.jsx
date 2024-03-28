import { FlatList, StyleSheet, Text, View } from "react-native";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import { useGetCategoriesQuery } from "../../services/shop-service";

export const Categories = ({ navigation }) => {
  const { data: categories, isLoading } = useGetCategoriesQuery();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.isLoading}>Cargando...</Text>
      </View>
    );
  }

  return (
    <>
      <FlatList
        style={{ flexGrow: 0 }}
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem navigation={navigation} category={item} />
        )}
        keyExtractor={(category) => category}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  isLoading: {
    fontSize: 40,
  },
});
