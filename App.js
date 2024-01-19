import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>Hola Coder!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyles: {
    backgroundColor: "red",
    borderRadius: 3,
    padding: 10,
    marginBottom: 2,
    color: "white",
    fontWeight: "bold",
    fontSize: 50,
  },
});
