import { View, Text, StyleSheet, Dimensions } from "react-native"
import React from "react"
import ScreenWrapper from "@/components/screen-wrapper"
import { defaultStyle } from "@/constants/default-styles"

const HomeScreen = () => {
  return (
    <ScreenWrapper title="Lazora">
      <View style={[styles.container, defaultStyle.wrapper]}>
        <Text>hello homepage</Text>
      </View>
    </ScreenWrapper>
  )
}

export default HomeScreen

const { height } = Dimensions.get("screen")

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
})
