import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { Categories } from "../../components/Categories/Categories";

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Categories navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
  
    cursor: "pointer",
  },
});
