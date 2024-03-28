import { StyleSheet, Text, View } from "react-native";
import React from "react";

const OrderItem = ({ item }) => {
  const total = item.cartItems.reduce(
    (acum, el) => (acum += el.price * el.quantity),
    0
  );

  const discount = item.cartItems.reduce(
    (acum, el) => (acum += 100 - el.discountPercentage) / 100,
    0
  );

  return (
    <View style={{ marginBottom: 30 }}>
      {item.cartItems.map((order) => {
        return (
          <View key={`${order.id}-${Date.now()}`}>
            <Text style={styles.text}>Name: {order.title}</Text>
            <Text style={styles.text}>Brand: {order.brand}</Text>
            <Text style={styles.text}>Description: {order.description}</Text>
            <Text style={styles.text}>Price: ${order.price}</Text>
            <Text style={styles.text}>Quantity: {order.quantity}</Text>
            <Text style={styles.text}>
              Discount: {order.discountPercentage}%
            </Text>
          </View>
        );
      })}
      <Text style={styles.text}>Total without discount: $ {total}</Text>
      <Text style={{ fontSize: 33, fontWeight: "bold" }}>
        Final Price: $ {(total * discount).toFixed(2)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default OrderItem;
