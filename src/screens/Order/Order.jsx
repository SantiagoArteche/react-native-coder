import { Text, View, FlatList } from "react-native";

import OrderItem from "../../components/OrderItem/OrderItem";

import { useSelector } from "react-redux";

export const Order = () => {
  const { orders: storeOrder } = useSelector((state) => state.orders);

  return (
    <View>
      <FlatList
        data={storeOrder}
        renderItem={({ item }) => <OrderItem item={item} />}
        keyExtractor={(orders) => `${orders.id}-${Date.now()}`}
      />
    </View>
  );
};
