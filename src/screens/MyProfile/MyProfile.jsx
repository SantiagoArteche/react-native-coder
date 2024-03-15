import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const MyProfile = ({ navigation }) => {
  const { imageCamera, user, profileImage } = useSelector(
    (state) => state.auth
  );
  console.log(profileImage);
  console.log(imageCamera);
  return (
    <View style={styles.container}>
      {imageCamera ? (
        <>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>
            User Mail: {user}
          </Text>
          <Image
            style={{ height: 200, width: 200, borderRadius: 5 }}
            source={{ uri: profileImage ?? imageCamera }}
          />
        </>
      ) : (
        <>
          <Image source={require("../../../assets/defaultProfile.jpg")} />
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("Image Selector")}
          >
            <Text style={styles.text}>Add Profile Picture</Text>
          </Pressable>
        </>
      )}
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  button: {
    marginTop: 22,
    backgroundColor: "purple",
    padding: 5,
    borderRadius: 5,
  },
  text: { fontSize: 22, color: "white" },
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
