import { Text, StyleSheet, View, Pressable } from "react-native";
import Card from "../Card/Card";

import { setCategorySelected } from "../../store/slices/shop/shopSlice";
import { useDispatch } from "react-redux";

export const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <View style={styles.container}>
        <Pressable
          onPress={() => {
            dispatch(setCategorySelected(category));
            navigation.navigate("ItemListCategories");
          }}
        >
          <Text style={styles.textCategory}>{category}</Text>
        </Pressable>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  textCategory: {
    fontSize: 30,
    color: "white",
    backgroundColor: "blue",
    borderRadius: 3,
    fontFamily: "KanitItalyBold",
  },
});
