import * as React from "react";

import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Pressable ,
} from "react-native";
import ChatRoomItem from "../components/ChatRoomItem";

import { Auth } from "aws-amplify";
import { useState, useEffect } from "react";
import { ChatRoom } from "../src/models";
import { DataStore } from "@aws-amplify/datastore";

export default function TabOneScreen() {

  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);


  useEffect(() => {
   const fetchChatRooms = async () => {
      const user = await Auth.currentAuthenticatedUser();
      const chatRooms = await DataStore.query(ChatRoom)
      setChatRooms(chatRooms);
    }
    fetchChatRooms();
  }, [])


  const logout = () => {
    Auth.signOut();
  };
  return (
    <View style={styles.page}>
      <FlatList
        data={chatRooms}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false}
      />

      <Pressable onPress={logout} style={styles.button}>
        <Text style={styles.text}>Sign out</Text>
      </Pressable>
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