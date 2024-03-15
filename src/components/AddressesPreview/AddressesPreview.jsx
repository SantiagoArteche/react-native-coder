import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
const AddressesPreview = ({ navigation }) => {
  const { location } = useSelector((state) => state.auth);
  console.log(location);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>lat: {location.latitude}</Text>
        <Text style={styles.text}>long: {location.longitude}</Text>
        <Text style={styles.text}>address: {location.address}</Text>
      </View>
      <Pressable
        onPress={() => navigation.navigate("Location")}
        style={styles.changeLocation}
      >
        <Text style={styles.textLocation}>
          Change Location <MaterialIcons size={30} name="location-on" />
        </Text>
      </Pressable>
    </View>
  );
};

export default AddressesPreview;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 50,
    backgroundColor: "red",
    marginTop: 30,
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: "black",
    textTransform: "capitalize",
    fontWeight: "bold",
    opacity: 0.6,
  },
  textLocation: {
    fontSize: 22,
    color: "white",
  },
  changeLocation: {
    backgroundColor: "black",
    marginTop: 10,
    padding: 7,
    borderRadius: 5,
  },
});
