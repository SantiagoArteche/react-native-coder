import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import CartItem from "../../components/CartItem/CartItem";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../../services/shop-service";

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const { items } = useSelector((state) => state.cart);

  const [triggerPost, result] = usePostOrderMutation();

  useEffect(() => {
    const total = items.reduce(
      (acum, el) => (acum += el.quantity * el.price),
      0
    );

    setTotal(total);

    setCartItems(items);
  }, [items]);

  const sendOrder = () => {
    triggerPost({ cartItems, total, user: "loggedUser" });
  };
  return (
    <View>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CartItem item={item} />}
          />
          <Text>Total: $ {total}</Text>
          <Pressable onPress={sendOrder}>
            <Text>Confirm order</Text>
          </Pressable>
        </>
      ) : (
        <Text>Empty cart</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});
