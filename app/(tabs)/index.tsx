import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableHighlight,
} from "react-native"
import React from "react"
import ScreenWrapper from "@/components/screen-wrapper"
import ListImage from "@/components/list-image"
import { COLORS } from "@/constants/colors"
import { Ionicons } from "@expo/vector-icons"
import { defaultStyle } from "@/constants/default-styles"
import BottomSheetComp from "@/components/bottom-sheet"

const HomeScreen = () => {
  return (
    <ScreenWrapper title="Lazora">
      <View style={[styles.container]}>
        <ListImage />
        <View style={[styles.wrapper__content, defaultStyle.wrapper]}>
          <View style={styles.top}>
            <Text style={styles.title}>Products</Text>
            <TouchableHighlight
              style={{
                backgroundColor: COLORS.primaryAccent,
                padding: 6,
                borderRadius: 100 / 2,
              }}
            >
              <Ionicons name="arrow-forward" size={24} color={COLORS.primary} />
            </TouchableHighlight>
          </View>
        </View>
        <BottomSheetComp />
      </View>
    </ScreenWrapper>
  )
}

export default HomeScreen

const { height } = Dimensions.get("screen")

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    flex: 1,
  },
  wrapper__content: {
    display: "flex",
    flexDirection: "column",
    marginVertical: 16,
    gap: 10,
  },
  top: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "googlesans-md",
    fontSize: 20,
    color: COLORS.foreground,
  },
})
