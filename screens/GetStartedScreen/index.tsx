import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GetStartedSlider from "./components/slider";

function GetStartedScreen() {
  return (
    <SafeAreaView>
      <GetStartedSlider />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default GetStartedScreen;
