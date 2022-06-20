<<<<<<< Updated upstream
import React, { useState } from "react"
import { StatusBar } from "expo-status-bar"
=======
import React, { Component } from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import HomeScreen from "./screens/HomeScreen/HomeScreen"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
>>>>>>> Stashed changes
import { colors } from "./colors"
import { Keyboard, ScrollView, StyleSheet, Text, View } from "react-native"
import TaskTile from "./components/TaskTile"
import TextInput from "./components/TextInput"

export default function App() {
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
<<<<<<< Updated upstream
    <View backgroundColor={colors.PRIMARY} style={styles.container}>
      <Text style={styles.heading}>To Do</Text>
      <TextInput addTask={addTask} />
      <ScrollView marginBottom={75}>
        {tasks.map((task, index) => {
          return (
            <View key={index} marginTop={20}>
              <TaskTile
                index={index + 1}
                task={task}
                deleteTask={() => deleteTask(index)}
              />
            </View>
          )
        })}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
=======
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Log in" screenOptions={{}}>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
>>>>>>> Stashed changes
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
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
