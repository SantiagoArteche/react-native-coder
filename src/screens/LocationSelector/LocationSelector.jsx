import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import * as Location from "expo-location";
import MapPreview from "../../components/MapPreview/MapPreview";
import { googleAPI } from "../../firebase/googleAPI";
import { useDispatch, useSelector } from "react-redux";
import { setUserLocation } from "../../store/slices/auth/authSlice";
import { usePostUserLocationMutation } from "../../services/shop-service";
export const LocationSelector = () => {
  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
  });
  const [error, setError] = useState(null);
  const [address, setAddress] = useState(null);
  const [triggerPostAddress, result] = usePostUserLocationMutation();
  const dispatch = useDispatch();
  const { localId } = useSelector((state) => state.auth);
  console.log(localId);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync();
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (location.latitude) {
          const url_reverse_geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleAPI.mapStatic}`;

          const response = await fetch(url_reverse_geocode);
          const data = await response.json();
          setAddress(data.results[0].formatted_address);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [location]);

  const onConfirmAddress = () => {
    const locationFormatted = {
      latitude: location?.latitude,
      longitude: location?.longitude,
      address,
    };
    dispatch(setUserLocation(locationFormatted));
    triggerPostAddress({ localId, location: locationFormatted });
  };

  return (
    <View style={styles.container}>
      <Text>My Adresses</Text>
      {location.latitude ? (
        <View style={styles.container}>
          <Text>
            lat: {location.latitude}, long: {location.longitude}
          </Text>
          <MapPreview location={location} />
          <Text>{address}</Text>
          <Pressable onPress={onConfirmAddress} style={styles.button}>
            <Text style={styles.text}>Confirm Address</Text>
          </Pressable>
        </View>
      ) : (
        <Text>{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 22,
    backgroundColor: "purple",
    padding: 5,
    borderRadius: 5,
  },
  text: { fontSize: 22, color: "white" },
});
