import React from "react";

import {
  Pressable,
  PressableProps,
  StyleSheet,
  PressableStateCallbackType,
} from "react-native";

import { Colors } from "../constants/Colors";

interface ShelfiePressableProps extends PressableProps {}

const ShelfiePressable: React.FC<ShelfiePressableProps> = ({
  style,
  ...props
}) => {
  return (
    <Pressable
      // Rudimentary JS Implementation
      // style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}

      // TypeScript Implementation ============================================================
      // The Problem (Super Simple Explanation)
      // Pressable's style prop is special. It can be:
      // ---> A normal object/array (like { padding: 20 })
      // ---> OR a function that gets { pressed: boolean } and returns a style

      // When you write this:
      // TypeScript
      // >>> style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}

      // TypeScript looks at your component's props and says:
      // "Wait, the user might pass a plain style object (like style={{ padding: 20 }}), ...
      // But you're treating style like it's a function that you can call? Nope — that could crash if it's not a function!"
      // You're mixing two things:
      // ---> Your default pressed effect (which needs the { pressed } state)
      // ---> The user's possible style (which could be object or function)

      // You can't just drop the user's style at the end of the array like that — TypeScript knows it might not be compatible.

      // The Fix (Senior-Level Safe Way)
      // We need to apply your defaults first, then safely add the user's style — whether it's an object or a function.
      style={(state: PressableStateCallbackType) => {
        // Base styles + pressed effect
        const baseStyles = [styles.btn, state.pressed && styles.pressed];

        // If user passed a function style, call it with the state, and output the resulting style object
        // If user passed a static style (object/array), just use it
        const userStyle = typeof style === "function" ? style(state) : style;

        // Combine everything: base + user override
        // return [
        //   { ...styles.btn, ...(state.pressed && styles.pressed) },
        //   userStyle,
        // ].flat();

        // Or simpler:
        return [baseStyles, userStyle].flat();
      }}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 6,
    marginVertical: 10,
    color: "f2f2f2",
  },
  pressed: {
    opacity: 0.5,
  },
});

export default ShelfiePressable;
