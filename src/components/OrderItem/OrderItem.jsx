import { Text, View } from "react-native";
import React from "react";

const OrderItem = ({ item }) => {
  console.log(item);
  const total = item.cartItems.reduce(
    (acum, el) => (acum += el.price * el.quantity),
    0
  );
  console.log("asd");
  const discount = item.cartItems.reduce(
    (acum, el) => (acum += 100 - el.discountPercentage) / 100,
    0
  );

  return (
    <View style={{ marginBottom: 30 }}>
      {item.cartItems.map((order) => {
        return (
          <>
            <Text>Name: {order.title}</Text>
            <Text>Brand: {order.brand}</Text>
            <Text>Description: {order.description}</Text>
            <Text>Price: ${order.price}</Text>
            <Text>Quantity: {order.quantity}</Text>
            <Text>Discount: {order.discountPercentage}%</Text>
          </>
        );
      })}
      <Text>Total without discount: $ {total}</Text>
      <Text>Final Price: $ {(total * discount).toFixed(2)}</Text>
    </View>
  );
};

export default OrderItem;
