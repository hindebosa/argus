import React from "react";
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import AText from "./AText";

type ArgusButtonProps = {
  containerStyle?: ViewStyle;
  onPress?: () => void;
  loading?: boolean;
  label?: string;
  disabled?: boolean;
  textStyle?: TextStyle;
};

function ArgusButton({
  containerStyle,
  onPress,
  disabled,
  loading,
  label,
  textStyle,
}: ArgusButtonProps) {
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      onPress={onPress}
      style={[styles.container, containerStyle]}
    >
      {loading ? (
        <ActivityIndicator size={Platform.OS === "android" ? 14 : 14} />
      ) : (
        <AText style={[styles.label, textStyle]}>{label}</AText>
      )}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ArgusButton;
