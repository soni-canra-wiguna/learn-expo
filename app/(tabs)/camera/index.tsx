import { View, Text, StyleSheet } from "react-native"
import React from "react"
import ScreenWrapper from "@/components/screen-wrapper"
import { defaultStyle } from "@/constants/default-styles"

const CameraScreen = () => {
  return (
    <ScreenWrapper title="Camera">
      <View style={[styles.container, defaultStyle.wrapper]}>
        <Text>hello Camera</Text>
      </View>
    </ScreenWrapper>
  )
}

export default CameraScreen

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
})
