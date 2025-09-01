import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    SignikaRegular: require("../assets/fonts/Signika-Regular.ttf"),
    SignikaLight: require("../assets/fonts/Signika-Light.ttf"),
    SignikaMedium: require("../assets/fonts/Signika-Medium.ttf"),
    SignikaSemiBold: require("../assets/fonts/Signika-SemiBold.ttf"),
    SignikaBold: require("../assets/fonts/Signika-Bold.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <GestureHandlerRootView>
        <Stack initialRouteName="getStarted">
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="getStarted" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
