import React from "react";

import { Text, TextStyle, useColorScheme, TextProps } from "react-native";
import { Colors } from "../constants/Colors";

// type ShelfieTextProps = React.ComponentProps<typeof Text>;
interface ShelfieTextProps extends TextProps {
  style?: TextStyle;
  title?: boolean;
}

const ShelfieText: React.FC<ShelfieTextProps> = ({
  style,
  title = false,
  ...props
}) => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];

  const textColor = title ? theme.title : theme.text;

  return <Text style={[{ color: textColor, ...style }]} {...props} />;
};

export default ShelfieText;
