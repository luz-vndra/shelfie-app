import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import Logo from "../assets/img/logo_light.png";
import { Link } from "expo-router";

// shelfie primivites: themed components
import ShelfieView from "../components/ShelfieView";
import ShelfieLogo from "../components/ShelfieLogo";
import Spacer from "../components/Spacer";
import ShelfieText from "../components/ShelfieText";

const Home = () => {
  return (
    <ShelfieView style={styles.container}>
      <ShelfieLogo style={styles.logo} />
      <ShelfieText title={true} style={styles.title}>
        The Number 1
      </ShelfieText>
      <Spacer height={10} />
      <ShelfieText>Reading List App</ShelfieText>
      <Spacer />

      {/* Login Route */}
      <Link href="/login" style={styles.link}>
        <ShelfieText>Login</ShelfieText>
      </Link>

      {/* Register Route */}
      <Link href="/register" style={styles.link}>
        <ShelfieText>Register</ShelfieText>
      </Link>

      {/* Profile Route */}
      <Link href="/profile" style={styles.link}>
        <ShelfieText>Profile</ShelfieText>
      </Link>

      {/* past lectures' */}
      {/* <Link href="/about" style={styles.link}>
        <ShelfieText>Go to About</ShelfieText>
      </Link>
      <Link href="/contact" style={styles.link}>
        <ShelfieText>Go to Contact</ShelfieText>
      </Link> */}
    </ShelfieView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  logo: {
    margin: 20,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
