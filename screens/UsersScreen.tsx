import * as React from "react";

import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Pressable ,
} from "react-native";
import ChatRoomItem from "../components/ChatRoomItem";
import UserItem from "../components/UserItem";

import Users from "../assets/dummy-data/Users";

export default function UsersScreen() {
 
  return (
    <View style={styles.page}>
      <FlatList
        data={Users}
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