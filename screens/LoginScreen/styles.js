import React from "react"
import { StyleSheet } from "react-native"
import { colors } from "../../colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.PRIMARY,
    alignItems: "center",
  },
  input: {
    margin: 10,
    paddingLeft: 10,
    fontSize: 17,
    height: 70,
    width: 325,
    backgroundColor: colors.PRIMARY_DARKERSHADE,
    borderRadius: 5,
    alignItems: "center",
  },
  headerContainer: {
    alignItems: "flex-start",
    margin: 10,
  },
  headerText: {
    fontSize: 30,
    color: colors.WHITE,
    textAlign: "left",
  },
  buttonText: {
    color: "#020303",
    fontSize: 20,
  },
  textButton: {
    color: colors.ORANGE,
  },
  hyperlink: {
    color: colors.SECONDARY,
  },
  hyperlinkContainer: {
    margin: 40,
  },
  buttonContainer: {
    marginTop: 50,
    height: 40,
    width: 200,
    borderRadius: 15,
    backgroundColor: colors.SECONDARY,
    tintColor: colors.WHITE,
    alignItems: "center",
  },
  inputContainer: {
    marginTop: 100,
  },
})
export default styles
