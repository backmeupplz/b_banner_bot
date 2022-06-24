import { Context, NextFunction } from 'grammy'

export default function (ctx: Context, next: NextFunction) {
  if (!ctx.msg?.reply_to_message?.from?.id) {
    return
  }
  return next()
}
