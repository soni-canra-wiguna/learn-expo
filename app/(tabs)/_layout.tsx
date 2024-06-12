import React from "react"
import { Tabs } from "expo-router"
import { COLORS } from "@/constants/colors"
import Ionicons from "@expo/vector-icons/Ionicons"

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarLabelStyle: {
          fontFamily: "googlesans-md",
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: COLORS.background,
          paddingTop: 8,
          paddingBottom: 8,
          height: 60,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="home-outline"
              size={24}
              style={{
                paddingVertical: 6,
                paddingHorizontal: 20,
                borderRadius: 10,
                color: focused ? COLORS.primary : color,
                backgroundColor: focused
                  ? COLORS.primaryAccent
                  : COLORS.transparent,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="camera/index"
        options={{
          tabBarLabel: "Camera",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="camera-outline"
              size={24}
              style={{
                paddingVertical: 6,
                paddingHorizontal: 20,
                borderRadius: 10,
                color: focused ? COLORS.primary : color,
                backgroundColor: focused
                  ? COLORS.primaryAccent
                  : COLORS.transparent,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chat/index"
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="chatbubbles-outline"
              size={24}
              color="black"
              style={{
                paddingVertical: 6,
                paddingHorizontal: 20,
                borderRadius: 10,
                color: focused ? COLORS.primary : color,
                backgroundColor: focused
                  ? COLORS.primaryAccent
                  : COLORS.transparent,
              }}
            />
          ),
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
