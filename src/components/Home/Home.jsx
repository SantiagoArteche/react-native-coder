import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ItemList } from "../ItemList/ItemList";
import { Input } from "../Input/Input";
import Constants from "expo-constants";

const productsArray = [
  { name: "Zapatillas", id: 1 },
  { name: "Remera", id: 2 },
  { name: "Campera", id: 3 },
  { name: "Bolso", id: 4 },
  { name: "Buzo", id: 5 },
];

export const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [itemList, setItemList] = useState(productsArray);

  const handleInputValue = (value) => setInputValue(value);

  const deleteItem = (id) => {
    const prodsFiltrados = itemList.filter((prods) => prods.id !== id);
    setItemList(prodsFiltrados);
  };

  const addItemToList = () => {
    const object = {
      name: inputValue,
      id: Date.now(),
    };

    setItemList([...itemList, object]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          addItemToList={addItemToList}
          handleInputValue={handleInputValue}
          inputValue={inputValue}
        />
      </View>

      <ItemList itemList={itemList} deleteItem={deleteItem} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
