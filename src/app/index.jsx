import React, { useState } from "react";
import {
  Button,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [input, setInput] = useState("");

  const [items, setItems] = useState([
    { id: "1", name: "Apple" },
    { id: "2", name: "Banana" },
    { id: "3", name: "Mango" },
  ]);

  // ADD ITEM
  const addItem = () => {
    // Don't add if input is empty
    if (input.trim() === "") {
      return;
    }

    const newItem = {
      id: Date.now().toString(),
      name: input.trim(),
    };

    setItems([...items, newItem]);

    // Clear input after adding
    setInput("");
  };

  // REMOVE ITEM
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // RENDER ITEM
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>

      <TouchableOpacity
        style={styles.deleteBtn}
        onPress={() => removeItem(item.id)}
      >
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>FlatList Add / Remove</Text>

      <TextInput
        placeholder="Enter the Name:"
        style={styles.input}
        value={input}
        onChangeText={(value) => setInput(value)}
      />

      <Button title="Add New Item" onPress={addItem} />

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={
          <Text style={styles.empty}>No items left</Text>
        }
      />

      <Pressable style={styles.submitButton}>
        <Text style={styles.submitText}>Submit</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    marginTop: 40,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },

  input: {
    fontSize: 24,
    margin: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },

  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
  },

  itemText: {
    fontSize: 16,
  },

  deleteBtn: {
    backgroundColor: "red",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
  },

  deleteText: {
    color: "#ffffff",
    fontWeight: "bold",
  },

  empty: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
    color: "gray",
  },

  submitButton: {
    alignItems: "center",
    padding: 10,
  },

  submitText: {
    backgroundColor: "blue",
    color: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
