import { Text, StyleSheet, View, Pressable } from "react-native";
import Card from "../Card/Card";

export const CategoryItem = ({ category, navigation }) => {
  return (
    <Card>
      <View style={styles.container}>
        <Pressable
          onPress={() => {
            navigation.navigate("ItemListCategories", { category });
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
    backgroundColor: "blue",
    borderRadius: 3,
    padding: 5,
    fontFamily: "KanitItalyBold",
  },
});
