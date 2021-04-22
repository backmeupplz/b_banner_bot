export const chats = process.env.CHATS.split(',').map(
  (chatIdString) => +chatIdString
)
