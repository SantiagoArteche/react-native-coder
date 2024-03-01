import { Text, View, FlatList } from "react-native";
import orders from "../../data/orders.json";
import OrderItem from "../../components/OrderItem/OrderItem";
export const Order = () => {
  return (
    <View>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderItem item={item} />}
        keyExtractor={(order) => order.id}
      />
    </View>
  );
};
