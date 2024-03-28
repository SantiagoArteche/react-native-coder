import { Text, StyleSheet, View, Pressable } from "react-native";

import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/auth/authSlice";
import { deleteSession } from "../../db";

export const Header = ({ title }) => {
  const dispatch = useDispatch();
  const { localId, user } = useSelector((state) => state.auth);

  const onLogout = async () => {
    await deleteSession({ localId });
    dispatch(logout());
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      {user && (
        <Pressable position="absolute" right={10} onPress={onLogout}>
          <MaterialIcons name="logout" size={30} color="black" />
        </Pressable>
      )}

      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "purple",
    padding: 18,
  },
  header: {
    width: "100%",
    textAlign: "center",
    fontSize: 33,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
