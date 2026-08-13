import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";


// Create Stack Navigator
const Stack = createNativeStackNavigator();


// HOME SCREEN
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}


// DETAILS SCREEN
function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>

      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}


// APP
export default function App() {
  return (
    <NavigationIndependentTree>

      <NavigationContainer>

        <Stack.Navigator>

          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />

          <Stack.Screen
            name="Details"
            component={DetailsScreen}
          />

        </Stack.Navigator>

      </NavigationContainer>

    </NavigationIndependentTree>
  );
}


// STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 25,
    marginBottom: 20,
  },
});