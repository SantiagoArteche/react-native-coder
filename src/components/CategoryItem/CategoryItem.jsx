import { Text, StyleSheet, View, Pressable } from "react-native";
import Card from "../Card/Card";

export const CategoryItem = ({ selectCategory, category }) => {
  console.log(category);
  return (
    <Card>
      <View style={styles.container}>
        <Pressable
          onPress={() => {
            selectCategory(category);
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
  textCategory: { fontSize: 30, fontFamily: "KanitItalyBold" },
});
