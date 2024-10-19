// telsra.js
const Telsra = require('./src/index');

const bot = new Telsra('YOUR_TELEGRAM_BOT_TOKEN');

bot.startPolling((update) => {
    if (update.message && update.message.chat) {
        const chatId = update.message.chat.id;
        const text = update.message.text;

        if (text === '/start') {
            bot.sendMessage(chatId, 'Welcome to the telegram bot, this telegram bot uses the telsra@^1.0.0 library');
        }
    } else {
        console.log("Received update without message:", update);
    }
});
