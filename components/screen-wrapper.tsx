import { Dimensions, StyleSheet, View } from "react-native"
import TopBar from "./top-bar"
import { Stack } from "expo-router"
import { COLORS } from "@/constants/colors"

const ScreenWrapper = ({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) => {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          header: () => <TopBar title={title} />,
        }}
      />
      {children}
    </View>
  )
}

export default ScreenWrapper

const { height } = Dimensions.get("screen")

const styles = StyleSheet.create({
  container: {
    minHeight: height,
    height: "100%",
    width: "100%",
    backgroundColor: COLORS.background,
    paddingTop: 60,
  },
})
