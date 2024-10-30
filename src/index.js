// src/index.js
const fetch = require('node-fetch');

class Telsra {
    constructor(token) {
        this.token = token;
        this.apiUrl = `https://api.telegram.org/bot${token}/`;
        this.updateId = 0;
    }

    async sendMessage(chatId, text) {
        const response = await fetch(`${this.apiUrl}sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, text })
        });

        return response.json();
    }

    async getUpdates() {
        const response = await fetch(`${this.apiUrl}getUpdates?offset=${this.updateId}`);
        const data = await response.json();

        if (data.ok && data.result.length > 0) {
            this.updateId = data.result[data.result.length - 1].update_id + 1;
            return data.result;
        }
        return [];
    }

    async startPolling(callback) {
        setInterval(async () => {
            const updates = await this.getUpdates();
            for (const update of updates) {
                callback(update);
            }
        }, 1000);
    }
}

module.exports = Telsra;
