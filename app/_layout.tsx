import { COLORS } from "@/constants/colors"
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import "react-native-reanimated"

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded] = useFonts({
    "googlesans-r": require("../assets/fonts/GoogleSans-Regular.ttf"),
    "googlesans-md": require("../assets/fonts/GoogleSans-Medium.ttf"),
    "googlesans-b": require("../assets/fonts/GoogleSans-Bold.ttf"),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <Stack
      screenOptions={{
        statusBarStyle: "light",
        statusBarColor: COLORS.background,
      }}
      // initialRouteName=""
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modals)/detail-product"
        options={{ presentation: "modal" }}
      />
    </Stack>
  )
}
