import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Message {
  readonly id: string;
  readonly content?: string;
  readonly userID?: string;
  readonly chatroomID?: string;
  constructor(init: ModelInit<Message>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

export declare class ChatRoom {
  readonly id: string;
  readonly newMessages?: number;
  readonly LastMessage?: Message;
  readonly Messages?: (Message | null)[];
  readonly ChatRoomUsers?: (ChatRoomUser | null)[];
  constructor(init: ModelInit<ChatRoom>);
  static copyOf(source: ChatRoom, mutator: (draft: MutableModel<ChatRoom>) => MutableModel<ChatRoom> | void): ChatRoom;
}

export declare class ChatRoomUser {
  readonly id: string;
  readonly chatroom: ChatRoom;
  readonly user: User;
  constructor(init: ModelInit<ChatRoomUser>);
  static copyOf(source: ChatRoomUser, mutator: (draft: MutableModel<ChatRoomUser>) => MutableModel<ChatRoomUser> | void): ChatRoomUser;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly imageUri?: string;
  readonly status?: string;
  readonly Messages?: (Message | null)[];
  readonly chatrooms?: (ChatRoomUser | null)[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}