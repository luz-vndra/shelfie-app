import { StyleSheet } from "react-native";

import React from "react";
import { Link } from "expo-router";

import ShelfieView from "../../components/ShelfieView";
import Spacer from "../../components/Spacer";
import ShelfieText from "../../components/ShelfieText";

const Login = () => {
  return (
    <ShelfieView style={styles.container}>
      <Spacer />
      <ShelfieText title={true} style={styles.title}>
        Login to your account
      </ShelfieText>

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
  },
});
