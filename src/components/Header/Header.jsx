import { Text, StyleSheet } from "react-native";

export const Header = () => {
  return <Text style={styles.header}>Off Store</Text>;
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "purple",
    width: "100%",
    textAlign: "center",
    padding: 3,
    fontSize: 45,
    fontWeight: "bold",
  },
});
