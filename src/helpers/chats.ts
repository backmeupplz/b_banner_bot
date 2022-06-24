import env from '@/helpers/env'

export default env.CHATS.split(',').map((chatIdString) => +chatIdString)
