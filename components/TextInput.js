import React, { useState } from "react"
import { colors } from "../colors"
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { Colors } from "react-native/Libraries/NewAppScreen"

export default Input = (props) => {
  const [task, setTask] = useState()

  const handleAddTask = (value) => {
    props.addTask(value)
    setTask(null)
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TextInput
        style={styles.inputField}
        value={task}
        placeholder={"I want to..."}
        placeholderTextColor={colors.WHITE}
        onChangeText={(text) => setTask(text)}
      />

      <TouchableOpacity onPress={() => handleAddTask(task)}>
        <View style={styles.button}>
          <MaterialIcons name="arrow-upward" size={24} color={colors.WHITE} />
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#fff",
    backgroundColor: colors.PRIMARY_DARKERSHADE,
    borderWidth: 0,
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    position: "absolute",
    bottom: 20,
  },
  inputField: {
    color: "#fff",
    height: 50,
    flex: 1,
  },
  button: {
    height: 30,
    width: 30,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
})
