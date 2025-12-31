import { TextInput, TextInputProps, useColorScheme } from "react-native";
import React from "react";

import { Colors } from "../constants/Colors";

interface ShelfieTextInputProps extends TextInputProps {}

const ShelfieTextInput: React.FC<ShelfieTextInputProps> = ({
  style,
  ...props
}) => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];

  return (
    <TextInput
      placeholderTextColor={"#999"}
      style={[
        {
          backgroundColor: theme.uiBackground,
          color: theme.text,
          padding: 20,
          borderRadius: 6,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ShelfieTextInput;
