import { StyleSheet, useColorScheme } from "react-native";
import { Link } from "expo-router";

import React from "react";

import { Colors } from "../constants/Colors";
// import { StatusBar } from "expo-status-bar";
import ShelfieView from "../components/ShelfieView";
import ShelfieText from "../components/ShelfieText";

const About = () => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];

  return (
    <>
      {/* <StatusBar value="auto" /> */}
      <ShelfieView
        style={[styles.container, { backgroundColor: theme.background }]}
      >
        <ShelfieText style={styles.title} title={true}>
          About
        </ShelfieText>
        <Link href="/" style={styles.link}>
          <ShelfieText>Go to Home</ShelfieText>
        </Link>
      </ShelfieView>
    </>
  );
};

export default About;

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
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
