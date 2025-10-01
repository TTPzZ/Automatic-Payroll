import { Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        // tabBarPressColor: "#RRGGBB",
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // headerShown: false,
        // tabBarButton: HapticTab,
        headerStyle:{
          backgroundColor: 'red',
        },
        tabBarStyle: {
         backgroundColor: 'transparent', 
        },
        headerBackground: () => (
          <LinearGradient
              colors={["#00c6ff", "#7ddfff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={StyleSheet.absoluteFill}
          />
        ),
        tabBarBackground: () => (
          <LinearGradient
              colors={["#00c6ff", "#7ddfff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={StyleSheet.absoluteFill}
          />
        ),
         
      }}
    >
      <Tabs.Screen
        name="shifts"
        options={{
          title: "Lịch Làm Việc",
          tabBarLabel: "",
          headerTitleAlign:"center",
          headerTitleStyle:{
            fontWeight:"bold",
            color:"white"
          },
          // headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/images/icon-coin.png")}
              style={{ width: 30, height: 30, borderRadius: 14 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="main"
        options={{
          title: "Automatic Payroll",
          tabBarLabel: "",
          headerTitleAlign:"center",
          headerTitleStyle:{
            fontWeight:"bold",
            color:"white"
          },
          // headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/images/icon-ai.png")}
              style={{ width: 28, height: 28, borderRadius: 14 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Cá Nhân",
          tabBarLabel: "",
          headerTitleAlign:"center",
          headerTitleStyle:{
            fontWeight:"bold",
            color:"white"
          },
          // headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/images/icon-profile.png")}
              style={{ width: 26, height: 26, borderRadius: 14 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
