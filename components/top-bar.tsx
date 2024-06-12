import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native"
import React from "react"
import { COLORS } from "@/constants/colors"
import { defaultStyle } from "@/constants/default-styles"
import Ionicons from "@expo/vector-icons/Ionicons"
import { MaterialCommunityIcons } from "@expo/vector-icons"

const TopBar = ({ title }: { title: string }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container, defaultStyle.wrapper]}>
        <Text style={styles.logo}>{title}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <TouchableHighlight
            style={{
              // backgroundColor: COLORS.primaryAccent,
              padding: 6,
              borderRadius: 100 / 2,
            }}
          >
            <Ionicons name="search-outline" size={24} color={COLORS.primary} />
          </TouchableHighlight>
          <TouchableHighlight
            style={{
              backgroundColor: COLORS.primaryAccent,
              padding: 6,
              borderRadius: 100 / 2,
            }}
          >
            <Ionicons
              name="notifications-outline"
              size={24}
              color={COLORS.primary}
            />
          </TouchableHighlight>
          <TouchableHighlight
            style={{
              backgroundColor: COLORS.primaryAccent,
              padding: 6,
              borderRadius: 100 / 2,
            }}
          >
            <MaterialCommunityIcons
              name="dots-vertical"
              size={24}
              color={COLORS.primary}
            />
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default TopBar

const { height } = Dimensions.get("screen")

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.foregroundAccent,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "static",
    marginBottom: 60,
  },
  logo: {
    fontFamily: "googlesans-md",
    fontSize: 25,
    color: COLORS.foreground,
  },
})
