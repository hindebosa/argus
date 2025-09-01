import ArgusButton from "@/components/ArgusButton";
import ArgusText from "@/components/ArgusText";
import React, { useRef, useState } from "react";
import { Animated, FlatList, StyleSheet, View } from "react-native";
import { carouselData } from "../constants/carouselData";
import Pagination from "./pagination";
import SliderItem from "./sliderItem";

const GetStartedSlider = () => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = (event: any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({ viewableItems }: any) => {
    // console.log('viewableItems', viewableItems);
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;
  return (
    <View>
      <ArgusText
        size="xlarge"
        weight="bold"
        style={{ textAlign: "center", color: "#FF8473", marginTop: "5%" }}
      >
        Argus
      </ArgusText>
      <View>
        <FlatList
          data={carouselData()}
          renderItem={({ item }) => <SliderItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onScroll={handleOnScroll}
          onViewableItemsChanged={handleOnViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
      </View>
      <View style={{ marginTop: "25%" }}>
        <Pagination data={carouselData()} scrollX={scrollX} index={index} />
      </View>
      <View style={styles.bottomView}>
        <ArgusButton
          label="Get Started"
          onPress={() => {}}
          containerStyle={styles.button}
        />
        <ArgusText style={{ marginTop: 5, color: "gray" }}>
          Already have an account?
          <ArgusText weight="semibold" style={{ color: "#91C788" }}>
            Sign In
          </ArgusText>
        </ArgusText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomView: {
    marginTop: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#91C788",
    padding: 22,
    borderRadius: 40,
    width: "60%",
  },
});

export default GetStartedSlider;
