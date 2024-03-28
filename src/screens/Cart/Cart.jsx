import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import CartItem from "../../components/CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { usePostOrderMutation } from "../../services/shop-service";
import { setOrders } from "../../store/slices/shop/ordersSlice";

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
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
    dispatch(
      setOrders({ cartItems: cartItems, total: total, user: "loggedUser" })
    );
  };
  return (
    <View>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CartItem item={item} total={total} sendOrder={sendOrder} />
            )}
          />
        </>
      ) : (
        <Text>Empty cart</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});
