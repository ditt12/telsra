// telsraf.js
const Telsra = require('./src/index');

const bot = new Telsra('TOKEN_BOT');

bot.startPolling((update) => {
    const chatId = update.message.chat.id;
    const text = update.message.text;

    if (text === '/start') {
        bot.sendMessage(chatId, 'Welcome to My Telegram Bot!');
    }
});
