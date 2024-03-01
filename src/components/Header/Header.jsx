import { Text, StyleSheet } from "react-native";

import { StatusBar } from "expo-status-bar";
export const Header = ({ title }) => {
  return (
    <>
      <Text style={styles.header}>{title}</Text>
      <StatusBar style="light" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: "purple",
    width: "100%",
    textAlign: "center",
    fontSize: 33,
    fontWeight: "bold",
    padding: 18,
    textTransform: "capitalize",
  },
});
