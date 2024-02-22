import { Text, View, Image, Pressable } from "react-native";
import products from "../../data/products.json";
import { useEffect, useState } from "react";

export const ItemListDetail = ({ navigation, route }) => {
  const [product, setProduct] = useState(null);
  const { id } = route.params;
  useEffect(() => {
    const productFinded = products.find((prod) => prod.id === id);
    setProduct(productFinded);
  }, []);
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
      <Pressable>
        <Text>Buy</Text>
      </Pressable>
    </View>
  );
};
