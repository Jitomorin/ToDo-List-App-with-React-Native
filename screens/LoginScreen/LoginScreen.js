import React from "react"
import { Text, a, TextInput, TouchableOpacity, View } from "react-native"
import { KeyboardAvoidingView } from "react-native"
import styles from "./styles"
import { colors } from "../../colors"
import { Button } from "react-native-web"
import { useState } from "react"

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Welcome back</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor={colors.WHITE}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />

        <TextInput
          placeholderTextColor={colors.WHITE}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.hyperlinkContainer} flexDirection="row">
        <Text style={styles.hyperlink}>Don't have an account? </Text>
        <Text style={styles.textButton} onPress={() => {}}>
          Create a new one
        </Text>
      </View>
    </KeyboardAvoidingView>
  )
}
