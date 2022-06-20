import React, { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { colors } from "../colors"
import {
  Keyboard,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"

export default EmptyTasks = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../assets/noTasks.png")} />
      </View>

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    color: colors.PRIMARY,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    height: 40,
  },
})
