import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const App = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [loginMessage, setLoginMessage] = useState("");
  const [email, setemail] = useState("");
  const [data, setdata] = useState("");

  function handleLogin() {
    // The trim() method removes whitespace from both ends of a string. It does not change the original string.
    if (!name.trim || !email || !password) {
      setLoginMessage("All the Input Fields Are Required ");
      setdata("");
      // It will return the lower Output Only if the above condition is true and the below code will not execute
      return;
    }
    setdata(
      // This will display the user's input data
      `Your Data: \n name: ${name}\n Email:   ${email}\n Password: ${password} `,
    );
    {
      // This will display the welcome message with the user's name or "Guest" if the name is empty
      setLoginMessage(`Welcome ${name || "Guest"}! You are logged in ✅`);
    }
  }
  // This function will reset the input fields and clear the login message
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
      {/* // This is the input field for the user's name */}
      {/* NAME INPUT */}
      <TextInput
        style={styles.Input}
        placeholder="Enter your name..."
        autoCapitalize="none"
        value={name}
        onChangeText={(input) => setName(input)}
      />
      {/* // This is the input field for the user's email */}
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
      {/* // This is the input field for the user's password with an eye icon to */}
      {/* toggle visibility */}
      {/* PASSWORD INPUT WITH EYE ICON INSIDE */}
      {/* <View style={styles.passwordContainer}> */}
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
          {/* // This is the eye icon that toggles the visibility of the password */}
          <Ionicons
            name={showPassword ? "eye" : "eye-off"}
            size={22}
            color="#666"
          />
        </Pressable>
        {/* </View> */}
      </View>
      {/* LOGIN BUTTON */}
      <View styles={styles.flex}>
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
          {/* // This is the text inside the login button */}
          <Text style={styles.buttonText}> User-LogIn</Text>
        </Pressable>
        <Pressable onPress={reset} hitSlop={45}>
          <Text style={styles.button1}>Reset</Text>
        </Pressable>
      </View>
      {/* // This is where the login message will be displayed after the user logs */}
      {/* in */}
      {/* MESSAGE SHOWS HERE AFTER LOGIN */}
      {/* // This will display the login message if it exists, otherwise it will */}
      {/* // display nothing */}
      {loginMessage ? (
        <Text style={styles.successMessage}>{loginMessage}</Text>
      ) : null}
      {/* // This will display the user's input data if the name exists, otherwise */}
      {/* // it will display nothing */}
      {name ? <Text>{data}</Text> : null}
      <Text style={styles.successMessage}>{data}</Text>
    </View>
  );
};

export default App;
// This is the stylesheet for the app
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
    display: "flex",
    justifyContent: "center",
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
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 55,
    marginRight: 55,
  },
});
