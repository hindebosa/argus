import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";
type FontWeight = "regular" | "medium" | "bold" | "light" | "semibold";
type FontSize = "small" | "mid" | "large" | "xlarge";

type ATextProps = TextProps & {
  weight?: FontWeight;
  size?: FontSize;
};

const ArgusText = ({
  children,
  weight = "regular",
  size = "mid",
  style,
  ...props
}: ATextProps) => {
  const fontStyle = [styles.base, styles[weight], styles[size], style];

  return (
    <Text {...props} style={fontStyle}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    fontFamily: "System",
  },
  light: {
    fontFamily: "SignikaLight",
  },
  regular: {
    fontFamily: "SignikaRegular",
  },
  medium: {
    fontFamily: "SignikaMedium",
  },
  semibold: {
    fontFamily: "SignikaSemiBold",
  },
  bold: {
    fontFamily: "SignikaBold",
  },
  // Font sizes
  small: {
    fontSize: 14,
  },
  mid: {
    fontSize: 16,
  },
  large: {
    fontSize: 20,
  },
  xlarge: {
    fontSize: 24,
  },
});

export default ArgusText;
