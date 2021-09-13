import React, { useState, useEffect } from "react";
import { Text, Image, View, Pressable, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/core";
import styles from "./styles";
import { Auth, DataStore } from "aws-amplify";
import { UserChatRoom, User, Message } from "../../src/models";

export default function ChatRoomItem({ chatRoom }) {
  //const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User | null>(null); // the display name of the user
  const [lastMessage, setLastMessage] = useState<Message | undefined>();

  const navigation = useNavigation();

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = (await DataStore.query(UserChatRoom))
        .filter((chatRoomUser) => chatRoomUser.chatroom.id === chatRoom.id)
        .map((chatRoomUser) => chatRoomUser.user);

      const authUser = await Auth.currentAuthenticatedUser();
      setUser(
        fetchedUsers.find(user => user.id !== authUser.attributes.sub) || null
      );
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    if (!chatRoom.chatRoomLastMessageId) {
      return;
    }
    DataStore.query(Message, chatRoom.chatRoomLastMessageId).then(
      setLastMessage
    );
  }, []);

  const onPress = () => {

    navigation.navigate("ChatRoom", { id: chatRoom.id });
  };



  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={{ uri: user.imageUri }} style={styles.image} />

      {!!chatRoom.newMessages && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
        </View>
      )}

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{lastMessage?.createdAt}</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          {lastMessage?.content}
        </Text>
      </View>
    </Pressable>
  );
}
