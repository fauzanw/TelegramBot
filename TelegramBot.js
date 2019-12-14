const Telegram = require('node-telegram-bot-api');
const dbot     = require('dbot-js');
const dotenv   = require('dotenv').config();
const token    = process.env.TELEGRAM_TOKEN;

const bot      = new Telegram(token, {
    polling: true
})


bot.on('message', msg => {
    const chatID  = msg.chat.id;
    const message = msg.text.toString()

    dbot.get_response(message, (err, response) => {
        if(!err) {
            bot.sendMessage(chatID, response)
        }
    })
})
