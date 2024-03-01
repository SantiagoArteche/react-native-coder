import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import cart from "../../data/cart.json";
import CartItem from "../../components/CartItem/CartItem";
export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce(
      (acum, el) => (acum += el.quantity * el.price),
      0
    );

    setTotal(total);

    setCartItems(cart);
  }, [cart]);

  return (
    <View>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <Text>Total: $ {total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
