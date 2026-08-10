import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Button, // Creates a basic button
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView, // Creates a pressable component // Keeps content inside the safe screen area
  StyleSheet, // Used to create styles
  Text, // Displays text
  TextInput, // Allows the user to enter/edit text
  TouchableOpacity, TouchableWithoutFeedback, // Creates buttons that can be pressed
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  // Stores the text entered in the main TextInput.
  // This input is used when adding a NEW item.
  const [input, setInput] = useState("");
  const [load, setload] = useState(false)
  // Stores all items displayed in the FlatList.
  const [items, setItems] = useState([
    { id: "1", name: "Apple" },
    { id: "2", name: "Banana" },
    { id: "3", name: "Mango" },
  ]);
  // Stores the ID of the item currently being edited.
  //
  // Example:
  // If we press Edit on Apple:
  // editingId = "1"
  //
  // If no item is being edited:
  // editingId = null
  const [editingId, setEditingId] = useState(null);
  // Stores the temporary text while editing an item.
  //
  // Example:
  // Apple -> user changes it to Orange
  // editText will temporarily contain "Orange"
  const [editText, setEditText] = useState("");
  const loading =()=>{
setload(true)
setTimeout(() => {
  
  setload(false)
}, 3000);
  }
  // ============================================================
  // ADD ITEM
  // ============================================================
  const addItem = () => {
    // Check if the input is empty.
    //
    // trim() removes spaces from the beginning and end.
    // So "     " is also treated as empty.
    if (input.trim() === "") {
      return;
    }
    // Create a new object for the new list item.
    const newItem = {
      // Date.now() gives the current time in milliseconds.
      // toString() converts that number into a string.
      // This gives our new item a unique ID.
      id: Date.now().toString(),
      // Store the user's input as the item's name.
      name: input.trim(),
    };
    // Add the new item to the existing items array.
    setItems([...items, newItem]);
    // Clear the main TextInput after adding the item.
    setInput("");
  };
  // ============================================================
  // REMOVE ITEM
  // ============================================================
  const removeItem = (id) => {
    // filter() creates a new array containing every item
    // except the item whose ID matches the given ID.
    setItems(items.filter((item) => item.id !== id));
  };
  // ============================================================
  // START EDITING AN ITEM
  // ============================================================
  const startEditing = (item) => {
    // Save the ID of the item we want to edit.
    //
    // Example:
    // If Apple has id "1":
    // editingId becomes "1"
    setEditingId(item.id);
    // Put the current item name into the editing TextInput.
    //
    // Example:
    // Apple -> editText = "Apple"
    setEditText(item.name);
  };
  // ============================================================
  // SAVE EDITED ITEM
  // ============================================================
  const saveEdit = (id) => {
    // Don't save an empty item.
    if (editText.trim() === "") {
      return;
    }
    // map() creates a new array.
    //
    // We check every item:
    //
    // If the ID matches the item being edited,
    // replace its name.
    //
    // Otherwise, keep the item unchanged.
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        // Return the updated item.
        return {
          ...item,
          name: editText.trim(),
        };
      }
      // Return the unchanged item.
      return item;
    });
    // Replace the old items array with the updated array.
    setItems(updatedItems);
    // Stop editing.
    //
    // Setting editingId to null means:
    // "No item is currently being edited."
    setEditingId(null);
    // Clear the editing TextInput state.
    setEditText("");
  };
  // ============================================================
  // CANCEL EDITING
  // ============================================================
  const cancelEdit = () => {
    // Stop editing the current item.
    setEditingId(null);
    // Clear the temporary editing text.
    setEditText("");
  };
  // ============================================================
  // RENDER EACH ITEM
  // ============================================================
  const renderItem = ({ item }) => (
    // Container for one list item.
    <View style={styles.itemContainer}>
      {
        // Check whether this particular item is being edited.
        editingId === item.id ? (
          // ======================================================
          // EDIT MODE
          // ======================================================
          <View style={styles.editContainer}>
            {/* TextInput used to edit the item name */}
            <TextInput
              style={styles.editInput}
              // Show the current editing text.
              value={editText}
              // Update editText whenever the user types.
              onChangeText={(value) => setEditText(value)}
            />
            {/* SAVE BUTTON */}
            <TouchableOpacity
              style={styles.saveBtn}
              // Save the edited item when pressed.
              onPress={() => saveEdit(item.id)}
            >
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            {/* CANCEL BUTTON */}
            <TouchableOpacity
              style={styles.cancelBtn}
              // Cancel editing when pressed.
              onPress={cancelEdit}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        ) : (
          // ======================================================
          // NORMAL MODE
          // ======================================================

          <View style={styles.normalContainer}>
            {/* Display the item's name */}
            <Text style={styles.itemText}>{item.name}</Text>

            {/* EDIT BUTTON */}
            <TouchableOpacity
              style={styles.editBtn}
              // Start editing this particular item.
              onPress={() => startEditing(item)}
            >
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>

            {/* DELETE BUTTON */}
            <TouchableOpacity
              style={styles.deleteBtn}
              // Delete this particular item.
              onPress={() => removeItem(item.id)}
            >
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )
      }
    </View>
  );

  // ============================================================
  // USER INTERFACE
  // ============================================================

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        hidden={false}
        style="dark"
        barStyle="dark-content"
        backgroundColor="black"
      />
      <KeyboardAvoidingView behavior={Platform.OS==="ios"?'padding':'undefined'}>
        {/* <StatusBar barStyle="light-content" backgroundColor='whitek'/> */}
        {/* Screen title */}
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          {" "}
          <Text style={styles.title}>FlatList Add / Edit / Remove</Text>
          {/* ========================================================
          NEW ITEM INPUT
          ======================================================== */}
          <TextInput
            placeholder="Enter the Name:"
            style={styles.input}
            // Controlled input:
            // The TextInput displays whatever is inside "input".
            value={input}
            // Update input whenever the user types.
            onChangeText={(value) => setInput(value)}
          />
          {/* ========================================================
          ADD BUTTON
          ======================================================== */}
          <Button
            title="Add New Item"
            // Run addItem() when the button is pressed.
            onPress={()=> {addItem();loading();}}
          />
          {/* <ActivityIndicator size={55} color={'gold'} animating={load}/> */}
          {
          load ? ( <View><Text>We are loading the Items..</Text><ActivityIndicator size={55} color={'gold'} animating={load}/></View> ) : null }

          <Button title="Loader" onPress={loading}/>
          {/* ========================================================
          FLATLIST
          ======================================================== */}
          <FlatList
            // The array that FlatList will display.
            data={items}
            // Give every item its unique key.
            keyExtractor={(item) => item.id}
            // Tell FlatList how to display each item.
            renderItem={renderItem}
            // Add some space at the bottom of the list.
            contentContainerStyle={{
              paddingBottom: 20,
            }}
            // This appears when the list contains no items.
            ListEmptyComponent={<Text style={styles.empty}>No items left</Text>}
          />
        </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Main screen container
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#68818d",
    marginTop: 40,
  },
  // Screen title
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  // Main input used for adding a NEW item
  input: {
    fontSize: 24,
    margin: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  // One list item's container
  itemContainer: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
  },
  // Container used when item is NOT being edited
  normalContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  // Item name
  itemText: {
    fontSize: 18,
    flex: 1,
  },
  // Container used when item IS being edited
  editContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  // TextInput shown while editing
  editInput: {
    flex: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5,
    padding: 8,
    backgroundColor: "#686262",
  },
  // Edit button
  editBtn: {
    backgroundColor: "orange",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
    marginLeft: 8,
  },
  // Delete button
  deleteBtn: {
    backgroundColor: "red",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
    marginLeft: 8,
  },
  // Save button
  saveBtn: {
    backgroundColor: "green",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
    marginLeft: 8,
  },
  // Cancel button
  cancelBtn: {
    backgroundColor: "gray",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
    marginLeft: 8,
  },
  // Text inside Edit/Delete/Save/Cancel buttons
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  // Text displayed when the list is empty
  empty: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
    color: "gray",
  },
  // Submit button container
  submitButton: {
    alignItems: "center",
    padding: 10,
  },
  // Submit button text
  submitText: {
    backgroundColor: "blue",
    color: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
