import { Pressable, Text, TextInput, StyleSheet } from "react-native";

export const Input = ({ addItemToList, handleInputValue, inputValue }) => {
  return (
    <>
      <TextInput
        style={style.input}
        placeholderTextColor={"gray"}
        placeholder="Ingrese un producto..."
        value={inputValue}
        onChangeText={handleInputValue}
      />
      <Pressable onPress={addItemToList}>
        <Text style={style.inputPressable}>Añadir a la lista</Text>
      </Pressable>
    </>
  );
};

const style = StyleSheet.create({
  input: {
    fontSize: 16,
    marginVertical: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    height: 40,
    width: 200,
    borderColor: "black",
    borderWidth: 3,
  },

  inputPressable: {
    backgroundColor: "black",
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    color: "white",
  },
});
