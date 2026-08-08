import { FlatList, StyleSheet, Text, View,ScrollView } from "react-native";
const Users = () => {
  const users = [
    { user: 1, Name: "Ali" },
    { user: 2, Name: "Ahmad" },
    {
      user: 3,
      Name: "Mashab",
    },
    {
      user:4,
      Name:'Zaryab Nasir',
      
    },
    {
    users:4,
    Name:'Hamid Nasir',
    },
    {
    users:4,
    Name:'Hamid Nasir',
    },
    {
    users:4,
    Name:'Hamid Nasir',
    },
    {
    users:4,
    Name:'Hamid Nasir',
    },
    {
    users:4,
    Name:'Hamid Nasir',
    },
  ];
  return (
    <ScrollView>
     
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <Text
            style={{
              fontSize: 25,
              backgroundColor: "yellow",
              borderWidth: 6,
              margin: 20,
              padding: 5,
            }}
          >
            {item.Name}
          </Text>
        )}
      />
    </ScrollView>
  );
};

export default Users;

const styles = StyleSheet.create({});
