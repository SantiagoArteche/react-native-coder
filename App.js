import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  Pressable,
} from "react-native";

const productsArray = [
  { name: "Zapatillas", id: 1 },
  { name: "Remera", id: 2 },
  { name: "Campera", id: 3 },
  { name: "Bolso", id: 4 },
];
export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [itemList, setItemList] = useState(productsArray);

  const handleInputValue = (value) => setInputValue(value);

  const deleteItem = (id) => {
    const prodsFiltrados = itemList.filter((prods) => prods.id !== id);
    setItemList(prodsFiltrados);
  };

  const date = Date.now();

  const addItemToList = () => {
    const object = {
      name: inputValue,
      id: date,
    };

    setItemList([...itemList, object]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholderTextColor={"gray"}
          placeholder="Ingrese un producto..."
          value={inputValue}
          onChangeText={handleInputValue}
        />
        <Pressable onPress={addItemToList}>
          <Text style={styles.inputPressable}>Anadir a la lista</Text>
        </Pressable>
      </View>
      <View>
        <FlatList
          data={itemList}
          renderItem={({ item }) => (
            <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
              <Text>{item.name}</Text>
              <Pressable onPress={() => deleteItem(item.id)}>
                <Text>Borrar</Text>
              </Pressable>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
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
  input: {
    fontSize: 20,
    marginVertical: 20,
    paddingVertical: 30,
    paddingHorizontal: 10,
    height: 40,
    width: 500,
    borderColor: "black",
    borderWidth: 3,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  inputPressable: {
    backgroundColor: "black",
    padding: 10,
    fontSize: 20,
    borderRadius: 5,
    color: "white",
  },
});
