import React, { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { colors } from "../../colors"
import { Keyboard, ScrollView, StyleSheet, Text, View } from "react-native"
import TaskTile from "../../components/TaskTile"
import styles from "./styles"
import TextInput from "../../components/TextInput"

export default function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    if (task == null) return
    setTasks([...tasks, task])
    Keyboard.dismiss()
  }

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex))
  }

  return (
    <View backgroundColor={colors.PRIMARY} style={styles.container}>
      <Text style={styles.heading}>To Do</Text>
      <TextInput addTask={addTask} />
      <ScrollView marginBottom={75}>
        {tasks.length <= 0 ? (
          <View style={styles.noTaskContainer}>
            <Text style={styles.noTasksText}>No Tasks</Text>
          </View>
        ) : (
          tasks.map((task, index) => {
            return (
              <View key={index} marginTop={20}>
                <TaskTile
                  index={index + 1}
                  task={task}
                  deleteTask={() => deleteTask(index)}
                />
              </View>
            )
          })
        )}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  )
}
