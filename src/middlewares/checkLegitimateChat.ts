import { Context, NextFunction } from 'grammy'
import chats from '@/helpers/chats'

export default function (ctx: Context, next: NextFunction) {
  if (ctx.chat?.id && chats.includes(ctx.chat.id)) {
    return next()
  }
}
