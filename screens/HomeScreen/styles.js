import React from "react"
import { StyleSheet } from "react-native"
import { colors } from "../../colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
  },
  imageContainer: {
    /* width: 50,
    height: 500, */
    aspectRatio: 1.7,
    alignItems: "center",
    justifyContent: "center",

    opacity: 0.3,
  },
  emptyTaskText: {
    color: colors.WHITE,
    fontSize: 50,
  },
  image: {
    flex: 1,

    /* width: null,
    height: null, */
    resizeMode: "contain",
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
