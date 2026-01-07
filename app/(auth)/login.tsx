import React, { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { Link } from "expo-router";

import ShelfieView from "../../components/ShelfieView";
import Spacer from "../../components/Spacer";
import ShelfieText from "../../components/ShelfieText";
import ShelfiePressable from "../../components/ShelfiePressable";
import ShelfieTextInput from "../../components/ShelfieTextInput";

import { useUser } from "../../hooks/useUser";

import { Colors } from "../../constants/Colors";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const { login } = useUser();

  const handleSubmit = async () => {
    console.log("Login submitted!...");
    console.log({ email, password });

    setError(null);

    try {
      await login(email, password);
    } catch (error) {
      setError((error as any).message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ShelfieView style={styles.container}>
        <Spacer />
        <ShelfieText title={true} style={styles.title}>
          Login to your account
        </ShelfieText>

        <ShelfieTextInput
          placeholder="Email"
          style={{ width: "80%", marginBottom: 20 }}
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />

        <ShelfieTextInput
          placeholder="Password"
          style={{ width: "80%", marginBottom: 20 }}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />

        <ShelfiePressable onPress={handleSubmit}>
          <Text style={{ color: "#f2f2f2" }}>Login</Text>
        </ShelfiePressable>

        <Spacer />
        {error && <Text style={styles.error}>{error}</Text>}

        <Spacer height={100} />
        <Link href="/register">
          <ShelfieText style={{ textAlign: "center" }}>
            Register Instead
          </ShelfieText>
        </Link>
      </ShelfieView>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    color: Colors.warning,
    padding: 10,
    backgroundColor: "#f5c1c8",
    borderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 10,
  },
});
