import { Stack } from "expo-router";
import React from "react";

function GetStartedLayout() {
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
}

export default GetStartedLayout;
