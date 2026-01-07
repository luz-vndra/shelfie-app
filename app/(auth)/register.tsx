import React, { useContext, useState } from "react";
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

// import { UserContext } from "../../contexts/UserContext";
import { useUser } from "../../hooks/useUser";

import { Colors } from "../../constants/Colors";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  // const { register } = useContext(UserContext);
  const { register } = useUser();

  const handleSubmit = async () => {
    console.log("Register submitted!...", { email, password });
    setError(null);
    try {
      await register(email, password);
    } catch (error) {
      console.log("registration error:", { error });
      setError((error as any).message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ShelfieView style={styles.container}>
        <Spacer />
        <ShelfieText title={true} style={styles.title}>
          Register account
        </ShelfieText>

        <ShelfieTextInput
          placeholder="Email"
          style={{ width: "80%", marginBottom: 20 }}
          keyboardType="email-address" // no auto-validation - only kayboard layout
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
          <Text style={{ color: "#f2f2f2" }}>Register</Text>
        </ShelfiePressable>

        <Spacer />
        {error && <Text style={styles.error}>{error}</Text>}

        <Spacer height={100} />
        <Link href="/login">
          <ShelfieText style={{ textAlign: "center" }}>
            Login To Account Instead
          </ShelfieText>
        </Link>
      </ShelfieView>
    </TouchableWithoutFeedback>
  );
};

export default Register;

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
