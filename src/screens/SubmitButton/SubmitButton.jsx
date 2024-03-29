import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const SubmitButton = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    width: "60%",
    marginTop: 5,
  },
  text: {
    color: "white",

    fontSize: 22,
  },
});
