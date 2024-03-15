import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { setImageCamera } from "../../store/slices/auth/authSlice";
import {
  useGetProfileImageQuery,
  usePostProfileImageMutation,
} from "../../services/shop-service";
const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const { localId } = useSelector((state) => state.auth);
  const [triggerSaveProfileImage, result] = usePostProfileImageMutation();
  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();

    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 1,
      });
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    }
  };

  const confirmImage = () => {
    dispatch(setImageCamera(image));
    triggerSaveProfileImage({ localId, image });
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      {image ? (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <Pressable onPress={pickImage}>
            <Text>Take another photo</Text>
          </Pressable>
          <Pressable onPress={confirmImage}>
            <Text>Confirm photo</Text>
          </Pressable>
        </>
      ) : (
        <View style={styles.noPhotoContainer}>
          <Text>No photo to show...</Text>
          <Pressable onPress={pickImage}>
            <Text>Take a photo</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  noPhotoContainer: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: "green",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 5,
    marginBottom: 22,
  },
});
