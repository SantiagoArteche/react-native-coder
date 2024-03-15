import { Pressable, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { useSignUpMutation } from "../../services/auth-service";
import SubmitButton from "../SubmitButton/SubmitButton";
import InputForm from "../../components/InputForm";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/auth/authSlice";
import { signupSchema } from "../../validations/signupSchema";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [triggerSignup, result] = useSignUpMutation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    try {
      signupSchema.validateSync({
        email,
        password,
        confirmPassword,
      });
      triggerSignup({ email, password });
    } catch (error) {
      switch (error.path) {
        case "email":
          setErrorEmail(error.message);
          break;
        case "password":
          setErrorPassword(error.message);
          break;
        case "confirmPassword":
          setErrorConfirmPassword(error.message);
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    if (result.data) {
      dispatch(setUser(result));
    }
  }, [result]);
  return (
    <View>
      <View>
        <Text>Register</Text>
        <InputForm label={"Email"} error={errorEmail} onChange={setEmail} />
        <InputForm
          label={"Password"}
          error={errorPassword}
          onChange={setPassword}
        />
        <InputForm
          label={"Confirm Password"}
          error={errorConfirmPassword}
          onChange={setconfirmPassword}
        />
        <SubmitButton title={"Register"} onPress={onSubmit} />
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.text}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    width: 70,
    borderRadius: 5,
    padding: 4,
    marginTop: 5,
  },
  text: {
    fontSize: 22,
  },
});
