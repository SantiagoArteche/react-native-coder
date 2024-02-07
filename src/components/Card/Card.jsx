import { StyleSheet, Text, View } from "react-native";

const Card = ({ children, style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Text>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
  },
});
export default Card;
