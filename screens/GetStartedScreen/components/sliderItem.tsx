import ArgusText from "@/components/ArgusText";
import React from "react";
import { Animated, Dimensions, Easing, StyleSheet, View } from "react-native";

type SliderItemProps = {
  item: {
    id: string;
    title: string;
    description: string;
    image: any;
  };
};
const { width } = Dimensions.get("screen");
const SliderItem = ({ item }: SliderItemProps) => {
  const translateYImage = new Animated.Value(40);

  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();
  return (
    <View style={styles.container}>
      <Animated.Image
        source={item.image}
        resizeMode="contain"
        style={[
          {
            transform: [
              {
                translateY: translateYImage,
              },
            ],
          },
        ]}
      />

      <View style={styles.content}>
        <ArgusText size="large" weight="regular">
          {item.title}
        </ArgusText>
        <ArgusText
          size="small"
          weight="regular"
          style={{ color: "gray", textAlign: "center" }}
        >
          {item.description}
        </ArgusText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width, // Make each item fill the screen width
    alignItems: "center",
    marginTop: "5%",
  },
  content: {
    alignItems: "center",
  },
});

export default SliderItem;
