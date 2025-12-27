import React from "react";

import { StyleSheet, Text } from "react-native";

import { Link } from "expo-router";

import ShelfieView from "../../components/ShelfieView";
import Spacer from "../../components/Spacer";
import ShelfieText from "../../components/ShelfieText";
import ShelfiePressable from "../../components/ShelfiePressable";

const Login = () => {
  const handleSubmit = () => {
    console.log("Login submitted!...");
  };

  return (
    <ShelfieView style={styles.container}>
      <Spacer />
      <ShelfieText title={true} style={styles.title}>
        Login to your account
      </ShelfieText>
      {/* 
      <ShelfieText style={{ color: "f2f2f2", borderColor: "red" }} title={true}>
        Login
      </ShelfieText> */}

      <ShelfiePressable onPress={handleSubmit}>
        <Text style={{ color: "#f2f2f2" }}>Login</Text>
      </ShelfiePressable>

      <Spacer height={100} />
      <Link href="/register">
        <ShelfieText style={{ textAlign: "center" }}>Go Register</ShelfieText>
      </Link>
    </ShelfieView>
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
});
