import 'module-alias/register'
import 'source-map-support/register'

import {
  ignoreOld,
  onlyAdmin,
  onlyPublic,
  sequentialize,
} from 'grammy-middlewares'
import bot from '@/helpers/bot'
import chats from '@/helpers/chats'
import checkLegitimateChat from '@/middlewares/checkLegitimateChat'
import checkReply from '@/middlewares/checkReply'

// Middlewares
bot.use(
  ignoreOld(),
  onlyPublic((ctx) =>
    ctx.reply(
      'Нет смысла писать мне, вас тут не разбанят, а ваши сообщения уходят вникуда. В вакууме никто не услышит, как вы кричите.'
    )
  ),
  checkLegitimateChat,
  checkReply,
  sequentialize()
)
// Ban command
bot.command('banEverywhere', onlyAdmin(), async (ctx) => {
  if (!ctx.msg?.reply_to_message?.from?.id) {
    return
  }
  try {
    await ctx.reply(`Сорямба-кукарямба, я больше не баню по сообществам`, {
      reply_to_message_id: ctx.msg.reply_to_message.message_id,
    })
  } catch (error) {
    console.log(error)
  }
  try {
    await ctx.deleteMessage()
  } catch (error) {
    console.log(error)
  }
})
// Catch errors
bot.catch(console.error)
// Start bot
void bot.start().then(() => {
  console.log('Bot started')
})
