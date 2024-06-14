import { COLORS } from "@/constants/colors"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import "react-native-reanimated"

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
    <GestureHandlerRootView style={{ flex: 1 }}>
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
    </GestureHandlerRootView>
  )
}
