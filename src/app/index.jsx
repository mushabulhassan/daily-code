import { Ionicons  from "@expo/vector-icons";
import { ImageBackground } from "expo-image";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Users from "./user";
// import logo from '../../assets/images/react-logo@3x.png'
export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [hide, sethide] = useState(true);
  function hide1() {
    hide == true ? sethide(false) : sethide(true);
  }
  return (
    <ImageBackground
      style={{
        flex: 1,
        height: "100%",
        width: "100%",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <SafeAreaView style={styles.container}>
       
        <Text style={styles.heading}>Student Registration</Text>
        {/* Name */}
        {/* <Image source={logo}/> */}
        <Text style={{ fontSize: 26 }}> User's Please enter Your Data </Text>
        <Text style={{ fontSize: 26 }}> Last Student's Data..</Text>
        <Users />
        <Text style={styles.label}>Full Name</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={24} color="#6C3DD1" />
          <TextInput
            placeholder="Enter your full name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          <Ionicons style={{ color: "red" }} size={25} name="eye-off" />
        </View>
        {/* Email */}
        <Text style={styles.label}>Email Address</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={24} color="#6C3DD1" />
          <TextInput
            placeholder="Enter your email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
        </View>

        <Text style={styles.label}>Enter Password</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={24} color="#6C3DD1" />
          <TextInput
            style={styles.input}
            secureTextEntry={hide}
            placeholder="Enter The Password"
          />
          <Ionicons
            size={24}
            on
            name={hide ? "eye" : "eye-off"}
            color="green"
            onPress={hide1}
          />
        </View>
        {/* Phone */}
        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="call-outline" size={20} color="green" />
          <TextInput
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
          />
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
      </SafeAreaView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    padding: 20,
    borderWidth: 2,
    borderColor: "yellow",
    marginTop: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 10,
    textAlign: "left",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 55,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#6C3DD1",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
