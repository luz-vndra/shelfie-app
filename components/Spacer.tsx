// import { View } from "react-native";
// import React from "react";
// import type { ViewProps } from "react-native";

// type ShelfieViewProps =  React.ComponentProps<typeof View>
// interface SpacerProps extends ViewProps {}

// const Spacer: React.FC<SpacerProps> = ({ style }) => {
//   return <View style={[{ width: "100%", height: 40 }, style]} />;
// };

// export default Spacer;

/* WHAT WORKS FOR TS COMPILER */

import { View, ViewStyle } from "react-native";
import React from "react";

interface SpacerProps {
  /** Width of the spacer – number (pixels) or string like '100%' */
  width?: ViewStyle["width"];

  /** Height of the spacer – number (pixels) or string */
  height?: ViewStyle["height"];
}

const Spacer: React.FC<SpacerProps> = ({ width = "100%", height = 40 }) => {
  return <View style={[{ width, height }]} />;
};

export default Spacer;
