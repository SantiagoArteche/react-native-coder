import { Text, View, Image } from "react-native";
import products from "../../data/products.json";
import { useEffect, useState } from "react";

export const ItemListDetail = ({ productDetailId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productFinded = products.find((prod) => prod.id === productDetailId);
    setProduct(productFinded);
  }, []);
  return (
    <View>
      <Text>{product?.title}</Text>
      <Image
        style={{ height: 50, width: 50 }}
        source={{ uri: product?.images[0] }}
      />
    </View>
  );
};
