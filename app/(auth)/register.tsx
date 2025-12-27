import { StyleSheet, Text } from "react-native";

import React from "react";
import { Link } from "expo-router";

import ShelfieView from "../../components/ShelfieView";
import Spacer from "../../components/Spacer";
import ShelfieText from "../../components/ShelfieText";
import ShelfiePressable from "../../components/ShelfiePressable";

const Register = () => {
  const handleSubmit = () => {
    console.log("Register submitted!...");
  };

  return (
    <ShelfieView style={styles.container}>
      <Spacer />
      <ShelfieText title={true} style={styles.title}>
        Register account
      </ShelfieText>

      <ShelfiePressable onPress={handleSubmit}>
        <Text style={{ color: "#f2f2f2" }}>Register</Text>
      </ShelfiePressable>

      <Spacer height={100} />
      <Link href="/login">
        <ShelfieText style={{ textAlign: "center" }}>
          Login to Account
        </ShelfieText>
      </Link>
    </ShelfieView>
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
});
