import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function InputForm({ label, error, onChange, isSecure }) {
  const [input, setInput] = useState("");

  const onChangeText = (text) => {
    setInput(text);
    onChange(text);
  };
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.subtitle}>{label}</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",

    justifyContent: "flex-start",

    alignItems: "center",

    width: "100%",
  },

  subtitle: {
    width: "90%",

    fontSize: 16,
  },

  error: {
    fontSize: 16,
    padding: 5,
    color: "red",

    fontStyle: "italic",
  },

  input: {
    width: "90%",

    borderWidth: 0,

    borderBottomWidth: 3,

    borderBottomColor: "blue",

    padding: 2,

    fontSize: 14,
  },
});
