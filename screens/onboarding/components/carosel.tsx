import AText from "@/components/AText";
import React from "react";
import { StyleSheet, View } from "react-native";
import { carouselData } from "../constants/onboardingCaroselData";

export const ArgusCarousel = () => {
  return carouselData.map((item) => (
    <View style={styles.page} key={item.id}>
      {item.icon}
      <AText size="large" weight="semibold">
        {item.title}
      </AText>
      <AText
        size="small"
        weight="regular"
        style={{ textAlign: "center", width: "85%", color: "#00000073" }}
      >
        {item.description}
      </AText>
    </View>
  ));
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    height: "100%",
    marginTop: "20%",
    alignItems: "center",
  },
});

export default ArgusCarousel;
