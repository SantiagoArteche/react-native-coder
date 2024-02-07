import { StatusBar } from "expo-status-bar";

import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";

import { Categories } from "../../components/Categories/Categories";

export const Home = ({ selectCategory }) => {
  return (
    <View style={styles.container}>
      <Categories selectCategory={selectCategory} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
  },
});
