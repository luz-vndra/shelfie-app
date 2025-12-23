import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import Logo from "../assets/img/logo_light.png";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.title}>The Number 1</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading List App</Text>
      <Link href="/about">Go to About</Link>
      <Link href="/contact">Go to Contact</Link>
    </View>
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
});
