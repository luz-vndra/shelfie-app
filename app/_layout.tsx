import { StyleSheet, useColorScheme } from "react-native";
import { Stack } from "expo-router";

import React from "react";

import { Colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  const colorScheme = useColorScheme() ?? "light";
  console.log("Current color scheme:", colorScheme);

  const theme = Colors[colorScheme];

  return (
    <>
      {/* <StatusBar value="auto" /> => Please don't use this 
      -- Outdated tech and breaks the top portion of the app on Mi A3 
      -- Kinda iffy -- this behavior is seen in UPI UI when entering the PIN also */}
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.navBackground,
          },
          headerTintColor: theme.title,
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen
          name="(auth)" // removes the string "(auth)" text piece from the header in the login and register pages
          options={{ title: "(auth)", headerShown: false }}
        />
        {/* <Stack.Screen name="about" options={{ title: "About" }} />
        <Stack.Screen
          name="contact"
          options={{ title: "Contact", headerShown: false }}
        /> */}
        <Stack.Screen
          name="(dashboard)" // removes the string "(auth)" text piece from the header in the login and register pages
          options={{ title: "(dashboard)", headerShown: false }}
        />
      </Stack>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
