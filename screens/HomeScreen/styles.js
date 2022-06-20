import React from "react"
import { StyleSheet } from "react-native"
import { colors } from "../../colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
  },
  noTasksText: {
    color: colors.WHITE,
    fontSize: 50,
  },
  noTaskContainer: {
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
  },
  heading: {
    color: colors.WHITE,
    fontSize: 20,
    fontWeight: "600",
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
})

export default styles
