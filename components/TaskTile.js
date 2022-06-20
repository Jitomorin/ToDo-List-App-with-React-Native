import React, { useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "../colors"
import BouncyCheckbox from "react-native-bouncy-checkbox"

export default TaskTile = (props) => {
  const [isDone, setisDone] = useState(false)
  const toggleCompleted = (isChecked, index) => {
    setisDone(isChecked)
  }

  return (
    <View style={styles.card}>
      {/* <BouncyCheckbox
        fillColor={colors.PRIMARY}
        unfillColor={colors.PRIMARY_DARKERSHADE}
        onPress={(isChecked) => toggleCompleted(isChecked, props.index)}
      /> */}

      <View style={styles.taskContainer}>
        {/* <Text style={styles.task}>{props.task}</Text> */}
        <BouncyCheckbox
          size={15}
          bounceEffect={1}
          iconStyle={styles.checkIcon}
          fillColor={colors.PRIMARY}
          unfillColor={colors.PRIMARY_DARKERSHADE}
          textComponent={
            isDone ? (
              <Text style={styles.donetask}>{props.task}</Text>
            ) : (
              <Text style={styles.task}>{props.task}</Text>
            )
          }
          onPress={(isChecked) => toggleCompleted(isChecked, props.index)}
        />
        <TouchableOpacity onPress={() => props.deleteTask()}>
          <MaterialIcons
            style={styles.delete}
            name="cancel"
            size={18}
            color={colors.WHITE}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  checkIcon: {
    marginRight: 10,
  },
  taskContainer: {
    backgroundColor: colors.PRIMARY_DARKERSHADE,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
    minHeight: 50,
  },
  donetask: {
    textDecorationLine: "line-through",
    color: colors.WHITE,
    width: "80%",
    fontSize: 16,
  },
  task: {
    color: colors.WHITE,
    width: "80%",
    fontSize: 16,
  },
  delete: {},
})
