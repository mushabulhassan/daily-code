import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";

export default function App() {
  // Keeps track of which tab is currently selected
  const [activeTab, setActiveTab] = useState("Home");

  // Function that displays the correct screen
  function renderScreen() {
    if (activeTab === "Home") {
      return (
        <View style={styles.screen}>
          <Text style={styles.title}>Home</Text>
          <Text>Welcome to Home Screen</Text>
          <Text style={{fontSize:25,}}>Here U can See Your Prfile Look</Text>
        </View>
      );
    }

    if (activeTab === "Search") {
      return (
        <View style={styles.screen}>
          <Text style={styles.title}>Search</Text>
          <Text>This is the Search Screen</Text>
          <Text>Here U  CAN SEarch THEse </Text>
        </View>
      );
    }

    if (activeTab === "Cart") {
      return (
        <View style={styles.screen}>
          <Text style={styles.title}>Cart</Text>
          <Text>This is the Cart Screen</Text>
        </View>
      );
    }

    if (activeTab === "Profile") {
      return (
        <View style={styles.screen}>
          <Text style={styles.title}>Profile</Text>
          <Text>This is the Profile Screen</Text>
        </View>
      );
    }
  }

  return (
    <View style={styles.container}>

      {/* Current screen */}
      {renderScreen()}

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>

        {/* Home */}
        <Pressable
          style={styles.tab}
          onPress={() => setActiveTab("Home")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Home" && styles.activeText,
            ]}
          >
            Home
          </Text>
        </Pressable>

        {/* Search */}
        <Pressable
          style={styles.tab}
          onPress={() => setActiveTab("Search")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Search" && styles.activeText,
            ]}
          >
            Search
          </Text>
        </Pressable>

        {/* Cart */}
        <Pressable
          style={styles.tab}
          onPress={() => setActiveTab("Cart")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Cart" && styles.activeText,
            ]}
          >
            Cart
          </Text>
        </Pressable>

        {/* Profile */}
        <Pressable
          style={styles.tab}
          onPress={() => setActiveTab("Profile")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Profile" && styles.activeText,
            ]}
          >
            Profile
          </Text>
        </Pressable>

      </View>
    </View>
  );
}


// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },

  tabBar: {
    height: 70,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "white",
  },

  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  tabText: {
    fontSize: 14,
  },

  activeText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});