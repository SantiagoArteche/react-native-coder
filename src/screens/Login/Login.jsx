import { Pressable, StyleSheet, Text, View } from "react-native";
import InputForm from "../../components/InputForm";
import { useEffect, useState } from "react";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useLoginMutation } from "../../services/auth-service";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/auth/authSlice";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("second");
  const [password, setPassword] = useState("second");
  const [triggerLogin, result] = useLoginMutation();
  const onSubmit = () => {
    triggerLogin({ email, password });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (result.data) {
      dispatch(setUser(result));
    }
  }, [result]);
  return (
    <View>
      <Text>Login</Text>
      <InputForm label={"Email"} error={""} onChange={setEmail} />
      <InputForm label={"Password"} error={""} onChange={setPassword} />
      <SubmitButton title="Login" onPress={onSubmit} />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.text}>Signup</Text>
      </Pressable>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    width: 80,
    borderRadius: 5,
    padding: 4,
    marginTop: 5,
  },
  text: {
    fontSize: 22,
  },
});
