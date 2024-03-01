import { View, Text, Pressable, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../store/slices/counter/counterSlice";

export const Counter = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const plus = () => {
    if (value < 22) dispatch(increment());
  };

  const minus = () => {
    if (value > 0) dispatch(decrement());
  };

  const resetValue = () => {
    if (value !== 0) dispatch(reset());
  };
  const incrementByAmo = (amount) => {
    dispatch(incrementByAmount(3));
  };
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.buttons} onPress={minus}>
          -
        </Text>
      </Pressable>
      <Text style={{ fontSize: 33 }}>{value}</Text>
      <Pressable>
        <Text style={styles.buttons} onPress={plus}>
          +
        </Text>
      </Pressable>
      <Pressable>
        <Text style={styles.buttons} onPress={resetValue}>
          Reset
        </Text>
      </Pressable>
      <Pressable>
        <Text style={styles.buttons} onPress={incrementByAmo}>
          Increment by amount
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 5,
  },
  buttons: {
    backgroundColor: "blue",
    padding: 5,
    color: "white",
    borderRadius: 3,
    fontSize: 22,
  },
});
