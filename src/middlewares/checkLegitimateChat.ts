import { Context } from 'telegraf'
import { chats } from '@/helpers/chats'

export async function checkLegitimateChat(ctx: Context, next: () => any) {
  if (chats.includes(ctx.message?.chat.id)) {
    return next()
  }
}
