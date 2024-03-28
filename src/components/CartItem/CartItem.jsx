import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";

const CartItem = ({ item, total, sendOrder }) => {
  return (
    <View style={styles.container}>
      <View key={item.id}>
        <Text style={styles.text}>Title: {item.title}</Text>
        <Text style={styles.text}>Brand: {item.brand}</Text>
        <Text style={styles.text}>Description: {item.description}</Text>
        <Text style={styles.text}>Price: $ {item.price}</Text>
        <Text style={styles.text}>Quantity: {item.quantity}</Text>
        <Image style={styles.image} source={{ uri: item.images[0] }} />
      </View>
      <View style={styles.container}>
        <Text style={styles.total}>Total: $ {total}</Text>
        <Pressable onPress={sendOrder} style={styles.button}>
          <Text style={{ color: "white", fontSize: 22 }}>Confirm order</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    height: 550,
    flexDirection: "column",
    alignItems: "center",

    gap: 20,
  },
  image: {
    minHeight: 55,
    minWidth: 55,
    width: 35,
    height: 35,
  },
  button: {
    backgroundColor: "red",
    padding: 10,

    borderRadius: 5,
  },
  total: {
    color: "purple",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
