import { View, Text, StyleSheet } from "react-native"
import React from "react"
import { Link } from "expo-router"
import { COLORS } from "@/constants/colors"

const HomeScreen = () => {
  return (
    <View>
      <Text style={{ fontWeight: "400", fontFamily: "" }}>HomeScreen</Text>
      <Link href={"/(modals)/detail-product"} style={styles.link}>
        go to detail
      </Link>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  link: {
    fontSize: 40,
    color: COLORS.primary,
  },
})
