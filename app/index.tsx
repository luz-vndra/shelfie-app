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
      <Text>Reading List App</Text>
      <Spacer />

      <Link href="/about" style={styles.link}>
        <ShelfieText>Go to About</ShelfieText>
      </Link>
      <Link href="/contact" style={styles.link}>
        <ShelfieText>Go to Contact</ShelfieText>
      </Link>
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
