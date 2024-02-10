import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

export const Search = ({ setProdSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (value) => setInputValue(value);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleInputValue}
        value={inputValue}
        placeholder="Filtra los productos..."
      />
      <Pressable onPress={() => setProdSearch(inputValue)}>
        <Text style={styles.button}>Buscar Producto</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    marginBottom: 20,
    marginHorizontal: 5,
  },
  button: {
    padding: 15,
    backgroundColor: "red",
    color: "white",
    fontWeight: "bold",
    width: 140,
  },
  input: {
    height: 30,
    padding: 20,
    borderColor: "black",
    borderWidth: 3,
    marginRight: 12,
    width: 200,
    height: 60,
  },
});
