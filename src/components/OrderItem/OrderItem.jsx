import { StyleSheet, Text, View } from "react-native";
import React from "react";

const OrderItem = ({ item }) => {
  const total = item.items.reduce(
    (acum, el) => (acum += el.price * el.quantity),
    0
  );
  return (
    <View style={{ marginBottom: 30 }}>
      <Text>Order Id: {item.id}</Text>
      <Text>User Id: {item.userId}</Text>
      <Text>
        Creada:
        {` ${new Date(item.createdAt).toLocaleString()}`}
      </Text>
      <Text>Total: $ {total}</Text>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({});
