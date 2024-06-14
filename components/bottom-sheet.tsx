// @ts-nocheck

import { View, Text, StyleSheet, Button } from "react-native"
import React, { useCallback, useMemo, useRef } from "react"
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet"
import { COLORS } from "@/constants/colors"

const BottomSheetComp = () => {
  const sheetRef = useRef<BottomSheet>(null)

  // variables
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    []
  )
  const snapPoints = useMemo(() => [ "75%", "100%"], [])

  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index)
  }, [])

  const renderItem = useCallback(
    (item) => (
      <View key={item} style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    []
  )

  return (
    <>
      <BottomSheet
        ref={sheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
        handleIndicatorStyle={styles.indicator}
        // backgroundComponent={styles.bg__sheet}
        backgroundStyle={styles.bg__sheet}
      >
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          {data.map((item) => (
            <View key={item} style={styles.itemContainer}>
              <Text style={{ color: "white" }}>{item}</Text>
            </View>
          ))}
        </BottomSheetScrollView>
      </BottomSheet>
    </>
  )
}

const styles = StyleSheet.create({
  bg__sheet: {
    backgroundColor: COLORS.foreground,
    // elevation: 1,
  },
  contentContainer: {
    backgroundColor: COLORS.foreground,
  },
  indicator: {
    color: COLORS.primary,
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: COLORS.background,
    borderRadius: 6,
  },
})

export default BottomSheetComp
