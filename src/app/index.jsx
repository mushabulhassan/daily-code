import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

const App = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [loginMessage, setLoginMessage] = useState("");
  const [email, setemail] = useState("");
  const [data, setdata] = useState("");

  function handleLogin() {
    if (!name.trim || !email || !password) {
      setLoginMessage("All the Input Fields Are Required ");
      setdata("");
      return;
    }
    setdata(
      `Your Data: \n name: ${name}\n Email:   ${email}\n Password: ${password} `,
    );
    {
      setLoginMessage(`Welcome ${name || "Guest"}! You are logged in ✅`);
    }
  }

  function reset() {
    setemail("");
    setName("");
    setPassword("");
  }
  return (
    <View
      style={{
        flex: 1,
        borderWidth: 5,
        borderColor: "purple",
        borderRadius: 5,
        backgroundColor: "lightblue",
      }}
    >
      <Text style={styles.text}>App Logo 🤑</Text>

      <Text
        style={{
          color: "green",
          fontSize: 20,
          textAlign: "center",
          marginTop: 10,
        }}
      >
        Submit Your Information
      </Text>

      {/* NAME INPUT */}
      <TextInput
        style={styles.Input}
        placeholder="Enter your name..."
        autoCapitalize="none"
        value={name}
        onChangeText={(input) => setName(input)}
      />
      {/* Email Input  */}
      <TextInput
        style={styles.Input}
        placeholder="Enter Your Email"
        keyboardType="email"
        textContentType="email"
        autoCapitalize="none"
        value={email}
        onChangeText={(input) => setemail(input)}
      />

      {/* PASSWORD INPUT WITH EYE ICON INSIDE */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Enter your password here."
          autoCapitalize="none"
          secureTextEntry={showPassword}
          value={password}
          onChangeText={(input) => setPassword(input)}
        />
        <Pressable
          onPress={() => setShowPassword(!showPassword)}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          style={styles.eyeIcon}
        >
          <Ionicons
            name={showPassword ? "eye" : "eye-off"}
            size={22}
            color="#666"
          />
        </Pressable>
      </View>

      {/* LOGIN BUTTON */}
      <Pressable
        style={({ pressed }) => [
          styles.button1,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => {
          reset();
          handleLogin();
        }}
      >
        <Text style={styles.buttonText}> User-LogIn</Text>
      </Pressable>
      <Pressable onPress={reset} hitSlop={45} >
        <Text style={styles.button1}>Reset</Text>
      </Pressable>

      {/* MESSAGE SHOWS HERE AFTER LOGIN */}
      {loginMessage ? (
        <Text style={styles.successMessage}>{loginMessage}</Text>
      ) : null}
      {name ? <Text>{data}</Text> : null}

      <Text style={styles.successMessage}>{data}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  text: {
    color: "blue",
    fontSize: 25,
    marginTop: 40,
    textAlign: "center",
  },
  Input: {
    margin: 20,
    padding: 15,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "purple",
    borderRadius: 8,
    backgroundColor: "white",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
    marginTop: 0,
    borderWidth: 1,
    borderColor: "purple",
    borderRadius: 8,
    backgroundColor: "white",
    paddingRight: 15,
  },
  passwordInput: {
    flex: 1,
    padding: 15,
    fontSize: 18,
  },
  eyeIcon: {
    padding: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },
  buttonPressed: {
    opacity: 0.0, // The Button on press Will disappear
    transform: [{ scale: 4 }], // this mean the size change at on pres of button
  },
  button1: {
    alignItems: "center",
    backgroundColor: "green",
    fontSize: 20,
    marginTop: 20,
    borderRadius: 15,
    padding: 15,
    margin: 25,
    marginLeft: 150,
    marginRight: 150,
    color: "red",
  },
  successMessage: {
    color: "green",
    fontSize: 16,
    textAlign: "center",
    marginTop: 15,
    fontWeight: "600",
  },
});
