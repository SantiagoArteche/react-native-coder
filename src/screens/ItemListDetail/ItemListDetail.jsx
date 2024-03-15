import { Text, View, Image, Pressable, StyleSheet } from "react-native";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/slices/shop/cartSlice";

export const ItemListDetail = ({ navigation, route }) => {
  const [product, setProduct] = useState(null);

  const { allProducts } = useSelector((state) => state.shop);
  const { id } = route.params;
  const dispatch = useDispatch();

  const onAddCart = () => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };
  useEffect(() => {
    const productFinded = allProducts?.find((prod) => prod.id === id);
    setProduct(productFinded);
  }, [id]);

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        gap: 30,
      }}
    >
      <Text style={{ fontSize: 40 }}>{product?.title}</Text>
      <Image
        style={{ height: 80, width: 80 }}
        source={{ uri: product?.images[0] }}
      />
      <Text style={{ fontSize: 30 }}>${product?.price}</Text>
      <Pressable onPress={onAddCart} style={styles.buyButton}>
        <Text style={styles.text}>Add to cart</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buyButton: {
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 22,
  },
});
