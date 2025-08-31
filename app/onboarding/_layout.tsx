import { Stack } from "expo-router";
import React from "react";

const OnboardingLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#91C788" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        headerShown: false,
      }}
    />
  );
};

export default OnboardingLayout;
