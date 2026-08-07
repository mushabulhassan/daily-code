import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
// import logo from '../../assets/images/react-logo@3x.png'
export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Student Registration</Text>
      {/* Name */}
      {/* <Image source={logo}/> */}
      <Text style={styles.label}>Full Name</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={24} color="#6C3DD1" />
        <TextInput
          placeholder="Enter your full name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <Ionicons style={{color:'red'}} size={25} name='eye-off'/>
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
      {/* Course */}
      <Text style={styles.label}>Course</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="school-outline" size={24} color="#6C3DD1" />
        <TextInput
          placeholder="Enter your course"
          value={course}
          onChangeText={setCourse}
          style={styles.input}
        />
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
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
    backgroundColor: '#6C3DD1',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});