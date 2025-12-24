import { StyleSheet, useColorScheme } from "react-native";
import { Stack } from "expo-router";

import React from "react";

import { Colors } from "../constants/Colors";

const RootLayout = () => {
  const colorScheme = useColorScheme() ?? "light";
  console.log("Current color scheme:", colorScheme);

  const theme = Colors[colorScheme];

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.navBackground,
        },
        headerTintColor: theme.title,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen
        name="contact"
        options={{ title: "Contact", headerShown: false }}
      />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
