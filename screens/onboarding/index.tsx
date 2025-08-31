import CookingIcon from "@/assets/icons/onboarding/cooking";
import EatingIcon from "@/assets/icons/onboarding/eating";
import MobileIcon from "@/assets/icons/onboarding/mobile";
import ArgusButton from "@/components/ArgusButton";
import AText from "@/components/AText";
import React from "react";
import { StyleSheet, View } from "react-native";
import PagerView from "react-native-pager-view";
import { SafeAreaView } from "react-native-safe-area-context";

function OnboardingScreen() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.headerView}>
        <AText
          size="xlarge"
          weight="semibold"
          style={{ color: "#91C788", marginTop: 15, marginBottom: "20%" }}
        >
          ARGUS
        </AText>
      </View>
      <PagerView style={styles.paperViewContainer} initialPage={0}>
        <View style={styles.page} key="1">
          <CookingIcon />
          <AText size="large" weight="semibold">
            Eat Healthy
          </AText>
          <AText
            size="small"
            weight="regular"
            style={{ textAlign: "center", width: "55%", color: "#00000073" }}
          >
            Maintaining good health should be the primary focus of everyone.
          </AText>
        </View>
        <View style={styles.page} key="2">
          <EatingIcon />
          <AText size="large" weight="semibold">
            Eat Fresh
          </AText>
          <AText
            size="small"
            style={{ textAlign: "center", width: "85%", color: "#00000073" }}
          >
            Browse thousands of healthy recipes from all over the world.
          </AText>
        </View>
        <View style={styles.page} key="3">
          <MobileIcon />
          <AText size="large" weight="semibold">
            Stay Active
          </AText>
          <AText
            size="small"
            style={{ textAlign: "center", width: "85%", color: "#00000073" }}
          >
            With amazing inbuilt tools you can track your progress.
          </AText>
        </View>
      </PagerView>

      <View style={styles.bottomView}>
        <ArgusButton
          label="Get Started"
          onPress={() => {}}
          containerStyle={styles.button}
        />
        <AText>
          Already have an account?{" "}
          <AText weight="semibold" style={{ color: "#91C788" }}>
            Sign In
          </AText>
        </AText>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerView: {
    alignItems: "center",
    marginVertical: 10,
  },
  paperViewContainer: {
    flex: 4,
  },
  page: {
    alignItems: "center",
    // height: "100%",
  },
  bottomView: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#91C788",
    padding: 22,
    borderRadius: 40,
    width: "60%",
  },
  signInView: {
    marginTop: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OnboardingScreen;
