import React, { Component } from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import HomeScreen from "./screens/HomeScreen/HomeScreen"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { colors } from "./colors"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Log in" screenOptions={{}}>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
