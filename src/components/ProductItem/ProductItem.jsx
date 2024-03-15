import {
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import { setProductId } from "../../store/slices/shop/shopSlice";
import { useDispatch, useSelector } from "react-redux";

export const ProductItem = ({ product, navigation }) => {
  const [isPortrait, setIsPortrait] = useState(true);
  const [isLandscape, setIsLandscape] = useState(false);
  const { width, height } = useWindowDimensions();

  const dispatch = useDispatch();

  useEffect(() => {
    if (height > width) {
      setIsPortrait(true);
      setIsLandscape(false);
    } else {
      setIsPortrait(false);
      setIsLandscape(true);
    }
  }, [width, height]);

  const onProductIdSelected = () => {
    dispatch(setProductId({ id: product?.id }));

    navigation.navigate("ItemListDetail", { id: product?.id });
  };
  return (
    <Card style={styles.products}>
      <Pressable onPress={onProductIdSelected}>
        <Text style={styles.textProduct}>{product.title}</Text>
      </Pressable>

      <Image style={styles.image} source={{ uri: product.images[0] }} />
    </Card>
  );
};

const styles = StyleSheet.create({
  products: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  textProduct: {
    fontFamily: "KanitItalyBold",
    fontSize: 20,
    width: "70%",
    color: "black",
  },
  image: {
    minHeight: 90,
    minWidth: 90,
    width: 70,
    height: 70,
  },
});
