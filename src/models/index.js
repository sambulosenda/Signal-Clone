// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Message, ChatRoom, UserChatRoom, User } = initSchema(schema);

export {
  Message,
  ChatRoom,
  UserChatRoom,
  User
};