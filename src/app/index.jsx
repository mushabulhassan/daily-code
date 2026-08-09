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
  const [input, setinput] = useState("");
  // 1. State = your list data
  const [items, setItems] = useState([
    { id: "1", name: "Apple" },
    { id: "2", name: "Banana" },
    { id: "3", name: "Mango" },
  ]);
  // 2. ADD ITEM
  const addItem = () => { 
    const newItem = {
      id: Date.now().toString(), // unique id
      name: `${input} ${items.length + 1}`,
    };
    setItems([...items, newItem]); // add to end
    // setItems([newItem, ...items]); // use this to add to start
  };
  // 3. REMOVE ITEM
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  // 4. Render each item
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
      <View style={{flex:0.5,alignContent:'center',}}>
      <Text style={styles.title}>FlatList Add / Remove</Text>

      
      <TextInput  
        placeholder="Enter the Name:"
        style={{ fontSize: 24, margin: 12, padding: 20 }}
        onChangeText={(value) => setinput(value)}
      /> 
      <Button title="Add New Item" onPress={addItem} />
      
      <FlatList
        data={items}
        keyExtractor={(item) => item.id} // must have unique key
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={<Text style={styles.empty}>No items left</Text>}
      />
      <Pressable style={{ alignItems:'center',}}><Text style={styles.deleteBtn}>Sumbit</Text></Pressable>
      </View>
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
});
