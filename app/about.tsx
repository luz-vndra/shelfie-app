import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Link } from "expo-router";

import React from "react";

import { Colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";

const About = () => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];

  return (
    <>
      <StatusBar value="auto" />
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.title, { color: theme.title }]}>About</Text>
        <Link href="/" style={styles.link}>
          Go to Home
        </Link>
      </View>
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
