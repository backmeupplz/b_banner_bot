import { Context } from 'telegraf'

export async function checkReply(ctx: Context, next: () => any) {
  if (!ctx.update.message?.reply_to_message?.from?.id) {
    return
  }
  return next()
}
