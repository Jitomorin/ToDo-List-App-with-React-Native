import React, { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { colors } from "../../colors"
import styles from "./styles"

import {
  Keyboard,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import TaskTile from "../../components/TaskTile"
import TextInput from "../../components/TextInput"

export default function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([])
  const [currentDate, setCurrentDate] = useState("")

  const getCurrentDate = () => {
    //Get Current Date
    var date = new Date().getDate()

    //Get Current Month
    var month = new Date().getMonth() + 1
    setCurrentDate(date + "/" + month)
    console.log(currentDate)
  }

  const addTask = (task) => {
    getCurrentDate()
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
          <View style={styles.imageContainer}>
            <Text style={styles.emptyTaskText}>No Tasks</Text>
          </View>
        ) : (
          tasks.map((task, index) => {
            return (
              <View key={index} marginTop={20}>
                <TaskTile
                  date={currentDate}
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
