import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();


// Home Screen
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text>Welcome to Home</Text>
    </View>
  );
}


// Search Screen
function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
      <Text>Welcome to Search</Text>
    </View>
  );
}


// Cart Screen
function CartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <Text>Welcome to Cart</Text>
    </View>
  );
}


// Profile Screen
function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text>Welcome to Profile</Text>
    </View>
  );
}


// Main App
export default function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator>

        <Tab.Screen
          name="Home"
          component={HomeScreen}
        />

        <Tab.Screen
          name="Search"
          component={SearchScreen}
        />

        <Tab.Screen
          name="Cart"
          component={CartScreen}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
        />

      </Tab.Navigator>

    </NavigationContainer>
  );
}


// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
});