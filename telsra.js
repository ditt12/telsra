// telsra.js
const Telsra = require('./src/index');

const bot = new Telsra('YOUR_TELEGRAM_BOT_TOKEN');

bot.startPolling((update) => {
    if (update.message && update.message.chat) {
        const chatId = update.message.chat.id;
        const text = update.message.text;

        if (text === '/start') {
            bot.sendMessage(chatId, 'Welcome to My Telegram Bot!');
        }
    } else {
        console.log("Received update without message:", update);
    }
});
