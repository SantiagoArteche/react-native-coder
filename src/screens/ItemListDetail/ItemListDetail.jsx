import { Text, View, Image, Pressable } from "react-native";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const ItemListDetail = () => {
  const [product, setProduct] = useState(null);
  const { productIdSelected, allProducts } = useSelector((state) => state.shop);

  useEffect(() => {
    const productFinded = allProducts.find(
      (prod) => prod.id == productIdSelected.id
    );
    console.log(productFinded);
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
