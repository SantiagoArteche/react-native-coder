import { Text, StyleSheet } from "react-native";
import Card from "../Card/Card";

export const ProductItem = ({ product }) => {
  return (
    <Card style={styles.products}>
      <Text style={styles.textProduct}>{product.title}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  products: {
    marginVertical: 20,
  },
  textProduct: {
    fontFamily: "KanitItalyBold",
    fontSize: 30,
  },
});
