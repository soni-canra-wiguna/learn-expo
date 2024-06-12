import { View, Text, StyleSheet } from "react-native"
import React from "react"
import ScreenWrapper from "@/components/screen-wrapper"
import { defaultStyle } from "@/constants/default-styles"

const ChatScreen = () => {
  return (
    <ScreenWrapper title="Chat">
      <View style={[styles.container, defaultStyle.wrapper]}>
        <Text>hello chat</Text>
      </View>
    </ScreenWrapper>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
})
