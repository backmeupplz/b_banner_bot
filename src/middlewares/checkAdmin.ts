import { Context } from 'telegraf'

export async function checkAdmin(ctx: Context, next: () => any) {
  if (!ctx.from?.id) {
    return
  }
  const chatMember = await ctx.getChatMember(ctx.from.id)
  if (chatMember.status === 'creator' || chatMember.can_restrict_members) {
    return next()
  } else {
    return ctx.deleteMessage()
  }
}
