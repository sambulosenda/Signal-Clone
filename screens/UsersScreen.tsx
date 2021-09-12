import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet, FlatList, Pressable } from "react-native";

import { DataStore } from "@aws-amplify/datastore";
import UserItem from "../components/UserItem";
import { User } from "../src/models";

export default function UsersScreen() {

  const [users, setUsers] = useState<User[]>([]);
 
  useEffect(() => {
    DataStore.query(User).then(setUsers);
  }, []);



  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const fetchedUsers = await DataStore.query(User);
  //     setUsers(fetchedUsers);
  //   };
  //   fetchUsers();
  // }, []);

  return (
    <View style={styles.page}>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserItem user={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
  button: {
    backgroundColor: "red",
    marginBottom: 20,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
});
