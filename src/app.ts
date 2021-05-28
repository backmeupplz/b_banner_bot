// Setup @/ aliases for modules
import 'module-alias/register'
// Config dotenv
import * as dotenv from 'dotenv'
dotenv.config({ path: `${__dirname}/../.env` })
// Dependencies
import { bot } from '@/helpers/bot'
import { checkTime } from '@/middlewares/checkTime'
import { checkAdmin } from '@/middlewares/checkAdmin'
import { checkReply } from '@/middlewares/checkReply'
import { chats } from '@/helpers/chats'
import { checkLegitimateChat } from '@/middlewares/checkLegitimateChat'

// Check time
bot.use(checkTime)
// Check if private messages
bot.use((ctx, next) => {
  if (ctx.message?.text === '/id' || ctx.channelPost?.text === '/id') {
    return ctx.reply(`${ctx.chat.id}`, {
      disable_notification: true,
    })
  }
  if (ctx.chat?.type === 'private') {
    return ctx.reply(
      'Нет смысла писать мне, вас тут не разбанят, а ваши сообщения уходят вникуда. В вакууме никто не услышит, как вы кричите.'
    )
  }
  return next()
})
// Ban command
bot.command(
  'banEverywhere',
  checkLegitimateChat,
  checkReply,
  checkAdmin,
  async (ctx) => {
    for (const chat of chats) {
      console.log(`Banning ${ctx.message.reply_to_message.from.id} in ${chat}`)
      try {
        await ctx.telegram.callApi('kickChatMember', {
          chat_id: chat,
          user_id: ctx.message.reply_to_message.from.id,
          revoke_messages: true,
        })
      } catch (err) {
        ctx.reply(`Ошибка: ${err.message || err}`)
      }
    }
    await ctx.replyWithHTML(
      `<a href="tg://user?id=${ctx.message.reply_to_message.from.id}">Пользователь</a> забанен по всем сообществам`
    )
    await ctx.deleteMessage()
  }
)
// Catch errors
bot.catch(console.error)
// Start bot
bot.launch().then(() => {
  console.info('Bot is up and running')
})
