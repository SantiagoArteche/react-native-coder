import { Text, View, FlatList } from "react-native";

import OrderItem from "../../components/OrderItem/OrderItem";
import { useSelector } from "react-redux";
import { useGetOrdersQuery } from "../../services/shop-service";

export const Order = () => {
  const { data: orders, isLoading } = useGetOrdersQuery();

  const ordersObj = orders || {};
  const ordersArray = Object.keys(ordersObj).map((key) => ({
    id: key,
    ...ordersObj[key],
  }));
  console.log(ordersArray.id);
  return (
    <View>
      <FlatList
        data={ordersArray}
        renderItem={({ item }) => <OrderItem item={item} />}
        keyExtractor={(orders) => orders.id}
      />
    </View>
  );
};
