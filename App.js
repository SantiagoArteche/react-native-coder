import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeCoder}>Hola, Coder!</Text>
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
  welcomeCoder: {
    backgroundColor: "red",
    borderRadius: 3,
    padding: 10,
    marginBottom: 2,
    color: "black",
    fontWeight: "bold",
    fontSize: 50,
  },
});
